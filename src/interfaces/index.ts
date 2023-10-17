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

export type Expression = 'USD' | 'VES'

export type HistoryItem = {
  id: string
  tasa: number | string
  amount: number | string
  conversion: number
  currency: Expression
  date: number
}
