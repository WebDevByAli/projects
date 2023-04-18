import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { GetApiService } from '../../service/getApi.service';
import { ServiceApiService } from '../../service/serviceApi.service';
import { InvoicesModuleModule } from '../../Modules/invoices-module.module';
import { InvoiceOrdersModuleModule } from '../../Modules/invoiceOrders-module.module';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {



  subscribe!: Subscription;

  // Page Titel and subtitle
  title: any;
  subTitle: any;

  //***** Change view
  isVisible: boolean = true;

  // Id from table-components
  companyId: any;
  invoiceId: any;


  // *******************************************************

  // DATASOURCE

  //***** Companies/id/Invoices
  dataSourceInvoices = new MatTableDataSource<InvoicesModuleModule>();
  //***** Companies/id/Invoices/id/InvoiceOrders
  dataSourceInvoiceOrders = new MatTableDataSource<InvoiceOrdersModuleModule>();
  //***** Companies/id/Invoices/id/Document
  // dataSourceQuotations = new MatTableDataSource<QuotationsModuleModule>();
  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "Companies";
    this.subTitle = "> Invoices";
    this.companyId = localStorage.getItem("companyId");
    this.invoiceId = localStorage.getItem("invoiceId");
    // localstorage
    let name = localStorage.getItem('name');
    if (name == "") {
      this.router.navigate(["login"]);
    }
    this.fetchCompaniesInvoicesBycompanyId();
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
  clickRowInvoice(event: any) {
    localStorage.setItem('invoiceId', event);
    this.fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceId(event);
  }


  // *******************************************************

  // function Fetch 
  // function Fetch Offices By companyId
  fetchCompaniesInvoicesBycompanyId() {
    this.subscribe = this.getApi.fetchCompaniesInvoicesBycompanyId(this.companyId).subscribe((data) => {
      this.dataSourceInvoices.data = data;
    });
  }
  // function Fetch Offices By companyId
  fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceId(invoiceId: any) {
    this.subscribe = this.getApi.fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceId(this.companyId, invoiceId).subscribe((data) => {
      this.dataSourceInvoiceOrders.data = data;
    });
  }

}
