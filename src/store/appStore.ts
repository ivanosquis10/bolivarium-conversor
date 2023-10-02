import { create } from 'zustand'
import type { Expression } from '@/interfaces'

interface State {
  tasa: number
  cantidad: number
  result: { conversion: string | number, currency: Expression }
  tab: Expression
  getResult: (cantidad: string | number, tasa: string | number) => void
  getTasa: (tasa: number) => void
  getCantidad: (tasa: number) => void
  setTab: (data: Expression) => void
  resetResult: () => void
  resetFields: () => void
}

export const useAppStore = create<State>()((set, get) => ({
  tasa: 0,
  cantidad: 0,
  result: {
    conversion: '',
    currency: 'usd'
  },
  tab: 'bs',
  getResult: (cantidad, tasa) => {
    const tab = get().tab

    if (tab === 'bs') {
      const resultConversion = Number(cantidad) / Number(tasa)
      return set({
        result: {
          conversion: resultConversion,
          currency: 'usd'
        }
      })
    }

    if (tab === 'usd') {
      const resultConversion = Number(tasa) * Number(cantidad)
      return set({
        result: {
          conversion: resultConversion,
          currency: 'bs'
        }
      })
    }
  },
  setTab: (data) => {
    set((state) => ({ tab: data }))
  },
  resetResult: () => {
    set((state) => ({
      result: {
        conversion: '',
        currency: 'usd'
      }
    }))
  },
  resetFields: () => {
    set((state) => ({
      tasa: 0,
      cantidad: 0
    }))
  },
  getTasa: (tasa) => {
    set((state) => ({ tasa }))
  },
  getCantidad: (cantidad) => {
    set((state) => ({ cantidad }))
  }
}))
