import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jobUrl} from '../../assets/urls';
import {Observable, of} from 'rxjs';
import {Category, Job, User} from '../components/shared/model';

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
    return <Observable<Job>>this.http.post(jobUrl, job, httpOptions);
  }

  get(id: string): Observable<Job> {
    return <Observable<Job>>this.http.get(`${jobUrl}/id=${id}`, httpOptions);
  }

  getCategories() {
    const map: { label: string; value: string }[] = [];
    for (const n in Category) {
      if (typeof Category[n] === 'string') {
        map.push({label: Category[n], value: n});
      }
    }
    return map;
  }

  public getFilteredJobs(categoriesForFilter: string[]): Observable<Job[]> {
    return <Observable<Job[]>>this.http.get(`${jobUrl}/categories=${categoriesForFilter}`, httpOptions);
  }

  public getJobsForUser(idUser: string, limit: number, pageNumber: number): Observable<Job[]> {
    return <Observable<Job[]>>this.http.get(`${jobUrl}/user=${idUser}&limit=${limit}&start=${pageNumber}`, httpOptions);
  }

  public getJobsForProvider(idUser: string): Observable<Job[]> {
    return <Observable<Job[]>>this.http.get(`${jobUrl}/user/${idUser}`, httpOptions);
  }

  public assignJob(user: User, idJob: string) {
    this.get(idJob).subscribe((job: Job) => {
      // job.providers.push(idUser);
      job.providers.push(user);

      this.update(job).subscribe();
    });
  }

  public getAllJobs(): Observable<Job[]> {
    return <Observable<Job[]>> this.http.get(`${jobUrl}/all`, httpOptions);
  }

}
