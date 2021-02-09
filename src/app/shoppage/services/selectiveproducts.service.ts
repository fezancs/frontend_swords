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
export class SelectiveproductsService {

  private apiUrl = `${environment.apiUrl}/selectiveproducts`;
  private apiUrl1 = `${environment.apiUrl}/productsbytype`;
  private apiUrl2 = `${environment.apiUrl}/filterallproducts`;
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
    this.handleError = this.httpErrorHandler.createHandleError('SelectiveproductsService')
  }

  getselectiveproducts(min :number,max :number,offset: number, limit: number) {
    console.log("offset");
    console.log(offset);
    return this.http.get(`${this.apiUrl}/${min}/${max}/${offset}/${limit}`)
    .pipe(
      catchError(this.handleError('getselectiveproducts', null))
    )
  }
  getproductsbytype(type :string,offset: number, limit: number) {
    console.log("offset");
    console.log(offset);
    return this.http.get(`${this.apiUrl1}/${type}/${offset}/${limit}`)
    .pipe(
      catchError(this.handleError('getproductsbytype', null))
    )
  }
  getfilterproducts(filterkeyword :string,offset: number, limit: number) {
    return this.http.get(`${this.apiUrl2}/${filterkeyword}/${offset}/${limit}`)
    .pipe(
      catchError(this.handleError('getfilterproducts', null))
    )
  }
  
}
