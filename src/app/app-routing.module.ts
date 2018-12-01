import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/shared/auth/login/login.component';
import {RegisterComponent} from './components/shared/auth/register/register.component';
import {AbilityComponent} from './components/shared/auth/abilities/ability.component';

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
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register/abilities',
    component: AbilityComponent
  },
  {
    path: 'client',
    loadChildren: './components/client/client-routing.module#ClientRoutingModule'
  },
  {
    path: 'provider',
    loadChildren: './components/provider/provider.module#ProviderModule'
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
