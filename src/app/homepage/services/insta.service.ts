import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Insta } from '../models/insta';
@Injectable({
  providedIn: 'root'
})
export class InstaService {

  private apiUrl = `${environment.apiUrl}/displayinsta`;
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
    this.handleError = this.httpErrorHandler.createHandleError('InstaService')
  }

  getinsta(): Observable<Insta[]> {
    return this.http.get<Insta[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getinsta', []))
    )
  }


}
