import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {requestUrl} from '../../assets/urls';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  public getRequests(id) {
    return this.http.get(`${requestUrl}/provider/${id}`,
      httpOptions);
  }

  public getRequestById(id) {
    return this.http.get(`${requestUrl}/id=${id}`,
      httpOptions);
  }
}
