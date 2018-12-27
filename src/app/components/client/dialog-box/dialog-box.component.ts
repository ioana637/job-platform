import { ViewEncapsulation, Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Job, User } from "../../shared/model";
import { LoginService } from "src/app/services/login.service";
import { JobService } from "src/app/services/job.service";
import { Observable } from "rxjs";


@Component({
    selector: 'app-dialog-box',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class DialogBoxComponent implements OnInit{

    @Input() display: boolean;
    @Output() displayChange = new EventEmitter();
    @Output() jobAssigned = new EventEmitter();

    private jobs: Job[] = []; 
    private user: User | null = null;

    constructor(
      private loginService: LoginService,
      private jobService: JobService
      ){}
  
    onClose(){
      this.displayChange.emit(false);
    }
  
    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChange.unsubscribe();

    }
    

    public ngOnInit(){
      console.log('User: ', this.loginService.getUser());
      this.user = this.loginService.getUser();
      this.getJobs().subscribe((currentJobs) =>{
        this.jobs = currentJobs;
      console.log('Jobs: ', this.jobs);
      });
    }

    private getJobs(): Observable<Job[]>{
      return this.jobService.getJobsForUser(this.user.id, 1000, 0);
    }

    private onAssignClick(): void {
      this.jobAssigned.emit();
    }

}