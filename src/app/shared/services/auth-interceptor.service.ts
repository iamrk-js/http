import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = `Bearer Here Take a Auth Token From Local Storages`;

    const authRequest = req.clone({
      setHeaders: {
        'Authorization': authToken,
        'Content-Type': 'application/json'
      }
    })

    return next.handle(authRequest)

  }
}
