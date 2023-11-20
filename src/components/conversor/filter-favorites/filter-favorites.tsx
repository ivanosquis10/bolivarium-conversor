'use client'

import { Button } from '@/components/ui/button'
import { useAppStore } from '@/store'

export const FilterFavorites: React.FC = () => {
  const setFavorite = useAppStore((state) => state.setFavorite)
  const favorite = useAppStore((state) => state.favorite)
  return (
    <div className='flex items-center gap-1.5'>
      <Button variant='default' className='font-bold' onClick={setFavorite}>
        Filtrar favoritos!
      </Button>
      <p className='font-bold'>{favorite ? 'Filtrando favoritos' : ''}</p>
    </div>
  )
}
