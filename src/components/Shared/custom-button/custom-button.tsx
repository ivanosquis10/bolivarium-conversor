import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DoubleArrowRightIcon, DoubleArrowLeftIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface Props {
  children?: React.ReactNode
  className?: string
}

interface ButtonLinkProps extends Props {
  href: string
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined
}

// Contiene el next link de Nextjs
export const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href, variant, className }) => {
  return (
    <Link href={href}>
      <Button variant={variant} className={cn(
        'font-bold',
        className
      )} >
        {children}
      </Button>
    </Link>
  )
}

export const ButtonDefault: React.FC<Props> = ({ children }) => {
  return (
    <Button className='w-full font-bold capitalize' >
      {children}
    </Button>
  )
}

export const ButtonWithIcon: React.FC<Props> = ({ children }) => {
  return (
    <Button className='w-full'>
      {children}
      <DoubleArrowRightIcon className="w-4 h-4 ml-2" />
    </Button>
  )
}

export const ButtonBack: React.FC<Props> = ({ children, className }) => {
  return (
    <Button className={cn(
      'w-fit',
      className
    )} >
      <DoubleArrowLeftIcon className="w-5 h-5 mr-2" />
      {children}
    </Button>
  )
}
