import {Component, OnDestroy, OnInit} from '@angular/core';
import {StatisticsService} from '../../../services/statistics.service';
import {Job, Statistics, User} from '../model';
import {MessageService} from 'primeng/api';
import {UserService} from '../../../services/user.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  constructor(private statisticsService: StatisticsService,
              private messageService: MessageService,
              private userService: UserService) {
  }

  public angajati: number;
  public angajatiInt: number;
  public angajatori: number;
  public angajatoriInt: number;
  public usersWithMaxRating: number;
  public contractsNo: number;
  public availableJobs: number;
  public providersNo: number;
  private subs: Subscription[] = [];

  public user: User = null;

  ngOnInit() {
    this.user = this.userService.getUser();

    this.subs.push(this.statisticsService.getStatistics().subscribe(
      (result: Statistics) => {
        this.providersNo = result.noOfProviders;
        this.angajati = result.providersWithJobPercantage;
        this.angajatori = result.clientsWithJobPercentage;
        this.angajatiInt = Math.round(this.angajati);
        this.angajatoriInt = Math.round(this.angajatori);
        this.usersWithMaxRating = result.usersWithMaxRating;
        this.contractsNo = result.noOfContracts;
        this.availableJobs = result.noOfAvailableJobs;
      },
      (error) => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Nu am putut incarca toate datele.'});
        console.log(error);
      }));
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
}

