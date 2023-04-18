import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvoiceOrdersModuleModule } from '../../../Modules/invoiceOrders-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-invoice-orders',
  templateUrl: './table-invoice-orders.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableInvoiceOrdersComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsInvoiceOrders = ['id', 'url', 'company', 'journal', 'financialYear', 'bookingPeriod', 'bookingPeriodDates', 'invoiceNumber', 'orderIndex', 'office', 'orderNumber', 'invoiceRefernce', 'realDeliveryDate', 'invoiceOrderId', 'companyId', 'officeId', 'customerOrderId', 'invoiceId', 'customerForSelection', 'companyForSelection'];

  // DATASOURCE
  @Input() dataSourceInvoiceOrders = new MatTableDataSource<InvoiceOrdersModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  invoiceOrdersId: any;


  // Send invoiceOrdersId to companies Component
  @Output() invoiceOrdersIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSourceInvoiceOrders.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowInvoiceOrders(row: any) {
    this.invoiceOrdersId = row.id;
    this.service.getId(this.invoiceOrdersId).subscribe(
      (data) => {
        this.invoiceOrdersId = data;
        this.invoiceOrdersIdData.emit(this.invoiceOrdersId);
        this.router.navigate(["dashboard/InvoicesOrders"]);
        localStorage.setItem("invoiceOrdersId", this.invoiceOrdersId)
      }
    );
    console.log(this.dataSourceInvoiceOrders)
  }

}
