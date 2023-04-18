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

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {



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
  quotationsId: any;

  // *******************************************************

  // DATASOURCE

  //***** Companies/id/Offices/id/Quotations
  dataSourceQuotations = new MatTableDataSource<QuotationsModuleModule>();
  //***** Companies/id/Offices/id/Quotations
  dataSourceQuotationLines = new MatTableDataSource<QuotationLinesModuleModule>();
  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "Companies";
    this.subTitleA = "> Offices";
    this.subTitleB = "> Quotations";
    this.companyId = localStorage.getItem("companyId");
    this.officeId = localStorage.getItem("officeId");
    this.quotationsId = localStorage.getItem("quotationsId");
    // localstorage
    let name = localStorage.getItem('name');
    if (name == "") {
      this.router.navigate(["login"]);
    }
    this.getFetchCompaniesOfficesQuotationsBycompanyIdByofficeId();
    this.fetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationId(this.quotationsId)
  }
  ngAfterViewInit() {

  }

  // function to show details view
  getIsVisible(event: boolean) {
    this.isVisible = event;
  }


  // *******************************************************

  // function row click Quotations 
  clickRowQuotations(event: any) {
    localStorage.setItem('quotationsId', event);
    this.fetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationId(event);
  }
  // function row click Quotations 
  clickRowQuotationLines(event: any) {
    localStorage.setItem('quotationLineId', event);

  }

  // *******************************************************

  // function Fetch 

  // function Fetch Offices By companyId
  getFetchCompaniesOfficesQuotationsBycompanyIdByofficeId() {
    this.subscribe = this.getApi.fetchCompaniesOfficesQuotationsBycompanyIdByofficeId(this.companyId, this.officeId).subscribe((data) => {
      this.dataSourceQuotations.data = data;
    });
  }
  // function Fetch Offices By companyId
  fetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationId(id: any) {
    this.subscribe = this.getApi.fetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationId(this.companyId, this.officeId, id).subscribe((data) => {
      this.dataSourceQuotationLines.data = data;
    });
  }


}

