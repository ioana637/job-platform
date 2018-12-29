import {ViewEncapsulation, Component, OnInit} from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-provider-jobs',
  templateUrl: './provider-jobs.component.html',
  styleUrls: ['./provider-jobs.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderJobsComponent implements OnInit {
  constructor(
    private jobService: JobService,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    console.log('User id: ',this.loginService.getUser().id);
  }
}
