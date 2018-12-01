import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

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

  constructor() {
  }

  public login(user) {
    localStorage.setItem('user', JSON.stringify(this.user));
    return of(this.user);
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
