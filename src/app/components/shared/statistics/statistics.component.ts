import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';
import { Job, Statistics } from '../model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  constructor(private statisticsService: StatisticsService,
    private messageService: MessageService,) {
  }

  public angajati: number;
  public angajatori: number;
  public usersWithMaxRating: number;
  public contractsNo: number;
  public availableJobs: number;
  public providersNo: number;

  ngOnInit() {
    this.statisticsService.getStatistics().subscribe(
      (result: Statistics) => {
        this.providersNo = result.noOfProviders;
        this.angajati = result.providersWithJobPercantage;
        this.angajatori = result.clientsWithJobPercentage;
        this.usersWithMaxRating = result.usersWithMaxRating;
        this.contractsNo = result.noOfContracts;
        this.availableJobs = result.noOfAvailableJobs;
      },
      (error) => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: "Nu am putut incarca toate datele."});
        console.log(error);
      });
  }
}

