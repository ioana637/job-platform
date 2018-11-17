import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AddJobComponent} from './add-job/add-job.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, InputTextareaModule, MessageService} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    SharedModule,
    ToastModule
  ],
  declarations: [AddJobComponent],
  exports: [AddJobComponent],
  providers: [MessageService]
})
export class ClientModule {
}
