import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Job } from '../components/shared/model';
import { statisticsUrl } from '../../assets/urls';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  public getStatistics() {
    return this.http.get(`${statisticsUrl}`, httpOptions);
  }

}
