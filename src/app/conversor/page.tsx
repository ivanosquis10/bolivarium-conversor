import { ConvertResult, SectionTabs } from '@/components'
import { MonitorCard } from '@/components/monitor-card/monitor-card'
import { getFullData } from '@/services/data'

export default async function Page() {
  const data = await getFullData()

  // aqui va itera y transforma la data en un array valido con la informacion de la api
  const monitors = Object.entries(data.monitors).map(([, value]) => ({
    ...value
  }))

  return (
    <section className='px-4 mx-auto mt-5 max-w-7xl md:px-0'>
      <div className='grid gap-5 md:grid-cols-2 md:grid-rows-2 h-[550px]'>
          <div className='h-full row-span-2 p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800'>
          {
            monitors.map((monitor, index) => (
              <MonitorCard
                key={index}
                monitor={monitor}
              />
            ))
          }
          </div>

        <div className='h-full row-span-2'>
          <SectionTabs />

          <ConvertResult />
        </div>

      </div>

    </section>
  )
}
