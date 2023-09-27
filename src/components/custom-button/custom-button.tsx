import { Button } from '@/components/ui/button'
import { DoubleArrowRightIcon, DoubleArrowLeftIcon } from '@radix-ui/react-icons'

interface Props {
  children?: React.ReactNode
  styles?: string
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

export const ButtonBack: React.FC<Props> = ({ children, styles }) => {
  return (
    <Button className={`${styles} w-fit`}>
      <DoubleArrowLeftIcon className="w-5 h-5 mr-2" />
      {children}
    </Button>
  )
}
