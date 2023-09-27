'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { Monitor } from '@/interfaces'
import { useState } from 'react'

interface Props {
  coins: Monitor[]
}

export function SelectCoins({ coins }: Props) {
  const [, setValues] = useState('')

  const onChange = (data: string) => {
    setValues(data)
  }

  return (
    <Select onValueChange={onChange} >
      <SelectTrigger id='tasa' className="w-full">
        <SelectValue placeholder="Selecciona la moneda de tu preferencia" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='font-medium h-fit'>
          <SelectLabel>Monedas</SelectLabel>
          {
            coins.map((coin) => (
              <SelectItem key={coin.title} value={coin.price} >
                {`${coin.title} - ${coin.price}`}
              </SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
