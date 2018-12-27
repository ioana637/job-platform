import {
  AfterViewInit,
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
import {JobService} from '../../../services/job.service';
import {MessageService} from 'primeng/api';
import {AbilityComponent} from '../../shared/abilities/ability.component';
import {convertTimestampToDate, convertTimestampToTime, convertTimeToTimestamp} from '../../../services/utils';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ability, Job} from '../../shared/model';

@Component({
  selector: 'app-edit-job',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  abilityNumber = 1;
  jobId;
  job: Job;
  subscriptions = [];
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  abilityComponents: ComponentRef<AbilityComponent>[] = [];
  categories = [];

  constructor(private formBuilder: FormBuilder,
              private jobService: JobService,
              private messageService: MessageService,
              private factoryResolver: ComponentFactoryResolver,
              private loginService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.jobId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.subscriptions.push(this.jobService.get(this.jobId).subscribe(job => {
      this.categories = this.jobService.getCategories();
      this.job = job;
      this.buildForm();
      if (this.job && this.job.abilities) {
        this.job.abilities.forEach(ability => this.addAbilityComponent(ability));
      } else if (this.job) {
        this.addAbilityComponent();
      }
    }));
  }


  addAbilityComponent(ability?: Ability) {
    const factory = this.factoryResolver.resolveComponentFactory(AbilityComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    const instance = ref.instance;
    instance.number = this.abilityNumber;
    if (ability) {
      instance.selectedAbility = ability;
      instance.selectedLevel = {levelName: ability.level};
    }
    instance.deleted.subscribe(value => {
      if (value) {
        this.abilityComponents.splice(this.abilityComponents.indexOf(ref), 1);
        ref.destroy();
        for (let i = 0; i < this.abilityNumber - 2; i++) {
          this.abilityComponents[i].instance.number = i + 1;
        }
        this.abilityNumber--;
      }
    });
    this.abilityNumber++;
    this.abilityComponents.push(ref);
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

  onSubmit() {
    if (this.form.valid) {
      Object.assign(this.job, {
        ...this.form.value,
        startTime: convertTimestampToTime(this.form.value.startTime),
        endTime: convertTimestampToTime(this.form.value.endTime),
        periodStart: convertTimestampToDate(this.form.value.periodStart),
        periodEnd: convertTimestampToDate(this.form.value.periodEnd),
        abilities: this.getAbilities(),
        idClient: this.loginService.getUser().id
      });
      Object.keys(this.job).forEach(key => this.job[key] = this.job[key] === '' ? null : this.job[key]);
      this.subscriptions.push(this.jobService.update(this.job).subscribe(success => {
          this.router.navigate(['../'], {relativeTo: this.route});
          // this.messageService.add({severity: 'success', summary: 'Success', detail: 'Jobul a fost modificat cu succes!'});
        },
        error => {
          // this.router.navigate(['./']');
          this.messageService.add({severity: 'error', summary: 'Eroare', detail: error.message});
        }));
    } else {
      this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Trebuie să completați câmpurile obligatorii!'});
    }
  }

  buildForm() {
    this.form = this.formBuilder.group(
      {
        title: [this.job.title, Validators.required],
        description: [this.job.description],
        endTime: [convertTimeToTimestamp(this.job.endTime), Validators.required],
        startTime: [convertTimeToTimestamp(this.job.startTime), Validators.required],
        periodStart: [new Date(this.job.periodStart), Validators.required],
        periodEnd: [new Date(this.job.periodEnd), Validators.required],
        hoursPerWeek: [this.job.hoursPerWeek],
        hoursPerDay: [this.job.hoursPerDay],
        peopleRequired: [this.job.peopleRequired, Validators.required],
        category: [this.job.category, Validators.required],
        location: [this.job.location, Validators.required],
      }
    );
  }

  onCancel() {
    this.messageService.add({severity: 'info', summary: 'Info', detail: 'Modificările au fost anulate!'});
    this.buildForm();
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


}

