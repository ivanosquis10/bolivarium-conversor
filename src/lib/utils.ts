import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatMoney = (amount: string | number, currency: string) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency
  })
}
