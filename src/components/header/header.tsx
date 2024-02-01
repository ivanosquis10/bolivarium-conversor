import Link from "next/link"

import { ButtonNav, HistoryList } from "@/components"

import { ToggleButton } from "../ui/toggle-button"

export function Header() {
  return (
    <header className="border-b dark:border-zinc-700 dark:bg-zinc-800/50" data-testid="header">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-0">
        <Link className="flex items-end gap-1" href="/">
          <img alt="logo de bolivarium" className="h-11 w-11 rounded" src="/logo.jpeg" />
        </Link>
        <ul className="flex items-center justify-between gap-2">
          <li>
            <HistoryList />
          </li>
          <li>
            <ButtonNav href="https://github.com/ivanosquis10/bolivarium-conversor" title="github" />
          </li>
          <li>
            <ButtonNav href="https://twitter.com/ivanosquis13" title="twitter" />
          </li>
          <li>
            <ToggleButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
