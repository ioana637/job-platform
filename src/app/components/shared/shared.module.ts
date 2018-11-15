import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {CalendarModule} from 'primeng/primeng';
import { AbilitiesComponent } from './auth/abilities/abilities.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CalendarModule,
    ButtonModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, AbilitiesComponent],
})
export class SharedModule {
}