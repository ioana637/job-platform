import {ViewEncapsulation, Component, OnInit} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ProviderService} from '../../../services/provider.service';


@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderListComponent implements OnInit {

  protected providers: any[] = [];
  protected fromPage: number = 0;
  protected toPage: number = 9;
  protected selectedProviders: string[] = [];

  constructor(private providerService: ProviderService) {
  }

  ngOnInit() {
    this.providerService.getProviders(this.toPage, this.fromPage)
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
    this.providerService.getProviders(this.fromPage, this.toPage).subscribe(
      (result) => {
        this.fromPage = this.fromPage + 10;
        this.toPage = this.toPage + 10;
        this.providers = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  protected getPreviousProviders(): void{
    this.providerService.getProviders(this.fromPage, this.toPage).subscribe(
      (result) => {
        this.fromPage = this.fromPage - 10;
        this.toPage = this.toPage - 10;
        this.providers = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  protected assignJob(): void{
    let jobId = '1';
    this.providerService.assingJob(jobId, this.selectedProviders).subscribe(
      (result) =>{
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  protected onCheckboxClick(providerId: string) {
    if(this.selectedProviders.indexOf('5') === -1){
      console.log('good');
      this.selectedProviders.push(providerId);
    }else{
      this.selectedProviders = this.selectedProviders.filter(id => id !== providerId);
    }
  }
}
