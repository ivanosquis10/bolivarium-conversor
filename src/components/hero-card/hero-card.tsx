import { ButtonLink, Meteors } from '@/components'
import { Card } from '../ui/card'
import { TwitterLogoIcon, HeartIcon, ChatBubbleIcon, LoopIcon } from '@radix-ui/react-icons'

export const HeroCard = () => {
  return (
    <Card
      data-testid="hero-card"
      className="w-[500px] mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden md:max-w-3xl m-3 border-2 relative ring-2 ring-transparent hover:ring-muted hover:scale-105 transition-all"
    >
      <div className="md:flex">
        <div className="w-full p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
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

          <ButtonLink href='/conversor' className='font-bold'>
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
        </div>
      </div>
      <Meteors number={15} />
    </Card>
  )
}
