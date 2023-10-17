'use client'
import { useAppStore } from '@/store/appStore'
import { formatMoney } from '@/lib/utils'
import {
  Card,
  CardContent
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { CopyIcon } from '@radix-ui/react-icons'

const CURRENCY_VES = 'VES' as const
const CURRENCY_USD = 'USD' as const

export const ConvertResult = () => {
  const result = useAppStore((state) => state.result)
  const tasa = useAppStore((state) => state.tasa)
  const copyResult = useAppStore((state) => state.copyResult)

  if (result.conversion === 0) {
    return null
  }

  return (
    <Card className='transition-all border shadow bg-zinc-200/95 h-fit dark:border-zinc-900 hover:ring-zinc-300 dark:bg-zinc-800/40 ring ring-transparent hover:dark:ring-zinc-800 md:mb-0'>
      <CardContent className='mt-3 space-y-2'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <p className="text-2xl font-bold dark:text-zinc-200">
            {
              result.currency === CURRENCY_VES
                ? `${formatMoney(result.conversion, CURRENCY_VES)}`
                : `${formatMoney(result.conversion, CURRENCY_USD)} Doláres`
            }
          </p>
          <p className='text-sm md:text-base text-foreground/80'>Tasa utilizada: <span className='font-bold text-foreground'>{tasa}</span></p>
        </div>
        <p className="text-xs text-muted-foreground">
          Este resultado es aproximado, puede variar dependiendo de la tasa que se use.
        </p>
        <Button onClick={copyResult} className='flex items-center gap-2'>
          <span className='text-sm'>Copiar resultado</span>
          <CopyIcon className='w-5 h-5 text-white dark:text-black' />
        </Button>
      </CardContent>
    </Card>
  )
}
