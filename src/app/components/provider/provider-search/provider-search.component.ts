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
import {MultiSelectModule} from 'primeng/multiselect';
import { AbilityComponent } from '../../shared/abilities/ability.component';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styleUrls: ['./provider-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProviderSearchComponent implements OnInit{

  categories: Category[];

  selectedCategories: Category[];


  constructor() {
  }
      
  ngOnInit() {
    this.categories = [];
    var enumObject = Object(Category)
    for(var key in enumObject){
        this.categories.push(enumObject[key]);
    }
  }

}
