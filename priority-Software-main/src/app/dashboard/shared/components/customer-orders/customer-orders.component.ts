import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { GetApiService } from '../../service/getApi.service';
import { ServiceApiService } from '../../service/serviceApi.service';
import { OfficesModuleModule } from '../../Modules/offices-module.module';
import { CustomerOrdersModuleModule } from '../../Modules/customerOrders-module.module';
import { QuotationsModuleModule } from '../../Modules/quotations-module.module';
import { SalesHistoryModuleModule } from '../../Modules/salesHistory-module.module';
import { QuotationLineCalculationsModuleModule } from '../../Modules/quotationLineCalculations -module.module';
import { QuotationLinesModuleModule } from '../../Modules/quotationLines-module.module';
import { CustomerOrderLinesModuleModule } from '../../Modules/customerOrderLines-module.module';


@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {

  subscribe!: Subscription;
  // Page Titel and subtitle
  title: any;
  subTitleA: any;
  subTitleB: any;

  //***** Change view
  isVisible: boolean = true;

  // Id from table-components
  companyId: any;
  officeId: any;
  customerOrdersId: any;
  customerOrderLinesId: any;
  // *******************************************************

  // DATASOURCE

  //***** Companies/id/Offices/id/Quotations
  dataSourceCustomerOrders = new MatTableDataSource<CustomerOrdersModuleModule>();
  dataSourceCustomerOrderLines = new MatTableDataSource<CustomerOrderLinesModuleModule>();


  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "Companies";
    this.subTitleA = "> Offices";
    this.subTitleB = "> Customer Orders";

    this.companyId = localStorage.getItem("companyId");
    this.officeId = localStorage.getItem("officeId");
    this.customerOrdersId = localStorage.getItem("customerOrdersId");
    this.customerOrderLinesId = localStorage.getItem("customerOrderLinesId");

    this.customerOrdersId = localStorage.getItem("customerOrdersId");
    // localstorage
    let name = localStorage.getItem('name');
    if (name == "") {
      this.router.navigate(["login"]);
    }
    this.fetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(this.officeId)
    this.fetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderId(this.customerOrderLinesId);
  }
  ngAfterViewInit() {

  }

  // function to show details view
  getIsVisible(event: boolean) {
    this.isVisible = event;
  }


  // *******************************************************

  // function row click Quotations 
  clickRowCustomerOrders(event: any) {
    localStorage.setItem('customerOrdersId', event);
    this.fetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(event)
  }
  clickRowCustomerOrderLines(event: any) {
    localStorage.setItem('customerOrderLinesId', event);
    this.fetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderId(event);
  }

  // *******************************************************

  // function Fetch 

  // function Fetch Offices By companyId
  fetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(id: any) {
    this.subscribe = this.getApi.fetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(this.companyId, id).subscribe((data) => {
      this.dataSourceCustomerOrders.data = data;
    });
  }
  fetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderId(id: any) {
    this.subscribe = this.getApi.fetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderId(this.companyId, this.officeId, id).subscribe((data) => {
      this.dataSourceCustomerOrders.data = data;
    });
  }



}
