export interface QuotationsModuleModule {
  id: string
  url: string
  quotationNumber: number
  creationDate: string
  quotationStatus: string
  customerReference: string
  deliveryDate: string
  currency: string
  customer: string
  valueItemQuotatCurrency: number
  quotationStatusDescription: string
}
export interface QuotationsByIdModuleModule {
  id: string
  url: string
  quotationNumber: number
  creationDate: string
  officeOfInvoice: string
  salesPerson: string
  salesPersonName: string
  quotationStatus: string
  customerReference: string
  deliveryDate: string
  officeOfDelivery: string
  currency: string
  customerContact: string
  customerAddressId: number
  customer: string
  valueItemQuotatCurrency: number
  valueTreatmentQuotatCurrency: number
  valueCalculationQuotatCurrency: number
  quotationId: number
  valueItemBaseCurrency: number
  valueTreatmentBaseCurrency: number
  valueCalculationBaseCurrency: number
  officeId: number
  companyId: number
  quotationStatusDescription: string
  currencyConversionOperator: string
  currencyConversionRate: number
  companyForSelection: string
  locationDocument: string
  documentAvailable: boolean
  officeOfInput: string
  officeForSelection: string
  totalValueBaseCurrency: number
  totalValueQuotatCurrency: number
  tQuotationLines: QuotationsModuleModuleTQuotationLine[]
  links: QuotationsModuleModuleLink[]
}

export interface QuotationsModuleModuleTQuotationLine {
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
  tQuotationLineCalculations: QuotationsModuleModuleTQuotationLineCalculation[]
  tQuotationLineItemDescs: QuotationsModuleModuleTQuotationLineItemDesc[]
  tQuotationLineTreatments: QuotationsModuleModuleTQuotationLineTreatment[]
}

export interface QuotationsModuleModuleTQuotationLineCalculation {
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

export interface QuotationsModuleModuleTQuotationLineItemDesc {
  officeOfInput: string
  quotationNumber: number
  lineIndex: number
  language: string
  itemDescription: string
  quotationLineItemDescId: number
}

export interface QuotationsModuleModuleTQuotationLineTreatment {
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

export interface QuotationsModuleModuleLink {
  rel: string
  href: string
}
