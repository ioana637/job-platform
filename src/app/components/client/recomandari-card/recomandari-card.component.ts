import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-recomandari-card',
  templateUrl: './recomandari-card.component.html',
  styleUrls: ['./recomandari-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecomandariCardComponent implements OnInit {

  @Input() public fullName = '';
  @Input() public abilitate1 = '';
  @Input() public label1 = '';
  @Input() public abilitate2 = '';
  @Input() public label2 = '';
  @Input() public status = '';
  @Input() public numeRecomandat = '';
  @Input() public mesaj = '';
  @Input() public rating = '';

  constructor() {
  }

  ngOnInit() {
  }

}
