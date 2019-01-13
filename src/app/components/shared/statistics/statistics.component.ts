import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../../services/statistics.service';
import {Job} from '../model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  constructor(private statisticsService: StatisticsService) {
  }

  availableJobs: number;
  contractsNo: Object;
  providersNo: Object;
  bestClientsNo: Object;

  ngOnInit() {
    this.statisticsService.getAllProviders().subscribe(
      (result) => {
        this.providersNo = result;
      },
      (error) => {
        console.log(error);
      });
    this.statisticsService.getContracts().subscribe(
      (result: Job[]) => {
        console.log(result);
        const contracts = result.filter((job) => (job.providers.length !== 0));
        this.contractsNo = contracts.length;
      },
      (error) => {
        console.log(error);
      });
    this.statisticsService.getAvailableJobs().subscribe(
      (result) => {
        this.availableJobs = Object.values(result).length;
      },
      (error) => {
        console.log(error);
      });
    this.statisticsService.getClientsWithMaxRating().subscribe(
      (result) => {
        // console.log(result);
        this.bestClientsNo = result;
      },
      (error) => {
        console.log(error);
      });
  }
}

