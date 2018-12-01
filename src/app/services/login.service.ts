import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {loginUrl} from '../../assets/urls';
import {User} from '../components/shared/model';
import {map} from 'rxjs/operators';

// const httpHeaders = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = {
    'id': '1',
    'username': 'g',
    'password': 'g',
    'role': 'CLIENT',
    'firstName': 'sdads',
    'address': 'wfdsf',
    'birthDate': '2018-11-22'
  };
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  public login(user: User) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': JSON.stringify(user)
    });
    return this.http.get(loginUrl, {headers: this.httpHeaders})
      .pipe(map((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        return data;
      }));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
