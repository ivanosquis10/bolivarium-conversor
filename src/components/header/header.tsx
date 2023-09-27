import Link from 'next/link'
import { ToggleButton } from '../ui/toggle-button'

export const Header = () => {
  return (
    <header className='border-b dark:bg-zinc-800/50 dark:border-zinc-700'>
      <nav className='max-w-6xl px-5 py-2 mx-auto md:px-0' >
        <ul className='flex items-center justify-between'>
          <li>
            <Link href="/" className="flex items-end gap-1">
              <img src="/logo.jpeg" className="rounded w-11 h-11" alt="logo de" />
              {/* <span className="text-xl font-semibold dark:text-white">Bolivarium</span> */}
            </Link>
          </li>
          <li>
            <ToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
