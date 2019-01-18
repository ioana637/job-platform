import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../shared/model';
import {ProviderService} from '../../../services/provider.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-review-client',
  templateUrl: './add-review-client.component.html',
  styleUrls: ['./add-review-client.component.css']
})
export class AddReviewClientComponent implements OnInit {
  user: User;
  providers: User[] = [];

  constructor(private userService: UserService,
              private messageService: MessageService,
              private providerService: ProviderService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
