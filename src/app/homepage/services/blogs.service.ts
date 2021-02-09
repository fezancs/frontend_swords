import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Blogs } from '../models/blogs';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private apiUrl = `${environment.apiUrl}/blogs`;
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
    this.handleError = this.httpErrorHandler.createHandleError('BlogsService')
  }

  getBlogs(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getBlogss', []))
    )
  }

  getBlog(id: number) {
    return this.http.get<Blogs>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getBlog', null))
    )
  }
}
