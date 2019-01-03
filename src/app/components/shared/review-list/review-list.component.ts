import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewListComponent implements OnInit {
  @Input() reviews;
  cols: any[];
  constructor() {
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Numar review' },
      { field: 'job', header: 'Job' },
      { field: 'idUserFor', header: 'Angajator' },
      { field: 'description', header: 'Review' },
      { field: 'stars', header: 'Scor' }
    ];
  }


}
