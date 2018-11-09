import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddJobComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }


  onSubmit() {

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

