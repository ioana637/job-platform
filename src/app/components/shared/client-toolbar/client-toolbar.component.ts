import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {UserService} from '../../../services/user.service';
import {User} from '../model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-toolbar',
  templateUrl: './client-toolbar.component.html',
  styleUrls: ['./client-toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ClientToolbarComponent implements OnInit {
  items: MenuItem[];
  itemsReview: MenuItem[];
  user: User = null;

  constructor(private userService: UserService,
              private router: Router) {
    this.items = [
      {label: 'Listă recomandări primite', routerLink: '/client/listaRecomandariPrimite'},
      {label: 'Listă recomandări date', routerLink: '/client/listaRecomandariDate'},
    ];

    this.itemsReview = [
      {label: 'Listă review-uri primite', routerLink: '/client/review/received'},
      {label: 'Listă review-uri date', routerLink: '/client/review/added'},
    ];

    this.user = this.userService.getUser();
  }

  ngOnInit() {

  }

  navigateToJobs() {
    this.router.navigate(['/client/job']);
  }

  navigateToProviderList() {
    this.router.navigate(['/client/providerList']);
  }

  navigateToAccountSettings() {
    this.router.navigate(['/client/account-settings']);
  }

  navigateToLogout() {
    this.router.navigate(['/logout']);

  }


}
