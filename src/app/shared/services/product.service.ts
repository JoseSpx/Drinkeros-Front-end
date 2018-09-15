import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../config/config';
import { catchError, map, tap } from 'rxjs/operators';

const URL_CONTROLLER : string = "/products"; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : HttpClient
  ) { }

  public findAll() : Observable<Product[]> {
    return this.http.get<Product[]>( API_URL + URL_CONTROLLER )
      .pipe(
        catchError(this.handleError('findAllProducts', [] ))
      );
  }

  public findById(id : number) :Observable<Product> {
    return this.http.get<Product>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Product>("find Product By ID : " + id))
      );
  }

  public save(Product : Product) : Observable<Product> {
    return this.http.post<Product>(API_URL + URL_CONTROLLER, Product, httpOptions)
      .pipe(
        catchError(this.handleError<Product>("save Product"))
      );
  }

  public update(id : number, Product : Product) : Observable<any> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, Product, httpOptions)
      .pipe(
        catchError(this.handleError<any>("update Product"))
      );
  }

  public delete(id : number) : Observable<Product> {
    return this.http.delete<Product>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Product>("delete Product"))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
