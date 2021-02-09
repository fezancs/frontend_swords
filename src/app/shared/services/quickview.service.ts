import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Quickview } from '../models/quickview';
@Injectable({
  providedIn: 'root'
})
export class QuickviewService {

  private apiUrl = `${environment.apiUrl}/quickview`;
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
    this.handleError = this.httpErrorHandler.createHandleError('QuickviewService')
  }

  getquickview(sku: string) {
    return this.http.get<Quickview>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getquickview', null))
    )
  }

}
