import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MessageService } from 'primeng/api';
import { Job, Review } from '../../shared/model';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  providers: any;
  selectedProvider: any;
  user = this._userService.getUser();
  clientId = this.user.id;
  jobs: Job[];
  job: Job;
  date: string;
  reviewText: string;
  selectedJob: Job;
  newReview: Review;

  constructor(private _userService: UserService,
              private _messageService: MessageService,
              private _providerService: ProviderService
              ) { }

  ngOnInit() {
    this.newReview = {
      stars: '',
      userFor: this.user,
      userFrom: this.user,
      job: null,
      description: null,
      date: ''
    };

    this.jobs = [];
    this.date = new Date().toJSON();
    this._providerService.getJobsForProvider(this.providerId).subscribe(
      result => {
        Object.values(result).forEach(rez => {
          this.job = {
            id: rez.id,
            title: rez.title,
            description: rez.description,
            startTime:rez.startTime,
            idClient: rez.idClient,
            periodStart: rez.periodStart,
            periodEnd: rez.periodEnd,
            endTime: rez.endTime,
            peopleRequired: rez.peopleRequired,
            status: rez.status,
            abilities: rez.abilities,
            hoursPerDay: rez.hoursPerDay,
            hoursPerWeek: rez.hoursPerWeek,
            location: rez.location,
            category: rez.category
          };
          this.jobs.push(this.job);
        });
      },
      (error) => {
        console.log(error);
      });
  }

}
