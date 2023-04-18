export interface ItemGroupsModuleModule {
  id: string
  url: string
  itemGroup: string
  itemGroupId: number
  itemGroupDescription: string
}
export interface ItemGroupsByIdModuleModule {
  id: string
  url: string
  itemGroup: string
  defaultPriceUnit: string
  defaultPurchaseUnit: string
  defaultSalesUnit: string
  mainGroup: string
  accountingUnit: string
  stockUnit: string
  itemForm: number
  itemGroupId: number
  webItem: boolean
  subGroup: string
  itemGroupDescription: string
  consultationUnitsHidden: string
  tConsultationUnits: ItemGroupsModuleModuleTConsultationUnit[]
  links: ItemGroupsModuleModuleLink[]
}

export interface ItemGroupsModuleModuleTConsultationUnit {
  unit: string
}

export interface ItemGroupsModuleModuleLink {
  rel: string
  href: string
}
