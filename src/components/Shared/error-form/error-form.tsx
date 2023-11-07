export const Error = ({ message }: { message: string }) => {
  return (
    <p className='text-[0.8rem] font-medium text-destructive dark:text-red-500'>
      {message}
    </p>
  )
}
