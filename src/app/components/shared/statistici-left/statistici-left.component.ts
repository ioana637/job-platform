import {Component, OnInit} from '@angular/core';
import {StatisticiLeftService} from './statistici-left.service';

@Component({
  selector: 'app-statistici-left',
  templateUrl: './statistici-left.component.html',
  styleUrls: ['./statistici-left.component.css']
})
export class StatisticiLeftComponent implements OnInit {

  public angajati: string;
  public angajatori: string;

  constructor(private statisticiService: StatisticiLeftService) {

  }

  ngOnInit() {
    this.statisticiService.getAngajati().subscribe(resp => {
      this.angajati = resp;
    });

    this.statisticiService.getAngajatori().subscribe(resp => {
      this.angajatori = resp;
      console.log(this.angajatori);
    });
  }

}
