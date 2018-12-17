import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/model';
import {JobService} from '../../../services/job.service';
import {convertTimestampToDate, convertTimestampToTime, convertTimeToTimestamp} from '../../../services/utils';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ClientSettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  user: User;
  subscriptions = [];


  constructor(private formBuilder: FormBuilder,
              private jobService: JobService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.buildForm();
  }


  onSubmit() {
    if (this.form.valid) {
      this.subscriptions.push(this.userService.updateUser(this.form.value).subscribe(user => {
          this.user = user;
          this.userService.putUser(user);
        }
      ));

      //   Object.assign(this.job, {
      //     ...this.form.value,
      //     startTime: convertTimestampToTime(this.form.value.startTime),
      //     endTime: convertTimestampToTime(this.form.value.endTime),
      //     periodStart: convertTimestampToDate(this.form.value.periodStart),
      //     periodEnd: convertTimestampToDate(this.form.value.periodEnd),
      //     abilities: this.getAbilities(),
      //     idClient: this.loginService.getUser().id
      //   });
      //   Object.keys(this.job).forEach(key => this.job[key] = this.job[key] === '' ? null : this.job[key]);
      //   this.subscriptions.push(this.jobService.update(this.job).subscribe(success => {
      //       this.router.navigate(['../'], {relativeTo: this.route});
      //       // this.messageService.add({severity: 'success', summary: 'Success', detail: 'Jobul a fost modificat cu succes!'});
      //     },
      //     error => {
      //       // this.router.navigate(['./']');
      //       this.messageService.add({severity: 'error', summary: 'Eroare', detail: error.message});
      //     }));
    } else {
      // /this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Trebuie să completați câmpurile obligatorii!'});
    }
  }

  buildForm() {
    this.form = this.formBuilder.group(
      {
        email: [this.user.email, Validators.required],
        lastName: [this.user.lastName, Validators.required],
        firstName: [this.user.firstName, Validators.required],
        phone: [this.user.phone, Validators.required],
        birthDate: [this.user.birthDate, Validators.required],
        address: [this.user.address, Validators.required],
        city: [this.user.city, Validators.required]
      }
    );
  }

  onCancel() {
    // this.messageService.add({severity: 'info', summary: 'Info', detail: 'Modificările au fost anulate!'});
    // this.buildForm();
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
