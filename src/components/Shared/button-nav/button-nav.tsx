import type { ReactElement } from "react"

import Link from "next/link"
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

type Props = {
  href: string
  title: string
}
type Icon = Record<string, ReactElement>

export function ButtonNav({ href, title }: Props) {
  const icon: Icon = {
    github: <GitHubLogoIcon height={25} width={25} />,
    twitter: <TwitterLogoIcon height={25} width={25} />,
  }

  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Button className="" size="icon" variant="ghost">
        {icon[title]}
        <span className="sr-only">{title}</span>
      </Button>
    </Link>
  )
}
