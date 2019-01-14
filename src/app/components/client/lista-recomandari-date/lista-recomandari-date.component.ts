import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Recommendation} from '../../shared/model';
import {RecommendationService} from 'src/app/services/recommendation.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-recomandari-date',
  templateUrl: './lista-recomandari-date.component.html',
  styleUrls: ['./lista-recomandari-date.component.css']
})
export class ListaRecomandariDateComponent implements OnInit {

  public listaRecomandariDate: Recommendation[];

  constructor(private recommendationSerivce: RecommendationService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    // this.userService.getUser().id
    this.recommendationSerivce.getGivenRecommendations(this.userService.getUser().id).subscribe(resp => {
      this.listaRecomandariDate = resp;
      console.log(this.listaRecomandariDate);
    });
  }

  goToNewRecommandation(): void {
    this.router.navigate(['/client/recommendation/add']);
  }
}
