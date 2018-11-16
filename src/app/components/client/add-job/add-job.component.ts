import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../../../services/job.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddJobComponent implements OnInit {
  form: FormGroup;
  abilities = [{code: 'code1', display: 'Abilitate 1', level: 'ELEMENTAR'}];

  constructor(private formBuilder: FormBuilder, private jobService: JobService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.buildForm();
  }


  onSubmit() {
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
}

