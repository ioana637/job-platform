import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model';
import {LoginService} from '../../../../services/login.service';
import {convertDateToString} from '../../../../services/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  model: User = <User>{
    address: '',
    city: '',
    role: '',
    birthDate: '',
    phone: '',
    lastName: '',
    firstName: '',
    password: '',
    username: '',
    email: ''
  };
  date = new Date();
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private service: LoginService,
    private router: Router) {
  }

  ngOnInit() {
    // reset register status

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    this.model.birthDate = convertDateToString(this.date);
    this.service.register(this.model).subscribe((user) => {
      this.router.navigate(['../login']);
    });
  }
}
