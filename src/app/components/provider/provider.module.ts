import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import { ToolbarModule } from 'primeng/primeng';
import { ToolbarProviderComponent } from './toolbar-provider/toolbar-provider.component';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ToolbarModule
  ],
  declarations: [ProviderComponent, ToolbarProviderComponent],
  entryComponents: [
    ProviderComponent
  ]
})
export class ProviderModule {
}
