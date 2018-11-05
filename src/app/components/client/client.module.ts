import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AddJobComponent} from './add-job/add-job.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, InputTextareaModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule
  ],
  declarations: [AddJobComponent],
  exports: [AddJobComponent]
})
export class ClientModule {
}
