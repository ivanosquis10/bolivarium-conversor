import Link from "next/link"

import { FAQ } from "@/components"

import { Button } from "../ui/button"

export function Footer() {
  return (
    <footer className="relative bottom-0 py-6 md:py-0 lg:absolute lg:w-full" data-testid="footer">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://twitter.com/ivanosquis13"
            rel="noreferrer"
            target="_blank"
          >
            Iván😻
          </a>
          . All rights reserved. <span>©{new Date().getFullYear()}</span>
        </p>
        <div className="flex items-center gap-2">
          <FAQ />
          <Button asChild>
            <Link href="/contact">Contacto</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
