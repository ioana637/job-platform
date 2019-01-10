import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Job, Review, User} from '../../shared/model';
import {ProviderService} from '../../../services/provider.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  constructor(private _userService: UserService,
              private _providerService: ProviderService,
              private _messageService: MessageService) {
  }

  user = this._userService.getUser();
  providerId = this.user.id;
  jobs: Job[];
  job: Job;
  date: string;
  reviewText: string;
  selectedJob: Job;
  newReview: Review;


  ngOnInit() {

    this.newReview = {
      stars: '',
      userFor: null,
      userFrom: this.user,
      job: null,
      description: null,
      date: ''
    };

    this.jobs = [];
    this.date = new Date().toJSON();
    this._providerService.getAllJobs().subscribe(
      result => {
        Object.values(result).forEach(rez => {
          this.job = {
            id: rez.id,
            title: rez.title,
            description: rez.description,
            startTime: rez.startTime,
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


  handleRate(event) {
    this.newReview.stars = event.value;
  }

  submitReview() {
    this.newReview.job = this.selectedJob;
    this.newReview.description = this.reviewText;
    this.newReview.date = this.date.slice(0, this.date.length - 2);
    this.newReview.userFor = <User>{id: this.selectedJob.idClient.toString()};
    if (this.newReview.description !== null && this.newReview.job !== null && this.newReview.stars !== '') {
      this._providerService.sendProviderReview(this.newReview).subscribe(
        (result) => {
          this._messageService.add({
            severity: 'success',
            summary: 'Review trimis!',
            detail: 'Review-ul a fost trimis cu succes!'
          });
          this.newReview = {
            stars: '',
            userFor: null,
            userFrom: this.user,
            job: null,
            description: null,
            date: ''
          };
        },
        (error) => {
          this._messageService.add({
            severity: 'error',
            summary: 'Eroare',
            detail: 'A aparut o eroare, incercati din nou mai tarziu!'
          });

        }
      );
    } else {
      this._messageService.add({
        severity: 'error',
        summary: 'Eroare',
        detail: 'Verificati ca toate campurile sa fie completate!'
      });
    }
  }

}
