

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {UserInterceptor} from './user.interceptor';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule, CalendarModule, ToolbarModule} from 'primeng/primeng';
import {AbilityComponent} from './abilities/ability.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import { LogoutComponent } from './auth/logout/logout.component';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    DialogModule,
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    ToolbarModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AbilityComponent,
    ToolbarComponent,
    LogoutComponent
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ],
  entryComponents: [AbilityComponent, LogoutComponent],
  exports: [ AbilityComponent, LogoutComponent]
})
export class SharedModule {
}

