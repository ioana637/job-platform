import {ViewEncapsulation, Component, OnInit} from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';
import { Job } from '../../shared/model';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-provider-jobs',
  templateUrl: './provider-jobs.component.html',
  styleUrls: ['./provider-jobs.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderJobsComponent implements OnInit {

  protected availableJobs: Job[] = [];
  protected userId: string = '';
  
  private limit: number = 1000;
  private pageNumber: number = 0;

  constructor(
    private jobService: JobService,
    private loginService: LoginService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.userId = this.loginService.getUser().id;
    this.loadData().subscribe((jobs) => this.availableJobs = jobs.filter(job => job.status == 'AVAILABLE'));

  }

  private loadData(): Observable<Job[]>{
    return this.jobService.getJobsForProvider(this.userId);
  }

  private onClickAssign(event: string): void {
    this.jobService.assignJob(this.userId, event);
    this.messageService.add({severity:'success', summary:'Succes', detail: 'Job-ul a fost asignat'});
  }
}
