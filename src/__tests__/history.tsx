/**
 * @jest-environment jsdom
*/
import { render, screen, fireEvent } from '@testing-library/react'
import { HistoryList } from '@/components'
import { HistoryCard } from '@/components/history/history-card/history-card'
import type { HistoryItem } from '@/interfaces'

const historyFull: HistoryItem[] = [
  { id: '1', tasa: 1.5, amount: 100, conversion: 150, currency: 'USD', date: 1 },
  { id: '2', tasa: 1.5, amount: 100, conversion: 150, currency: 'USD', date: 1 }
]

const historyItem: HistoryItem = {
  id: '1',
  tasa: 1.5,
  amount: 100,
  conversion: 155,
  currency: 'USD',
  date: 1
}
const openHistory = () => {
  const historyButton = screen.getByRole('button', { name: 'Historial' })
  fireEvent.click(historyButton)
}

describe('HistoryList component', () => {
  beforeEach(() => {
    render(<HistoryList />)
  })

  it('Verifica que el componente HistoryList este cerrado', () => {
    expect(screen.queryByText('Historial de las conversiones')).not.toBeInTheDocument()
  })

  it('Verifica que el componente HistoryList este abierto', () => {
    openHistory()

    // Verificamos que el componente este abierto con el titulo
    const title = screen.getByText('Historial de las conversiones')
    const subtitle = screen.getByText('Aquí estarán las conversiones que has hecho, por si quieres volver a verlas :)')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it('Verifica que el boton de CERRAR dentro del componente HistoryList cierre el componente', () => {
    openHistory()

    expect(screen.getByText('Historial de las conversiones')).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeButton)

    expect(screen.queryByText('Historial de las conversiones')).not.toBeInTheDocument()
  })

  it('Verifica que el historial se muestre correctamente con conversiones', () => {
    openHistory()

    historyFull.forEach((historyItem) => {
      render(<HistoryCard history={historyItem} onDelete={jest.fn()} onCopy={jest.fn()} />)
    })

    expect(screen.getByTestId('history-card-1')).toBeInTheDocument()
    expect(screen.getByTestId('history-card-2')).toBeInTheDocument()
  })

  it('Verifica que el historial no muestre nada sin conversiones', () => {
    // Abre el historial
    openHistory()

    // Verifica que el historial este vacio
    expect(screen.queryByTestId('history-card-1')).not.toBeInTheDocument()

    // y esperamos que el texto de 'No hay conversiones' aparezca
    expect(screen.getByText('No hay historial todavía:)')).toBeInTheDocument()
  })
})

describe('Button delete all history', () => {
  beforeEach(() => {
    render(<HistoryList />)
  })

  const history: HistoryItem[] = [] // Simula que el historial este vacío

  it('Verifica que el boton de eliminar todo el historial este disponible', () => {
    openHistory()

    const deleteAllButton = screen.getByRole('button', { name: 'Eliminar todo!' })
    expect(deleteAllButton).toBeInTheDocument()

    // verificar sus atributos
    expect(deleteAllButton).toHaveClass('mt-2 disabled:opacity-30')
  })

  it('Verifica que el boton eliminar todo este desahabilitado cuando no hay historial', () => {
    openHistory()

    const deleteAllButton = screen.getByRole('button', { name: 'Eliminar todo!' })
    expect(deleteAllButton).toBeInTheDocument()

    // Verifica que el boton este deshabilitado
    history.length <= 0
      ? expect(deleteAllButton).toBeDisabled()
      : expect(deleteAllButton).not.toBeDisabled()
  })

  it('Verifica si llama a la funcion resetHistory', () => {
    // simple, pero se podria mejorar este test.
    const resetHistoryMock = jest.fn()
    render(
      <button type="button" disabled={false} onClick={resetHistoryMock} className='mt-2 disabled:opacity-30'>
        Eliminar todo!
      </button>
    )

    const button = screen.getByRole('button', { name: 'Eliminar todo!' })
    fireEvent.click(button)

    expect(resetHistoryMock).toHaveBeenCalled()
  })
})

describe('HistoryCard component', () => {
  it('Verifica si renderiza correctamente el componente', () => {
    render(<HistoryCard history={historyItem} onDelete={jest.fn()} onCopy={jest.fn()} />)

    // verificamos los elementos que deberian estar presentes
    const cardID = screen.getByTestId('history-card-1')
    const created = screen.getByText(/Creada hace/)
    const tasa = screen.getByText(/Tasa:/)
    const quantity = screen.getByText(/Cantidad:/)
    const result = screen.getByText(/Resultado:/)
    const copyButton = screen.getByRole('button', { name: 'Copiar' })
    const deleteButton = screen.getByRole('button', { name: 'Eliminar' })

    expect(cardID).toBeInTheDocument()
    expect(created).toBeInTheDocument()
    expect(tasa).toBeInTheDocument()
    expect(quantity).toBeInTheDocument()
    expect(result).toBeInTheDocument()
    expect(copyButton).toBeInTheDocument()
    expect(deleteButton).toBeInTheDocument()
  })

  it('Verifica si llama a la funcion onCopy', () => {
    const onCopyMock = jest.fn()
    render(<HistoryCard history={historyItem} onDelete={jest.fn()} onCopy={onCopyMock} />)

    const copyButton = screen.getByRole('button', { name: 'Copiar' })
    fireEvent.click(copyButton)

    // la funcion onCopy recibe el resultado de la conversion
    expect(onCopyMock).toHaveBeenCalledWith(155)
  })

  it('Verifica si llama a la funcion onDelete', () => {
    const onDeleteMock = jest.fn()
    render(<HistoryCard history={historyItem} onDelete={onDeleteMock} onCopy={jest.fn()} />)

    const deleteButton = screen.getByRole('button', { name: 'Eliminar' })
    fireEvent.click(deleteButton)

    // la funcion onDelete se llama con el id del historial
    expect(onDeleteMock).toHaveBeenCalledWith('1')
  })
})
