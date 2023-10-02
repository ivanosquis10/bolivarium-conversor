const BASE_URL = 'https://pydolarvenezuela-api.vercel.app'

export type Result = {
  monitors: Record<string, Monitor>
}

export type Monitor = {
  last_update: string
  price: number
  price_old: number
  title: string
  type: Type
}

export type Type = 'monitor' | 'bank'

export const getFullData = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/dollar/`)
  const data = await response.json()
  return data as Result
}

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

/*
  Hubo cambios en la api, ahora este es el nuevo formato

  -> full data: https://pydolarvenezuela-api.vercel.app/api/v1/dollar/

  -> specific data: https://pydolarvenezuela-api.vercel.app/api/v1/dollar/unit/enparalelovzla

*/
// export const getConvertBsToDolar = async (value: string | number, coin: string) => {
//   const response = await fetch(`${BASE_URL}api/v1/dollar/td/${value}/${coin}`)
//   const data = await response.json() as Result
//   return data
// }

// interface ResultBS {
//   value_to_bs: number
// }

// export const getConvertDolarToBS = async (value: string | number, coin: string) => {
//   const response = await fetch(`${BASE_URL}api/v1/dollar/tb/${value}/${coin}`)
//   const data = await response.json() as ResultBS
//   return data
// }

/*
  otra api que encontre:

  array de 9 items, con la informacion mas reciente

  -> https://exchange.vcoud.com/coins/latest?type=bolivar&base=usd

    repuesta:     [
                    {
                    "_id": "5d5dfaa6639f395c7fd11d16",
                    "name": "Dólar Today",
                    "symbol": "VDT",
                    "rank": 1,
                    "type": "bolivar",
                    "currency": "VES",
                    "price": 35.72,
                    "priceOld": 35720000,
                    "price24h": 35.72,
                    "positiveVotes": 0,
                    "negativeVotes": 0,
                    "icon": "https://vcoud.nyc3.digitaloceanspaces.com/criptodolar/divisas/vdt.png",
                    "slug": "dolartoday",
                    "createdAt": "2019-08-22T02:15:02.920Z",
                    "updatedAt": "2023-09-30T05:00:00.012Z",
                    "nameBase": "Dólar Americano"
                    }
                  ]

    Para obtener la data especifica se utiliza la propiedad "slug" y la siguiente url:

    -> https://exchange.vcoud.com/coins/dolartoday?gap=1w&base=usd

*/
