import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CompaniesByIdModuleModule, CompaniesModuleModule } from '../Modules/companies-module.module';
import { OfficesModuleModule } from '../Modules/offices-module.module';
import { CustomerContactsByIdModuleModule, CustomerContactsModuleModule } from '../Modules/customerContacts-module.module';
import { DeliveryAddressesByIdModuleModule, DeliveryAddressesModuleModule } from '../Modules/deliveryAddresses-module.module';
import { InvoicesByIdModuleModule, InvoicesModuleModule } from '../Modules/invoices-module.module';
import { AddressesByIdModuleModule, AddressesModuleModule } from '../Modules/addresses-module.module';
import { ItemGroupsByIdModuleModule, ItemGroupsModuleModule } from '../Modules/itemGroups-module.module';
import { CustomerOrderLinesByIdModuleModule, CustomerOrderLinesModuleModule } from '../Modules/customerOrderLines-module.module';
import { CustomerOrdersByIdModuleModule, CustomerOrdersModuleModule } from '../Modules/customerOrders-module.module';
import { InvoiceOrderLinesByIdModuleModule, InvoiceOrderLinesModuleModule } from '../Modules/invoiceOrderLines-module.module';
import { InvoiceOrdersByIdModuleModule, InvoiceOrdersModuleModule } from '../Modules/invoiceOrders-module.module';
import { ItemsByIdModuleModule, ItemsModuleModule } from '../Modules/items-module.module';
import { SalesHistoryModuleModule } from '../Modules/salesHistory-module.module';
import { QuotationsByIdModuleModule, QuotationsModuleModule } from '../Modules/quotations-module.module';
import { QuotationLinesByIdModuleModule, QuotationLinesModuleModule } from '../Modules/quotationLines-module.module';
import { QuotationLineTreatmentsByIdModuleModule, QuotationLineTreatmentsModuleModule } from '../Modules/quotationLineTreatments-module.module';
import { QuotationLineCalculationsByIdModuleModule, QuotationLineCalculationsModuleModule } from '../Modules/quotationLineCalculations -module.module';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

};
const params = new HttpParams().set('limit', 45);



