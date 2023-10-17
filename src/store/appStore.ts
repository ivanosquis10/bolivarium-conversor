import { create } from 'zustand'
import { useHistoryStore } from './HistoryStore'
import type { Expression } from '@/interfaces'
interface StateApp {
  tasa: number | string
  cantidad: number | string
  result: { conversion: number, currency: Expression }
  tab: Expression
  getResult: (cantidad: string | number, tasa: string | number) => void
  getTasa: (tasa: string | number) => void
  getCantidad: (tasa: string | number) => void
  setTab: (data: Expression) => void
  resetResult: () => void
  resetFields: () => void
}

export const useAppStore = create<StateApp>()((set, get) => ({
  tasa: '',
  cantidad: '',
  result: {
    conversion: 0,
    currency: 'USD'
  },
  tab: 'VES',
  getResult: (cantidad, tasa) => {
    const tab = get().tab
    const addHistory = useHistoryStore.getState().addHistory

    if (tab === 'VES') {
      const resultConversion = Number(cantidad) / Number(tasa)
      set({
        result: {
          conversion: resultConversion,
          currency: 'USD'
        }
      })
      return addHistory(
        tasa,
        cantidad,
        get().result
      )
    }

    if (tab === 'USD') {
      const resultConversion = Number(tasa) * Number(cantidad)
      set({
        result: {
          conversion: resultConversion,
          currency: 'VES'
        }
      })
      return addHistory(
        tasa,
        cantidad,
        get().result
      )
    }
  },
  setTab: (data) => {
    set((state) => ({ tab: data }))
  },
  resetResult: () => {
    set((state) => ({
      result: {
        conversion: 0,
        currency: 'USD'
      }
    }))
  },
  resetFields: () => {
    set((state) => ({
      tasa: '',
      cantidad: ''
    }))
  },
  getTasa: (tasa) => {
    set((state) => ({ tasa }))
  },
  getCantidad: (cantidad) => {
    set((state) => ({ cantidad }))
  }
}))
