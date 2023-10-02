'use client'

import { useAppStore } from '@/store/appStore'
import { formatMoney } from '@/utils'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
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
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xl font-medium md:text-2xl">
                    Resultado de la conversión:
                  </CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" className="hidden w-10 h-10 md:block icon icon-tabler icon-tabler-premium-rights" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
                      <path d="M12 7v2"></path>
                      <path d="M12 15v2"></path>
                    </svg>
                </CardHeader>
                <CardContent>
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

// <>
// {
//   result.conversion === '' && !loading
//     ? (
//         null
//       )
//     : (
//         loading
//           ? (
//             <Button>
//               <div className='w-6 h-6 mr-2 border-4 rounded-full animate-spin border-zinc-300 dark:border-zinc-800'></div>
//               haciendo la conversión...
//             </Button>
//             )
//           : (
//           <Card className='mb-2 transition-all border shadow bg-zinc-200/95 h-fit dark:border-zinc-900 hover:ring-zinc-300 dark:bg-zinc-800/40 ring ring-transparent hover:dark:ring-zinc-800 md:mb-0'>
//             <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
//               <CardTitle className="text-xl font-medium md:text-2xl">
//                 Resultado de la conversión:
//               </CardTitle>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="hidden w-10 h-10 md:block icon icon-tabler icon-tabler-premium-rights" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
//                   <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75"></path>
//                   <path d="M12 7v2"></path>
//                   <path d="M12 15v2"></path>
//                 </svg>
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold dark:text-zinc-300">
//                 {'-> '}
//                 {
//                   result.currency === 'bs' ? `${formatMoney(result.conversion, 'VES')}` : `${formatMoney(result.conversion, 'USD')} Dólares`
//                 }
//               </p>
//               <p className="text-xs text-muted-foreground">
//                 Este resultado es aproximado, puede variar dependiendo de la tasa que se use.
//               </p>
//             </CardContent>
//             <CardFooter>
//                 <Button className='w-full' onClick={resetResult}>
//                   Limpiar resultado
//                 </Button>
//             </CardFooter>
//           </Card>
//             )
//       )
//     }
// </>
