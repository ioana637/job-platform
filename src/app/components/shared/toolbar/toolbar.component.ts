import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout().subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
