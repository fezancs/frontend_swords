import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Order } from '../models/order';
import { Billinginfo } from '../models/billinginfo';

@Injectable({
  providedIn: 'root'
})
export class GuestorderService {

  private apiUrl = `${environment.apiUrl}/guestorder`;

  private apiUrl1 = `${environment.apiUrl}/clientdashboard`;

  private apiUrl2 = `${environment.apiUrl}/registeredorder`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('GuestorderService')
  }

  addorder(product: Order) {
    return this.http.post<Order>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addorder', null))
    )
  }

  addregisteredorder(product: Order) {
    return this.http.post<Order>(`${this.apiUrl2}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addorder', null))
    )
  }
  
  getcustomer(email: string) {
    return this.http.get<Billinginfo>(`${this.apiUrl1}/${email}`)
    .pipe(
      catchError(this.handleError('getcustomer', null))
    )
  }


}



