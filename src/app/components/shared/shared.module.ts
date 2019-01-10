import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserInterceptor} from './user.interceptor';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule, CalendarModule, DropdownModule, InputTextareaModule, ToolbarModule} from 'primeng/primeng';
import {AbilityComponent} from './abilities/ability.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {LogoutComponent} from './auth/logout/logout.component';
import { StatisticiLeftComponent } from './statistici-left/statistici-left.component';
import {
  RoundProgressModule,
  // RoundProgressConfig,
  ROUND_PROGRESS_DEFAULTS
  } from 'angular-svg-round-progressbar';
import {StatisticsComponent} from './statistics/statistics.component';
import {ReviewListComponent} from './review-list/review-list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DropdownModule,
    TableModule,
    InputTextareaModule,
    RoundProgressModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AbilityComponent,
    ToolbarComponent,
    LogoutComponent,
    StatisticsComponent,
    ReviewListComponent,
    StatisticiLeftComponent
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: {
        color: '#f00',
        background: '#0f0'
      },
      useClass: UserInterceptor,
      multi: true
    }
  ],
  entryComponents: [AbilityComponent, LogoutComponent, ReviewListComponent, StatisticsComponent],
  exports: [ AbilityComponent, LogoutComponent, ReviewListComponent, StatisticsComponent]
})
export class SharedModule {
}

