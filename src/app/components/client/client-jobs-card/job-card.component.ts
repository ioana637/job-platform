import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Job} from '../../shared/model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job = null;

  @Output() editClicked = new EventEmitter();

  ngOnInit() {

  }

  private onEdit(): void {
    this.editClicked.emit(this.job);
  }

}
