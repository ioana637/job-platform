import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {abilityUrl, levelUrl} from '../../assets/urls';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(private http: HttpClient) {
  }

  fetch() {
    return this.http.get(abilityUrl, httpOptions);
  }
  fetchLevels() {
    return this.http.get(levelUrl, httpOptions);
  }
}
