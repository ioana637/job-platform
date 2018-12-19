import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {

  layoutSuccess: boolean = null;
  layoutError: boolean = null;

  constructor(private loginService: LoginService,
              public router: Router) {
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

  redirectToLogIn() {
    this.router.navigate(['login']);
  }
}
