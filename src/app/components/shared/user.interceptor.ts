import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(public auth: UserService) {
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
