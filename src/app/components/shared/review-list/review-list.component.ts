import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Review} from '../model';
import {convertTimestampToDate} from '../../../services/utils';

const Type = {
  Received: 'received',
  Added: 'added'
};

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewListComponent implements OnInit, OnChanges {
  @Input() reviews: Review[] = [];
  @Input() type: string;
  reviewsList = [];
  cols: any[];
  stars = [];

  constructor() {
  }

  ngOnInit() {
    this.initReviewsList(this.reviews);
    this.cols = [
      {field: 'job', header: 'Job'},
      {field: 'user', header: 'Utilizator'},
      {field: 'userType', header: 'Tip utilizator'},
      {field: 'description', header: 'Review'},
      {field: 'date', header: 'Data'},
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.reviews && changes.reviews.currentValue !== changes.reviews.previousValue) {
      this.initReviewsList(changes.reviews.currentValue);
    }
  }

  initReviewsList(reviews: Review[]) {
    this.reviewsList = [];
    if (this.type === Type.Added) {
      reviews.forEach(review => {
        let type = 'Angajat';
        if (review.userFor.role === 'CLIENT') {
          type = 'Angajator';
        }
        this.reviewsList.push({
          ...review,
          user: review.userFor.username,
          job: review.job.title,
          stars: Number(review.stars),
          userType: type,
          date: review.date.split('T')[0]
        });
      });
    } else if (this.type === Type.Received) {
      reviews.forEach(review => {
        let type = 'Angajat';
        if (review.userFrom.role === 'CLIENT') {
          type = 'Angajator';
        }
        this.reviewsList.push({
          ...review,
          user: review.userFrom.username,
          job: review.job.title,
          stars: Number(review.stars),
          userType: type,
          date: review.date.split('T')[0]
        });
      });
    }
  }
}
