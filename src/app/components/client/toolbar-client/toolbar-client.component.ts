import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-toolbar-client',
  templateUrl: './toolbar-client.component.html',
  styleUrls: ['./toolbar-client.component.css']
})
export class ToolbarClientComponent implements OnInit {

  currentUser: User = null;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.currentUser = this.loginService.getUser();
  }

  open() {
    const x = document.getElementById('myNavbar');
    console.log(x.className);
    if (x.className === 'navbar') {
      x.className += ' responsive';
    } else {
      x.className = 'navbar';
    }
  }

  logout() {
    console.log('logout');
  }
}
