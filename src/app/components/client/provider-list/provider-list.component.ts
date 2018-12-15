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
  constructor(private providerService: ProviderService) {
  }

  ngOnInit() {
    this.providerService.getProviders(10, 0).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
