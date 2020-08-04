import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { CompanyDetails } from '../../../models/company-details';
import {CompanyService } from '../../service/company.service'

@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
companyDetails: any;
profileForm = new FormGroup({
  companyCode: new FormControl(''),
  companyName: new FormControl(''),
   turnover: new FormControl(''),
 ceo: new FormControl(''),
  boardOfDirectors: new FormControl(''),
  sector : new FormControl(''),
  briefWriteup: new FormControl(''),
  stockCode: new FormControl(''),

  });
  constructor(private _location: Location,
  private companyService: CompanyService) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  onSubmit(){
    this.companyDetails = this.profileForm.value;
    console.log(this.companyDetails);
    this.save();
  }
  save(){
    this.companyService.addCompany(this.companyDetails).subscribe(data => console.log(data), error => console.log(error));
  }
}
