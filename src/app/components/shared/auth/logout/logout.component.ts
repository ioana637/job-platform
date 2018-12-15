import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  layoutSuccess: boolean = null;
  layoutError: boolean = null;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.loginService.logout().subscribe((success) => {
        this.layoutSuccess = true;
      },
      (error => {
        this.layoutError = true;
        console.log(error);
      }));
  }

}
