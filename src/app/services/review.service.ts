import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {reviewAddedByUserUrl, reviewForUserUrl} from '../../assets/urls';
import {Observable} from 'rxjs';
import {Review} from '../components/shared/model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {
  }


  getReviewForUser(id: string): Observable<Review[]> {
    return <Observable<Review[]>>this.http.get(`${reviewForUserUrl}/${id}`, httpOptions);
  }

  getReviewAddedByUser(id: string): Observable<Review[]> {
    return <Observable<Review[]>>this.http.get(`${reviewAddedByUserUrl}/${id}`, httpOptions);
  }

}
