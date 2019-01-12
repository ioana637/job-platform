import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Job, Request, RequestForDialog, User} from '../../shared/model';
import {RequestService} from '../../../services/request.service';
import {UserService} from '../../../services/user.service';
import {JobService} from '../../../services/job.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-request-details-dialog',
  templateUrl: './request-details-dialog.component.html',
  styleUrls: ['./request-details-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RequestDetailsDialogComponent implements OnInit {

  @Input() requestId: String;
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  public model: RequestForDialog = {
    description: '',
    userFrom: '',
    phoneNumber: '',
    email: '',
    location: ''};

  constructor(private requestService: RequestService,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  onHide() {
    this.displayChange.emit(false);
  }

  onShow() {
    this.requestService.getRequestById(this.requestId)
      .subscribe((response) => {
        console.log(response);
        try {
          // @ts-ignore
          const userFrom = response.userFrom
          this.model = {
            // @ts-ignore
            description: response.job.description,
            userFrom: `${userFrom.firstName} ${userFrom.lastName}`,
            phoneNumber: userFrom.phone,
            email: userFrom.email,
            location: `${userFrom.city}, ${userFrom.address}`
          };
        } catch (e) {
          this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Datele nu au putut fi aduse'});
        }
      }, error => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Datele nu au putut fi aduse'});
      });
  }
}
