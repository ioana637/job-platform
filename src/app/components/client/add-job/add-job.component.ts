import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
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
import {AbilitiesComponent} from '../../shared/auth/abilities/abilities.component';
import {abilityUrl} from '../../../../assets/urls';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddJobComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  abilities = [{code: 'code1', display: 'Abilitate 1', level: 'ELEMENTAR'}];
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  @ViewChildren(AbilitiesComponent) abilityComponents: QueryList<AbilitiesComponent>;

  constructor(private formBuilder: FormBuilder,
              private jobService: JobService,
              private messageService: MessageService,
              private r: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.buildForm();
    const factory = this.r.resolveComponentFactory(AbilitiesComponent);
    this.viewContainerRef.createComponent(factory);
  }


  add() {
    const factory = this.r.resolveComponentFactory(AbilitiesComponent);
    this.viewContainerRef.createComponent(factory);
  }


  onSubmit() {
  this.viewContainerRef.get(0);
      //.forEach(ability => console.log(ability.getAbility()));
    this.jobService.add({...this.form.value, abilities: this.abilities}).subscribe(success => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Jobul a fost adaugat cu succes!'});
        this.form.reset();
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

  ngAfterViewInit(): void {
    // this.abilityComponents.forEach(ability => console.log(ability.getAbility()));

  }
}

