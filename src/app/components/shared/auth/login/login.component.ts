import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../../services/login.service';
import {User} from '../../model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  model: User = {username: '', password: ''};
  loading = false;
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) {
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
          this.router.navigate(['/client']);
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
