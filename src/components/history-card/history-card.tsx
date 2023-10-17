import { Card } from '../ui/card'
import { calculateDate, formatMoney } from '@/lib/utils'
import { type HistoryItem } from '@/interfaces'
import { Button } from '../ui/button'
import { TrashIcon } from '@radix-ui/react-icons'

type Props = {
  history: HistoryItem
  onDelete: (id: string) => void
}

export const HistoryCard = ({ onDelete, history }: Props) => {
  const { tasa, amount, conversion, currency, date, id } = history
  return (
    <Card
    className='transition-all border ring-2 ring-transparent hover:ring-rose-500/70'
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
            Cantidad: <span className='text-base font-semibold text-foreground dark:text-zinc-100'>{formatMoney(Number(amount), currency)}</span>
          </p>
            <div className='flex items-center gap-1'>
            <p className='flex-1 px-1 text-sm dark:text-zinc-300'>
              Resultado: <span className='text-base font-semibold text-foreground dark:text-zinc-100'>{formatMoney(conversion, currency)}</span>
            </p>
            <Button variant='outline' size='icon' className='self-end' onClick={() => onDelete(id)}>
              <TrashIcon />
            </Button>
            </div>
        </div>
      </div>
    </Card>
  )
}
