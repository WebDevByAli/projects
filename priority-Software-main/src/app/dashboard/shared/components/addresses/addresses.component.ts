import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { GetApiService } from '../../service/getApi.service';
import { ServiceApiService } from '../../service/serviceApi.service';
import { AddressesByIdModuleModule } from '../../Modules/addresses-module.module';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  subscribe!: Subscription;

  // Page Titel and subtitle
  title: any;
  subTitleA: any;

  //***** Change view
  isVisible: boolean = true;

  // Id from table-components
  addressesId: any;


  // *******************************************************

  // DATASOURCE
  dataSourceAddressesByaddressesId = new MatTableDataSource<AddressesByIdModuleModule>();

  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "Addresses";
    this.subTitleA = "";
    // localstorage
    let name = localStorage.getItem('name');
    if (name == "") {
      this.router.navigate(["login"]);
    }

  }
  ngAfterViewInit() {

  }

  // function to show details view
  getIsVisible(event: boolean) {
    this.isVisible = event;
  }


  // *******************************************************

  // function row click Addresses 
  clickRowAddresses(event: any) {
    this.addressesId = event;
    this.getFetchAddressesById(this.addressesId);
  }

  // *******************************************************

  // function Fetch Addresse by id
  getFetchAddressesById(addressesId: any) {
    this.subscribe = this.getApi.fetchAddressesByaddresseId(addressesId).subscribe((data) => {
      this.dataSourceAddressesByaddressesId.data = data;
    });
  }



}
