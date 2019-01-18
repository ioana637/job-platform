import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import {ButtonModule, DialogModule, InputTextareaModule, RatingModule, SplitButtonModule, ToolbarModule} from 'primeng/primeng';
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
    SharedModule,
    MultiSelectModule,
    InputTextareaModule,
    RatingModule,
  ],
  declarations: [
    ProviderComponent,
    ProviderJobsComponent,
    JobCardComponent,
    ToolbarProviderComponent,
    RequestListComponent,
    ProviderSettingsComponent,
    RequestDetailsDialogComponent,
    AddedReviewListComponent,
    ReceivedReviewListComponent,
    NewReviewComponent
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
    ProviderJobsComponent
  ]
})
export class ProviderModule {
}
