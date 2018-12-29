import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommendation } from '../../shared/model';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-lista-recomandari-date',
  templateUrl: './lista-recomandari-date.component.html',
  styleUrls: ['./lista-recomandari-date.component.css']
})
export class ListaRecomandariDateComponent implements OnInit {
  
  public listaRecomandariDate : Observable<Recommendation[]>;
  constructor(private recommendationSerivce :RecommendationService) { }

  ngOnInit() {
    this.recommendationSerivce.getGivenRecommendation().subscribe(resp => {
      this.listaRecomandariDate=this.recommendationSerivce.getGivenRecommendation();
  })
}

}
