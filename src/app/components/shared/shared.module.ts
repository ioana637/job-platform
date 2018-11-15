import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AbilitiesComponent } from './auth/abilities/abilities.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent, AbilitiesComponent, ToolbarComponent],
  exports: [ToolbarComponent]
})
export class SharedModule {
}
