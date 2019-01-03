import {ViewEncapsulation, OnInit, Component, Output, EventEmitter} from '@angular/core';
import {RequestService} from '../../../services/request.service';
import {UserService} from '../../../services/user.service';
import {Request} from '../../shared/model';

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RequestListComponent implements OnInit {
  constructor(private requestService: RequestService, private userService: UserService) {
  }

  protected display: boolean = false;
  requests: Request[];
  request: Request;
  ability: String;
  selectedRequest: string = null;

  ngOnInit() {
    this.requests = [];
    this.ability = '';
    this.requestService.getRequests(this.userService.getUser().id).subscribe(
      (result) => {
        Object.values(result).forEach(req => {
          req.job.abilities.forEach(
            ab => this.ability += ab.code + ', '
          );
          this.request = {
            nrCerere: req.id,
            job: req.job.title,
            angajator: req.userFrom.lastName + ' ' + req.userFrom.firstName,
            abilities: this.ability,
            peopleRequired: req.job.peopleRequired
          };
          this.requests.push(this.request);
        });
      },
      (error) => {
        console.log(error);
      });
    console.log(this.requests);
  }

  showDialog(event) {
    console.log(event.data)
    this.display = true;
  }

  private onDialogClose(event): void {
    this.display = event.currentTarget;
  }

  onRowClicked() {
    console.log(this.selectedRequest);
    this.display = true;
  }
}

