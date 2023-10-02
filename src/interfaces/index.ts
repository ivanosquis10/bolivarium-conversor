// export type Dollar = {
//   datetime: Datetime
//   monitors: Record<string, Monitor>
// }

// export type Datetime = {
//   date: string
//   time: string
// }

// export type Monitor = {
//   change: string
//   color: Color
//   last_update: string
//   percent: string
//   price: string
//   symbol: symbol
//   title: string
// }

export interface CardSection {
  title: string
  description: string
  url: string
  badge: string[]
}

export type Result = {
  information: Information
  value_to_dollar: number
}

export type Information = {
  change: string
  color: string
  last_update: string
  percent: string
  price: string
  symbol: string
  title: string
}

/*
  si es us -> dolares a bolivares
  si es bs -> bolivares a dolares
*/
export type Expression = 'usd' | 'bs'
