import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IpoDetails } from '../../models/ipo-details';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

   private baseUrl: string;

    constructor(private http: HttpClient) {
      this.baseUrl = 'http://localhost:8765/company-data-service/company';
    }

    public findAll(): Observable<IpoDetails[]> {
      return this.http.get<IpoDetails[]>(this.baseUrl+'/ipo/all');
    }

    public save(ipoDetails: IpoDetails) {
      return this.http.post<IpoDetails>(this.baseUrl + '/ipo', ipoDetails);
    }
  }
