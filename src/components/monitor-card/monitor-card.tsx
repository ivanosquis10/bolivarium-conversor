'use client'

import { useAppStore } from '@/store/appStore'

import { Card, CardTitle, CardDescription } from '../ui/card'
import { formatMoney } from '@/lib/utils'
import type { Monitor } from '@/services'

type Props = {
  monitor: Monitor
}

export const MonitorCard = ({ monitor }: Props) => {
  const getTasa = useAppStore((state) => state.getTasa)
  return (
    <Card className='p-2 transition-all cursor-pointer ring-2 ring-transparent hover:ring-rose-500'
      onClick={() => getTasa(monitor.price) }
    >
      <CardTitle>
        {monitor.title}
      </CardTitle>
      <CardDescription>
        {formatMoney(monitor.price, 'USD')}
      </CardDescription>
    </Card>
  )
}
