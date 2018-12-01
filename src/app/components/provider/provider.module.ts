import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule
  ],
  declarations: [ProviderComponent]
})
export class ProviderModule { }
