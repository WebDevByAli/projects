import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { SalesHistoryModuleModule } from '../../../Modules/salesHistory-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-sales-history',
  templateUrl: './table-sales-history.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableSalesHistoryComponent implements AfterViewInit {

  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsSalesHistory = ['itemGroup', 'itemGroupDescription', 'itemKey', 'itemDescription', 'customer', 'favouriteItem'];

  // DATASOURCE
  @Input() dataSourceSalesHistory = new MatTableDataSource<SalesHistoryModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  salesHistoryId: any;


  // Send salesHistoryId to companies Component
  @Output() salesHistoryIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceSalesHistory.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";

  }

  // function row click companies 
  clickRowSalesHistory(row: any) {
    this.salesHistoryId = row.id;
    this.service.getId(this.salesHistoryId).subscribe(
      (data) => {
        this.salesHistoryId = data;
        this.salesHistoryIdData.emit(this.salesHistoryId);
      }
    );
    console.log(this.dataSourceSalesHistory)
  }


}
