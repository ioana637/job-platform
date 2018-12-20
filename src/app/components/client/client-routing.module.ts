import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JobAddComponent} from './job-add/job-add.component';
import {ClientComponent} from './client/client.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import {JobEditComponent} from './job-edit/job-edit.component';
import {JobListComponent} from './job-list/job-list.component';
import {ClientSettingsComponent} from './client-settings/client-settings.component';
import {RecommandationAddComponent} from './recommandation-add/recommandation-add.component';
import {CereriComponent} from '../provider/cereri/cereri.component';


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
  },
  {
    path: 'client/providerList',
    component: ProviderListComponent
  },
  {
    path: 'provider/cereri',
    component: CereriComponent
  },
  {
    path: 'client/recommandation/add',
    component: RecommandationAddComponent
  },
  {
    path: 'client/account-settings',
    component: ClientSettingsComponent
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
export class ClientRoutingModule {
}
