import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jobUrl, loginUrl, registerUrl} from '../../assets/urls';
import {Job, User} from '../components/shared/model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
  }

  public login(user: User) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(`${user.username}:${user.password}`)}`
    });
    return this.http.get(loginUrl, {headers: this.httpHeaders})
      .pipe(map((data: any) => {
        if (data.role) {
          localStorage.setItem('user', JSON.stringify(data));
        }
        // console.log(data);
        return data;
      }));
  }

  public putUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public register(user: User) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(registerUrl, JSON.stringify(user), {headers: this.httpHeaders})
      .pipe(map((data: any) => {
        return data;
      }));
  }

  updateUser(user: User) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // return of(user);
    return <Observable<User>>this.http.post(registerUrl, user, {headers: this.httpHeaders});

  }

  public logout(): Observable<boolean> {
    const user: User = this.getUser();
    if (user) {
      localStorage.removeItem('user');
      // logout was succefully made
      return of(true);
    }
    // logout was unsuccefully made
    return of(false);
  }
}
