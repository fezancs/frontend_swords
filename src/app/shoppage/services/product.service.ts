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
export class ProductService {

  private apiUrl = `${environment.apiUrl}/productcatalog`;
  private apiUrl1 = `${environment.apiUrl}/getproductbycategory`;
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
    this.handleError = this.httpErrorHandler.createHandleError('ProductService')
  }

  getProducts(offset: number, limit: number) {
    return this.http.get(`${this.apiUrl}/${offset}/${limit}`)
    .pipe(
      catchError(this.handleError('getProducts', null))
    )
  }

  getProduct(sku: string) {
    return this.http.get<Product>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getProduct', null))
    )
  }

  getroductbycategory(category: string , subcategory: string,offset: number, limit: number) {

    return this.http.get(`${this.apiUrl1}/getproduct/${category}/${subcategory}/${offset}/${limit}`)
    .pipe(
      catchError(this.handleError('getProductbycategory', null))
    )
    
  }

}
