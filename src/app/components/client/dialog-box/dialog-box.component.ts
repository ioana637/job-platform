import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Job, User} from '../../shared/model';
import {JobService} from 'src/app/services/job.service';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DialogBoxComponent implements OnInit, OnDestroy {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();
  @Output() jobAssigned = new EventEmitter();

  private jobs: Job[] = [];
  private user: User | null = null;
  private selectedJobs: Job [] = [];
  private subs: Subscription[] = [];

  constructor(private loginService: UserService,
              private jobService: JobService,
              private messageService: MessageService) {
  }

  onClose() {
    this.displayChange.emit(false);
  }

  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    this.displayChange.unsubscribe();
    this.subs.forEach((s) => s.unsubscribe());
  }

  public ngOnInit() {
    console.log('User: ', this.loginService.getUser());
    this.user = this.loginService.getUser();
    this.subs.push(this.getJobs().subscribe((currentJobs) => {
      this.jobs = currentJobs.filter((job) => job.status === 'AVAILABLE');
      console.log('Jobs: ', this.jobs);
    }, error => this.messageService.add({
      severity: 'error',
      summary: 'Erroare',
      detail: 'A aparut o eroare, incercati din nou mai tarziu'
    })));
  }

  private getJobs(): Observable<Job[]> {
    return this.jobService.getAllJobs();
  }

  private onAssignClick(): void {
    this.jobAssigned.emit(this.selectedJobs[0]);
  }

}
