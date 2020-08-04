import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of} from 'rxjs';
import { StockExchangeDetails} from '../../models/stock-exchange-details';

@Injectable({
  providedIn: 'root'
})
export class StockService {
 private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8765/stock-exchange-data-service/exchange';
  }
      public save(exchange: StockExchangeDetails) {
        return this.http.post<StockExchangeDetails>(this.baseUrl + '/add', exchange);
      }

}
