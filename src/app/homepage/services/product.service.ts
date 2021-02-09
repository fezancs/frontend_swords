import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';
import { Quickview } from '../models/quickview';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiUrl}/displaybestsellers`;
  private apiUrl1 = `${environment.apiUrl}/displaypopular`;
  private apiUrl2 = `${environment.apiUrl}/displayspecialproducts`;
  private apiUrl3 = `${environment.apiUrl}/quickview`;

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
    this.handleError = this.httpErrorHandler.createHandleError('ProductService')
  }

  getbestsellers(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getbestsellers', []))
    )
  }

  getpopular(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl1}`)
    .pipe(
      catchError(this.handleError('getpopular', []))
    )
  }

  getspecialproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl2}`)
    .pipe(
      catchError(this.handleError('getspecialproducts', []))
    )
  }

  getquickview(sku: string) {
    return this.http.get<Quickview>(`${this.apiUrl3}/${sku}`)
    .pipe(
      catchError(this.handleError('getquickview', null))
    )
  }

}
