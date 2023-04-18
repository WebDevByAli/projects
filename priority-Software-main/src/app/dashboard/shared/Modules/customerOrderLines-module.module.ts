export class CustomerOrderLinesModuleModule {
  constructor(
    id: string,
    url: string,
    orderNumber: number,
    itemGroup: string,
    itemKey: string,
    deliveryDate: string,
    customer: string,
    lineIndex: number,
  ) { }
}
export class CustomerOrderLinesByIdModuleModule {
  constructor(
    id: string,
    url: string,
    officeOfInput: string,
    itemGroupDescription: string,
    orderNumber: number,
    officeOfDelivery: string,
    officeOfInvoice: string,
    orderStatus: string,
    orderStatusDescription: string,
    itemGroup: string,
    itemKey: string,
    itemDescription: string,
    quantity1: number,
    unit1: string,
    unit1Description: string,
    quantity2: number,
    unit2Description: string,
    unit2: string,
    pieces: number,
    weightKg: number,
    priceUnit: string,
    price: number,
    priceUnitDescription: string,
    valueItemOrderCurrency: number,
    valueItemBaseCurrency: number,
    referenceNumber: number,
    deliveryDate: string,
    calculation: string,
    calculationDescription: string,
    customer: string,
    customerAddressId: number,
    customerOrderLineId: number,
    lineIndex: number,
    lineType: string,
    lineTypeDescription: string,
    companyId: number,
    officeId: number,
    customerOrderId: number,
    currencyConversionOperator: string,
    currencyConversionRate: number,
    companyForSelection: string,
    officeForSelection: string,
    customerForSelection: string,
    tCustomerOrderLineItemDescs: TCustomerOrderLineItemDesc[],
  ) { }
}

export interface TCustomerOrderLineItemDesc {
  officeOfInput: string
  orderNumber: number
  lineIndex: number
  language: string
  description: string
  customerOrderLineItemDescId: number
}
