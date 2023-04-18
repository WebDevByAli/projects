export interface ItemsModuleModule {
    id: string
    url: string
    itemGroup: string
    itemKey: string
    itemDescription: string
}
export interface ItemsByIdModuleModule {
    id: string
    url: string
    itemGroup: string
    itemKey: string
    itemId: number
    standardItem: boolean
    webshopColour: number
    itemDescription: string
    itemGroupId: number
    characteristicsValues: string[]
    tItemCharacteristics: ItemsModuleModuleTItemCharacteristic[]
    links: ItemsModuleModuleLink[]
}

export interface ItemsModuleModuleTItemCharacteristic {
    characteristicValue: string
    itemGroup: string
    characteristic: string
    itemKey: string
    description: string
    separator: string
    mask: string
    length: number
    valueDescription: string
    characteristicIndex: number
}

export interface ItemsModuleModuleLink {
    rel: string
    href: string
}
