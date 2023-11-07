import { Suspense } from 'react'
import type { Metadata } from 'next/types'
import { ConvertResult, MonitorSkeleton, MonitorWrapper, SectionTabs } from '@/components'

export const metadata: Metadata = {
  title: 'Bolivarium | Conversor',
  description: 'El portal de las divisas donde podrás ver la información del dólar en Venezuela de una forma estructurada, precisa y amigable, además de poder usar el convertidor para hacer conversiones de bolívares a dólares y viceversa.'
}

export default async function Page() {
  return (
    <section className='px-4 mx-auto my-5 max-w-7xl md:px-2 lg:px-0'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <Suspense fallback={<MonitorSkeleton />}>
              <MonitorWrapper />
          </Suspense>

          <div className='flex flex-col gap-5'>
            <div>
              <ConvertResult />
            </div>
          <div>
              <SectionTabs />
          </div>
        </div>
      </div>
    </section>
  )
}
