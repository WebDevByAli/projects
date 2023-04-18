export class OfficesModuleModule {
  constructor(
    id: string,
    url: string,
    office: string,
    company: string,
    officeId: string
  ) { }
}
export interface OfficesByIdModuleModule {
  id: string
  url: string
  office: string
  company: string
  officeAddress: string
  officeId: number
  companyAddress: string
  companyId: number
  baseCurrency: string
  links: [
    {
      rel: string,
      href: string
    }
  ]
}

// links: Link[]
// export interface Link {
//   rel: string
//   href: string
// }