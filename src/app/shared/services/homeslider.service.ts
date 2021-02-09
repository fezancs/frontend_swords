import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Homeslider } from '../models/homeslider';
import { Trendingnews } from '../models/homeslider';
import { Popularsearch } from '../models/homeslider';
import { Trendingproducts } from '../models/homeslider';
@Injectable({
  providedIn: 'root'
})
export class HomesliderService {

  private apiUrl = `${environment.apiUrl}/homeslider`;
  private apiUrl1 = `${environment.apiUrl}/displaypopularsearches`;
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
    this.handleError = this.httpErrorHandler.createHandleError('HomesliderService')
  }

  gethomesliders(): Observable<Homeslider[]> {
    return this.http.get<Homeslider[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('gethomeslider', []))
    )
  }

  gettrendingnews(): Observable<Trendingnews[]> {
    return this.http.get<Trendingnews[]>(`${this.apiUrl}/trendingnews`)
    .pipe(
      catchError(this.handleError('gettrendingnews', []))
    )
  }

  getpopularsearches(): Observable<Popularsearch[]> {
    return this.http.get<Popularsearch[]>(`${this.apiUrl1}`)
    .pipe(
      catchError(this.handleError('getpopularsearches', []))
    )
  }

  gettrendingproducts(): Observable<Trendingproducts[]> {
    return this.http.get<Trendingproducts[]>(`${this.apiUrl1}/trendingproducts`)
    .pipe(
      catchError(this.handleError('gettrendingproducts', []))
    )
  }

}
