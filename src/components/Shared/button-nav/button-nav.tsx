import type { ReactElement } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

type Props = {
  href: string
  title: string
}
type Icon = Record<string, ReactElement>

export const ButtonNav = ({ href, title }: Props) => {
  const icon: Icon = {
    github: <GitHubLogoIcon width={25} height={25} />,
    twitter: <TwitterLogoIcon width={25} height={25} />
  }

  return (
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button variant='ghost' size='icon' className=''>
          {icon[title]}
          <span className='sr-only'>{title}</span>
        </Button>
      </Link>
  )
}
