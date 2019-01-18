import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model';
import {UserService} from '../../../../services/user.service';
import {convertDateToString} from '../../../../services/utils';
import {AbilityComponent} from '../../abilities/ability.component';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit, AfterViewInit {
  form: FormGroup;

  model: User = <User>{
    address: '',
    city: '',
    role: 'CLIENT',
    birthDate: '',
    phone: '',
    lastName: '',
    firstName: '',
    password: '',
    passwordConfirm: '',
    username: '',
    email: '',
    subscribed: false
  };
  date = new Date();
  loading = false;
  returnUrl: string;
  roles: any[] = [
    {label: 'Client', value: 'CLIENT'},
    {label: 'Provider', value: 'PROVIDER'}
  ];
  abilityNumber = 1;
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  abilityComponents: ComponentRef<AbilityComponent>[] = [];

  constructor(private route: ActivatedRoute,
              private service: UserService,
              private factoryResolver: ComponentFactoryResolver,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    // reset register status

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.model.role === 'PROVIDER' ? this.addAbilityComponent() : {};
  }

  register() {
    if (this.model.passwordConfirm === this.model.password) {
      this.model.birthDate = convertDateToString(this.date);
      this.model.role === 'PROVIDER' ? this.model.abilities = this.getAbilities() : this.model.abilities = [];
      console.log(this.model);
      delete this.model.passwordConfirm;
      this.service.register(this.model).subscribe((user) => {
          if (this.model.role === 'PROVIDER') {
            this.abilityComponents.forEach(component => this.destroy(component));
            this.abilityComponents = [];
            this.abilityNumber = 1;
            this.addAbilityComponent();
          }
          this.router.navigate(['../login']);
        },
        (error => this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'A aparut o eroare, incercati din nou mai tarziu'})
        ));
    } else {
      console.log('Eroare');
      this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Parola și confirmarea acesteia nu sunt valide!!!'});
    }
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
    });
    this.abilityNumber++;
    this.abilityComponents.push(ref);
  }

  ngAfterViewInit() {
    this.model.role === 'PROVIDER' ? this.addAbilityComponent() : {};
  }
}
