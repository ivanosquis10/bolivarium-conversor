import type { Result } from '@/interfaces'

const BASE_URL = 'https://pydolarvenezuela-api.vercel.app/'

/*
  casos de la api

  GET: FULL DATA -> https://pydolarvenezuela-api.vercel.app/api/v1/dollar/

  GET /api/v1/dollar/tb/{value}/{key_monitor}: Convierte un valor en dólares esta dounidenses a su equivalente en bolívares.
  ex: https://pydolarvenezuela-api.vercel.app/api/v1/dollar/tb/20/dolartoday -> seria convertir 20$ a bolivares

  GET /api/v1/dollar/td/{value}/{key_monitor}: Convierte un valor en bolívares a su equivalente en dólares estadounidenses.
  ex: https://pydolarvenezuela-api.vercel.app/api/v1/dollar/td/714/dolartoday -> seria convertir 714Bs a dolares

  GET /api/v1/dollar/{section_dollar}/{key_monitor}: Obtiene información sobre el precio del dólar en Venezuela en una sección y un monitor específicos.

  Parámetros:

  section_dollar (requerido): una cadena que indica la sección deseada. Las secciones disponibles son: dolar_promedio, bcv_oficial, paginas, monederos_electronicos.

  key_monitor (requerido): una cadena que indica el monitor específico. Las claves de los monitores disponibles varían según la sección.

  Para saber que "opciones" tiene cada seccion se usa la siguiente ruta:
  -> https://pydolarvenezuela-api.vercel.app/api/v1/dollar/dolar_promedio
  -> opciones disponibles: dolar_promedio, bcv_oficial, paginas, monederos_electronicos

  EX: https://pydolarvenezuela-api.vercel.app/api/v1/dollar/dolar_promedio/enparalelovzla

*/

// export const getDollarToday = async () => {
//   const response = await fetch(`${BASE_URL}api`)
//   const data = await response.json()
//   return data
// }

export const getConvertBsToDolar = async (value: string | number, coin: string) => {
  const response = await fetch(`${BASE_URL}api/v1/dollar/td/${value}/${coin}`)
  const data = await response.json() as Result
  return data
}

interface ResultBS {
  value_to_bs: number
}

export const getConvertDolarToBS = async (value: string | number, coin: string) => {
  const response = await fetch(`${BASE_URL}api/v1/dollar/tb/${value}/${coin}`)
  const data = await response.json() as ResultBS
  return data
}
