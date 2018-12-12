import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {registerUrl} from '../../assets/urls';
import {User} from '../components/shared/model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  public register(user: User) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(`${user.username}:${user.password}`)}`
    });
    return this.http.post(registerUrl, {headers: this.httpHeaders})
      .pipe(map((data: any) => {
        if (data.role) {
          localStorage.setItem('user', JSON.stringify(data));
        }
        // console.log(data);
        return data;
      }));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
