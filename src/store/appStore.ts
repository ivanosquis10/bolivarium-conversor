import { create } from 'zustand'
import toast from 'react-hot-toast'
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
  copyResult: () => void
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
        currency: targetCurrency
      }
    })
    return addHistory(tasa, cantidad, get().result)
    // if (currentTab === 'VES') {
    //   const resultConversion = cantidadNumber / tasaNumber
    //   const result = resultConversion.toFixed(2)

    //   // tenemos que validar que al agregar un nuevo elemento al historial, no sea el mismo que el anterior
    //   if (history.length > 0) {
    //     if (lastHistory.conversion === Number(result)) {
    //       alert('Al parecer estás haciendo la misma conversión que la anterior. Prueba con otra. App')
    //       return
    //     }
    //   }

    //   set({
    //     result: {
    //       conversion: Number(result),
    //       currency: 'USD'
    //     }
    //   })

    //   return addHistory(
    //     tasa,
    //     cantidad,
    //     get().result
    //   )
    // }

    // if (currentTab === 'USD') {
    //   const resultConversion = tasaNumber * cantidadNumber

    //   if (history.length > 0) {
    //     if (lastHistory.conversion === Number(resultConversion)) {
    //       alert('Al parecer estás haciendo la misma conversión que la anterior. Prueba con otra. App')
    //       return
    //     }
    //   }

    //   set({
    //     result: {
    //       conversion: resultConversion,
    //       currency: 'VES'
    //     }
    //   })

    //   return addHistory(
    //     tasa,
    //     cantidad,
    //     get().result
    //   )
    // }
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
  },
  copyResult: () => {
    const result = get().result.conversion
    // aqui se va a encargar de copiar en el portapapeles el resultado de la conversion
    if (result !== 0) {
      const fixed = result.toFixed(2)
      navigator.clipboard.writeText(fixed.toString())
      return toast.success('Copiado al portapapeles')
    }
  }
}))
