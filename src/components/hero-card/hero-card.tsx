import Link from 'next/link'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { TwitterLogoIcon, HeartIcon, ChatBubbleIcon, LoopIcon } from '@radix-ui/react-icons'

export const HeroCard = () => {
  return (
    <Card
      className="w-[500px] mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
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
          <Link href='/conversor'>
            <Button>
              Convertidor
            </Button>
          </Link>
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
    </Card>
  )
}
