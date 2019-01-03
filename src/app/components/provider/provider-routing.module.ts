import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {ProviderSettingsComponent} from './provider-settings/provider-settings.component';
import {AddedReviewListComponent} from './added-review-list/added-review-list.component';
import {ReceivedReviewListComponent} from './received-review-list/received-review-list.component';

const routes = [
  {
    path: 'provider',
    component: ProviderComponent
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
