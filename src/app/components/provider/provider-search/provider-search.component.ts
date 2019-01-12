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
import {Category} from '../../shared/model';
import {JobService} from '../../../services/job.service';
import { AbilityComponent } from '../../shared/abilities/ability.component';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styleUrls: ['./provider-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProviderSearchComponent implements OnInit{

  categories: any[];

  selectedCategories: Category[];
  

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

    var results = this.jobService.getFilteredJobs(filterCategories)
    console.log("results" + results)
  }

  onReset(){
    console.log("Reset");
    this.selectedCategories = [];
  }
}
