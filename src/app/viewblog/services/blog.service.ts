import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Blog } from '../models/blog';
import { Reviews } from '../models/reviews';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = `${environment.apiUrl}/blogs`;
  private apiUrl1 = `${environment.apiUrl}/blogreviews`;
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
    this.handleError = this.httpErrorHandler.createHandleError('BlogService')
  }


  getBlog(id: number) {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getBlog', null))
    )
  }

  getreviews(sku: string) {
    return this.http.get<Reviews>(`${this.apiUrl1}/${sku}`)
    .pipe(
      catchError(this.handleError('getreviews', null))
    )
  }
  addreview(review: Reviews) {
    return this.http.post<Reviews>(`${this.apiUrl1}/add`, review, this.httpOptions)
    .pipe(
      catchError(this.handleError('addreview', null))
    )
  }


}