@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }


  // fetchCompanies(): Observable<CompaniesModuleModule[]> {
  //   return this.http.get<CompaniesModuleModule[]>('http://localhost:3000/Companies').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }



  // *********************************************************** //
  // ********************Addresses****************************** //
  // *********************************************************** //

  // function Fetch Addresses
  fetchAddresses(): Observable<AddressesModuleModule[]> {
    return this.http.get<AddressesModuleModule[]>('/Addresses', { params }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // function Fetch Addresses by id
  fetchAddressesByaddresseId(addresseId: number): Observable<AddressesByIdModuleModule[]> {
    return this.http.get<AddressesByIdModuleModule[]>('/Addresses/' + addresseId).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************Companies****************************** //
  // *********************************************************** //

  // function Fetch Companies
  fetchCompanies(): Observable<CompaniesModuleModule[]> {
    return this.http.get<CompaniesModuleModule[]>('/Companies').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // function Fetch Companies by id
  fetchCompaniesBycompanyId(companyId: number): Observable<CompaniesByIdModuleModule[]> {
    return this.http.get<CompaniesByIdModuleModule[]>('/Companies/' + companyId).pipe(map((res: any) => {
      return res;
    }));
  }

  // *********************************************************** //
  // ********************CustomerContacts*********************** //
  // *********************************************************** //

  // function Fetch CompaniesCustomerContactsBycompanyId
  fetchCompaniesCustomerContactsBycompanyId(companyId: number): Observable<CustomerContactsModuleModule[]> {
    return this.http.get<CustomerContactsModuleModule[]>('/Companies/' + companyId + '/CustomerContacts').pipe(map((res: any) => {
      return res;
    }));
  }

  //  function Fetch Companies CustomerContacts By companyId By customerContactId
  fetchCompaniesCustomerContactsBycompanyIdBycustomerContactId(companyId: number, customerContactId: number): Observable<CustomerContactsByIdModuleModule[]> {
    return this.http.get<CustomerContactsByIdModuleModule[]>('/Companies/' + companyId + '/CustomerContacts/' + customerContactId).pipe(map((res: any) => {
      return res;
    }));
  }


  // *********************************************************** //
  // ********************CustomerOrderLines********************* //
  // *********************************************************** //

  // function FetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderId
  fetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderId(companyId: number, officeId: number, customerOrderId: number): Observable<CustomerOrderLinesModuleModule[]> {
    return this.http.get<CustomerOrderLinesModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/CustomerOrders/' + customerOrderId + '/CustomerOrderLines').pipe(map((res: any) => {
      return res;
    }));
  }

  //  function FetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderIdBycustomerOrderLineId
  fetchCompaniesOfficesCustomerOrdersCustomerOrderLinesBycompanyIdByofficeIdBycustomerOrderIdBycustomerOrderLineId(companyId: number, officeId: number, customerOrderId: number, customerOrderLineId: number): Observable<CustomerOrderLinesByIdModuleModule[]> {
    return this.http.get<CustomerOrderLinesByIdModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/CustomerOrders/' + customerOrderId + '/CustomerOrderLines/' + customerOrderLineId).pipe(map((res: any) => {
      return res;
    }));
  }

  // *********************************************************** //
  // ********************CustomerOrders************************* //
  // *********************************************************** //

  // function FetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId
  fetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeId(companyId: number, officeId: number): Observable<CustomerOrdersModuleModule[]> {
    return this.http.get<CustomerOrdersModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/CustomerOrders').pipe(map((res: any) => {
      return res;
    }));
  }

  //  function FetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeIdBycustomerOrderId
  fetchCompaniesOfficesCustomerOrdersBycompanyIdByofficeIdBycustomerOrderId(companyId: number, officeId: number, customerOrderId: number): Observable<CustomerOrdersByIdModuleModule[]> {
    return this.http.get<CustomerOrdersByIdModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/CustomerOrders/' + customerOrderId).pipe(map((res: any) => {
      return res;
    }));
  }

  // *********************************************************** //
  // ********************DeliveryAddresses********************** //
  // *********************************************************** //

  // function Fetch CompaniesDeliveryAddressesBycompanyId
  fetchCompaniesDeliveryAddressesBycompanyId(companyId: number): Observable<DeliveryAddressesModuleModule[]> {
    return this.http.get<DeliveryAddressesModuleModule[]>('/Companies/' + companyId + '/DeliveryAddresses').pipe(map((res: any) => {
      return res;
    }));
  }

  // function Fetch CompaniesDeliveryAddressesBycompanyId
  fetchCompaniesDeliveryAddressesBycompanyIdByAddressesBycompanyId(companyId: number, addressesBycompanyId: number): Observable<DeliveryAddressesByIdModuleModule[]> {
    return this.http.get<DeliveryAddressesByIdModuleModule[]>('/Companies/' + companyId + '/DeliveryAddresses/' + addressesBycompanyId).pipe(map((res: any) => {
      return res;
    }));
  }

  // *********************************************************** //
  // ********************InvoiceOrderLines********************** //
  // *********************************************************** //

  // function FetchCompaniesInvoicesInvoiceOrdersInvoiceOrderLinesBycompanyIdByinvoiceIdByinvoiceOrderId
  fetchCompaniesInvoicesInvoiceOrdersInvoiceOrderLinesBycompanyIdByinvoiceIdByinvoiceOrderId(companyId: number, invoicesById: number, invoiceOrderId: number): Observable<InvoiceOrderLinesModuleModule[]> {
    return this.http.get<InvoiceOrderLinesModuleModule[]>('/Companies/' + companyId + '/Invoices/' + invoicesById + '/InvoiceOrders/' + invoiceOrderId + '/InvoiceOrderLines').pipe(map((res: any) => {
      return res;
    }));
  }

  // function FetchCompaniesInvoicesInvoiceOrdersInvoiceOrderLinesBycompanyIdByinvoiceIdByinvoiceOrderIdByinvoiceOrderLineId
  fetchCompaniesInvoicesInvoiceOrdersInvoiceOrderLinesBycompanyIdByinvoiceIdByinvoiceOrderIdByinvoiceOrderLineId(companyId: number, invoicesById: number, invoiceOrderId: number, invoiceOrderLineId: number): Observable<InvoiceOrderLinesByIdModuleModule[]> {
    return this.http.get<InvoiceOrderLinesByIdModuleModule[]>('/Companies/' + companyId + '/Invoices/' + invoicesById + '/InvoiceOrders/' + invoiceOrderId + '/InvoiceOrderLines/' + invoiceOrderLineId).pipe(map((res: any) => {
      return res;
    }));
  }

  // *********************************************************** //
  // ********************InvoiceOrders************************** //
  // *********************************************************** //


  // function Fetch Companies Invoices InvoiceOrders By companyId By invoiceId
  fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceId(companyId: number, invoicesBycompanyId: number): Observable<InvoiceOrdersModuleModule[]> {
    return this.http.get<InvoiceOrdersModuleModule[]>('/Companies/' + companyId + '/Invoices/' + invoicesBycompanyId + '/InvoiceOrders').pipe(map((res: any) => {
      return res;
    }));
  }

  // function FetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceIdByinvoiceOrderId
  fetchCompaniesInvoicesInvoiceOrdersBycompanyIdByinvoiceIdByinvoiceOrderId(companyId: number, invoicesBycompanyId: number, invoiceOrderId: number): Observable<InvoiceOrdersByIdModuleModule[]> {
    return this.http.get<InvoiceOrdersByIdModuleModule[]>('/Companies/' + companyId + '/Invoices/' + invoicesBycompanyId + '/InvoiceOrders/' + invoiceOrderId).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************Invoices******************************* //
  // *********************************************************** //

  // function Fetch CompaniesInvoicesBycompanyId
  fetchCompaniesInvoicesBycompanyId(companyId: number): Observable<InvoicesModuleModule[]> {
    return this.http.get<InvoicesModuleModule[]>('/Companies/' + companyId + '/Invoices').pipe(map((res: any) => {
      return res;
    }));
  }

  // function Fetch CompaniesInvoicesBycompanyId
  fetchCompaniesInvoicesBycompanyIdByInvoicesBycompanyId(companyId: number, invoicesById: number): Observable<InvoicesByIdModuleModule[]> {
    return this.http.get<InvoicesByIdModuleModule[]>('/Companies/' + companyId + '/Invoices/' + invoicesById).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************ItemGroups***************************** //
  // *********************************************************** //

  // function Fetch ItemGroups
  fetchItemGroups(): Observable<ItemGroupsModuleModule[]> {
    return this.http.get<ItemGroupsModuleModule[]>('/ItemGroups').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // function Fetch ItemGroups by id
  fetchItemGroupsById(itemGroupId: number): Observable<ItemGroupsByIdModuleModule[]> {
    return this.http.get<ItemGroupsByIdModuleModule[]>('/ItemGroups/' + itemGroupId).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************Items********************************** //
  // *********************************************************** //

  // function Fetch ItemGroups By itemGroupId
  fetchItemsByitemGroupId(itemGroupId: number): Observable<ItemsModuleModule[]> {
    return this.http.get<ItemsModuleModule[]>('/ItemGroups/' + itemGroupId + '/Items').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // function Fetch ItemGroups Items By itemGroupId By itemId
  fetchItemGroupsItemsByitemGroupIdByitemId(itemGroupId: number, itemId: number): Observable<ItemsByIdModuleModule[]> {
    return this.http.get<ItemsByIdModuleModule[]>('/ItemGroups/' + itemGroupId + '/Items' + itemId).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************Offices******************************** //
  // *********************************************************** //

  // function Fetch CompaniesOfficesBycompanyId
  fetchCompaniesOfficesBycompanyId(companyId: number): Observable<OfficesModuleModule[]> {
    return this.http.get<OfficesModuleModule[]>('/Companies/' + companyId + '/Offices').pipe(map((res: any) => {
      return res;
    }));
  }

  // function Fetch CompaniesOfficesBycompanyId 
  fetchCompaniesOfficesBycompanyIdByOfficeId(companyId: number, officeId: number): Observable<OfficesModuleModule[]> {
    return this.http.get<OfficesModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId).pipe(map((res: any) => {
      return res;
    }));
  }

  // *********************************************************** //
  // ********************QuotationLineCalculations************** //
  // *********************************************************** //

  // function FetchCompaniesOfficesQuotationsQuotationLinesQuotationLineCalculationsBycompanyIdByofficeIdByquotationIdByquotationLineId
  fetchCompaniesOfficesQuotationsQuotationLinesQuotationLineCalculationsBycompanyIdByofficeIdByquotationIdByquotationLineId(companyId: number, officeId: number, quotationId: number, quotationLineId: number): Observable<QuotationLineCalculationsModuleModule[]> {
    return this.http.get<QuotationLineCalculationsModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations/' + quotationId + '/QuotationLines/' + quotationLineId + '/QuotationLineCalculations').pipe(map((res: any) => {
      return res;
    }));
  }

  // function FetchCompaniesOfficesQuotationsQuotationLinesQuotationLineCalculationsBycompanyIdByofficeIdByquotationIdByquotationLineIdByquotationLineCalculationId 
  fetchCompaniesOfficesQuotationsQuotationLinesQuotationLineCalculationsBycompanyIdByofficeIdByquotationIdByquotationLineIdByquotationLineCalculationId(companyId: number, officeId: number, quotationId: number, quotationLineId: number, quotationLineCalculationId: number): Observable<QuotationLineCalculationsByIdModuleModule[]> {
    return this.http.get<QuotationLineCalculationsByIdModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations/' + quotationId + '/QuotationLines/' + quotationLineId + '/QuotationLineCalculations/' + quotationLineCalculationId).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************QuotationLines************************* //
  // *********************************************************** //

  // function FetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationId
  fetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationId(companyId: number, officeId: number, quotationLineId: number): Observable<QuotationLinesModuleModule[]> {
    return this.http.get<QuotationLinesModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations/' + quotationLineId + '/QuotationLines').pipe(map((res: any) => {
      return res;
    }));
  }

  // function FetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationIdByquotationLineId 
  fetchCompaniesOfficesQuotationsQuotationLinesBycompanyIdByofficeIdByquotationIdByquotationLineId(companyId: number, officeId: number, quotationId: number, quotationLineId: number): Observable<QuotationLinesByIdModuleModule[]> {
    return this.http.get<QuotationLinesByIdModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations/' + quotationId + '/QuotationLines/' + quotationLineId).pipe(map((res: any) => {
      return res;
    }));
  }

  // *********************************************************** //
  // ********************QuotationLineTreatments**************** //
  // *********************************************************** //

  // function FetchCompaniesOfficesQuotationsQuotationLines QuotationLineTreatments BycompanyIdByofficeIdByquotationIdByquotationLineId
  fetchCompaniesOfficesQuotationsQuotationLinesQuotationLineTreatmentsBycompanyIdByofficeIdByquotationIdByquotationLineId(companyId: number, officeId: number, quotationId: number, quotationLineId: number,): Observable<QuotationLineTreatmentsModuleModule[]> {
    return this.http.get<QuotationLineTreatmentsModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations/' + quotationId + '/QuotationLines/' + quotationLineId + '/QuotationLineTreatments').pipe(map((res: any) => {
      return res;
    }));
  }

  // function FetchCompaniesOfficesQuotationsQuotationLinesQuotationLineTreatmentsBycompanyIdByofficeIdByquotationIdByquotationLineIdByquotationLineTreatmentId 
  fetchCompaniesOfficesQuotationsQuotationLinesQuotationLineTreatmentsBycompanyIdByofficeIdByquotationIdByquotationLineIdByquotationLineTreatmentId(companyId: number, officeId: number, quotationId: number, quotationLineId: number, quotationLineTreatmentId: number): Observable<QuotationLineTreatmentsByIdModuleModule[]> {
    return this.http.get<QuotationLineTreatmentsByIdModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations/' + quotationId + '/QuotationLines/' + quotationLineId + '/QuotationLineTreatments/' + quotationLineTreatmentId).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************Quotations***************************** //
  // *********************************************************** //

  // function FetchCompaniesOfficesQuotationsBycompanyIdByofficeId
  fetchCompaniesOfficesQuotationsBycompanyIdByofficeId(companyId: number, officeId: number): Observable<QuotationsModuleModule[]> {
    return this.http.get<QuotationsModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations').pipe(map((res: any) => {
      return res;
    }));
  }

  // function FetchCompaniesOfficesQuotationsBycompanyIdByofficeIdByquotationId 
  fetchCompaniesOfficesQuotationsBycompanyIdByofficeIdByquotationId(companyId: number, officeId: number, quotationId: number): Observable<QuotationsByIdModuleModule[]> {
    return this.http.get<QuotationsByIdModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/Quotations/' + quotationId).pipe(map((res: any) => {
      return res;
    }));
  }
  // *********************************************************** //
  // ********************SalesHistory*************************** //
  // *********************************************************** //

  // function Fetch Companies Offices SalesHistory By companyId By officeId
  fetchCompaniesOfficesSalesHistoryBycompanyIdByofficeId(companyId: number, officeId: number): Observable<SalesHistoryModuleModule[]> {
    return this.http.get<SalesHistoryModuleModule[]>('/Companies/' + companyId + '/Offices/' + officeId + '/SalesHistory').pipe(map((res: any) => {
      return res;
    }));
  }


}
