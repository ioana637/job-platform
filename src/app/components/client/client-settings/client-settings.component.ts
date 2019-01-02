import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/model';
import {JobService} from '../../../services/job.service';
import {convertTimestampToDate, convertTimestampToTime, convertTimeToTimestamp} from '../../../services/utils';
import {UserService} from '../../../services/user.service';
import {MessageService} from 'primeng/api';

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
  passwords = {oldPassword: undefined, newPassword: undefined, confirmedPassword: undefined};


  constructor(private formBuilder: FormBuilder,
              private jobService: JobService,
              private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.buildForm();
  }


  onSubmit() {
    if (this.form.valid) {
      const userToUpdate = {...this.user, ...this.form.value, abilities: []};
      if (this.passwords.oldPassword && this.user.password === this.passwords.oldPassword) {
        if (this.passwords.newPassword && this.passwords.newPassword === this.passwords.confirmedPassword) {
          userToUpdate.password = this.passwords.newPassword;
        } else {
          this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Parolele nu coincid!'});
          return;
        }
      }
      this.subscriptions.push(this.userService.updateUser(userToUpdate).subscribe(user => {
          this.user = user;
          this.userService.putUser(user);
          this.passwords = {oldPassword: undefined, newPassword: undefined, confirmedPassword: undefined};
          this.buildForm();
          this.messageService.add({severity: 'info', summary: 'Informare', detail: 'Datele au fost modificate cu succes!'});
        }, error => this.messageService.add({severity: 'error', summary: 'Erroare', detail: "A aparut o eroare, incercati din nou"})
      ));
    } else {
      this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Trebuie să completați câmpurile obligatorii!'});
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
    this.messageService.add({severity: 'info', summary: 'Info', detail: 'Modificările au fost anulate!'});
    this.passwords = {oldPassword: undefined, newPassword: undefined, confirmedPassword: undefined};
    this.buildForm();
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
