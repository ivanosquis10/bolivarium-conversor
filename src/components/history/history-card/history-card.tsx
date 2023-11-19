import { Card } from '../../ui/card'
import { Button } from '../../ui/button'
import { TrashIcon, ClipboardCopyIcon } from '@radix-ui/react-icons'

import { calculateDate, formatMoney } from '@/lib/utils'
import { type HistoryItem } from '@/interfaces'

type Props = {
  history: HistoryItem
  onDelete: (id: string) => void
  onCopy: (result: number) => void
}

export const HistoryCard = ({ history, onDelete, onCopy }: Props) => {
  const { tasa, amount, conversion, currency, date, id } = history
  return (
    <Card
      data-testid={`history-card-${history.id}`}
      className='transition-all border ring-2 ring-transparent hover:ring-rose-500/70 shadow-xl'
    >
      <div className="p-4 rounded-xl">
        <small className="block mb-1 text-xs font-semibold dark:text-foreground/80">
          Creada hace {calculateDate(date)}...
        </small>

        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between gap-1 rounded'>
            <p className='flex-1 px-1 text-sm border-b dark:text-zinc-300'>
              Tasa: <span className='text-base font-semibold text-foreground dark:text-zinc-100'>{formatMoney(tasa, 'USD')}</span>
            </p>
            <p className='px-1 font-bold text-white rounded bg-emerald-600'>
            {currency}
          </p>
          </div>
          <p className='flex-1 px-1 text-sm border-b dark:text-zinc-300'>
            Cantidad: <span className='text-base font-semibold text-foreground dark:text-zinc-100'>
              {currency === 'USD' ? `${formatMoney(Number(amount), 'VES')}` : formatMoney(Number(amount), 'USD') }
            </span>
          </p>
            <div className='flex items-center gap-1'>
            <p className='flex-1 px-1 text-sm dark:text-zinc-300'>
              Resultado: <span className='text-base font-semibold text-foreground dark:text-zinc-100'>{formatMoney(conversion, currency)}</span>
            </p>
            <Button size='icon' className='self-end shadow' onClick={() => onCopy(conversion)} title='Copiar resultado' >
              <span className='sr-only'>Copiar</span>
              <ClipboardCopyIcon className='w-5 h-5' />
            </Button>
            <Button variant='outline' size='icon' className='self-end shadow' onClick={() => onDelete(id)} title='Eliminar elemento'>
              <span className='sr-only'>Eliminar</span>
              <TrashIcon className='w-5 h-5' />
            </Button>
            </div>
        </div>
      </div>
    </Card>
  )
}
