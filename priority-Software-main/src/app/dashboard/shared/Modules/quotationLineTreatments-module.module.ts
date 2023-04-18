// QuotationLineTreatments 
export interface QuotationLineTreatmentsModuleModule {
  id: string
  url: string
  quotationNumber: number
  lineIndex: number
  treatmentIndex: number
  treatment: number
}
export interface QuotationLineTreatmentsByIdModuleModule {
  id: string
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
// Post Put Delete Patch