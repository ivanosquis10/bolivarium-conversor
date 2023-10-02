'use client'

import { useAppStore } from '@/store/appStore'
import { formatMoney } from '@/utils'
import {
  Card,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Button } from '../ui/button'

export const ConvertResult = () => {
  const result = useAppStore((state) => state.result)
  const resetResult = useAppStore((state) => state.resetResult)

  return (
    <>
    {
      result.conversion === ''
        ? (
            null
          )
        : (
              <Card className='my-2 transition-all border shadow bg-zinc-200/95 h-fit dark:border-zinc-900 hover:ring-zinc-300 dark:bg-zinc-800/40 ring ring-transparent hover:dark:ring-zinc-800 md:mb-0'>

                <CardContent className='mt-5'>
                  <p className="text-2xl font-bold dark:text-zinc-300">
                    {'-> '}
                    {
                      result.currency === 'bs' ? `${formatMoney(result.conversion, 'VES')}` : `${formatMoney(result.conversion, 'USD')} Dólares`
                    }
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Este resultado es aproximado, puede variar dependiendo de la tasa que se use.
                  </p>
                </CardContent>
                <CardFooter>
                    <Button className='w-full' onClick={resetResult}>
                      Limpiar resultado
                    </Button>
                </CardFooter>
              </Card>
          )
        }
    </>
  )
}
