import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import {ButtonModule, DialogModule, InputTextareaModule, RatingModule, ToolbarModule} from 'primeng/primeng';
import {ToolbarProviderComponent} from './toolbar-provider/toolbar-provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {TableModule} from 'primeng/table';
import {ProviderSettingsComponent} from './provider-settings/provider-settings.component';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewReviewComponent} from './new-review/new-review.component';
import {RequestDetailsDialogComponent} from './request-details-dialog/request-details-dialog.component';
import {AddedReviewListComponent} from './added-review-list/added-review-list.component';
import {ReceivedReviewListComponent} from './received-review-list/received-review-list.component';
import {SharedModule} from '../shared/shared.module';
import {MultiSelectModule} from 'primeng/multiselect';
import {ProviderJobsComponent} from './provider-jobs/provider-jobs.component';
import {JobCardComponent} from './job-card/job-card.component';
import {ProviderListComponent} from './provider-list/provider-list.component';
import {ProviderCardComponent} from './provider-card/provider-card.component';
import {ClientModule} from '../client/client.module';
import { AddReviewProviderComponent } from './add-review-provider/add-review-provider.component';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    TableModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    SharedModule,
    ToolbarModule,
    ButtonModule,
    MultiSelectModule,
    InputTextareaModule,
    RatingModule,
    DialogModule,
    ClientModule
  ],
  declarations: [
    ProviderComponent,
    ProviderJobsComponent,
    JobCardComponent,
    ToolbarProviderComponent,
    RequestListComponent,
    ProviderSettingsComponent,
    ProviderCardComponent,
    RequestDetailsDialogComponent,
    ProviderListComponent,
    AddedReviewListComponent,
    ReceivedReviewListComponent,
    NewReviewComponent,
    AddReviewProviderComponent
  ],
  exports: [ToolbarProviderComponent,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextareaModule,
    RatingModule
  ],
  entryComponents: [
    ProviderComponent,
    RequestListComponent,
    ProviderJobsComponent,
    ProviderCardComponent
  ]
})
export class ProviderModule {
}
