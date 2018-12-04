import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AddJobComponent} from './add-job/add-job.component';
import {ClientComponent} from './client/client.component';
import {EditJobComponent} from './edit-job/edit-job.component';

const routes = [
  {
    path: 'client/addJob',
    component: AddJobComponent
  },
  {
    path: 'client/job/:id',
    component: EditJobComponent
  },
  {
    path: 'client',
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
