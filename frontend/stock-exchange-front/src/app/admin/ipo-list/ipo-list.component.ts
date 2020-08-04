import { Component, OnInit } from '@angular/core';
import { IpoDetails } from '../../../models/ipo-details';
import {IpoService } from '../../service/ipo.service';

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {
ipoDetailsArray: IpoDetails[];
  constructor(private ipoService: IpoService) { }

  ngOnInit() {
    this.ipoService.findAll().subscribe(data => {this.ipoDetailsArray = data;});
    console.log(this.ipoDetailsArray);
  }

}
