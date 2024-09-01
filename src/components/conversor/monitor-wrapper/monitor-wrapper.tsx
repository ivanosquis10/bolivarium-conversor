import { getAllRates } from "@/services/rates"
import { MonitorCard, ErrorPage } from "@/components"

export async function MonitorWrapper() {
  const data = await getAllRates()

  if (!data.success) return <ErrorPage />

  return (
    <div className="relative grid max-h-[300px] w-full grid-cols-1 items-center gap-2 overflow-y-auto rounded-xl border bg-zinc-200 p-2 shadow-md dark:border-zinc-800 dark:bg-zinc-900/70 md:max-h-full md:grid-cols-2">
      {data.monitors.map((monitor) => (
        <MonitorCard key={monitor.title} monitor={monitor} />
      ))}
    </div>
  )
}
