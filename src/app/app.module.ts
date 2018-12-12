import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClientModule} from './components/client/client.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import {JobService} from './services/job.service';
import {SharedModule} from './components/shared/shared.module';
import {AbilityService} from './services/ability.service';
import {AppRoutingModule} from './app-routing.module';
import {ProviderModule} from './components/provider/provider.module';
import { ToolbarModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ToolbarModule,
    BrowserModule,
    ClientModule,
    ProviderModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  
  providers: [
    LoginService,
    JobService,
    AbilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
