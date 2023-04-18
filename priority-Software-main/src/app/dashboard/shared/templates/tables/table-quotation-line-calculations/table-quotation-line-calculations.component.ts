import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { QuotationLineCalculationsModuleModule } from '../../../Modules/quotationLineCalculations -module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';
@Component({
  selector: 'app-table-quotation-line-calculations',
  templateUrl: './table-quotation-line-calculations.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableQuotationLineCalculationsComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsQuotationLineCalculations = ['id', 'url', 'quotationNumber', 'lineIndex', 'calculation'];

  // DATASOURCE
  @Input() dataSourceQuotationLineCalculations = new MatTableDataSource<QuotationLineCalculationsModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  quotationLineCalculationsId: any;


  // Send quotationLineCalculationsId to companies Component
  @Output() quotationLineCalculationsIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceQuotationLineCalculations.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowQuotationLineCalculations(row: any) {
    this.quotationLineCalculationsId = row.id;
    this.service.getId(this.quotationLineCalculationsId).subscribe(
      (data) => {
        this.quotationLineCalculationsId = data;
        this.quotationLineCalculationsIdData.emit(this.quotationLineCalculationsId);
      }
    );
    console.log(this.dataSourceQuotationLineCalculations)
  }



}
