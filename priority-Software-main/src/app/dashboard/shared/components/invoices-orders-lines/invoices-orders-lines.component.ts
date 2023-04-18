import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { GetApiService } from '../../service/getApi.service';
import { ServiceApiService } from '../../service/serviceApi.service';
import { AddressesByIdModuleModule } from '../../Modules/addresses-module.module';
import { InvoiceOrdersModuleModule } from '../../Modules/invoiceOrders-module.module';
import { InvoiceOrderLinesModuleModule } from '../../Modules/invoiceOrderLines-module.module';


@Component({
  selector: 'app-invoices-orders-lines',
  templateUrl: './invoices-orders-lines.component.html',
  styleUrls: ['./invoices-orders-lines.component.scss']
})
export class InvoicesOrdersLinesComponent implements OnInit {



  subscribe!: Subscription;

  // Page Titel and subtitle
  title: any;
  subTitleA: any;
  subTitleB: any;

  //***** Change view
  isVisible: boolean = true;

  // Id from table-components
  companyId: any;
  invoiceId: any;
  invoiceOrdersId: any;
  invoiceOrderLinesId: any;


  // *******************************************************

  // DATASOURCE

  //***** Companies/id/Invoices/id/InvoiceOrders
  dataSourceInvoiceOrders = new MatTableDataSource<InvoiceOrdersModuleModule>();
  //***** Companies/id/Invoices/id/orderLines
  dataSourceInvoiceOrderLines = new MatTableDataSource<InvoiceOrderLinesModuleModule>();
  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "Companies";
    this.subTitleA = "> Invoices";
    this.subTitleB = "> Invoice Orders";

    this.companyId = localStorage.getItem("companyId");
    this.invoiceId = localStorage.getItem("invoiceId");
    this.invoiceOrdersId = localStorage.getItem("invoiceOrdersId");
    // localstorage
    let name = localStorage.getItem('name');
    if (name == "") {
      this.router.navigate(["login"]);
    }
    this.fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceId(this.invoiceId);
  }
  ngAfterViewInit() {

  }

  // function to show details view
  getIsVisible(event: boolean) {
    this.isVisible = event;
  }


  // *******************************************************

  // function row click Office 
  clickRowInvoiceOrders(event: any) {
    localStorage.setItem('invoiceId', event);
    this.fetchCompaniesInvoicesInvoiceOrdersInvoiceOrderLinesBycompanyIdByinvoiceIdByinvoiceOrderId(event);
  }


  // *******************************************************

  // function Fetch 
  // function Fetch Offices By companyId
  fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceId(invoiceId: any) {
    this.subscribe = this.getApi.fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceId(this.companyId, this.invoiceId).subscribe((data) => {
      this.dataSourceInvoiceOrders.data = data;
    });
  }
  // function Fetch Offices By companyId
  fetchCompaniesInvoicesInvoiceOrdersInvoiceOrderLinesBycompanyIdByinvoiceIdByinvoiceOrderId(invoiceOrderLinesId: any) {
    this.subscribe = this.getApi.fetchCompaniesInvoicesInvoiceOrdersInvoiceOrderLinesBycompanyIdByinvoiceIdByinvoiceOrderId(this.companyId, this.invoiceId, this.invoiceOrdersId).subscribe((data) => {
      this.dataSourceInvoiceOrderLines.data = data;
    });
  }




}
