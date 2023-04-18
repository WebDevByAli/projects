export class CustomerOrdersModuleModule {
  constructor(
    id: string,
    url: string,
    orderType: string,
    orderTypeDescription: string,
    creationDate: string,
    customerReference: string,
    orderStatus: string,
    orderStatusDescription: string,
    deliveryDate: string,
    customer: string,
    realDeliveryDate: string,
    currency: string,
    orderNumber: number,
    valueItemOrderCurrency: number,
  ) { }
}

export class CustomerOrdersByIdModuleModule {
  constructor(
    id: string,
    url: string,
    officeOfInput: string,
    orderType: string,
    orderTypeDescription: string,
    creationDate: string,
    customerContact: string,
    customerReference: string,
    officeOfDelivery: string,
    officeOfInvoice: string,
    orderStatus: string,
    invoiceType: string,
    invoiceTypeDescription: string,
    orderStatusDescription: string,
    deliveryDate: string,
    customer: string,
    realDeliveryDate: string,
    customerAddressId: number,
    invoiceReference: string,
    currency: string,
    journal: string,
    financialYear: string,
    bookingPeriod: number,
    bookingPeriodDates: string,
    invoiceNumber: number,
    orderNumber: number,
    invoiceDate: string,
    salesPerson: string,
    salesPersonName: string,
    valueItemOrderCurrency: number,
    valueTreatmentOrderCurrency: number,
    valueCalculationOrderCurrency: number,
    customerOrderId: number,
    valueItemBaseCurrency: number,
    valueTreatmentBaseCurrency: number,
    valueCalculationBaseCurrency: number,
    officeId: number,
    companyId: number,
    currencyConversionRate: number,
    currencyConversionOperator: string,
    certificateType: number,
    certificateTypeDescription: string,
    company: string,
    locationConfirmationDocument: string,
    locationCertificateDocument: string,
    confirmationDocumentAvailable: boolean,
    certificateDocumentAvailable: boolean,
    officeForSelection: string,
    tCustomerOrderLines: CustomerOrdersByIdTCustomerOrderLine[],
    links: CustomerOrdersByIdLink[],
  ) { }
}

export interface CustomerOrdersByIdTCustomerOrderLine {
  url: string
  officeOfInput: string
  itemGroupDescription: string
  orderNumber: number
  officeOfDelivery: string
  officeOfInvoice: string
  orderStatus: string
  orderStatusDescription: string
  itemGroup: string
  itemKey: string
  itemDescription: string
  quantity1: number
  unit1: string
  unit1Description: string
  quantity2: number
  unit2Description: string
  unit2: string
  pieces: number
  weightKg: number
  priceUnit: string
  price: number
  priceUnitDescription: string
  valueItemOrderCurrency: number
  valueItemBaseCurrency: number
  referenceNumber: number
  deliveryDate: string
  calculation: string
  calculationDescription: string
  customer: string
  customerAddressId: number
  customerOrderLineId: number
  lineIndex: number
  lineType: string
  lineTypeDescription: string
  companyId: number
  officeId: number
  customerOrderId: number
  currencyConversionOperator: string
  currencyConversionRate: number
  companyForSelection: string
  officeForSelection: string
  customerForSelection: string
  tCustomerOrderLineItemDescs: CustomerOrdersByIdTCustomerOrderLineItemDesc[]
}

export interface CustomerOrdersByIdTCustomerOrderLineItemDesc {
  officeOfInput: string
  orderNumber: number
  lineIndex: number
  language: string
  description: string
  customerOrderLineItemDescId: number
}

export interface CustomerOrdersByIdLink {
  rel: string
  href: string
}

