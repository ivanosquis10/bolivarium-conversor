import { getAllRates } from '@/services/rates'
import { MonitorCard } from '@/components'

export async function MonitorWrapper() {
  const data = await getAllRates()
  return (
    <div className='p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800 h-[320px] lg:h-[550px] dark:bg-zinc-900/70 bg-zinc-200 shadow-md'>
      {data.map((monitor) => (
        <MonitorCard
          key={monitor.title}
          monitor={monitor}
        />
      ))}
    </div>
  )
}
