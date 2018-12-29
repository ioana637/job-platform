import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';
import { ProviderJobsComponent } from './provider-jobs/provider-jobs.component';

const routes = [
  {
    path: 'provider',
    component: ProviderComponent
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
