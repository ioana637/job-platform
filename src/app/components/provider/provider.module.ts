import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import { InputTextareaModule, RatingModule } from 'primeng/primeng';
import { ToolbarProviderComponent } from './toolbar-provider/toolbar-provider.component';
import {ButtonModule, ToolbarModule} from 'primeng/primeng';
// import {ToolbarProviderComponent} from './toolbar-provider/toolbar-provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {TableModule} from 'primeng/table';
import {ProviderSettingsComponent} from './provider-settings/provider-settings.component';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewReviewComponent } from './new-review/new-review.component';
import {AddedReviewListComponent} from './added-review-list/added-review-list.component';
import {ReceivedReviewListComponent} from './received-review-list/received-review-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ToolbarModule,
    TableModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextareaModule,
    RatingModule,
    SharedModule
  ],
  declarations: [
    ProviderComponent,
    ToolbarProviderComponent,
    RequestListComponent,
    ProviderSettingsComponent,
    AddedReviewListComponent,
    ReceivedReviewListComponent,
    NewReviewComponent
  ],
  // declarations: [ProviderComponent, ToolbarProviderComponent, RequestListComponent, ProviderSettingsComponent, ],
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
    RequestListComponent
  ]
})
export class ProviderModule {
}
