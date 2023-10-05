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
  // TODO: revisar el revalidate (puede que no funcione)
  const response = await fetch(`${BASE_URL}/api/v1/dollar/`, {
    next: {
      revalidate: 3200
    }
  })
  const data = await response.json()
  return data as Result
}

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
