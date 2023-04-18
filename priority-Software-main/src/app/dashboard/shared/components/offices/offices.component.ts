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

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {



  subscribe!: Subscription;

  // Page Titel and subtitle
  title: any;
  subTitle: any;

  //***** Change view
  isVisible: boolean = true;

  // Id from table-components
  companyId: any;
  officeId: any;
  // fetch customerOrders by compnyid and officeId
  // fetch quotations by compnyid and officeId
  // fetch saleHistory by compnyid and officeId

  // *******************************************************

  // DATASOURCE

  //***** Companies/id/Offices
  dataSourceOffices = new MatTableDataSource<OfficesModuleModule>();
  //***** Companies/id/Offices/id/CustomerOrders
  dataSourceCustomerOrders = new MatTableDataSource<CustomerOrdersModuleModule>();
  //***** Companies/id/Offices/id/Quotations
  dataSourceQuotations = new MatTableDataSource<QuotationsModuleModule>();
  //***** Companies/id/Offices/id/SalesHistory
  dataSourceSalesHistory = new MatTableDataSource<SalesHistoryModuleModule>();
  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "Companies";
    this.subTitle = "> Offices";
    this.companyId = localStorage.getItem("companyId");
    this.officeId = localStorage.getItem("officeId");
    // localstorage
    let name = localStorage.getItem('name');
    if (name == "") {
      this.router.navigate(["login"]);
    }
    this.getFetchCompaniesOfficesBycompanyId();
    this.getFetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(this.officeId);
    this.getFetchCompaniesOfficesQuotationsBycompanyIdByofficeId(this.officeId);
    this.getFetchCompaniesOfficesSalesHistoryBycompanyIdByofficeId(this.officeId);
  }
  ngAfterViewInit() {

  }

  // function to show details view
  getIsVisible(event: boolean) {
    this.isVisible = event;
  }


  // *******************************************************

  // function row click Office 
  clickRowOffice(event: any) {
    localStorage.setItem('officeId', event);
    this.getFetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(event);
    this.getFetchCompaniesOfficesQuotationsBycompanyIdByofficeId(event);
    this.getFetchCompaniesOfficesSalesHistoryBycompanyIdByofficeId(event);
  }


  // *******************************************************

  // function Fetch 
  // function Fetch Offices By companyId
  getFetchCompaniesOfficesBycompanyId() {
    this.subscribe = this.getApi.fetchCompaniesOfficesBycompanyId(this.companyId).subscribe((data) => {
      this.dataSourceOffices.data = data;
    });
  }
  // function Fetch Offices By companyId
  getFetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(officeId: any) {
    this.subscribe = this.getApi.fetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(this.companyId, this.officeId).subscribe((data) => {
      this.dataSourceCustomerOrders.data = data;
    });
  }
  // function Fetch Offices By companyId
  getFetchCompaniesOfficesQuotationsBycompanyIdByofficeId(officeId: any) {
    this.subscribe = this.getApi.fetchCompaniesOfficesQuotationsBycompanyIdByofficeId(this.companyId, this.officeId).subscribe((data) => {
      this.dataSourceQuotations.data = data;
      console.log(this.officeId)
    });
  }
  // function Fetch Offices By companyId
  getFetchCompaniesOfficesSalesHistoryBycompanyIdByofficeId(officeId: any) {
    this.subscribe = this.getApi.fetchCompaniesOfficesSalesHistoryBycompanyIdByofficeId(this.companyId, this.officeId).subscribe((data) => {
      this.dataSourceSalesHistory.data = data;
    });
  }
}