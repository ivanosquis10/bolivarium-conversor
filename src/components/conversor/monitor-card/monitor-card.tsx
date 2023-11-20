/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import { useAppStore } from '@/store/appStore'
import { Card, CardTitle, CardDescription, CardHeader } from '@/components/ui/card'
import { formatMoney } from '@/lib/utils'
import type { Monitor } from '@/interfaces'
import { StarFilledIcon } from '@radix-ui/react-icons'

type Props = {
  monitor: Monitor
}

export const MonitorCard = ({ monitor }: Props) => {
  const getTasa = useAppStore((state) => state.getTasa)
  const isFavorite = useAppStore((state) => state.favorite)
  const { title, price, last_update: lastUpdate, favorite } = monitor

  // Si el filtro está activado y el monitor no es favorito, oculta el componente
  const favoriteLogic = () => isFavorite && !favorite ? 'hidden' : ''
  return (
    <Card className={`p-2 transition-all cursor-pointer ring-2 ring-transparent hover:ring-rose-600 dark:bg-zinc-950/50 ${favoriteLogic()}`}
      onClick={() => getTasa(price)}>
      <CardHeader className='p-0 flex flex-row items-center space-y-0 gap-1'>
        { favorite ? <StarFilledIcon /> : null }
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>
      <CardDescription className='flex justify-between items-center mt-1'>
        {formatMoney(price, 'USD')}
        <span className='text-xs'>{lastUpdate}</span>
      </CardDescription>
    </Card>
  )
}
