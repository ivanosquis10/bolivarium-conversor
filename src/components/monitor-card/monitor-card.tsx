'use client'

import type { Monitor } from '@/services/data'
import { Card, CardTitle, CardDescription } from '../ui/card'
import { useAppStore } from '@/store/appStore'
import { formatMoney } from '@/utils'

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
