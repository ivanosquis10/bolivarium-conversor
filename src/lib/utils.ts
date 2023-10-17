import type { Expression } from '@/interfaces'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatMoney = (amount: string | number, currency: Expression) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency
  })
}

// export const calculateDate = (timestamp: number): string => {
//   const currentTime = Date.now()
//   const timeDifferenceMs = currentTime - timestamp

//   const minutes = Math.floor(timeDifferenceMs / (1000 * 60))
//   const hours = Math.floor(minutes / 60)
//   const days = Math.floor(hours / 24)
//   const months = Math.floor(days / 30.44)
//   const years = Math.floor(months / 12)

//   // Devuelve la diferencia en años si es mayor que 0
//   if (years > 0) {
//     return `${years} año${years > 1 ? 's' : ''}`
//   }

//   // Devuelve la diferencia en meses si es mayor que 0
//   if (months > 0) {
//     return `${months} mes${months > 1 ? 'es' : ''}`
//   }

//   // Devuelve la diferencia en días si es mayor que 0
//   if (days > 0) {
//     return `${days} día${days > 1 ? 's' : ''}`
//   }

//   // Devuelve la diferencia en horas si es mayor que 0
//   if (hours > 0) {
//     return `${hours} hora${hours > 1 ? 's' : ''}`
//   }

//   // Devuelve la diferencia en minutos si es mayor que 0
//   return `${minutes} minuto${minutes > 1 ? 's' : ''}`
// }

// Dos tipos de funciones que hacen lo mismo pero de diferente forma.

export const calculateDate = (timestamp: number): string => {
  const currentTime = Date.now()
  const timeDifference = currentTime - timestamp

  const timeUnits = [
    { unit: 'año', divisor: 1000 * 60 * 60 * 24 * 365 },
    { unit: 'mes', divisor: 1000 * 60 * 60 * 24 * 30.44 },
    { unit: 'día', divisor: 1000 * 60 * 60 * 24 },
    { unit: 'hora', divisor: 1000 * 60 * 60 },
    { unit: 'minuto', divisor: 1000 * 60 }
  ]

  for (const unitData of timeUnits) {
    // Calcula la cantidad de unidades de tiempo que han pasado
    const unitCount = Math.floor(timeDifference / unitData.divisor)
    // Devuelve la cantidad de unidades de tiempo y la unidad de tiempo en plural si es mayor que 1
    if (unitCount >= 1) { // Si la cantidad de unidades de tiempo es mayor que 1
      return `${unitCount} ${unitData.unit}${unitCount > 1 ? 's' : ''}`
    }
  }

  return 'menos de un minuto'
}
