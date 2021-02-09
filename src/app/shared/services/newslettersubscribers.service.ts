import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Newslettersubscribers } from '../models/newslettersubscribers';
@Injectable({
  providedIn: 'root'
})
export class NewslettersubscribersService {

  private apiUrl = `${environment.apiUrl}/newslettersubscribers`;
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
    this.handleError = this.httpErrorHandler.createHandleError('NewslettersubscribersService')
  }

  
  addnewslettersubscribers(newsletter: Newslettersubscribers) {
    return this.http.post<Newslettersubscribers>(`${this.apiUrl}/add`, newsletter, this.httpOptions)
    .pipe(
      catchError(this.handleError('addnewslettersubscribers', null))
    )
  }

}
