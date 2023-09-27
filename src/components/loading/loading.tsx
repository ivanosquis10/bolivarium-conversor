import { Button } from '../ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'

export const Loading = () => {
  return (
    <Button disabled className='flex items-center'>
      <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
      Cargando...
    </Button>
  )
}
