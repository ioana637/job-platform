import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../shared/model';

@Component({
  selector: 'app-toolbar-provider',
  templateUrl: './toolbar-provider.component.html',
  styleUrls: ['./toolbar-provider.component.css']
})
export class ToolbarProviderComponent implements OnInit {

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
