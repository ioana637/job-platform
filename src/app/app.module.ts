import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClientModule} from './components/client/client.module';
import {RouterModule, Routes} from '@angular/router';
import {AddJobComponent} from './components/client/add-job/add-job.component';
import {LoginComponent} from './components/shared/auth/login/login.component';
import {RegisterComponent} from './components/shared/auth/register/register.component';
import {AbilitiesComponent} from './components/shared/auth/abilities/abilities.component';
import {SharedModule} from './components/shared/shared.module';


const routes: Routes = [
  {
    path: 'addJob',
    component: AddJobComponent
  },
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
    component: AbilitiesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ClientModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
