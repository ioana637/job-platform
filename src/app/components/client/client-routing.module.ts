import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JobAddComponent} from './job-add/job-add.component';
import {ClientComponent} from './client/client.component';
import {JobEditComponent} from './job-edit/job-edit.component';
import {JobListComponent} from './job-list/job-list.component';

const routes = [
  {
    path: 'client/job/add',
    component: JobAddComponent
  },
  {
    path: 'client/job/:id',
    component: JobEditComponent
  },
  {
    path: 'client/job',
    component: JobListComponent
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
