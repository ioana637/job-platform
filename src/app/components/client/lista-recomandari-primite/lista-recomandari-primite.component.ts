import {Component, OnInit} from '@angular/core';
import {Recommendation} from '../../shared/model';
import {Observable} from 'rxjs';
import {RecommendationService} from 'src/app/services/recommendation.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-lista-recomandari-primite',
  templateUrl: './lista-recomandari-primite.component.html',
  styleUrls: ['./lista-recomandari-primite.component.css']
})
export class ListaRecomandariPrimiteComponent implements OnInit {

  public listaRecomandariPrimite: Recommendation[];

  constructor(private recommendationSerivce: RecommendationService,
              private userService: UserService
  ) {
  }

  ngOnInit() {
    this.recommendationSerivce.getReceivedRecommendations(this.userService.getUser().id).subscribe(resp => {
      this.listaRecomandariPrimite = resp;
    });

  }


}
