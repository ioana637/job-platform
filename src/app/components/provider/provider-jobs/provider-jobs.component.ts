import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {JobService} from 'src/app/services/job.service';
import {Job, Category, User} from '../../shared/model';
import {Observable} from 'rxjs';
import {MessageService} from 'primeng/api';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-provider-jobs',
  templateUrl: './provider-jobs.component.html',
  styleUrls: ['./provider-jobs.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderJobsComponent implements OnInit {

  protected availableJobs: Job[] = [];
  protected user: User;

  categories: any[];
  selectedCategories: Category[] = [];

  private limit: number = 1000;
  private pageNumber: number = 0;

  constructor(private jobService: JobService,
              private loginService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.loadData();
    this.categories = [];


    const enumObject = Object(Category);
    for (const key in enumObject) {
      this.categories.push({'name': enumObject[key]});
    }
  }

  private loadData() {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.availableJobs = jobs.filter(job => job.status === 'AVAILABLE');
    },(error) => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Datele nu au putut fi incarcate, incearca din nou'});
    });
  }

  private onClickAssign(event: string): void {
    this.jobService.assignJob(this.user, event);
    this.messageService.add({severity: 'success', summary: 'Succes', detail: 'Job-ul a fost asignat'});
  }


  onFilter() {
    const filterCategories = [];

    for (var i = 0; i < this.selectedCategories.length; i++) {
      filterCategories.push(this.selectedCategories[i]['name']);
    }
    console.log(`Reset ${filterCategories}`);
    // no filters, just load data
    if (filterCategories == null || filterCategories.length == 0) {
      this.loadData()
    } else {
      this.jobService.getFilteredJobs(filterCategories).subscribe((jobs) => {
        this.availableJobs = jobs;
      }, (error) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Datele nu au putut fi incarcate, incearca din nou'});
      });
    }
  }

  onReset() {
    this.selectedCategories = [];
    this.loadData();
  }
}
