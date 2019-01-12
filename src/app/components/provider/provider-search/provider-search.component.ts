import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category, Job} from '../../shared/model';
import {JobService} from '../../../services/job.service';
import { AbilityComponent } from '../../shared/abilities/ability.component';
import {ButtonModule} from 'primeng/button';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styles: [`
          :host ::ng-deep .ui-multiselected-item-token,
          :host ::ng-deep .ui-multiselected-empty-token {
              padding: 2px 4px;
              margin: 0 0.286em 0 0;
              display: inline-block;
              vertical-align:middle;
              height: 1.857em;
          }

          :host ::ng-deep .ui-multiselected-item-token {
              background: #007ad9;
              color: #ffffff;
          }

          :host ::ng-deep .ui-multiselected-empty-token {
              background: #d95f00;
              color: #ffffff;
          }
      `],
  encapsulation: ViewEncapsulation.None
})
export class ProviderSearchComponent implements OnInit{

  categories: any[];

  selectedCategories: Category[] = [];
  jobsFound: Job[] = [];
  

  constructor(
    private jobService: JobService
  ) {
    
  }
      
  ngOnInit() {
    this.categories = [];
    
    var enumObject = Object(Category)
    for(var key in enumObject){
        this.categories.push({'name': enumObject[key]});
    }  
    console.log('Cat: ', this.categories);  
  }

  onFilter(){
    console.log("Filter");
    
    var filterCategories = [];
    var i;

    for(i = 0; i < this.selectedCategories.length; i++){
      console.log(this.selectedCategories[i]["name"])
      filterCategories.push(this.selectedCategories[i]["name"])
    }
    
    console.log(filterCategories)

    this.loadDataFiltered(filterCategories).subscribe((jobs) => this.jobsFound = jobs)
    console.log("results" + this.jobsFound) 
  }

  private loadDataFiltered(filterCategories):Observable<Job[]>{
      return this.jobService.getFilteredJobs(filterCategories)
  }

  onReset(){
    console.log("Reset");
    this.selectedCategories = [];
  }
}
