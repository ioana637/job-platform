import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobAddComponent} from './job-add/job-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule, InputTextareaModule, MessageService, ToolbarModule} from 'primeng/primeng';
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
import { RecomandariCardComponent } from './recomandari-card/recomandari-card.component';
import { ListaRecomandariDateComponent } from './lista-recomandari-date/lista-recomandari-date.component';
import { ListaRecomandariPrimiteComponent } from './lista-recomandari-primite/lista-recomandari-primite.component';


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
    ProviderListComponent,
    ProviderCardComponent,
    JobAddComponent,
    JobEditComponent,
    ClientComponent,
    ToolbarClientComponent,
    JobListComponent,
    RecomandariCardComponent,
    ListaRecomandariDateComponent,
    ListaRecomandariPrimiteComponent
  ],
  exports: [ToolbarClientComponent],
  providers: [MessageService],
  entryComponents: [
    JobAddComponent,
    JobEditComponent,
    ToolbarClientComponent,
    ProviderListComponent,
    ProviderCardComponent,
    JobListComponent
  ]
})
export class ClientModule {
}
