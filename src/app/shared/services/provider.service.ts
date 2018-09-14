import { Injectable } from '@angular/core';
import { Provider } from '../models/Provider';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../config/config';
import { catchError, map, tap } from 'rxjs/operators';

const URL_CONTROLLER : string = "/providers"; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private http : HttpClient
  ) { }

  public findAll() : Observable<Provider[]> {
    return this.http.get<Provider[]>( API_URL + URL_CONTROLLER )
      .pipe(
        catchError(this.handleError('findAllProviders', [] ))
      );
  }

  public findById(id : number) :Observable<Provider> {
    return this.http.get<Provider>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Provider>("find Provider By ID : " + id))
      );
  }

  public save(Provider : Provider) : Observable<Provider> {
    return this.http.post<Provider>(API_URL + URL_CONTROLLER, Provider, httpOptions)
      .pipe(
        catchError(this.handleError<Provider>("save Provider"))
      );
  }

  public update(id : number, Provider : Provider) : Observable<any> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, Provider, httpOptions)
      .pipe(
        catchError(this.handleError<any>("update Provider"))
      );
  }

  public delete(id : number) : Observable<Provider> {
    return this.http.delete<Provider>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Provider>("delete Provider"))
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
