'use client'

import { useAppStore } from '@/store/appStore'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem
} from '@/components/ui/select'
import type { Monitor } from '@/interfaces'

interface Props {
  coins: Monitor[]
}

export function SelectCoin({ coins }: Props) {
  const { setUserValues, userValues } = useAppStore()
  return (
    <Select
      defaultValue={userValues.tasa}
      onValueChange={(data: string) => setUserValues({ ...userValues, tasa: data })} >
      <SelectTrigger id='tasa' className="w-full">
        <SelectValue placeholder="Selecciona la moneda de tu preferencia" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='font-medium h-[200px] scroll-smooth'>
          <SelectLabel>Tasas</SelectLabel>
          {
            coins.map((coin) => (
              <SelectItem key={coin.title} value={coin.price} >
                {`${coin.title} - ${coin.price} bs`}
              </SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
