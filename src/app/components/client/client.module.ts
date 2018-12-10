import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AddJobComponent} from './add-job/add-job.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, InputTextareaModule, MessageService, ToolbarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {ClientComponent} from './client/client.component';
import {ClientRoutingModule} from './client-routing.module';
import { ToolbarClientComponent } from './toolbar-client/toolbar-client.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';

@NgModule({
  imports: [
    ToolbarModule,
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    SharedModule,
    ToastModule
    
  ],
  declarations: [
    AddJobComponent,
    ProviderListComponent,
    ProviderCardComponent,
    ClientComponent,
    ToolbarClientComponent,
    ToolbarClientComponent
  ],
  exports: [ToolbarClientComponent],
  providers: [MessageService],
  entryComponents: [
    ToolbarClientComponent,
    AddJobComponent,
    ProviderListComponent,
    ProviderCardComponent,
  ]
})
export class ClientModule {
}
