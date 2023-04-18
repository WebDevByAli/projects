import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { GetApiService } from '../../service/getApi.service';
import { ServiceApiService } from '../../service/serviceApi.service';
import { ItemGroupsByIdModuleModule } from '../../Modules/itemGroups-module.module';
import { ItemsModuleModule } from '../../Modules/items-module.module';
@Component({
  selector: 'app-item-groups',
  templateUrl: './item-groups.component.html',
  styleUrls: ['./item-groups.component.scss']
})
export class ItemGroupsComponent implements OnInit {


  subscribe!: Subscription;

  // Page Titel and subtitle
  title: any;
  subTitle: any;

  //***** Change view
  isVisible: boolean = true;

  // Id from table-components
  itemGoupId: any;
  itemId: any;


  // *******************************************************

  // DATASOURCE
  dataSourceItemGroupsById = new MatTableDataSource<ItemGroupsByIdModuleModule>();

  //***** Companies/id/CustomerContacts
  dataSourceItems = new MatTableDataSource<ItemsModuleModule>();

  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "ItemGoups";
    this.subTitle = "";
    // localstorage
    let name = localStorage.getItem('name');
    if (name == "") {
      this.router.navigate(["login"]);
    }

  }
  ngAfterViewInit() {

  }

  // function to show details view
  getIsVisible(event: boolean) {
    this.isVisible = event;
  }


  // *******************************************************

  // function row click Items 
  clickRowItemGroups(event: any) {
    this.itemGoupId = event;
    this.getFetchItemGoupsById(this.itemGoupId);
    this.getFetchCompaniesItemsByitemGoupId(this.itemGoupId);

  }
  // function row click itemGoupId 
  clickRowItems(event: any) {
    this.itemId = event;
  }

  // *******************************************************

  // function Fetch itemGoup by id
  getFetchItemGoupsById(itemGoupId: any) {
    this.subscribe = this.getApi.fetchItemGroupsById(itemGoupId).subscribe((data) => {
      this.dataSourceItemGroupsById.data = data;
    });
  }

  // function Fetch Items By itemGoupId
  getFetchCompaniesItemsByitemGoupId(itemGoupId: any) {
    this.subscribe = this.getApi.fetchItemsByitemGroupId(itemGoupId).subscribe((data) => {
      this.dataSourceItems.data = data;
    });

  }
}
