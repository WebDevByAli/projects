export class DeliveryAddressesModuleModule {
  constructor(
    id: string,
    company: string,
    customer: string,
    deliveryAddress: string,
    url: string
  ) { }
}

export interface DeliveryAddressesByIdModuleModule {
  id: string
  url: string
  company: string
  customer: string
  customerAddressId: number
  deliveryAddressIndex: number
  name: string
  street: string
  country: string
  postalCodeIndex: number
  postalCode: string
  telephone: string
  frequency: number
  dateLastUsed: string
  isDefault: boolean
  deliveryAddress: string
  isFixed: boolean
  deliveryAddressType: string
  isActive: boolean
  name2: string
  street2: string
  provinceIndex: number
  street3: string
  city: string
  province: string
  deliveryAddressId: number
  companyId: number
  companyForSelection: string
  links: DeliveryAddressesByIdLink[]
}

export interface DeliveryAddressesByIdLink {
  rel: string
  href: string
}
