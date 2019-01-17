import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/shared/auth/login/login.component';
import {RegisterComponent} from './components/shared/auth/register/register.component';
import {AbilityComponent} from './components/shared/abilities/ability.component';
import {LogoutComponent} from './components/shared/auth/logout/logout.component';
import {StatisticsComponent} from './components/shared/statistics/statistics.component';
import {ProviderJobsComponent} from './components/provider/provider-jobs/provider-jobs.component';
import {AllJobsComponent} from './components/shared/all-jobs/all-jobs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'client',
    loadChildren: './components/client/client-routing.module#ClientRoutingModule'
  },
  {
    path: 'provider',
    loadChildren: './components/provider/provider-routing.module#ProviderRoutingModule'
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'jobs',
    component: AllJobsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
