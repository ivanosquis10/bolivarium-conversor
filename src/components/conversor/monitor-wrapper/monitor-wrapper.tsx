import { getAllRates } from '@/services/rates'
import { MonitorCard, ErrorPage } from '@/components'

export async function MonitorWrapper() {
  const data = await getAllRates()

  if (!data.success) return <ErrorPage />
  return (
    <div className='relative p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800 h-fit max-h-[230px] lg:max-h-[450px] dark:bg-zinc-900/70 bg-zinc-200 shadow-md'>
      {data.success && data.monitors.map((monitor) => (
        <MonitorCard
          key={monitor.title}
          monitor={monitor}
        />
      ))}
    </div>
  )
}
