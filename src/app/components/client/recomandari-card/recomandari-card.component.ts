import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Recommendation} from '../../shared/model';

@Component({
  selector: 'app-recomandari-card',
  templateUrl: './recomandari-card.component.html',
  styleUrls: ['./recomandari-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecomandariCardComponent implements OnInit {

  @Input() public recommendation: Recommendation;
  @Input() public rating = '';

  constructor() {
  }

  ngOnInit() {
    if (this.recommendation.recommendedProvider.starAvg) {
      this.rating = this.recommendation.recommendedProvider.starAvg;
    } else {
      this.rating = '3.45';
    }

  }

}
