import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {JobAddComponent} from './job-add/job-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule, InputTextareaModule, MessageService, ToolbarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {ClientComponent} from './client/client.component';
import {ClientRoutingModule} from './client-routing.module';
import {JobEditComponent} from './job-edit/job-edit.component';
import {ToolbarClientComponent} from './toolbar-client/toolbar-client.component';
import {JobListComponent} from './job-list/job-list.component';

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
    ToastModule,
    DropdownModule
  ],
  declarations: [
    JobAddComponent,
    JobEditComponent,
    ClientComponent,
    ToolbarClientComponent,
    JobListComponent
  ],
  exports: [ToolbarClientComponent],
  providers: [MessageService],
  entryComponents: [
    JobAddComponent,
    JobEditComponent,
    ToolbarClientComponent,
    JobListComponent
  ]
})
export class ClientModule {
}
