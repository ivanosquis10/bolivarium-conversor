import Link from 'next/link'
import { ButtonDefault } from '../custom-button/custom-button'
import type { CardSection } from '@/interfaces'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export const SectionCard: React.FC<CardSection> = ({ title, description, badge, url }) => {
  return (
    <Card className='w-full transition-all border shadow dark:border-zinc-900 hover:ring-zinc-300 dark:bg-zinc-800/30 ring ring-transparent hover:dark:ring-zinc-800'>
      <CardHeader>
        <div className='flex items-center gap-2'>
          {badge?.map((item) => (
            <strong
              key={item}
              className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-xs font-medium text-white"
            >
              {item}
            </strong>
          ))
          }
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className='text-xl md:text-2xl'>
          {title}
        </CardTitle>

        <CardDescription>
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Link href={`/seccion/${url}`} className='flex-1'>
          <ButtonDefault>
            {title}
          </ButtonDefault>
        </Link>
      </CardFooter>
    </Card>
  )
}
