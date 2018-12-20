import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../../services/login.service';
import {User, Job, Request, RequestDialog} from '../../model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  model: User = {username: '', password: ''};
  request: Request = {
    userFrom: {
      firstName: 'matei',
      lastName: 'burghiu',
      username: '123',
      password: '123',
      city: 'cluj',
      email: 'mail@mail.com',
      phone: '0239300494'},
    userTo: {
      username: 'dfasf',
      password: 'fasdf'},
    job: {
      title: 'wow',
      description: 'dsadASDasd'}};
  requestdialog: RequestDialog = {
    userFromFullName: this.request.userFrom.firstName + ' ' + this.request.userFrom.lastName,
    userFromFullLocation: this.request.userFrom.city + ' ' + this.request.userFrom.address};
  loading = false;
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  ngOnInit() {
    // reset login status
    // this.login();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loginService.login(this.model).subscribe(
      (user: User) => {
        if (user.role === 'CLIENT') {
          this.router.navigate(['/client/job']);
        } else {
          this.router.navigate(['/provider']);
        }
      },
      (error) => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: error.error.message});
        console.log(error.error.message);
      }
    );
  }
}
