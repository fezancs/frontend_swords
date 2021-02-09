import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Reviews } from '../models/reviews';
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  
  private apiUrl = `${environment.apiUrl}/reviews`;
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
    this.handleError = this.httpErrorHandler.createHandleError('ReviewsService')
  }

  getreviews(sku: string) {
    return this.http.get<Reviews>(`${this.apiUrl}/${sku}`)
    .pipe(
      catchError(this.handleError('getreviews', null))
    )
  }

  addreview(review: Reviews) {
    return this.http.post<Reviews>(`${this.apiUrl}/add`, review, this.httpOptions)
    .pipe(
      catchError(this.handleError('addreview', null))
    )
  }

}
