import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() jobTitle: string = '';
  @Input() jobDescription: string = '';
  @Input() jobId: string = '';
  @Input() jobStatus: string = '';

  ngOnInit(){

  }

}
