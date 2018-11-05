import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    period: new FormGroup({
      start: new FormGroup({
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required)
      }),
      end: new FormGroup({
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required)
      })
    }),
    hours: new FormGroup({
      perDay: new FormControl('', Validators.required),
      perWeek: new FormControl('', Validators.required)
    }),
    noOfNeededPersons: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
  }

}

