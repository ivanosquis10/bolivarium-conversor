import Link from 'next/link'
import { FAQ } from '@/components'
import { Button } from '../ui/button'

export const Footer = () => {
  return (
    <footer data-testid="footer" className='bottom-0 py-6 relative md:py-0 lg:absolute lg:w-full'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row'>
        <p className='text-sm leading-loose text-center text-muted-foreground md:text-left'>
          Built by <a href='https://twitter.com/ivanosquis13' target='_blank' rel='noreferrer' className='font-medium underline underline-offset-4'>Iván😻</a>.
          All rights reserved. <span>©{new Date().getFullYear()}</span>
        </p>
        <div className='flex items-center gap-2'>
          <FAQ />
          <Button asChild>
            <Link href='/contact'>
              Contacto
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
