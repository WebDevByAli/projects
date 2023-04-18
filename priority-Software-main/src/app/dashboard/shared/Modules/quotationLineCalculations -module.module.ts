export interface QuotationLineCalculationsModuleModule {
  id: string
  url: string
  lineIndex: number
  quotationNumber: number
  calculation: string
}
export interface QuotationLineCalculationsByIdModuleModule {
  id: string
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
// Post Put Delete Patch