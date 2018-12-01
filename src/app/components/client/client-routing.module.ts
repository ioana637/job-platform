import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AddJobComponent} from './add-job/add-job.component';
import {ClientComponent} from './client/client.component';

const routes = [
  {
    path: 'addJob',
    component: AddJobComponent
  },
  {
    path: '',
    component: ClientComponent
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
export class ClientRoutingModule {
}
