import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {ProviderSettingsComponent} from './provider-settings/provider-settings.component';
import { NewReviewComponent } from './new-review/new-review.component';
import {AddedReviewListComponent} from './added-review-list/added-review-list.component';
import {ReceivedReviewListComponent} from './received-review-list/received-review-list.component';
import { ProviderJobsComponent } from './provider-jobs/provider-jobs.component';
import {StatisticsComponent} from '../shared/statistics/statistics.component';
import { ProviderListComponent } from './provider-list/provider-list.component';

const routes = [
  {
    path: 'provider',
    component: ProviderJobsComponent
  },
  {
    path: 'provider/request',
    component: RequestListComponent
  },
  {
    path: 'provider/account-settings',
    component: ProviderSettingsComponent
  },
  {
    path: 'provider/review/added',
    component: AddedReviewListComponent
  },
  {
    path: 'provider/review/received',
    component: ReceivedReviewListComponent
  },
  {
    path: 'provider/clients',
    component: ProviderListComponent
  },
  {
    path: 'provider/review/new-review',
    component: NewReviewComponent
  },
  {
    path: 'provider/jobs',
    component: ProviderJobsComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProviderRoutingModule {
}
