import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {providerUrl, jobUrl} from '../../assets/urls';
import index from '@angular/cli/lib/cli';
import {User} from '../components/shared/model';
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

  public getProviders(count: number = 10, indexStart: number = 0): Observable<any> {
    return <Observable<any>> this.http.get(`${providerUrl}/limit=${count}&start=${indexStart}`,
      httpOptions);
  }

  public assingJob(idJob: string, assignedIds: string[]): Observable<any> {
    return <Observable<any>> this.http.post(`${jobUrl}/${idJob}/assign`,{assignedProviders: assignedIds}, httpOptions);
  }
}
