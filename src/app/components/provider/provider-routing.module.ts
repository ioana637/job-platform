import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {ProviderSettingsComponent} from './provider-settings/provider-settings.component';
import { NewReviewComponent } from './new-review/new-review.component';

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
    path: 'provider/review',
    component: NewReviewComponent
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
