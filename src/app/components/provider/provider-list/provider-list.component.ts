import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ProviderService} from '../../../services/provider.service';
import {User} from '../../shared/model';
import {MessageService} from 'primeng/api';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-provider-list-clients',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  client: User;
  providers: any[] = [];


  constructor(private userService: UserService,
              private messageService: MessageService,
              private router: Router,
              private providerService: ProviderService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.providerService.getClientsWhoHired(this.userService.getUser().id)
      .subscribe(
        (result) => {
          this.providers = result;
        },
        (error) => {
          this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Datele nu au putut fi incarcate.'});
        }
      );
  }


  handleClick(providerId: string) {
    console.log('clicked');
    this.router.navigateByUrl('provider/review/add-review');
  }
}
