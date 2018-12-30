import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job, Recommendation, User} from '../components/shared/model';
import {baseUrl, recommendationUrl} from '../../assets/urls';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private http: HttpClient,
              private userService: UserService) 
              {}

  public getClients(): Observable<User[]> {
    return <Observable<User[]>>this.http.get(`${baseUrl}/clients`, httpOptions);
  }

  public getProviders(): Observable<User[]> {
    return <Observable<User[]>>this.http.get(`${baseUrl}/providers`, httpOptions);
  }

  public addRecommendation(recommendation: Recommendation): Observable<Recommendation> {
    return <Observable<Recommendation>>this.http.post(recommendationUrl, recommendation, httpOptions);
  }

  public getRecivedRecommendation(): Observable<Recommendation[]> {
    var userFrom = this.userService.getUser().id;
    return <Observable<Recommendation[]>>this.http.get(`${recommendationUrl}/recommended/${userFrom}`);
  }

  
  public getGivenRecommendation(): Observable<Recommendation[]> {
    var recommender = this.userService.getUser().id;
    return <Observable<Recommendation[]>>this.http.get(`${recommendationUrl}/recommender/${recommender}`, httpOptions);
  }
}
