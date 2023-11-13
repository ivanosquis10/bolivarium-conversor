/**
 * @jest-environment jsdom
*/
import { render, screen, fireEvent } from '@testing-library/react'
import { FAQ } from '@/components'

describe('FAQ', () => {
  beforeEach(() => {
    render(<FAQ />)
  })

  it('Verifica que el componente FAQ este cerrado', () => {
    // Verificamos que el componente este cerrado
    expect(screen.queryByText('Preguntas o dudas con Bolivarium')).not.toBeInTheDocument()
  })

  it('Verifica que el componente FAQ este abierto', () => {
    // Obtenemos el boton que abre el componente
    const faqButton = screen.getByRole('button', { name: 'Preguntas' })

    // Simulamos el click
    fireEvent.click(faqButton)

    // Verificamos que el componente este abierto con el titulo
    expect(screen.getByText('Preguntas o dudas con Bolivarium')).toBeInTheDocument()
  })

  it('Verificar que el boton de CERRAR dentro del componente FAQ cierre el componente', () => {
    // Obtenemos el boton que abre el componente
    const faqButton = screen.getByRole('button', { name: 'Preguntas' })

    // Simulamos el click de abrir el componente
    fireEvent.click(faqButton)

    // Obtenemos el boton que cierra el componente
    const closeButton = screen.getByRole('button', { name: 'Cerrar' })

    // Simulamos el click de cerrar el componente
    fireEvent.click(closeButton)

    // Verificamos que el componente este cerrado
    expect(screen.queryByText('Preguntas o dudas con Bolivarium')).not.toBeInTheDocument()
  })

  it('Verificar que el boton estilo SVG con una EQUIS dentro del componente FAQ cierre el componente', () => {
    // Obtenemos el boton que abre el componente
    const faqButton = screen.getByRole('button', { name: 'Preguntas' })

    // Simulamos el click de abrir el componente
    fireEvent.click(faqButton)

    // Obtenemos el SVG con la flecha
    const svgButton = screen.getByRole('button', { name: 'Close' })

    // Simulamos el click de cerrar el componente
    fireEvent.click(svgButton)

    // Verificamos que el componente este cerrado
    expect(screen.queryByText('Preguntas o dudas con Bolivarium')).not.toBeInTheDocument()
  })
})
