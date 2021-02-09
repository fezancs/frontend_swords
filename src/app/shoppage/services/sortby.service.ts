import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class SortbyService {

  private apiUrl = `${environment.apiUrl}/sortproducts`;

  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private httpErrorHandler:HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('SortbyService')
  }

  getProductsbyname(offset: number, limit: number) {
    console.log("name");
    return this.http.get(`${this.apiUrl}/name/${offset}/${limit}`)
    .pipe(
      catchError(this.handleError('getProductsbyname', null))
    )
  }

  getProductsbyprice(offset: number, limit: number) {
    console.log("price");
    return this.http.get(`${this.apiUrl}/price/${offset}/${limit}`)
    .pipe(
      catchError(this.handleError('getProductsbyprice', null))
    )
  }

}
