import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {StockService } from '../../service/stock.service';
import { FormGroup, FormControl } from '@angular/forms';
import { StockExchangeDetails} from '../../../models/stock-exchange-details';

@Component({
  selector: 'add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {
stockExchange: StockExchangeDetails;
profileForm = new FormGroup({
    stockName: new FormControl(''),
  });
  constructor(private _location: Location, private stockService:StockService ) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

    onSubmit() {
      this.stockExchange = new StockExchangeDetails(this.profileForm.get("stockName").value);

      //console.log(this.profileForm.value);
      //console.log(this.ipoDetails);
      this.save();
    }

    save(){
      this.stockService.save(this.stockExchange).subscribe(data => console.log(data), error => console.log(error));
    }

}
