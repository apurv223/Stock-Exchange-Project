import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IpoDetails } from '../../../models/ipo-details';
import {IpoService } from '../../service/ipo.service'
@Component({
  selector: 'update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
ipoDetails: IpoDetails;
profileForm = new FormGroup({
    companyName: new FormControl(''),
    stockExchange: new FormControl(''),
    pricePerShare: new FormControl(''),
    totalNumberOfShares: new FormControl(''),
    openDateTime: new FormControl(''),
    remarks: new FormControl(''),
  });


  constructor(private ipoService: IpoService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ipoDetails = new IpoDetails(this.profileForm.get('companyName').value,this.profileForm.get('stockExchange').value,this.profileForm.get('pricePerShare').value,this.profileForm.get('totalNumberOfShares').value,this.profileForm.get('openDateTime').value,this.profileForm.get('remarks').value);
    //console.log(this.profileForm.value);
    //console.log(this.ipoDetails);
    this.save();
  }

  save(){
    this.ipoService.save(this.ipoDetails).subscribe(data => console.log(data), error => console.log(error));
  }

}
