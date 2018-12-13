import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {providerUrl} from '../../assets/urls';
import index from '@angular/cli/lib/cli';
import {User} from '../components/shared/model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) {
  }

  public getProviders(count: number = 10, indexStart: number = 0): Observable<User[]> {
    return <Observable<User[]>> this.http.get(`${providerUrl}/limit=${count}&start=${indexStart}`,
      httpOptions);
  }
}
