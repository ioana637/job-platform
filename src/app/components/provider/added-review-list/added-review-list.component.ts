import {Component, OnDestroy, OnInit} from '@angular/core';
import {Review} from '../../shared/model';
import {Subscription} from 'rxjs';
import {ReviewService} from '../../../services/review.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-added-review-list',
  templateUrl: './added-review-list.component.html',
  styleUrls: ['./added-review-list.component.css']
})
export class AddedReviewListComponent implements OnInit, OnDestroy {

  addedReviews: Review[] = [];
  subscriptions: Subscription[] = [];

  constructor(private reviewService: ReviewService, private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.reviewService.getReviewAddedByUser(
        this.userService.getUser().id).subscribe(reviews => this.addedReviews = reviews));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  goToNewReview(): void {
    this.router.navigate(['/provider/review/new-review']);
  }

}
