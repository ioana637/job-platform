import {
  Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ProviderService} from "../../../services/provider.service";
import {User} from "../../shared/model";
import {MessageService} from "primeng/api";
import {UserService} from "../../../services/user.service";

@Component({
    selector: 'provider-list',
    templateUrl: './provider-list.component.html',
    styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  client: User;
  providers: any[]=[]



  constructor(private userService: UserService,
             private messageService: MessageService,
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


  handleClick(clientId: string){
    //TODO: Add Review functionality
  }
}
