export const ErrorPage = () => {
  return (
    <div className='p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800 h-[470px] dark:bg-zinc-900/70 bg-zinc-200 shadow-md text-center'>
      <h4 className='text-2xl lg:text-4xl font-bold'>Algo ha salido mal!</h4>
      <p className='text-sm lg:text-base font-semibold tracking-wider'>
        por favor, espere unos segundos y recargue la página
      </p>
    </div>
  )
}
