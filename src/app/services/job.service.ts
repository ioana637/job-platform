import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jobUrl} from '../../assets/urls';
import {Observable, of} from 'rxjs';
import {Job} from '../components/shared/model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  add(job: Job): Observable<Job> {
    return <Observable<Job>>this.http.post(jobUrl, job, httpOptions);
  }

  update(job: Job): Observable<Job> {
    return of(job);
    // return <Observable<Job>>this.http.put(`${jobUrl}/${job.id}`, job, httpOptions);
  }

  get(id: string): Observable<Job> {
    return <Observable<Job>>this.http.get(`${jobUrl}/id=${id}`, httpOptions);
    // const job = <Job>{
    //   id: '10',
    //   title: 'wertyuiop',
    //   idClient: 1,
    //   periodStart: '2018-12-05',
    //   periodEnd: '2018-12-05',
    //   description: 'sdfsrgh',
    //   peopleRequired: 3,
    //   startTime: '14:31:09',
    //   endTime: '14:31:09',
    //   hoursPerDay: 3,
    //   hoursPerWeek: 3,
    //   status: 'AVAILABLE',
    //   abilities: [
    //     {
    //       code: 'sds',
    //       display: 'sds',
    //       level: 'independent'
    //     },
    //     {
    //       display: 'aaaaaaaa',
    //       code: 'aaaaaaaa',
    //       level: 'elementar'
    //     },
    //     {
    //       display: 'aaw',
    //       code: 'aaw',
    //       level: 'experimentat'
    //     },
    //     {
    //       code: 'sfddsfds',
    //       display: 'sfddsfds',
    //       level: 'experimentat'
    //     }]
    // };
    // return of(job);
  }


}
