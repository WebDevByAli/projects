export interface QuotationLinesModuleModule {
  id: string
  url: string
  quotationNumber: number
  lineIndex: number
  itemGroup: string
  itemKey: string
  deliveryDate: string
}
export interface QuotationLinesByIdModuleModule {
  id: string
  url: string
  officeOfInput: string
  quotationNumber: number
  lineIndex: number
  officeOfDelivery: string
  officeOfInvoice: string
  quotationStatus: string
  itemGroup: string
  itemKey: string
  quantity1: number
  itemDescription: string
  unit1: string
  unit1Description: string
  unit2Description: string
  unit2: string
  priceUnit: string
  priceUnitDescription: string
  quantity2: number
  pieces: number
  weightKg: number
  price: number
  valueItemQuotationCurrency: number
  valueItemBaseCurrency: number
  referenceNumber: number
  deliveryDate: string
  calculationCode: string
  calculationDescription: string
  customer: string
  customerAddressId: number
  quotationLineId: number
  itemGroupDescription: string
  lineType: string
  lineTypeDescription: string
  companyId: number
  officeId: number
  quotationId: number
  orderType: string
  orderKind: string
  orderTypeDescription: string
  orderKindDescription: string
  currencyConversionRate: number
  currencyConversionOperator: string
  companyForSelection: string
  officeForSelection: string
  customerForSelection: string
  valueCalculationQuotatCurrency: number
  tQuotationLineCalculations: QuotationLinesByIdTQuotationLineCalculation[]
  tQuotationLineItemDescs: QuotationLinesByIdTQuotationLineItemDesc[]
  tQuotationLineTreatments: QuotationLinesByIdTQuotationLineTreatment[]
  links: QuotationLinesByIdLink[]
}

export interface QuotationLinesByIdTQuotationLineCalculation {
  url: string
  officeOfInput: string
  lineIndex: number
  quotationNumber: number
  calculationIndex: number
  quantity: number
  priceUnit: string
  priceUnitDescription: string
  price: number
  calculation: string
  calculationDescription: string
  quotationLineCalculationId: number
  companyId: number
  officeId: number
  quotationId: number
  quotationLineId: number
  companyForSelection: string
  customerForSelection: string
  officeForSelection: string
}

export interface QuotationLinesByIdTQuotationLineItemDesc {
  officeOfInput: string
  quotationNumber: number
  lineIndex: number
  language: string
  itemDescription: string
  quotationLineItemDescId: number
}

export interface QuotationLinesByIdTQuotationLineTreatment {
  url: string
  officeOfInput: string
  quotationNumber: number
  lineIndex: number
  treatmentIndex: number
  treatment: number
  quantity: number
  priceUnit: string
  priceUnitDescription: string
  price: number
  treatmentDescription: string
  quotationLineTreatmentId: number
  companyId: number
  officeId: number
  quotationId: number
  quotationLineId: number
  companyForSelection: string
  customerForSelection: string
  officeForSelection: string
}

export interface QuotationLinesByIdLink {
  rel: string
  href: string
}

// Post Put Delete
