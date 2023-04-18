import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CustomerContactsModuleModule } from '../../../Modules/customerContacts-module.module';
import { DeliveryAddressesModuleModule } from '../../../Modules/deliveryAddresses-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';


@Component({
  selector: 'app-table-delivery-addresses',
  templateUrl: './table-delivery-addresses.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableDeliveryAddressesComponent implements AfterViewInit {
  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsDeliveryAddresses = ['id', 'company', 'customer', 'deliveryAddress', 'url'];

  // DATASOURCE
  @Input() dataSourceDeliveryAddresses = new MatTableDataSource<DeliveryAddressesModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  deliveryAddressestId: any;


  // Send customerContact Id to companies Component
  @Output() deliveryAddressestIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceDeliveryAddresses.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";
  }

  // function row click companies 
  clickRowDeliveryAddresses(row: any) {
    this.deliveryAddressestId = row.id;
    this.service.getId(this.deliveryAddressestId).subscribe(
      (data) => {
        this.deliveryAddressestId = data;
        this.deliveryAddressestIdData.emit(this.deliveryAddressestId);
      }
    );
  }


}
