/**
 * @jest-environment jsdom
*/
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '@/components'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('Renderiza correctamente el componente Header', () => {
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('Renderiza el logo de Bolivarium correctamente', () => {
    const logo = screen.getByAltText('logo de bolivarium')

    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/logo.jpeg')
  })

  it('Renderiza los botones de navegación correctamente', () => {
    const githubButton = screen.getByRole('link', { name: 'github' })
    const twitterButton = screen.getByRole('link', { name: 'twitter' })
    const toggleButton = screen.getByLabelText('toggle-theme')
    const historyButton = screen.getByRole('button', { name: 'Historial' })

    expect(githubButton).toBeInTheDocument()
    expect(twitterButton).toBeInTheDocument()
    expect(toggleButton).toBeInTheDocument()
    expect(historyButton).toBeInTheDocument()

    expect(githubButton).toHaveAttribute('href', 'https://github.com/ivanosquis10/bolivarium-conversor')
    expect(twitterButton).toHaveAttribute('href', 'https://twitter.com/ivanosquis13')
  })

  it('Renderiza correctamente el historial al hacer click en el boton de historial', () => {
    const historyButton = screen.getByRole('button', { name: 'Historial' })

    // disparamos la simulacion del click
    fireEvent.click(historyButton)

    const historyList = screen.getByTestId('history-list')
    expect(historyList).toBeInTheDocument()
  })
})
