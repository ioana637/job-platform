import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobAddComponent} from './job-add/job-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  AutoCompleteModule,
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
import {RecomandariCardComponent} from './recomandari-card/recomandari-card.component';
import {ListaRecomandariDateComponent} from './lista-recomandari-date/lista-recomandari-date.component';
import {ListaRecomandariPrimiteComponent} from './lista-recomandari-primite/lista-recomandari-primite.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {ClientSettingsComponent} from './client-settings/client-settings.component';
import {RecommandationAddComponent} from './recommandation-add/recommandation-add.component';
import { ReceivedReviewListComponent } from './received-review-list/received-review-list.component';
import { AddedReviewListComponent } from './added-review-list/added-review-list.component';
import { JobCardComponent } from './client-jobs-card/job-card.component';


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
    RecomandariCardComponent,
    ListaRecomandariDateComponent,
    ListaRecomandariPrimiteComponent,
    ClientSettingsComponent,
    RecommandationAddComponent,
    ReceivedReviewListComponent,
    AddedReviewListComponent,
    JobCardComponent
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
    JobListComponent,
    RecommandationAddComponent,
    ClientSettingsComponent,
  ]
})
export class ClientModule {
}
