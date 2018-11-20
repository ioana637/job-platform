import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AbilityComponent} from './auth/abilities/ability.component';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {AutoCompleteModule, ButtonModule} from 'primeng/primeng';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {UserInterceptor} from './user.interceptor.';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    AutoCompleteModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AbilityComponent,
    ToolbarComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ],
  entryComponents: [AbilityComponent],

  exports: [ToolbarComponent, AbilityComponent]
})
export class SharedModule {
}

