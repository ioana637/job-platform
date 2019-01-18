import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Review, User} from '../../shared/model';
import {ProviderService} from '../../../services/provider.service';
import {MessageService} from 'primeng/api';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-add-review-client',
  templateUrl: './add-review-client.component.html',
  styleUrls: ['./add-review-client.component.css']
})
export class AddReviewClientComponent implements OnInit {
  user: User;
  providers: { label: string, value: User }[] = [];
  review: Review = {
    stars: '',
    userFor: null,
    userFrom: null,
    job: null,
    description: null,
    date: ''
  };
  subs: Subscription[] = [];


  constructor(private userService: UserService,
              private messageService: MessageService,
              private providerService: ProviderService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.review.userFrom = this.user;
    this.subs.push(this.providerService.getProviders(1000, 0).subscribe(
      (result) => {
        console.log(result);
        this.providers = result.map((provider: User) => {
          return {
            label: `${provider.id} ${provider.firstName} ${provider.lastName}`,
            value: provider
          };
        });
        console.log(this.providers);
      }
    ));
  }

  onAssignClick() {
    const date = new Date().toJSON();
    this.review.date = date.slice(0, date.length - 2);
    this.subs.push(this.providerService.sendProviderReview(this.review).subscribe(
      (result) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Review trimis!',
          detail: 'Review-ul a fost trimis cu succes!'
        });
        this.review = {
          stars: '',
          userFor: null,
          userFrom: this.user,
          job: null,
          description: null,
          date: ''
        };
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Eroare',
          detail: 'A aparut o eroare, incercati din nou mai tarziu!'
        });

      }
    ));
  }

  handleRate(event) {
    this.review.stars = event.value;
  }

}
