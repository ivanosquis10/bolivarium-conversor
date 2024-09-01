import { Suspense } from "react"

import {
  ConvertResult,
  MonitorSkeleton,
  MonitorWrapper,
  SectionTabs,
  FilterFavorites,
} from "@/components"

export default function Home() {
  return (
    <main>
      <section className="container mx-auto my-5 px-4 lg:px-0">
        <div className="grid gap-5">
          <div className="relative space-y-2">
            <FilterFavorites />
            <Suspense fallback={<MonitorSkeleton />}>
              <MonitorWrapper />
            </Suspense>
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="animate-fade">
              <SectionTabs />
            </div>
            <ConvertResult />
          </div>
        </div>
      </section>
    </main>
  )
}
