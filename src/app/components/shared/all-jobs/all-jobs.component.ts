import {Component, OnDestroy, OnInit} from '@angular/core';
import {Job, User} from '../model';
import {JobService} from '../../../services/job.service';
import {UserService} from '../../../services/user.service';
import {MessageService} from 'primeng/api';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit, OnDestroy {

  protected availableJobs: Job[] = [];

  private subscription: Subscription[] = [];
  user: User = null;

  constructor(private jobService: JobService,
              private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.subscription.push(this.loadData()
      .subscribe((jobs) => this.availableJobs = jobs.filter(job => job.status === 'AVAILABLE')));
  }

  ngOnDestroy() {
    this.subscription.forEach((s) => s.unsubscribe());
  }

  private loadData(): Observable<Job[]> {
    return this.jobService.getAllJobs();
  }
}
