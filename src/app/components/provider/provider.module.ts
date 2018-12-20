import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import { ToolbarModule } from 'primeng/primeng';
import { ToolbarProviderComponent } from './toolbar-provider/toolbar-provider.component';
import { CereriComponent } from './cereri/cereri.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ToolbarModule,
    DialogModule
  ],
  declarations: [ProviderComponent, ToolbarProviderComponent, CereriComponent],
  entryComponents: [
    ProviderComponent
  ]
})
export class ProviderModule {
}
