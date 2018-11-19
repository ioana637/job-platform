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

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddJobComponent implements OnInit {
  form: FormGroup;
  abilityNumber = 1;
  abilities = [{code: 'code1', display: 'Abilitate 1', level: 'ELEMENTAR'}];
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  abilityComponents: ComponentRef<AbilityComponent>[] = [];

  constructor(private formBuilder: FormBuilder,
              private jobService: JobService,
              private messageService: MessageService,
              private factoryResolver: ComponentFactoryResolver) {
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
    this.abilityComponents.forEach(component => abilities.push(component.instance.getAbility()));
    return abilities;
  }

  onSubmit() {

    this.jobService.add({...this.form.value, abilities: this.getAbilities()}).subscribe(success => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Jobul a fost adaugat cu succes!'});
        this.form.reset();
        this.abilityComponents.forEach(component => this.destroy(component));
        this.abilityNumber = 1;
        this.addAbilityComponent();
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: error});
      });
  }

  buildForm() {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        period: this.formBuilder.group({
          start: this.formBuilder.group({
            date: ['', Validators.required],
            time: ['', Validators.required]
          }),
          end: this.formBuilder.group({
            date: ['', Validators.required],
            time: ['', Validators.required]
          })
        }),
        hours: this.formBuilder.group({
          perDay: ['', Validators.required],
          perWeek: ['', Validators.required]
        }),
        noOfNeededPersons: ['', Validators.required],
        description: ['']
      }
    );
  }


}

