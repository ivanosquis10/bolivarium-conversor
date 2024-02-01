import { getAllRates } from "@/services/rates"
import { MonitorCard, ErrorPage } from "@/components"

export async function MonitorWrapper() {
  const data = await getAllRates()

  if (!data.success) return <ErrorPage />

  return (
    <div className="relative h-fit max-h-[230px] space-y-2 overflow-y-auto rounded border bg-zinc-200 p-2 shadow-md dark:border-zinc-800 dark:bg-zinc-900/70 lg:max-h-[450px]">
      {data.success
        ? data.monitors.map((monitor) => <MonitorCard key={monitor.title} monitor={monitor} />)
        : null}
    </div>
  )
}
