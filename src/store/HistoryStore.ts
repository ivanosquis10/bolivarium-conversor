import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Expression, HistoryItem } from '@/interfaces'

type HistoryState = {
  history: HistoryItem[]
  addHistory: (tasa: string | number, cantidad: string | number, result: { conversion: number, currency: Expression }) => void
  resetHistory: () => void
  deleteOneHistory: (id: string) => void
}

// store of the history
export const useHistoryStore = create<HistoryState>()(persist((set, get) => {
  return {
    history: [],
    addHistory: (tasa, cantidad, result) => {
      const { conversion, currency } = result

      // agregamos el nuevo elemento al historial
      const newHistory: HistoryItem = {
        id: crypto.randomUUID(),
        tasa,
        amount: cantidad,
        conversion,
        currency,
        date: Date.now()
      }
      set((state) => ({ history: [...state.history, newHistory] }))
    },
    deleteOneHistory: (id) => {
      const areYouSure = confirm('¿Estás seguro de que quieres borrar este elemento?')
      areYouSure && set((state) => ({ history: state.history.filter((item) => item.id !== id) }))
    },
    resetHistory: () => {
      const areYouSure = confirm('¿Estás seguro de que quieres borrar el historial?')
      areYouSure && set((state) => ({ history: [] }))
    }
  }
}, {
  name: 'history'
}))
