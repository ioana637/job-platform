import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import { ButtonModule, InputTextareaModule, RatingModule, ToolbarModule } from 'primeng/primeng';
import { ToolbarProviderComponent } from './toolbar-provider/toolbar-provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {TableModule} from 'primeng/table';
import { ProviderSettingsComponent } from './provider-settings/provider-settings.component';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewReviewComponent } from './new-review/new-review.component';

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
    RatingModule
  ],
  declarations: [ProviderComponent, ToolbarProviderComponent, RequestListComponent, ProviderSettingsComponent, NewReviewComponent],
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
