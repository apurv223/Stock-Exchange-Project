import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from '../../../models/company-details';
import { CompanyService } from '../../service/company.service';
import { FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
companylist: Observable<any>;
   constructor(private serv:CompanyService) {
   console.log("reached component");
   this.serv.getAllCompanies().subscribe(data => {this.companylist = data;});
   }
   ngOnInit() {

   }

}
