import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, ComponentRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../../../services/job.service';
import {MessageService} from 'primeng/api';
import {AbilityService} from '../../../services/ability.service';
import {AbilityComponent} from '../../shared/auth/abilities/ability.component';
import {abilityUrl} from '../../../../assets/urls';
import {convertTimestampToDate, convertTimestampToTime} from '../../../services/utils';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddJobComponent implements OnInit {
  form: FormGroup;
  abilityNumber = 1;
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  abilityComponents: ComponentRef<AbilityComponent>[] = [];

  constructor(private formBuilder: FormBuilder,
              private jobService: JobService,
              private messageService: MessageService,
              private factoryResolver: ComponentFactoryResolver,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.buildForm();
    this.addAbilityComponent();
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
        for (let i = 0; i < this.abilityNumber; i++) {
          this.abilityComponents[i].instance.number = i + 1;
        }
        this.abilityNumber--;
        console.log(this.abilityComponents);
      }
    });
    this.abilityNumber++;
    this.abilityComponents.push(ref);
  }

  destroy(ref) {
    ref.destroy();
  }

  getAbilities() {
    let abilities = [];
    this.abilityComponents.forEach(component => {
      const ability = component.instance.getAbility();
      if (ability) {
        abilities.push(ability);
      }
    });

    return abilities;
  }

  onSubmit() {
    if (this.form.valid) {
      let job = {
        ...this.form.value,
        startTime: convertTimestampToTime(this.form.value.startTime),
        endTime: convertTimestampToTime(this.form.value.endTime),
        periodStart: convertTimestampToDate(this.form.value.periodStart),
        periodEnd: convertTimestampToDate(this.form.value.periodEnd),
        abilities: this.getAbilities(),
        idClient: this.loginService.getUser().id
      };
      Object.keys(job).forEach(key => job[key] = job[key] === '' ? null : job[key]);
      this.jobService.add(job).subscribe(success => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Jobul a fost adaugat cu succes!'});
          this.form.reset();
          this.abilityComponents.forEach(component => this.destroy(component));
          this.abilityComponents = [];
          this.abilityNumber = 1;
          this.addAbilityComponent();
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Eroare', detail: error.message});
        });
    } else {
      this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Trebuie să completați câmpurile obligatorii!'});
    }
  }

  buildForm() {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        description: [''],
        endTime: ['', Validators.required],
        startTime: ['', Validators.required],
        periodStart: ['', Validators.required],
        periodEnd: ['', Validators.required],
        hoursPerWeek: [''],
        hoursPerDay: [''],
        peopleRequired: ['', Validators.required],
      }
    );
  }

}

