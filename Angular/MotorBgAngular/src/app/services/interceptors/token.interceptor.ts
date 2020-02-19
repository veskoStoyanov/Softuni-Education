import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

request = request.clone({
    withCredentials: true,
    setHeaders: {
        'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
}) 

        return next.handle(request);
    }
}