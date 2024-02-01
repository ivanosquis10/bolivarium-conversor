import type { Expression } from "@/interfaces"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatMoney = (amount: number | string, currency: Expression) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency,
  })
}

// hace el calculo por fechas y muestra cuando o hace cuanto fue creada
export const calculateDate = (timestamp: number): string => {
  const currentTime = Date.now()
  const timeDifference = currentTime - timestamp

  const timeUnits = [
    { unit: "año", divisor: 1000 * 60 * 60 * 24 * 365 },
    { unit: "mes", divisor: 1000 * 60 * 60 * 24 * 30.44 },
    { unit: "día", divisor: 1000 * 60 * 60 * 24 },
    { unit: "hora", divisor: 1000 * 60 * 60 },
    { unit: "minuto", divisor: 1000 * 60 },
  ]

  for (const unitData of timeUnits) {
    // Calcula la cantidad de unidades de tiempo que han pasado
    const unitCount = Math.floor(timeDifference / unitData.divisor)

    // Devuelve la cantidad de unidades de tiempo y la unidad de tiempo en plural si es mayor que 1
    if (unitCount >= 1) {
      // Si la cantidad de unidades de tiempo es mayor que 1
      return `${unitCount} ${unitData.unit}${unitCount > 1 ? "s" : ""}`
    }
  }

  return "menos de un minuto"
}
