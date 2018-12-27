import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobAddComponent} from './job-add/job-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, InputTextareaModule, MessageService, ToolbarModule, DialogModule, AutoCompleteModule} from 'primeng/primeng';
import {
  CalendarModule,
  DialogModule,
  DropdownModule,
  InputTextareaModule,
  MessageService,
  PasswordModule,
  ToolbarModule
} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';
import {ClientComponent} from './client/client.component';
import {ClientRoutingModule} from './client-routing.module';
import {ProviderListComponent} from './provider-list/provider-list.component';
import {ProviderCardComponent} from './provider-card/provider-card.component';
import {JobEditComponent} from './job-edit/job-edit.component';
import {ToolbarClientComponent} from './toolbar-client/toolbar-client.component';
import {JobListComponent} from './job-list/job-list.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ClientSettingsComponent } from './client-settings/client-settings.component';
import {RecommandationAddComponent} from './recommandation-add/recommandation-add.component';


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
    AutoCompleteModule,
    DropdownModule,
    PasswordModule,
    DialogModule
  ],
  declarations: [
    ProviderListComponent,
    ProviderCardComponent,
    DialogBoxComponent,
    JobAddComponent,
    JobEditComponent,
    ClientComponent,
    ToolbarClientComponent,
    JobListComponent,
    ClientSettingsComponent,
    RecommandationAddComponent
  ],
  exports: [ToolbarClientComponent],
  providers: [MessageService],
  entryComponents: [
    JobAddComponent,
    JobEditComponent,
    ToolbarClientComponent,
    ProviderListComponent,
    ProviderCardComponent,
    DialogBoxComponent,
    JobListComponent
    RecommandationAddComponent,
    ClientSettingsComponent,
  ]
})
export class ClientModule {
}
