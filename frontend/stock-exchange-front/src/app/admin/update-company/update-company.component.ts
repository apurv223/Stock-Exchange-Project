import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { CompanyDetails } from '../../../models/company-details';
import { CompanyService } from '../../service/company.service';
@Component({
  selector: 'update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
companyDetails: CompanyDetails;
companyForm = new FormGroup({
                  companyCode: new FormControl(''),
                   companyName: new FormControl(''),
                  turnover: new FormControl(''),
                   ceo: new FormControl(''),
                boardOfDirectors: new FormControl(''),
                  sector: new FormControl(''),
                    briefWriteup: new FormControl(''),
                    stockCode: new FormControl(''),
                });
  constructor(private _location: Location,
              private service:CompanyService) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
  onSubmit(){
      //this.companyDetails = new CompanyDetails(this.companyForm.get('companyCode').value,this.companyForm.get('companyName').value,this.companyForm.get('turnover').value,this.companyForm.get('ceo').value,this.companyForm.get('boardOfDirectors').value,this.companyForm.get('sector').value,this.companyForm.get('briefWriteup').value,this.companyForm.get('stockCode').value);
      //console.log(this.profileForm.value);
      //console.log(this.ipoDetails);
      this.companyDetails = this.companyForm.value;
      this.upload();
  }

  upload(){
  this.service.updateCompany(this.companyDetails).subscribe(data => console.log(data), error => console.log(error));
  }
}
