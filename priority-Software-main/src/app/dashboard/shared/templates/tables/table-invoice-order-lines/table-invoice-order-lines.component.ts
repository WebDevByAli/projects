import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { InvoiceOrderLinesModuleModule } from '../../../Modules/invoiceOrderLines-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';


@Component({
  selector: 'app-table-invoice-order-lines',
  templateUrl: './table-invoice-order-lines.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableInvoiceOrderLinesComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsInvoiceOrderLines = ['id', 'url', 'company', 'financialYear', 'bookingPeriod', 'bookingPeriodDates', 'invoiceNumber', 'orderIndex', 'lineType', 'itemGroup', 'itemKey', 'treatment', 'treatmentDescription', 'itemDescription', 'quantity1', 'quantity2', 'unit1', 'unit1Description', 'unit2', 'priceUnitDescription', 'priceUnit', 'unit2Description', 'price', 'valueItemOrderCurrency', 'journal', 'calculation', 'calculationDescription', 'valueItemBaseCurrency', 'invoiceOrderLineId', 'lineIndex1', 'lineIndex2', 'itemGroupDescription', 'companyId', 'invoiceId', 'invoiceOrderId', 'office', 'orderNumber', 'customerForSelection', 'companyForSelection'];

  // DATASOURCE
  @Input() dataSourceInvoiceOrderLines = new MatTableDataSource<InvoiceOrderLinesModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  invoiceOrderLinesId: any;


  // Send invoiceOrderLinesId to companies Component
  @Output() invoiceOrderLinesIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceInvoiceOrderLines.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowInvoiceOrderLines(row: any) {
    this.invoiceOrderLinesId = row.id;
    this.service.getId(this.invoiceOrderLinesId).subscribe(
      (data) => {
        this.invoiceOrderLinesId = data;
        this.invoiceOrderLinesIdData.emit(this.invoiceOrderLinesId);
      }
    );
    console.log(this.dataSourceInvoiceOrderLines)
  }


}

