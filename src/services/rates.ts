import type { Monitor } from '@/interfaces'

export type Result = {
  monitors: Record<string, Monitor>
}

const BASE_URL = 'https://pydolarvenezuela-api.vercel.app'
export const getAllRates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/dollar/`, { cache: 'no-store' })

    const data = await response.json() as Result

    // aqui va itera y transforma la data en un array valido con la informacion de la api
    const monitors = Object.entries(data.monitors).map(([, value]) => ({
      ...value
    }))

    return monitors
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw new Error('Failed to fetch data. Please try again later.')
  }
}
