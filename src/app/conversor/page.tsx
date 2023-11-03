import { getFullData } from '@/services'
import { ConvertResult, SectionTabs, MonitorCard } from '@/components'
import type { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Bolivarium | Conversor',
  description: 'El portal de las divisas donde podrás ver la información del dólar en Venezuela de una forma estructurada y precisa, además de poder usar el convertidor para hacer conversiones de bolívares a dólares y viceversa.'
}

export default async function Page() {
  const data = await getFullData()
  return (
    <section className='px-4 mx-auto my-5 max-w-7xl md:px-2 lg:px-0'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <div className='p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800 h-[320px] lg:h-[550px]'>
          {data.map((monitor, index) => (
              <MonitorCard
                key={monitor.title}
                monitor={monitor}
              />
          ))}
        </div>

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
