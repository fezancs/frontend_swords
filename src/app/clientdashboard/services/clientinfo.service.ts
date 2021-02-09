import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Clientinfo } from '../models/clientinfo';
import { Invoice } from '../models/invoice';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root'
})
export class ClientinfoService {

  private apiUrl = `${environment.apiUrl}/clientdashboard`;
  private apiUrl1 = `${environment.apiUrl}/displaycustomerorderdetails`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('ClientinfoService')
  }

  getcustomer(email: string) {
    return this.http.get<Clientinfo>(`${this.apiUrl}/${email}`)
    .pipe(
      catchError(this.handleError('getcustomer', null))
    )
  }

  updatecustomer(customer: Clientinfo) {
    return this.http.put<Clientinfo>(`${this.apiUrl}/update`, customer, this.httpOptions)
    .pipe(
      catchError(this.handleError('updatecustomer', null))
    )
  }

  getinvoice(email: string) {
    return this.http.get<Invoice>(`${this.apiUrl1}/invoice/${email}`)
    .pipe(
      catchError(this.handleError('getcustomer', null))
    )
  }

  getorder(email: string) {
    return this.http.get<Order>(`${this.apiUrl1}/order/${email}`)
    .pipe(
      catchError(this.handleError('getcustomer', null))
    )
  }

}
