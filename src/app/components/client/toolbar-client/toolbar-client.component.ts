import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-toolbar-client',
  templateUrl: './toolbar-client.component.html',
  styleUrls: ['./toolbar-client.component.css']
})
export class ToolbarClientComponent implements OnInit {

  currentUser: User = null;

  constructor(private loginService: UserService) {
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
}
