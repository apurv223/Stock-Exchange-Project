import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IpoDetails } from '../../models/ipo-details';
import { Observable,of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

   private baseUrl: string;

    constructor(private http: HttpClient) {
      this.baseUrl = 'http://localhost:8765/company-data-service/company';
    }

    public findAll() {
      return this.http.get<IpoDetails[]>(this.baseUrl+'/ipo/all').pipe(
                                                                       catchError(this.handleError<IpoDetails[]>('findAll', []))
                                                                     );
    }

    public save(ipoDetails: IpoDetails) {
      return this.http.post<IpoDetails>(this.baseUrl + '/ipo', ipoDetails);
    }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  }
