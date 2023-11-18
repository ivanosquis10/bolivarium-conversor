'use client'

import { useAppStore } from '@/store/appStore'
import { Card, CardTitle, CardDescription } from '../../ui/card'
import { formatMoney } from '@/lib/utils'
import type { Monitor } from '@/interfaces'

type Props = {
  monitor: Monitor
}

export const MonitorCard = ({ monitor }: Props) => {
  const getTasa = useAppStore((state) => state.getTasa)
  const { title, price, last_update: lastUpdate } = monitor
  return (
    <Card className='p-2 transition-all cursor-pointer ring-2 ring-transparent hover:ring-rose-600 dark:bg-zinc-950/50'
      onClick={() => getTasa(price)}>
      <CardTitle>
        {title}
      </CardTitle>
      <CardDescription className='flex justify-between items-center mt-1'>
        {formatMoney(price, 'USD')}
        <span className='text-xs'>{lastUpdate}</span>
      </CardDescription>
    </Card>
  )
}
