import {Component, OnInit} from '@angular/core';
import {Job} from '../../shared/model';
import {JobService} from 'src/app/services/job.service';
import {Observable} from 'rxjs';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  protected availableJobs: Job[] = [];
  protected userId: string = '';

  private limit: number = 1000;
  private pageNumber: number = 0;

  constructor(private jobService: JobService,
              private loginService: UserService) {
  }

  ngOnInit() {
    this.userId = this.loginService.getUser().id;
    this.loadData().subscribe((jobs) => this.availableJobs = jobs);

  }

  private loadData(): Observable<Job[]> {
    return this.jobService.getJobsForUser(this.userId, this.limit, this.pageNumber);
  }


}
