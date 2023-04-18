import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerOrdersModuleModule } from '../../../Modules/customerOrders-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-customer-orders',
  templateUrl: './table-customer-orders.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableCustomerOrdersComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsCustomerOrders = ['id', 'url', 'orderType', 'orderTypeDescription', 'creationDate', 'customerReference', 'orderStatus', 'orderStatusDescription', 'deliveryDate', 'customer', 'realDeliveryDate', 'currency', 'orderNumber', 'valueItemOrderCurrency'];

  // DATASOURCE
  @Input() dataSourceCustomerOrders = new MatTableDataSource<CustomerOrdersModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  customerOrdersId: any;


  // Send customerOrdersId to companies Component
  @Output() customerOrdersIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSourceCustomerOrders.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowCustomerOrders(row: any) {
    this.customerOrdersId = row.id;
    this.service.getId(this.customerOrdersId).subscribe(
      (data) => {
        this.customerOrdersId = data;
        this.customerOrdersIdData.emit(this.customerOrdersId);
        localStorage.setItem('customerOrdersId', this.customerOrdersId)
        this.router.navigate(["dashboard/CustomerOrders"]);
      }
    );
    console.log(this.dataSourceCustomerOrders)
  }


}
