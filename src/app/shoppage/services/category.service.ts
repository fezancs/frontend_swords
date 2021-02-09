import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Category } from '../models/category';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.apiUrl}/displaycategory`;
  private apiUrl1 = `${environment.apiUrl}/displaysubcategory`;
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
    this.handleError = this.httpErrorHandler.createHandleError('CategoryService')
  }


  getcategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getcategorys', []))
    )
  }

  getsubcategorys(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.apiUrl1}`)
    .pipe(
      catchError(this.handleError('getsubcategorys', []))
    )
  }
  

}
