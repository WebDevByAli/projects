import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuotationLineTreatmentsModuleModule } from '../../../Modules/quotationLineTreatments-module.module';
import { QuotationsModuleModule } from '../../../Modules/quotations-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-quotations',
  templateUrl: './table-quotations.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableQuotationsComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsQuotations = ['id', 'url', 'quotationNumber', 'creationDate', 'quotationStatus', 'customerReference', 'deliveryDate', 'currency', 'customer', 'valueItemQuotatCurrency', 'quotationStatusDescription'];

  // DATASOURCE
  @Input() dataSourceQuotations = new MatTableDataSource<QuotationsModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  quotationsId: any;


  // Send quotationsId to companies Component
  @Output() quotationsIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSourceQuotations.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowQuotations(row: any) {
    this.quotationsId = row.id;
    this.service.getId(this.quotationsId).subscribe(
      (data) => {
        this.quotationsId = data;
        this.quotationsIdData.emit(this.quotationsId);
        this.router.navigate(["dashboard/quotations"]);
        localStorage.setItem("quotationsId", this.quotationsId)

      }
    );
  }



}
