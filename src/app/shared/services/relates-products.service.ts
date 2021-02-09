import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { RelatesProducts} from '../models/relates-products';
@Injectable({
  providedIn: 'root'
})
export class RelatesProductsService {

  private apiUrl = `${environment.apiUrl}/relatedproducts`;
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
    this.handleError = this.httpErrorHandler.createHandleError('RelatesProductsService')
  }

  getrelatedproducts(sku: string) {
    return this.http.get<RelatesProducts>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getrelatedproducts', null))
    )
  }

}
