import { getAllRates } from '@/services/rates'
import { MonitorCard } from '@/components'

export const MonitorWrapper = async () => {
  const data = await getAllRates()
  return (
    <div className='p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800 h-[320px] lg:h-[550px]'>
      {data.map((monitor) => (
        <MonitorCard
          key={monitor.title}
          monitor={monitor}
        />
      ))}
    </div>
  )
}
