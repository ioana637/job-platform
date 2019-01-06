import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {

  layoutSuccess: boolean = null;
  layoutError: boolean = null;

  constructor(private loginService: UserService,
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
      }));
  }

  redirectToLogIn() {
    this.router.navigate(['login']);
  }
}
