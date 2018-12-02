import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddJobComponent} from './add-job.component';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {CalendarModule, CardModule, InputTextareaModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ToastModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddJobComponent
      }
    ])
  ],
  declarations: [
    AddJobComponent
  ]
})
export class AddJobModule {
}
