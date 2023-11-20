import { create } from 'zustand'
import toast from 'react-hot-toast'
import { useHistoryStore } from './HistoryStore'
import type { Expression } from '@/interfaces'
interface StateApp {
  tasa: number | string
  cantidad: number | string
  result: { conversion: number, currency: Expression, tasa: number }
  tab: Expression
  favorite: boolean
  getResult: (cantidad: string | number, tasa: string | number) => void
  getTasa: (tasa: string | number) => void
  getCantidad: (tasa: string | number) => void
  setTab: (data: Expression) => void
  resetResult: () => void
  resetFields: () => void
  copyResult: (result: number) => void
  setFavorite: () => void
}

export const useAppStore = create<StateApp>()((set, get) => ({
  tasa: '',
  cantidad: '',
  result: {
    conversion: 0,
    currency: 'USD',
    tasa: 0
  },
  tab: 'VES',
  favorite: false,
  getResult: (cantidad, tasa) => {
    const currentTab = get().tab
    const addHistory = useHistoryStore.getState().addHistory
    const history = useHistoryStore.getState().history

    const cantidadNumber = Number(cantidad)
    const tasaNumber = Number(tasa)

    const resultConversion = currentTab === 'VES' ? cantidadNumber / tasaNumber : tasaNumber * cantidadNumber
    const targetCurrency = currentTab === 'VES' ? 'USD' : 'VES'

    if (history.length > 0) {
      // vamos a validar si hay algun elemento en el historial que sea igual a la conversion actual
      const isSameConversion = history.some((item) => item.conversion === resultConversion)
      if (isSameConversion) {
        toast.error('Al parecer estás haciendo repitiendo una conversión. Prueba con otra.')
        return
      }
    }

    set({
      result: {
        conversion: currentTab === 'VES' ? resultConversion : resultConversion,
        currency: targetCurrency,
        tasa: Number(tasa)
      }
    })

    return addHistory(tasa, cantidad, get().result)
  },
  setTab: (data) => {
    set(() => ({ tab: data }))
  },
  resetResult: () => {
    set(() => ({
      result: {
        conversion: 0,
        currency: 'USD',
        tasa: 0
      }
    }))
  },
  resetFields: () => {
    set(() => ({
      tasa: '',
      cantidad: ''
    }))
  },
  getTasa: (tasa) => {
    set(() => ({ tasa }))
  },
  getCantidad: (cantidad) => {
    set(() => ({ cantidad }))
  },
  copyResult: (result) => {
    // aqui se va a encargar de copiar en el portapapeles el resultado de la conversion
    if (result !== 0) {
      const fixed = result.toFixed(2)
      navigator.clipboard.writeText(fixed.toString())
      return toast.success('Copiado al portapapeles')
    }
  },
  setFavorite: () => {
    set((state) => ({ favorite: !state.favorite }))
  }
}))
