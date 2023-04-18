import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ItemsModuleModule } from '../../../Modules/items-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableItemsComponent implements AfterViewInit {
  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsItems = ['id', 'url', 'itemGroup', 'itemKey', 'itemDescription'];

  // DATASOURCE
  @Input() dataSourceItems = new MatTableDataSource<ItemsModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  itemsId: any;


  // Send itemsId to companies Component
  @Output() itemsIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.dataSourceItems.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";
    console.log(this.dataSourceItems.data)

  }

  // function row click companies 
  clickRowItem(row: any) {
    this.itemsId = row.id;
    this.service.getId(this.itemsId).subscribe(
      (data) => {
        this.itemsId = data;
        this.itemsIdData.emit(this.itemsId);
      }
    );
    console.log(this.dataSourceItems)
  }


}
