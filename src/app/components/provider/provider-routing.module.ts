import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';
import {RequestListComponent} from './request-list/request-list.component';

const routes = [
  {
    path: 'provider',
    component: ProviderComponent
  },
  {
    path: 'request/provider/1',
    component: RequestListComponent
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
