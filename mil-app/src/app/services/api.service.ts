import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

   // Handle API errors
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  /* // Create a new item
   createItem(item): Observable<City> {
    return this.http
      .post<City>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  */
  // Get single student data by ID
  getItem(id): Observable<City> {
    return this.http
      .get<City>(this.base_path + '/cities/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get City data
  getList(): Observable<City> {
    return this.http
      .get<City>(this.base_path + '/cities')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
 /* // Update item by id
  updateItem(id, item): Observable<City> {
    return this.http
      .put<City>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }*/
 
}
