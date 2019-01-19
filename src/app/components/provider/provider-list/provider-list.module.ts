import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderListComponent} from './provider-list.component';
import {ToolbarProviderComponent} from '../toolbar-provider/toolbar-provider.component';
import {SharedModule} from '../../shared/shared.module';
import {ClientModule} from '../../client/client.module';

@NgModule({
  imports: [
    CommonModule,
    ToolbarProviderComponent,
    SharedModule,
    ClientModule,
  ],
  declarations: [
    ProviderListComponent
  ],
  exports: [
    ProviderListComponent
  ]
})
export class ProviderListModule {
}
