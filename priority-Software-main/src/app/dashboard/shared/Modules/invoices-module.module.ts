export interface InvoicesModuleModule {
  id: string
  url: string
  journal: string
  invoiceNumber: number
  customer: string
  currency: string
  invoiceDate: string
  expirationDate: string
  invoiceId: number
  valueBaseCurrency: number
  valueInvoiceCurrency: number
  valueExVATBaseCurrency: number
  company: string
}
export interface InvoicesByIdModuleModule {
  id: string
  url: string
  journal: string
  financialYear: string
  bookingPeriodDates: string
  bookingPeriod: number
  invoiceNumber: number
  customer: string
  currency: string
  customerAddressId: number
  invoiceDate: string
  expirationDate: string
  invoiceId: number
  companyId: number
  valueBaseCurrency: number
  valueInvoiceCurrency: number
  valueExVATBaseCurrency: number
  locationDocument: string
  documentAvailable: boolean
  companyForSelection: string
  company: string
  tInvoiceOrders: InvoicesModuleModuleTInvoiceOrder[]
  links: InvoicesModuleModuleLink[]
}

export interface InvoicesModuleModuleTInvoiceOrder {
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
  tInvoiceOrderLines: InvoicesModuleModuleTInvoiceOrderLine[]
}

export interface InvoicesModuleModuleTInvoiceOrderLine {
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
  tInvoiceOrderLineItemDescs: InvoicesModuleModuleTInvoiceOrderLineItemDesc[]
}

export interface InvoicesModuleModuleTInvoiceOrderLineItemDesc {
  officeOfInput: string
  orderNumber: number
  lineIndex: number
  language: string
  description: string
  invoiceOrderLineItemDescId: number
}

export interface InvoicesModuleModuleLink {
  rel: string
  href: string
}
