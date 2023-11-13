import { HeroCard } from '@/components'

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto mt-5 md:h-[78vh]'>
      <div className='px-2 text-center md:px-0'>
        <h1 role='heading' className='text-2xl font-extrabold text-center uppercase md:text-4xl'>Bienvenido a
          <span className='text-zinc-700 dark:text-zinc-300'> Bolivarium</span>
        </h1>
        <p className='text-sm tracking-tight text-center text-gray-400 md:text-base'>El portal de las divisas donde podrás ver la información del dólar de una forma estructurada y precisa, además de poder usar el convertidor.</p>
      </div>

      <section title='hero-container' className='flex justify-center w-full mt-10'>
        <HeroCard />
      </section>
    </main>
  )
}
