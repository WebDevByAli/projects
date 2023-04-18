import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ItemGroupsModuleModule } from '../../../Modules/itemGroups-module.module';
import { GetApiService } from '../../../service/getApi.service';
import { ServiceApiService } from '../../../service/serviceApi.service';


@Component({
  selector: 'app-table-item-groups',
  templateUrl: './table-item-groups.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableItemGroupsComponent implements AfterViewInit {


  //Displayes Colums items
  displayedColumnsItemGroups = ['id', 'url', 'itemGroup', 'itemGroupId', 'itemGroupDescription'];

  // DATASOURCE
  dataSourceItemGroups = new MatTableDataSource<ItemGroupsModuleModule>();
  subscribe!: Subscription;

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  itemGroupsId: any;

  // Send itemGroupsId from component table Companies to companies Component
  @Output() itemGroupsIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private getApi: GetApiService, private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.getFetchItemGroups();
    this.dataSourceItemGroups.paginator = this.paginator;
  }

  // function row click ItemGroups 
  clickRowItemGroups(row: any) {
    this.itemGroupsId = row.id;
    this.service.getId(this.itemGroupsId).subscribe(
      (data) => {
        this.itemGroupsId = data;
        this.itemGroupsIdData.emit(this.itemGroupsId);
      }
    );
  }

  // function Fetch ItemGroups
  getFetchItemGroups() {
    this.subscribe = this.getApi.fetchItemGroups().subscribe((res) => {
      this.dataSourceItemGroups.data = res;
      console.log(this.dataSourceItemGroups.data)
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }

}