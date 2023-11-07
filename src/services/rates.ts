import type { Monitor } from '@/interfaces'

export type Result = {
  monitors: Record<string, Monitor>
}

export const getAllRates = async () => {
  const BASE_URL = 'https://pydolarvenezuela-api.vercel.app' as const
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000)) // sleep five seconds

    const response = await fetch(`${BASE_URL}/api/v1/dollar/`, {
      // next: { revalidate: 3000 },
      cache: 'no-store'
    })

    const data = await response.json() as Result

    // aqui va itera y transforma la data en un array valido con la informacion de la api
    const monitors = Object.entries(data.monitors).map(([, value]) => ({
      ...value
    }))

    return monitors
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch data')
  }
}
