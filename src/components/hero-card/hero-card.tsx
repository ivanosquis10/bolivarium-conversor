import { ButtonLink, Meteors } from '@/components'
import { Card } from '../ui/card'
import { TwitterLogoIcon, HeartIcon, ChatBubbleIcon, LoopIcon } from '@radix-ui/react-icons'

export const HeroCard = () => {
  const cardFullStyle = 'w-[500px] mx-auto bg-zinc-100 dark:bg-zinc-900/50 rounded-xl shadow-lg md:max-w-3xl m-3 border-2 relative h-full p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-zinc-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden'
  return (
    <Card
      data-testid="hero-card"
      className={cardFullStyle} >
      <div className="md:flex">
        <div className="w-full p-8 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center relative z-50">
              <img alt="Profile picture" className="rounded-full" height="40" src="https://ui.shadcn.com/avatars/02.png" width="40" />
              <div className="ml-4">
                <div className="text-sm font-semibold tracking-wide text-black uppercase dark:text-white">
                  Bolivarium
                </div>
                <div className="text-gray-400 dark:text-gray-300">@Ivanosquis13</div>
              </div>
            </div>
            <TwitterLogoIcon width={30} height={30} />
          </div>
          <p className="my-4 text-gray-500 dark:text-gray-300">
            Haz click aquí para ir al convertidor de divisas y empezar a agilizar tus transacciones.
          </p>

          <ButtonLink href='/conversor' className='font-bold z-50 relative'>
            Conversor
          </ButtonLink>

          <div className="flex items-center justify-between mt-6">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300">
              <div className="flex items-center">
                <HeartIcon className='w-6 h-6 text-red-500' />
                <span className="ml-1 text-red-500">566</span>
              </div>
              <div className="flex items-center">
                <ChatBubbleIcon className='w-6 h-6 text-green-500' />
                <span className="ml-1 text-green-500">241</span>
              </div>
              <div className="flex items-center">
                <LoopIcon className='w-6 h-6 text-blue-500' />
                <span className="ml-1 text-blue-500">487</span>
              </div>
            </div>
          </div>
          <Meteors number={15} />
        </div>
      </div>

    </Card>
  )
}
