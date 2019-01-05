import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Job, User} from '../../shared/model';
import {JobService} from 'src/app/services/job.service';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DialogBoxComponent implements OnInit, OnDestroy {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  @Output() jobAssigned = new EventEmitter();

  jobs: Job[] = [];
  jobSelected: Job = null;
  private user: User | null = null;
  subscriptions: Subscription[] = [];

  constructor(
    private loginService: UserService,
    private jobService: JobService,
    private messageService: MessageService
  ) {
  }

  onClose() {
    this.displayChange.emit(false);
  }

  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    // this.displayChange.unsubscribe();
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }


  public ngOnInit() {
    this.user = this.loginService.getUser();
    console.log('User: ', this.user);
    this.subscriptions.push(this.getJobs().subscribe((currentJobs) => {
      this.jobs = currentJobs;
      console.log('Jobs: ', this.jobs);
    }, error => this.messageService.add({
      severity: 'error',
      summary: 'Erroare',
      detail: 'A aparut o eroare, incercati din nou mai tarziu'
    })));
  }

  private getJobs(): Observable<Job[]> {
    return this.jobService.getJobsForUser(this.user.id, 1000, 0);
  }

  private onAssignClick(): void {
    this.jobAssigned.emit(this.jobSelected.id);
  }

}
