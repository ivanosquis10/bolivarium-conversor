import { SectionCard } from '@/components/section-card/section-card'

const SECTIONS_DATA = [
  {
    title: 'Monederos Digitales',
    description: 'Aqui encontrarás la información sobre el dolar en Venezuela y los monederos digitales más populares en Venezuela.',
    url: 'monederos_electronicos',
    badge: ['PayPal', 'Skrill', 'Zinli']
  },
  {
    title: 'Dolar Promedio',
    description: 'Aqui encontrarás la información sobre el dolar en Venezuela y dolar promedio de diferentes fuentes.',
    url: 'dolar_promedio',
    badge: ['EnParaleloVzla', 'Monitor']
  },
  {
    title: 'Bancos Oficiales',
    description: 'Aqui encontrarás la información sobre el dolar en Venezuela en los bancos oficiales de Venezuela.',
    url: 'bcv_oficial',
    badge: ['Venezuela', 'Bancamiga', 'Mercantil']
  },
  {
    title: 'Otras Paginas',
    description: 'Aqui encontrarás la información sobre el dolar en Venezuela en otros monederos digitales y paginas.',
    url: 'paginas',
    badge: ['AirTM', 'Binance', 'Reserve']
  }
]

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto mt-5'>
      <div className='px-2 text-center md:px-0'>
        <h1 className='text-2xl font-extrabold text-center uppercase md:text-4xl'>Bienvenido a
          <span className='text-zinc-700 dark:text-zinc-300'> Bolivarium</span>
        </h1>
        <p className='text-sm tracking-tight text-center text-gray-400 md:text-base'>El portal de las divisas donde podrás ver la información del dólar de una forma estructurada y precisa, además de poder usar el convertidor.</p>
      </div>

      <section className='grid max-w-6xl grid-cols-1 gap-5 px-2 mx-auto mt-10 mb-5 md:px-0 md:grid-cols-2'>
        {
          SECTIONS_DATA.map(({ title, description, url, badge }) => (
            <SectionCard
              key={title}
              title={title}
              description={description}
              url={url}
              badge={badge}
            />
          ))
        }
      </section>
    </main>
  )
}
