import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {User} from '../model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-provider-toolbar',
  templateUrl: './provider-toolbar.component.html',
  styleUrls: ['./provider-toolbar.component.css']
})
export class ProviderToolbarComponent implements OnInit {

  itemsReview: MenuItem[];
  user: User = null;

  constructor(private userService: UserService,
              private router: Router) {

    this.itemsReview = [
      {label: 'Listă review-uri primite', routerLink: '/provider/review/received'},
      {label: 'Listă review-uri date', routerLink: '/provider/review/added'},
    ];

    this.user = this.userService.getUser();
  }

  ngOnInit() {

  }

  navigateToJobs() {
    this.router.navigate(['/provider/jobs']);
  }

  navigateToRequest() {
    this.router.navigate(['/provider/request']);
  }

  navigateToAccountSettings() {
    this.router.navigate(['/provider/account-settings']);
  }

  navigateToLogout() {
    this.router.navigate(['/logout']);
  }
}
