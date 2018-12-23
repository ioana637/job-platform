import {ViewEncapsulation, Component, OnInit} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ProviderService} from '../../../services/provider.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderListComponent implements OnInit {

  protected providers: any[] = [];
  protected limit: number = 7;
  protected pageNumber: number = 0;
  protected selectedProviders: string[] = [];
  protected display: boolean = false;

  constructor(
    private providerService: ProviderService,
    private messageService: MessageService,) {
  }

  ngOnInit() {
    this.pageNumber = 0;
    this.providerService.getProviders(this.limit, this.pageNumber)
    .subscribe(
      (result) => {
        this.providers = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  protected getNextProvidersPage(): void{
    this.pageNumber += 1;
    this.providerService.getProviders(this.limit, this.pageNumber).subscribe(
      (result) => {
        this.providers = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  protected getPreviousProviders(): void{
    this.pageNumber -= 1;
    this.providerService.getProviders(this.limit, this.pageNumber).subscribe(
      (result) => {
        this.providers = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  protected assignJob(): void{
    // let jobId = '1';
    this.display = true;
    // this.providerService.assingJob(jobId, this.selectedProviders).subscribe(
    //   (result) =>{
    //     console.log(result);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  }

  protected onCheckboxClick(providerId: string) {
    if(this.selectedProviders.indexOf('5') === -1){
      console.log('good');
      this.selectedProviders.push(providerId);
    }else{
      this.selectedProviders = this.selectedProviders.filter(id => id !== providerId);
    }
  }


  private showDialog(): void{
    if(this.selectedProviders.length < 1){
      this.displayWarning();
    } else {
      this.display = true;
      console.log("Display", this.display);

    }
  }

  private onDialogClose(event): void {
    this.display = event;
  }

  private displayWarning() {
    this.messageService.add({severity:'warn', summary:'Asignare anulata', detail:'Selecteaza un provider'});
  }
}
