import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {providerUrl, jobUrl, reviewRatingUrl, reviewAddedByUserUrl} from '../../assets/urls';
import index from '@angular/cli/lib/cli';
import {Job, Review, User} from '../components/shared/model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) {
  }

  public getProviders(count: number, indexStart: number): Observable<any> {
    return <Observable<any>> this.http.get(`${providerUrl}/limit=${count}&start=${indexStart}`,
      httpOptions);
  }

  public getFilteredProviders(ids: string[]): Observable<any> {
    return <Observable<any>> this.http.get(`${providerUrl}/abilities=${ids}`, httpOptions);
  }

  public getProvidersWithStar(stars: string): Observable<any> {
    return <Observable<any>> this.http.get(`${providerUrl}/rating=${stars}`, httpOptions);
  }

  public assingJob(idJob: string, assignedIds: string[]): Observable<any> {
    return <Observable<any>> this.http.post(`${jobUrl}/${idJob}/assign`,JSON.stringify(assignedIds), httpOptions);
  }

  public getJobsForProvider(providerId: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${jobUrl}/user/${providerId}`, httpOptions);
  }

  public getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${jobUrl}/all`, httpOptions);
  }

  public sendProviderReview(providerReview: Review): Observable<Review> {
    return <Observable<Review>> this.http.post(reviewAddedByUserUrl, providerReview, httpOptions);
  }
}


