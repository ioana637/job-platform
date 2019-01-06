import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Job} from '../components/shared/model';
import {statisticsUrl} from '../../assets/urls';

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

  public getAvailableJobs() {
    return this.http.get(`${statisticsUrl}/availableJobs`, httpOptions);
  }

  public getContracts() {
     return this.http.get(`${statisticsUrl}/contracts`, httpOptions);
  }

  public getAllProviders() {
    return this.http.get(`${statisticsUrl}/noProviders`, httpOptions);
  }

  public getClientsWithMaxRating() {
    return this.http.get(`${statisticsUrl}/clients/maxRating`, httpOptions);
  }
}
