'use client'

import { useHistoryStore } from '@/store/HistoryStore'
import { HistoryCard } from '@/components/history/history-card/history-card'
import { Button } from '../../ui/button'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'

export const HistoryList = () => {
  const history = useHistoryStore(state => state.history)
  const resetHistory = useHistoryStore(state => state.resetHistory)
  const deleteOneHistory = useHistoryStore(state => state.deleteOneHistory)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Historial</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Historial de las conversiones</SheetTitle>
          <SheetDescription>
           Aquí estarán las conversiones que has hecho, por si quieres volver a verlas :)
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-2 overflow-y-scroll max-h-[75svh]">
          {history?.map((item) => (
            <HistoryCard key={item.id} history={item} onDelete={deleteOneHistory} />
          ))}
        </div>
        <SheetFooter>
          <Button type="button" disabled={history.length <= 0} onClick={resetHistory} className='mt-2 disabled:opacity-30'>Eliminar todo!</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
