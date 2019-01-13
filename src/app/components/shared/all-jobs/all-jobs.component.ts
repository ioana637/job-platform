import {Component, OnDestroy, OnInit} from '@angular/core';
import {Job} from '../model';
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

  constructor(private jobService: JobService,
              private messageService: MessageService) {
  }

  ngOnInit() {
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
