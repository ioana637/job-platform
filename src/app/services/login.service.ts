import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = {
    'id': '1',
    'username': 'a',
    'password': 'a',
    'role': 'CLIENT',
    'firstName': 'sdads',
    'address': 'wfdsf',
    'birthDate': '2018-11-22'
  };

  constructor() {
  }

  login() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
