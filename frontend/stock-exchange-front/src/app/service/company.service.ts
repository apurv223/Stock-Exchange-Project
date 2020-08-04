import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CompanyDetails} from '../../models/company-details'
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8765/company-data-service/company';
  }

    public getAllCompanies(): Observable<any> {
       return this.http.get(this.baseUrl+'/all');
      }
    public addCompany(company: CompanyDetails): Observable<any>{
    return  this.http.post<CompanyDetails>(this.baseUrl+'/add', company);
    }
    public deleteCompany(company: CompanyDetails): Observable<any>{
      return  this.http.post(this.baseUrl+'/delete', company);
    }
    public updateCompany(company: CompanyDetails): Observable<any>{
      return  this.http.post(this.baseUrl+'/update', company);
    }
}
