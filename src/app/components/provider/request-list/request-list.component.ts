import {ViewEncapsulation, OnInit, Component} from '@angular/core';
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

  requests: Request[];
  request: Request;
  ability: String;

  ngOnInit() {
    this.requests = [];
    this.ability = '';
    console.log(this.userService.getUser());
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
}

