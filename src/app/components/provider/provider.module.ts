import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import { ToolbarModule } from 'primeng/primeng';
import { ToolbarProviderComponent } from './toolbar-provider/toolbar-provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ToolbarModule,
    TableModule
  ],
  declarations: [ProviderComponent, ToolbarProviderComponent, RequestListComponent],
  exports: [ToolbarProviderComponent],
  entryComponents: [
    ProviderComponent,
    RequestListComponent
  ]
})
export class ProviderModule {
}
