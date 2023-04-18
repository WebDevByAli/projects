import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

//TEMPLATES
import { Navbar1Component } from './shared/templates/navbar1/navbar1.component';
import { Navbar2Component } from './shared/templates/navbar2/navbar2.component';

//Componentes
import { CompanyComponent } from './shared/components/company/company.component';
import { PageHeaderComponent } from './shared/templates/page-header/page-header.component';
import { TableCompaniesComponent } from './shared/templates/tables/table-companies/table-companies.component';
import { TableCustomerContactsComponent } from './shared/templates/tables/table-customer-contacts/table-customer-contacts.component';
import { TableAddressesComponent } from './shared/templates/tables/table-addresses/table-addresses.component';
import { TableCustomerOrderLinesComponent } from './shared/templates/tables/table-customer-order-lines/table-customer-order-lines.component';
import { TableCustomerOrdersComponent } from './shared/templates/tables/table-customer-orders/table-customer-orders.component';
import { TableDeliveryAddressesComponent } from './shared/templates/tables/table-delivery-addresses/table-delivery-addresses.component';
import { TableInvoiceOrderLinesComponent } from './shared/templates/tables/table-invoice-order-lines/table-invoice-order-lines.component';
import { TableInvoiceOrdersComponent } from './shared/templates/tables/table-invoice-orders/table-invoice-orders.component';
import { TableInvoicesComponent } from './shared/templates/tables/table-invoices/table-invoices.component';
import { TableItemGroupsComponent } from './shared/templates/tables/table-item-groups/table-item-groups.component';
import { TableItemsComponent } from './shared/templates/tables/table-items/table-items.component';
import { TableOfficesComponent } from './shared/templates/tables/table-offices/table-offices.component';
import { TableQuotationLineCalculationsComponent } from './shared/templates/tables/table-quotation-line-calculations/table-quotation-line-calculations.component';
import { TableQuotationLinesComponent } from './shared/templates/tables/table-quotation-lines/table-quotation-lines.component';
import { TableQuotationLineTreatmentsComponent } from './shared/templates/tables/table-quotation-line-treatments/table-quotation-line-treatments.component';
import { TableQuotationsComponent } from './shared/templates/tables/table-quotations/table-quotations.component';
import { TableSalesHistoryComponent } from './shared/templates/tables/table-sales-history/table-sales-history.component';
import { CompanyIdComponent } from './shared/templates/gridView/company-id/company-id.component';
import { AddressesComponent } from './shared/components/addresses/addresses.component';
import { ItemGroupsComponent } from './shared/components/item-groups/item-groups.component';
import { OfficesComponent } from './shared/components/offices/offices.component';
import { InvoicesComponent } from './shared/components/invoices/invoices.component';
import { InvoicesOrdersLinesComponent } from './shared/components/invoices-orders-lines/invoices-orders-lines.component';
import { QuotationsComponent } from './shared/components/quotations/quotations.component';
import { CustomerOrdersComponent } from './shared/components/customer-orders/customer-orders.component';




@NgModule({
  declarations: [
    CompanyComponent,
    Navbar1Component,
    Navbar2Component,
    PageHeaderComponent,
    TableCompaniesComponent,
    TableCustomerContactsComponent,
    TableAddressesComponent,
    TableCustomerOrderLinesComponent,
    TableCustomerOrdersComponent,
    TableDeliveryAddressesComponent,
    TableInvoiceOrderLinesComponent,
    TableInvoiceOrdersComponent,
    TableInvoicesComponent,
    TableItemGroupsComponent,
    TableItemsComponent,
    TableOfficesComponent,
    TableQuotationLineCalculationsComponent,
    TableQuotationLinesComponent,
    TableQuotationLineTreatmentsComponent,
    TableQuotationsComponent,
    TableSalesHistoryComponent,
    CompanyIdComponent,
    AddressesComponent,
    ItemGroupsComponent,
    OfficesComponent,
    InvoicesComponent,
    InvoicesOrdersLinesComponent,
    QuotationsComponent,
    CustomerOrdersComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  exports: [
    Navbar1Component,
  ]
})
export class DashboardModule { }
