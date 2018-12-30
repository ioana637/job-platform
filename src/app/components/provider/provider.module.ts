import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import {ButtonModule, ToolbarModule} from 'primeng/primeng';
import { ToolbarProviderComponent } from './toolbar-provider/toolbar-provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {TableModule} from 'primeng/table';
import { ProviderSettingsComponent } from './provider-settings/provider-settings.component';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ToolbarModule,
    TableModule
  ],
  declarations: [ProviderComponent, ToolbarProviderComponent, RequestListComponent, ProviderSettingsComponent],
  exports: [ToolbarProviderComponent,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  entryComponents: [
    ProviderComponent,
    RequestListComponent
  ]
})
export class ProviderModule {
}
