import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // reset login status
    this.login();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loginService.login();
  }
}
