import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';
import {RequestListComponent} from './request-list/request-list.component';
import {ProviderSettingsComponent} from './provider-settings/provider-settings.component';

const routes = [
  {
    path: 'provider',
    component: ProviderComponent
  },
  {
    path: 'request/provider/1',
    component: RequestListComponent
  },
  {
    path: 'provider/account-settings',
    component: ProviderSettingsComponent
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
