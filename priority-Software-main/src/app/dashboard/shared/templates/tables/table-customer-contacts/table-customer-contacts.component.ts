import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ServiceApiService } from '../../../service/serviceApi.service';
import { CustomerContactsModuleModule } from '../../../Modules/customerContacts-module.module';

@Component({
  selector: 'app-table-customer-contacts',
  templateUrl: './table-customer-contacts.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableCustomerContactsComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsCustomerContacts = ['id', 'name', 'firstName', 'customer', 'url'];

  // DATASOURCE
  @Input() dataSourceCustomerContacts = new MatTableDataSource<CustomerContactsModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  customerContactId: any;


  // Send customerContact Id to companies Component
  @Output() customerContactIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceCustomerContacts.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowCustomerContact(row: any) {
    this.customerContactId = row.id;
    this.service.getId(this.customerContactId).subscribe(
      (data) => {
        this.customerContactId = data;
        this.customerContactIdData.emit(this.customerContactId);
      }
    );
  }


}
