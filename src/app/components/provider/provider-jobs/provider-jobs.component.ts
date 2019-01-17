import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {JobService} from 'src/app/services/job.service';
import {Job, User} from '../../shared/model';
import {Observable} from 'rxjs';
import {MessageService} from 'primeng/api';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-provider-jobs',
  templateUrl: './provider-jobs.component.html',
  styleUrls: ['./provider-jobs.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderJobsComponent implements OnInit {

  protected availableJobs: Job[] = [];
  protected user: User;

  private limit: number = 1000;
  private pageNumber: number = 0;

  constructor(private jobService: JobService,
              private loginService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.loadData().subscribe((jobs) => this.availableJobs = jobs.filter(job => job.status === 'AVAILABLE'));

  }

  private loadData(): Observable<Job[]> {
    return this.jobService.getAllJobs();
  }

  private onClickAssign(event: string): void {
    this.jobService.assignJob(this.user, event);
    this.messageService.add({severity: 'success', summary: 'Succes', detail: 'Job-ul a fost asignat'});
  }
}
