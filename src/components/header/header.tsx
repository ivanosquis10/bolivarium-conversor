import Link from 'next/link'
import { ToggleButton } from '../ui/toggle-button'
import { ButtonNav, HistoryList } from '@/components'

export const Header = () => {
  return (
    <header data-testid="header" className='border-b dark:bg-zinc-800/50 dark:border-zinc-700'>
      <nav className='flex items-center justify-between px-5 py-2 mx-auto max-w-7xl md:px-0'>
        <Link href="/" className="flex items-end gap-1">
          <img src="/logo.jpeg" className="rounded w-11 h-11" alt="logo de bolivarium" />
        </Link>
        <ul className='flex items-center justify-between gap-2'>
          <li>
           <HistoryList />
          </li>
          <li>
            <ButtonNav
              title='github'
              href='https://github.com/ivanosquis10/bolivarium-conversor'
            />
          </li>
          <li>
            <ButtonNav
              title='twitter'
              href='https://twitter.com/ivanosquis13'
            />
          </li>
          <li>
            <ToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
