import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';

const routes = [
  {
    path: 'provider',
    component: ProviderComponent
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
