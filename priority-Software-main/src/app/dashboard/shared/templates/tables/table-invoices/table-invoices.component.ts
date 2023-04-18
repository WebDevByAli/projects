import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvoicesModuleModule } from '../../../Modules/invoices-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';


@Component({
  selector: 'app-table-invoices',
  templateUrl: './table-invoices.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableInvoicesComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsInvoices = ['invoiceId', 'company', 'customer', 'currency', 'journal', 'invoiceNumber', 'invoiceDate', 'expirationDate', 'valueBaseCurrency', 'valueInvoiceCurrency', 'valueExVATBaseCurrency'];

  // DATASOURCE
  @Input() dataSourceInvoices = new MatTableDataSource<InvoicesModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  invoiceId: any;


  // Send customerContact Id to companies Component
  @Output() invoiceIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSourceInvoices.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";
  }

  // function row click companies 
  clickRowInvoice(row: any) {
    this.invoiceId = row.id;
    this.service.getId(this.invoiceId).subscribe(
      (data) => {
        this.invoiceId = data;
        this.invoiceIdData.emit(this.invoiceId);
        this.router.navigate(["dashboard/invoices"]);
      }
    );
  }



}
