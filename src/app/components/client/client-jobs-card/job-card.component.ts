import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

    @Input() jobTitle: string = '';
    @Input() jobDescription: string = '';
    @Input() jobId: string = '';
    @Input() jobStatus: string = '';

    ngOnInit(){

    }

}