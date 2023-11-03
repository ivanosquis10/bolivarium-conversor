import { ContactForm } from '../../components/contact-form/contact-form'

export default function PageContact() {
  return (
    <section className='px-4 mx-auto max-w-7xl md:px-2 lg:px-0 my-5 lg:h-[75vh] grid'>
      <header className='px-2 text-center md:px-0'>
        <h2 className='text-2xl font-extrabold text-center uppercase md:text-4xl'>Contacta con
          <span className='text-zinc-700 dark:text-zinc-300'> Bolivarium</span>
        </h2>
        <p className='text-sm tracking-tight text-center text-gray-400 md:text-base'>Comparte con nosotros algunas dudas, sugerencias o ideas que tengas para nuestra app, estaremos encantados de leerlos!</p>
      </header>
      <div className='lg:w-6/12 lg:mx-auto'>
        <ContactForm />
      </div>
    </section>
  )
}
