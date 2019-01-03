import {Component, OnInit} from '@angular/core';
import {Review} from '../../shared/model';
import {ReviewService} from '../../../services/review.service';
import {Subscription} from 'rxjs';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-received-review-list',
  templateUrl: './received-review-list.component.html',
  styleUrls: ['./received-review-list.component.css']
})
export class ReceivedReviewListComponent implements OnInit {
  receivedReviews: Review[] = [];
  subscriptions: Subscription[] = [];

  constructor(private reviewService: ReviewService, private userService: UserService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.reviewService.getReviewForUser(
        this.userService.getUser().id).subscribe(reviews => this.receivedReviews = reviews));
  }

}
