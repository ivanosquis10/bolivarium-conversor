import Link from "next/link"
import { DoubleArrowRightIcon, DoubleArrowLeftIcon, CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtomProps {
  children?: React.ReactNode
  className?: string
}

interface ButtonLinkProps extends ButtomProps {
  href: string
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined
}

// Contiene el next link de Nextjs
export const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href, variant, className }) => {
  return (
    <Link href={href}>
      <Button className={cn("font-bold", className)} variant={variant}>
        {children}
      </Button>
    </Link>
  )
}

export const ButtonDefault: React.FC<ButtomProps> = ({ children }) => {
  return <Button className="w-full font-bold capitalize">{children}</Button>
}

export const ButtonWithIcon: React.FC<ButtomProps> = ({ children }) => {
  return (
    <Button className="w-full">
      {children}
      <DoubleArrowRightIcon className="ml-2 h-4 w-4" />
    </Button>
  )
}

export const ButtonBack: React.FC<ButtomProps> = ({ children, className }) => {
  return (
    <Button className={cn("w-fit", className)}>
      <DoubleArrowLeftIcon className="mr-2 h-5 w-5" />
      {children}
    </Button>
  )
}

type ButtonCopyProps = {
  className?: string
  action?: () => void
}

export const ButtonCopy: React.FC<ButtonCopyProps> = ({ className }) => {
  return (
    <Button className={className} size="icon" title="Copiar resultado">
      <span className="sr-only">Copiar resultado</span>
      <CopyIcon className="h-5 w-5 text-white dark:text-black" />
    </Button>
  )
}
