import {Component, OnDestroy, OnInit} from '@angular/core';
import {Review} from '../../shared/model';
import {ReviewService} from '../../../services/review.service';
import {forkJoin, Subscription} from 'rxjs';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-received-review-list',
  templateUrl: './received-review-list.component.html',
  styleUrls: ['./received-review-list.component.css']
})
export class ReceivedReviewListComponent implements OnInit, OnDestroy {
  receivedReviews: Review[] = [];
  subscriptions: Subscription[] = [];
  rating = 0.0;
  floorRating = 0.0;

  constructor(private reviewService: ReviewService, private userService: UserService) {
  }

  ngOnInit() {

    const userId = this.userService.getUser().id;
    this.subscriptions.push(
      forkJoin(this.reviewService.getReviewForUser(userId), this.reviewService.getRating(userId)).subscribe(results => {
        this.receivedReviews = results[0];
        if (!isNaN(results[1])) {
          this.rating = Math.round(results[1] * 100) / 100;
          this.floorRating = Math.floor(this.rating);
        }
        console.log(this.receivedReviews);
      }, err => {
      }));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
