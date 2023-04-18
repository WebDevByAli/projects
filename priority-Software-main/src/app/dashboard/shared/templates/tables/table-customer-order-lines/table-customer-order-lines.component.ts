import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CustomerOrderLinesModuleModule } from '../../../Modules/customerOrderLines-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-customer-order-lines',
  templateUrl: './table-customer-order-lines.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableCustomerOrderLinesComponent implements AfterViewInit {
  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsCustomerOrderLines = ['id', 'url', 'orderNumber', 'itemGroup', 'itemKey', 'deliveryDate', 'customer', 'lineIndex'];

  // DATASOURCE
  @Input() dataSourceCustomerOrderLines = new MatTableDataSource<CustomerOrderLinesModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  customerOrderLinesId: any;


  // Send customerOrderLinesId to companies Component
  @Output() customerOrderLinesIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceCustomerOrderLines.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click 
  clickRowCustomerOrderLines(row: any) {
    this.customerOrderLinesId = row.id;
    this.service.getId(this.customerOrderLinesId).subscribe(
      (data) => {
        this.customerOrderLinesId = data;
        this.customerOrderLinesIdData.emit(this.customerOrderLinesId);
      }
    );
    console.log(this.dataSourceCustomerOrderLines)
  }

}
