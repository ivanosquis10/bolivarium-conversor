import { getConvertBsToDolar, getConvertDolarToBS } from '@/services/data'
import { create } from 'zustand'
import type { Expression } from '@/interfaces'

export interface UserValuesProps {
  tasa: string
  cantidad: number
}

interface State {
  userValues: { tasa: string, cantidad: number }
  result: { conversion: string | number, currency: Expression }
  tab: Expression
  loading: boolean
  getResult: (cantidad: string | number, title: string, tab: Expression) => Promise<void>
  setUserValues: (data: UserValuesProps) => void
  setTab: (data: Expression) => void
  resetResult: () => void
}

export const useAppStore = create<State>()((set) => ({
  userValues: { tasa: '', cantidad: 0 },
  result: {
    conversion: '',
    currency: 'usd'
  },
  tab: 'bs',
  loading: false,
  getResult: async (cantidad, title, tab) => {
    try {
      set({ loading: true })

      if (tab === 'bs') {
        const resultConversion = await getConvertBsToDolar(cantidad, title)
        return set({
          result: {
            conversion: resultConversion.value_to_dollar,
            currency: 'usd'
          }
        })
      }

      if (tab === 'usd') {
        const result = await getConvertDolarToBS(cantidad, title)
        set({
          result: {
            conversion: result.value_to_bs,
            currency: 'bs'
          }
        })
      }
    } catch (error) {
      console.log(error)
      set({ loading: false })
    } finally {
      set({ loading: false })
    }
  },
  setUserValues: (data) => {
    set((state) => ({ userValues: data }))
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
  }
}))
