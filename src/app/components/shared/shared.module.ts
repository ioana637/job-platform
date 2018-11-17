import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AbilitiesComponent} from './auth/abilities/abilities.component';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/primeng';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {UserInterceptor} from './user.interceptor.';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AbilitiesComponent,
    ToolbarComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ],

  exports: [ToolbarComponent]
})
export class SharedModule {
}

