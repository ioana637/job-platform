import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {reviewForUserUrl} from '../../assets/urls';
import {Observable, of} from 'rxjs';
import {Category, Job, Review} from '../components/shared/model';

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

}
