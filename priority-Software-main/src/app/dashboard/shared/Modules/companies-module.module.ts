export class CompaniesModuleModule {
  constructor(
    id: string,
    companyId: number,
    company: string,
    companyAddress: string,
    baseCurrency: string,
    url: string
  ) { }
}
export class CompaniesByIdModuleModule {
  constructor(
    public id: string,
    public companyId: number,
    public company: string,
    public companyAddress: string,
    public baseCurrency: string,
    public url: string,
    public links: CompaniesByIdLink[]
  ) { }
}

export interface CompaniesByIdLink {
  rel: string
  href: string
}