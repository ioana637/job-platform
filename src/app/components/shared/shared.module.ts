import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AbilitiesComponent } from './auth/abilities/abilities.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UserInterceptor} from './user.interceptor.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent, AbilitiesComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {
}
