import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../config/config';
import { catchError, map, tap } from 'rxjs/operators';
import { TypeDocument } from '../models/TypeDocument';

const URL_CONTROLLER : string = "/typedocuments"; 

@Injectable({
  providedIn: 'root'
})
export class TypeDocumentService {

  constructor(private http : HttpClient) { }

  public findAll() : Observable<TypeDocument[]> {
    return this.http.get<TypeDocument[]>( API_URL + URL_CONTROLLER )
      .pipe(
        catchError(this.handleError('findAllTypeDocuments', [] ))
      );
  }

  public findById(id : number) :Observable<TypeDocument> {
    return this.http.get<TypeDocument>(API_URL + URL_CONTROLLER + "/" + id)
      .pipe(
        catchError(this.handleError<TypeDocument>("find TypeDocument By ID : " + id))
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
