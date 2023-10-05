import { getFullData } from '@/services'
import { ConvertResult, SectionTabs, MonitorCard } from '@/components'

export default async function Page() {
  const data = await getFullData()

  // aqui va itera y transforma la data en un array valido con la informacion de la api
  const monitors = Object.entries(data.monitors).map(([, value]) => ({
    ...value
  }))

  return (
    <section className='px-4 mx-auto my-5 max-w-7xl md:px-2 lg:px-0'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <div className='p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800 h-[320px] lg:h-[550px]'>
          {
            monitors.map((monitor, index) => (
              <MonitorCard
                key={index}
                monitor={monitor}
              />
            ))
          }
        </div>

        <div className='lg:grid lg:grid-rows-3'>
          <div className='lg:row-span-3'>
            <SectionTabs />
          </div>
          <div>
            <ConvertResult />
          </div>
        </div>
      </div>
    </section>
  )
}
