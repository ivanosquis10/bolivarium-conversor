import { Suspense } from 'react'
import { ConvertResult, MonitorSkeleton, MonitorWrapper, SectionTabs } from '@/components'
export default async function Page() {
  return (
  <section className='px-4 mx-auto my-5 max-w-7xl md:px-2 lg:px-0'>
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <Suspense fallback={<MonitorSkeleton />}>
            <MonitorWrapper />
        </Suspense>

          <div className='flex flex-col gap-5'>
              <ConvertResult />
          <div>
              <SectionTabs />
          </div>
        </div>
      </div>
    </section>
  )
}
