import {ViewEncapsulation, OnInit, Component} from '@angular/core';
import {RequestService} from '../../../services/request.service';

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RequestListComponent implements OnInit {
  constructor(private requestService: RequestService) {
  }
  requests: Object[];
  ngOnInit() {
    this.requestService.getRequests().forEach(req => {
      console.log(req[0]);
    });
    console.log('da');
  }

}

export interface Request {
  vin;
  year;
  brand;
  color;
}
