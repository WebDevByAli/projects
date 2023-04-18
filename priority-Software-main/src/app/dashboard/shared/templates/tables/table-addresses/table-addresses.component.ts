import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AddressesModuleModule } from '../../../Modules/addresses-module.module';
import { GetApiService } from '../../../service/getApi.service';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-addresses',
  templateUrl: './table-addresses.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableAddressesComponent implements AfterViewInit {

  //Displayes Colums items
  displayedColumnsAddresses = ['id', 'url', 'address'];

  // DATASOURCE
  dataSourceAddresses = new MatTableDataSource<AddressesModuleModule>();
  subscribe!: Subscription;

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  addressesId: any;

  // Send addressesId Id from component table Companies to companies Component
  @Output() addressesIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private getApi: GetApiService, private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.getFetchAddresses();
    this.dataSourceAddresses.paginator = this.paginator;
  }

  // function row click Addresses 
  clickRowAddresses(row: any) {
    this.addressesId = row.id;
    this.service.getId(this.addressesId).subscribe(
      (data) => {
        this.addressesId = data;
        this.addressesIdData.emit(this.addressesId);
      }
    );
  }

  // function Fetch Addresses
  getFetchAddresses() {
    this.subscribe = this.getApi.fetchAddresses().subscribe((res) => {
      this.dataSourceAddresses.data = res;
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}
