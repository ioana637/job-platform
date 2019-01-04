import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  jobs: any;
  ratingValue: any;

  constructor() { }

  ngOnInit() {
  }

  handleRate($event: any) {
    
  }
}
