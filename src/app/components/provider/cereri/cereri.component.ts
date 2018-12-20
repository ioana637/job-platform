import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cereri',
  templateUrl: './cereri.component.html',
  styleUrls: ['./cereri.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CereriComponent implements OnInit {

  constructor() { }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  ngOnInit() {
  }

}
