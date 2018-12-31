import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './provider/provider.component';
import {ProviderRoutingModule} from './provider-routing.module';
import { ToolbarModule, ButtonModule } from 'primeng/primeng';
import { ToolbarProviderComponent } from './toolbar-provider/toolbar-provider.component';
import { ProviderJobsComponent } from './provider-jobs/provider-jobs.component';
import { JobCardComponent } from './job-card/job-card.component';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ToolbarModule,
    ButtonModule
  ],
  declarations: [ProviderComponent,
    ToolbarProviderComponent,
    ProviderJobsComponent,
    JobCardComponent
  ],
  entryComponents: [
    ProviderComponent,
    ProviderJobsComponent
  ]
})
export class ProviderModule {
}
