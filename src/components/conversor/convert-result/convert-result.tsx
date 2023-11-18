'use client'
import { useAppStore } from '@/store'
import { formatMoney } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '../../ui/button'
import { CopyIcon } from '@radix-ui/react-icons'

const CURRENCY_VES = 'VES' as const
const CURRENCY_USD = 'USD' as const

export const ConvertResult = () => {
  const result = useAppStore((state) => state.result)
  const copyResult = useAppStore((state) => state.copyResult)

  if (result.conversion === 0) {
    return null
  }

  const options = {
    [CURRENCY_VES]: () => `${formatMoney(result.conversion, CURRENCY_VES)}`,
    [CURRENCY_USD]: () => `${formatMoney(result.conversion, CURRENCY_USD)} Doláres`
  }

  return (
      <Card className='overflow-hidden relative border shadow-lg bg-zinc-200/95 dark:border-zinc-900 hover:ring-zinc-200 dark:bg-zinc-900/50 md:mb-0'>
        <CardContent className='mt-3 space-y-2 z-50'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <p className="text-2xl font-bold dark:text-zinc-200">
              {options[result.currency]?.()}
            </p>
            <p className='text-sm md:text-base text-foreground/80'>Tasa utilizada: <span className='font-bold text-foreground'>{result.tasa}</span></p>
          </div>
          <p className="text-xs text-muted-foreground">
            Este resultado es aproximado, puede variar dependiendo de la tasa que se use.
          </p>
          <Button onClick={() => copyResult(result.conversion)} className='flex items-center gap-2'>
            <span className='text-sm'>Copiar resultado</span>
            <CopyIcon className='w-5 h-5 text-white dark:text-black' />
          </Button>
        </CardContent>
      </Card>
  )
}
