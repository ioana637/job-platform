import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JobAddComponent} from './job-add/job-add.component';
import {ClientComponent} from './client/client.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import {JobEditComponent} from './job-edit/job-edit.component';
import {JobListComponent} from './job-list/job-list.component';
import { ListaRecomandariDateComponent } from './lista-recomandari-date/lista-recomandari-date.component';
import { ListaRecomandariPrimiteComponent } from './lista-recomandari-primite/lista-recomandari-primite.component';
import {ClientSettingsComponent} from './client-settings/client-settings.component';
import {RecommandationAddComponent} from './recommandation-add/recommandation-add.component';
import {ReviewListComponent} from '../shared/review-list/review-list.component';
import {ReceivedReviewListComponent} from './received-review-list/received-review-list.component';
import {AddedReviewListComponent} from './added-review-list/added-review-list.component';
import { NewReviewComponent } from './new-review/new-review.component';



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
    path: 'client/listaRecomandariDate',
    component: ListaRecomandariDateComponent
  },
  {
    path: 'client/listaRecomandariPrimite',
    component: ListaRecomandariPrimiteComponent
  },
  {
    path: 'client/recommendation/add',
    component: RecommandationAddComponent
  },
  {
    path: 'client/review/received',
    component: ReceivedReviewListComponent
  },
  {
    path: 'client/review/added',
    component: AddedReviewListComponent
  },
  {
    path: 'client/review/new-review',
    component: NewReviewComponent
  },
  {
    path: 'client/account-settings',
    component: ClientSettingsComponent
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
