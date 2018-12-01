import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(public auth: LoginService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.auth.getUser();
    if (user) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${user.username}:${user.password}`)}`
        }
      });
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
