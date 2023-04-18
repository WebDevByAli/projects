import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerContactsModuleModule } from '../../Modules/customerContacts-module.module';
import { OfficesModuleModule } from '../../Modules/offices-module.module';
import { DeliveryAddressesModuleModule } from '../../Modules/deliveryAddresses-module.module';
import { InvoicesModuleModule } from '../../Modules/invoices-module.module';
import { GetApiService } from '../../service/getApi.service';
import { ServiceApiService } from '../../service/serviceApi.service';
import { CompaniesByIdModuleModule } from '../../Modules/companies-module.module';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  // *******************************************************

  subscribe!: Subscription;

  // Page Titel and subtitle
  title: any;
  subTitle: any;

  //***** Change view
  isVisible: boolean = true;

  // Id from table-components
  companyId: any;
  customerContactId: any;
  officeId: any;
  deliveryAddressestId: any;
  invoiceId: any;

  // *******************************************************

  // DATASOURCE

  //***** Companies/id
  dataSourceCompaniesBycompanyId = new MatTableDataSource<CompaniesByIdModuleModule>();
  //***** Companies/id/CustomerContacts
  dataSourceCustomerContacts = new MatTableDataSource<CustomerContactsModuleModule>();
  //***** Companies/id/Offices
  dataSourceOffices = new MatTableDataSource<OfficesModuleModule>();
  //***** Companies/id/DeliveryAddresses
  dataSourceDeliveryAddresses = new MatTableDataSource<DeliveryAddressesModuleModule>();
  //***** Companies/id/Invoices
  dataSourceInvoices = new MatTableDataSource<InvoicesModuleModule>();
  // *******************************************************

  constructor(private router: Router, private getApi: GetApiService, private service: ServiceApiService) { }

  ngOnInit(): void {
    this.title = "Companies";
    this.subTitle = "";

    localStorage.setItem('companyId', "");
    localStorage.setItem('customerContactId', "");
    localStorage.setItem('officeId', "");
    localStorage.setItem('deliveryAddressestId', "");
    localStorage.setItem('invoiceId', "");
    // this.subTitel = ">  abdo";
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

  // function row click CustomerContacts 
  clickRowCustomerContact(event: any) {
    this.customerContactId = event;
    localStorage.setItem('customerContactId', this.customerContactId);
  }
  // function row click Office 
  clickRowOffice(event: any) {
    this.officeId = event;
    localStorage.setItem('officeId', this.officeId);

  }
  // function row click DeliveryAddresses 
  clickRowDeliveryAddresses(event: any) {
    this.deliveryAddressestId = event;
    localStorage.setItem('deliveryAddressestId', this.deliveryAddressestId);

  }
  // function row click CustomerContacts 
  clickRowInvoice(event: any) {
    this.invoiceId = event;
    localStorage.setItem('invoiceId', this.invoiceId);

  }

  // function row click companies 
  clickRowCompany(event: any) {
    this.companyId = event;
    this.getFetchCompaniesCustomerContactsBycompanyId(this.companyId);
    this.getFetchCompaniesOfficesBycompanyId(this.companyId);
    this.getFetchCompaniesDeliveryAddressesBycompanyId(this.companyId);
    this.getFetchCompaniesInvoicesBycompanyId(this.companyId);
    this.getFetchCompaniesBycompanyId(this.companyId);
  }
  // *******************************************************

  // function Fetch Companies by id
  getFetchCompaniesBycompanyId(companyId: any) {
    this.subscribe = this.getApi.fetchCompaniesBycompanyId(companyId).subscribe((data) => {
      this.dataSourceCompaniesBycompanyId.data = data;
    });
  }

  // function Fetch CustomerContacts By companyId
  getFetchCompaniesCustomerContactsBycompanyId(companyId: any) {
    this.subscribe = this.getApi.fetchCompaniesCustomerContactsBycompanyId(companyId).subscribe((data) => {
      this.dataSourceCustomerContacts.data = data;
    });

  }

  // function Fetch Offices By companyId
  getFetchCompaniesOfficesBycompanyId(companyId: any) {
    this.subscribe = this.getApi.fetchCompaniesOfficesBycompanyId(companyId).subscribe((data) => {
      this.dataSourceOffices.data = data;
    });
  }

  // function Fetch Delivery Addresses By companyId
  getFetchCompaniesDeliveryAddressesBycompanyId(companyId: any) {
    this.subscribe = this.getApi.fetchCompaniesDeliveryAddressesBycompanyId(companyId).subscribe((data) => {
      this.dataSourceDeliveryAddresses.data = data;
    });
  }

  // function Fetch Invoices By companyId
  getFetchCompaniesInvoicesBycompanyId(companyId: any) {
    this.subscribe = this.getApi.fetchCompaniesInvoicesBycompanyId(companyId).subscribe((data) => {
      this.dataSourceInvoices.data = data;
    });
  }

}