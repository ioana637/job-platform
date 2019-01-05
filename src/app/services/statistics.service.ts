import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  public getAvailableJobs(): Observable<Job[]> {
    return <Observable<Job[]>>this.http.get(`${baseUrl}/clients`, httpOptions);
  }
}
