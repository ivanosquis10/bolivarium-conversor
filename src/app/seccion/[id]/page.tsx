import Link from 'next/link'
import { ButtonBack, SectionTabs, ConvertResult } from '@/components'
import type { Monitor } from '@/interfaces'

interface Props {
  params: {
    id: string
  }
}

export default async function Page({ params: { id } }: Props) {
  const res = await fetch(`https://pydolarvenezuela-api.vercel.app/api/v1/dollar/${id}`, {
    next: { revalidate: 5400 }
  })
  const data = await res.json() as Record<string, Monitor>

  const sections: Monitor[] = Object.entries(data).map(([, value]) => ({
    ...value
  }))

  return (
    <section className='max-w-6xl px-4 mx-auto md:px-0'>
      <Link href={'/'} >
        <ButtonBack styles='my-5'>
          back
        </ButtonBack>
      </Link>

      <section className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <SectionTabs
          coins={sections}
        />

        <ConvertResult />
      </section>
    </section>
  )
}
