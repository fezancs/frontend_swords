import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError ,tap ,mapTo} from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Customer } from '../models/customer';
import { Observable} from 'rxjs';
//import * as  jwt_decode from 'jwt-decode';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export class ClientauthService {
  
  private apiUrl = `${environment.apiUrl}/customers`;
  private handleError: HandleError;
  redirectUrl:string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('ClientauthService')
  }

  registration(customer: Customer) {
    return this.http.post<Customer>(`${this.apiUrl}/registration`, customer, this.httpOptions)
    .pipe(
      catchError(this.handleError('registration', null))
    )
  }

  login(data: any): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/login`, data, this.httpOptions)
    .pipe(
      tap(user => this.doLogin(user)),
      mapTo(true),
      catchError(this.handleError('login', false))
    )
  }
env=environment;
  doLogin(user: any) {
    console.log("dologin");
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    console.log("getcurrent");
    return JSON.parse(localStorage.getItem('currentUser'));
  }
      
  getDecodeToken(token: string) {
    console.log("getdecode");
    return jwt_decode<JwtPayload>(token)
    //return jwt_decode(token);
  }

  isLoggedIn() {
    console.log("islogin");
    const currentUser = this.getCurrentUser();
    if(currentUser) {
      const token = this.getDecodeToken(currentUser.token);
      const currentTime = Math.round((new Date()).getTime() / 1000);
      if (token.exp > currentTime) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }

  
  logout() {
    localStorage.removeItem('currentUser');
  }
  

}
