export interface InvoiceOrdersModuleModule {
  id: string
  url: string
  company: string
  journal: string
  financialYear: string
  bookingPeriod: number
  bookingPeriodDates: string
  invoiceNumber: number
  orderIndex: number
  office: string
  orderNumber: number
  invoiceRefernce: string
  realDeliveryDate: string
  invoiceOrderId: number
  companyId: number
  officeId: number
  customerOrderId: number
  invoiceId: number
  customerForSelection: string
  companyForSelection: string
}
export interface InvoiceOrdersByIdModuleModule {
  id: string
  url: string
  company: string
  journal: string
  financialYear: string
  bookingPeriod: number
  bookingPeriodDates: string
  invoiceNumber: number
  orderIndex: number
  office: string
  orderNumber: number
  invoiceRefernce: string
  realDeliveryDate: string
  invoiceOrderId: number
  companyId: number
  officeId: number
  customerOrderId: number
  invoiceId: number
  customerForSelection: string
  companyForSelection: string
  tInvoiceOrderLines: InvoiceOrdersModuleModuleTInvoiceOrderLine[]
  links: InvoiceOrdersModuleModuleLink[]
}

export interface InvoiceOrdersModuleModuleTInvoiceOrderLine {
  url: string
  company: string
  financialYear: string
  bookingPeriod: number
  bookingPeriodDates: string
  invoiceNumber: number
  orderIndex: number
  lineType: string
  itemGroup: string
  itemKey: string
  treatment: number
  treatmentDescription: string
  itemDescription: string
  quantity1: number
  quantity2: number
  unit1: string
  unit1Description: string
  unit2: string
  priceUnitDescription: string
  priceUnit: string
  unit2Description: string
  price: number
  valueItemOrderCurrency: number
  journal: string
  calculation: string
  calculationDescription: string
  valueItemBaseCurrency: number
  invoiceOrderLineId: number
  lineIndex1: number
  lineIndex2: number
  itemGroupDescription: string
  companyId: number
  invoiceId: number
  invoiceOrderId: number
  office: string
  orderNumber: number
  customerForSelection: string
  companyForSelection: string
  tInvoiceOrderLineItemDescs: InvoiceOrdersModuleModuleTInvoiceOrderLineItemDesc[]
}

export interface InvoiceOrdersModuleModuleTInvoiceOrderLineItemDesc {
  officeOfInput: string
  orderNumber: number
  lineIndex: number
  language: string
  description: string
  invoiceOrderLineItemDescId: number
}

export interface InvoiceOrdersModuleModuleLink {
  rel: string
  href: string
}
