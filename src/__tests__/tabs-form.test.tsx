/**
 * @jest-environment jsdom
*/
import { render, screen } from '@testing-library/react'
import { SectionTabs } from '@/components/conversor/section-tabs/section-tabs'

describe('Form Tabs', () => {
  beforeEach(() => {
    render(<SectionTabs />)
  })

  it('Renderiza correctamente el componente', () => {
    const tabsConversor = screen.getByTestId('tabs-conversor')
    expect(tabsConversor).toBeInTheDocument()
  })

  it('Renderiza correctamente los botones (tabs) y que tengan el atributo de aria-selected', () => {
    const tabVesToUsd = screen.getByRole('tab', { name: 'Bolivares a USD' }) // tab predeterminada
    const tabUsdToVes = screen.getByRole('tab', { name: 'USD a Bolivares' })

    // que esten en el documento
    expect(tabVesToUsd).toBeInTheDocument()
    expect(tabUsdToVes).toBeInTheDocument()

    // que tenga el atributo 'aria-selected' con el valor 'true' -> predeterminada
    expect(tabVesToUsd).toHaveAttribute('aria-selected', 'true')

    // // que tengan el atributo 'aria-selected' con el valor 'false'
    expect(tabUsdToVes).toHaveAttribute('aria-selected', 'false')
  })
})
