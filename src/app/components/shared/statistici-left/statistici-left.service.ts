import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticiLeftService {

  constructor(private http: HttpClient) {
  }

  getAngajati() {
    return this.http.get<any>('http://localhost:8080/statistics/clients');
  }

  getAngajatori() {
    return this.http.get<any>('http://localhost:8080/statistics/providers');
  }
}
