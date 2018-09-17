import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { API_URL } from '../config/config';
import { catchError } from 'rxjs/operators';
import { Worker } from '../models/Worker';

const URL_CONTROLLER : string = "/workers"; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  
  constructor(private http : HttpClient) { }

  public findAll() : Observable<Worker[]> {
    return this.http.get<Worker[]>( API_URL + URL_CONTROLLER )
      .pipe(
        catchError(this.handleError('findAllWorkers', [] ))
      );
  }

  public findById(id : number) :Observable<Worker> {
    return this.http.get<Worker>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Worker>("find Worker By ID : " + id))
      );
  }

  public save(Worker : Worker) : Observable<Worker> {
    return this.http.post<Worker>(API_URL + URL_CONTROLLER, Worker, httpOptions)
      .pipe(
        catchError(this.handleError<Worker>("save Worker"))
      );
  }

  public update(id : number, Worker : Worker) : Observable<any> {
    return this.http.patch(API_URL + URL_CONTROLLER + "/" + id, Worker, httpOptions)
      .pipe(
        catchError(this.handleError<any>("update Worker"))
      );
  }

  public deleteById(id : number) : Observable<Worker> {
    return this.http.delete<Worker>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<Worker>("delete Worker"))
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
