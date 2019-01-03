import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Review} from '../model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewListComponent implements OnInit, OnChanges {
  @Input() reviews: Review[] = [];
  reviewsList = [];
  cols: any[];
  stars = [];

  constructor() {
  }

  ngOnInit() {
    this.initReviewsList(this.reviews);

    this.cols = [
      {field: 'job', header: 'Job'},
      {field: 'userFor', header: 'Utilizator'},
      {field: 'userForType', header: 'Tip utilizator'},
      {field: 'description', header: 'Review'},
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
    reviews.forEach(review => {
      let type = 'Angajat';
      if (review.userFor.role === 'CLIENT') {
        type = 'Angajator';
      }
      this.reviewsList.push({
        ...review,
        userFor: review.userFor.username,
        job: review.job.title,
        stars: Number(review.stars),
        userForType: type
      });
    });
  }
}
