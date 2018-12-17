import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-recomandari-card',
  templateUrl: './recomandari-card.component.html',
  styleUrls: ['./recomandari-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecomandariCardComponent implements OnInit {

  @Input() public fullName: string = '';
  @Input() public abilitate1: string = '';
  @Input() public label1: string = '';
  @Input() public abilitate2: string = '';
  @Input() public label2: string = '';
  @Input() public status: string = '';
  @Input() public numeRecomandat: string = '';
  @Input() public mesaj: string = '';
  @Input() public rating: string = '';
 
  constructor() { }

  ngOnInit() {

  
  }

}
