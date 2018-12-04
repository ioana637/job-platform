import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {abilityUrl, levelUrl} from '../../assets/urls';
import {Ability, Level} from '../components/shared/model';
import {Observable} from 'rxjs';

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

  fetch(): Observable<Ability[]> {
    return <Observable<Ability[]>> this.http.get(abilityUrl, httpOptions);
  }

  fetchLevels(): Observable<Level[]> {
    return <Observable<Level[]>> this.http.get(levelUrl, httpOptions);
  }
}
