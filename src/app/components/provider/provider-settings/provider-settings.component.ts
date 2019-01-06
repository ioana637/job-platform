import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/model';
import {JobService} from '../../../services/job.service';
import {UserService} from '../../../services/user.service';
import {MessageService} from 'primeng/api';
import {AbilityComponent} from '../../shared/abilities/ability.component';

@Component({
  selector: 'app-provider-settings',
  templateUrl: './provider-settings.component.html',
  styleUrls: ['./provider-settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProviderSettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  user: User;
  subscriptions = [];
  passwords = {oldPassword: undefined, newPassword: undefined, confirmedPassword: undefined};

  abilityNumber = 1;
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  abilityComponents: ComponentRef<AbilityComponent>[] = [];


  constructor(private formBuilder: FormBuilder,
              private jobService: JobService,
              private userService: UserService,
              private factoryResolver: ComponentFactoryResolver,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
    this.buildForm();
    this.addAbilityComponent();
  }

  onSubmit() {
    if (this.form.valid) {
      const userToUpdate = {...this.user, ...this.form.value, abilities: this.getAbilities()};
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
          this.abilityComponents.forEach(component => this.destroy(component));
          this.abilityComponents = [];
          this.abilityNumber = 1;
          this.addAbilityComponent();
          this.messageService.add({severity: 'info', summary: 'Informare', detail: 'Datele au fost modificate cu succes!'});
        }, error => this.messageService.add({severity: 'error', summary: 'Erroare', detail: "A aparut o eroare, incercati din nou mai tarziu"})
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

  destroy(ref) {
    ref.destroy();
  }

  getAbilities() {
    const abilities = [];
    this.abilityComponents.forEach(component => {
      const ability = component.instance.getAbility();
      if (ability) {
        abilities.push(ability);
      }
    });
    return abilities;
  }

  addAbilityComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(AbilityComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    const instance = ref.instance;
    instance.number = this.abilityNumber;
    instance.deleted.subscribe(value => {
      if (value) {
        this.abilityComponents.splice(this.abilityComponents.indexOf(ref), 1);
        ref.destroy();
        for (let i = 0; i < this.abilityNumber - 2; i++) {
          this.abilityComponents[i].instance.number = i + 1;
        }
        this.abilityNumber--;
        console.log(this.abilityComponents);
      }
    }, error => this.messageService.add({severity: 'error', summary: 'Eroare', detail: "A aparut o eroare, incercati din nou mai tarziu"}));
    this.abilityNumber++;
    this.abilityComponents.push(ref);
  }
}
