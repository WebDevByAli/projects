import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { QuotationLineTreatmentsModuleModule } from '../../../Modules/quotationLineTreatments-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';
@Component({
  selector: 'app-table-quotation-line-treatments',
  templateUrl: './table-quotation-line-treatments.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableQuotationLineTreatmentsComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsQuotationLineTreatments = ['id', 'url', 'quotationNumber', 'lineIndex', 'treatmentIndex', 'treatment'];

  // DATASOURCE
  @Input() dataSourceQuotationLineTreatments = new MatTableDataSource<QuotationLineTreatmentsModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  quotationLineTreatmentsId: any;


  // Send quotationLineTreatmentsId to companies Component
  @Output() quotationLineTreatmentsIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceQuotationLineTreatments.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowQuotationLineTreatments(row: any) {
    this.quotationLineTreatmentsId = row.id;
    this.service.getId(this.quotationLineTreatmentsId).subscribe(
      (data) => {
        this.quotationLineTreatmentsId = data;
        this.quotationLineTreatmentsIdData.emit(this.quotationLineTreatmentsId);
      }
    );
    console.log(this.dataSourceQuotationLineTreatments)
  }


}
