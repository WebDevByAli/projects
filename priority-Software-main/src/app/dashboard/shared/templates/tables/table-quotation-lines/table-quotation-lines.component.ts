import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { QuotationLinesModuleModule } from '../../../Modules/quotationLines-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-quotation-lines',
  templateUrl: './table-quotation-lines.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableQuotationLinesComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsQuotationLines = ['id', 'url', 'quotationNumber', 'lineIndex', 'itemGroup', 'itemKey', 'deliveryDate'];

  // DATASOURCE
  @Input() dataSourceQuotationLines = new MatTableDataSource<QuotationLinesModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  quotationLinesId: any;


  // Send quotationLinesId to companies Component
  @Output() quotationLinesIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceQuotationLines.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowQuotationLines(row: any) {
    this.quotationLinesId = row.id;
    this.service.getId(this.quotationLinesId).subscribe(
      (data) => {
        this.quotationLinesId = data;
        this.quotationLinesIdData.emit(this.quotationLinesId);
      }
    );
    console.log(this.dataSourceQuotationLines)
  }



}
