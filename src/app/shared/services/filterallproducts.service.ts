import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { FilteredProduct } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class FilterallproductsService {

  private apiUrl = `${environment.apiUrl}/filterallproducts`;
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
    this.handleError = this.httpErrorHandler.createHandleError('FilterallproductsService')
  }

  getfilteredproducts(): Observable<FilteredProduct[]> {
    return this.http.get<FilteredProduct[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getfilteredproducts', []))
    )
  }

}
