import { Component, OnInit } from '@angular/core';
import { Recommendation } from '../../shared/model';
import { Observable } from 'rxjs';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-lista-recomandari-primite',
  templateUrl: './lista-recomandari-primite.component.html',
  styleUrls: ['./lista-recomandari-primite.component.css']
})
export class ListaRecomandariPrimiteComponent implements OnInit {

  public listaRecomandariPrimite : Observable<Recommendation[]>;
  constructor(private recommendationSerivce :RecommendationService) { }

  ngOnInit() {
    this.recommendationSerivce.getRecivedRecommendation().subscribe(resp => {
      this.listaRecomandariPrimite=this.recommendationSerivce.getRecivedRecommendation();
    })
   
  }


 
}
