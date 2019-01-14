import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model';
import {UserService} from '../../../services/user.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-toolbar-client',
  templateUrl: './toolbar-client.component.html',
  styleUrls: ['./toolbar-client.component.css']
})
export class ToolbarClientComponent implements OnInit {

  currentUser: User = null;
  items: MenuItem[];

  constructor(private loginService: UserService) {
    this.items = [
      {
        label: 'Listă recomandări primite'
      },
      {
        label: 'Listă recomandări date'
      }
    ];
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
