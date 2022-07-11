
export type variantType = 
  'Thin' | 'Light' | 'Regular' | 'Medium'  | 'Bold' | 'Black' |
  'Thini'| 'Lighti'| 'Regulari'| 'Mediumi' | 'Boldi'| 'Blacki'|
  '100'  | '300'   | '400'     | '500'     | '700'  | '900'   |
  '100i' | '300i'  | '400i'    | '500i'    | '700i' | '900i'

export type FontVariant = variantType | {
  variant: variantType,
  italics: boolean,
}

export type Font = {
  family: string,
  variants: FontVariant[],
}
