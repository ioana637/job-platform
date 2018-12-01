import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from './provider/provider.component';

const routes = [
  {
    path: '',
    component: ProviderComponent
  }
];


@NgModule({
  exports: [
    RouterModule
  ]
})
export class ProviderRoutingModule {
}
