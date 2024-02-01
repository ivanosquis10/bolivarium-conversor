import { TwitterLogoIcon, HeartIcon, ChatBubbleIcon, LoopIcon } from "@radix-ui/react-icons"

import { ButtonLink, Meteors } from "@/components"

import { Card } from "../ui/card"

export function HeroCard() {
  return (
    <Card
      className="spotligth relative m-3 mx-auto h-full w-[500px] rounded-xl border-2 bg-zinc-100 shadow-lg dark:bg-zinc-900/50 md:max-w-3xl"
      data-testid="hero-card"
      id="hero-card"
    >
      <div className="md:flex">
        <div className="relative w-full p-8">
          <div className="flex items-center justify-between">
            <div className="relative z-50 flex items-center">
              <img
                alt="Profile picture"
                className="rounded-full"
                height="40"
                src="https://ui.shadcn.com/avatars/02.png"
                width="40"
              />
              <div className="ml-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-black dark:text-white">
                  Bolivarium
                </div>
                <div className="text-gray-400 dark:text-gray-300">@Ivanosquis13</div>
              </div>
            </div>
            <TwitterLogoIcon height={30} width={30} />
          </div>
          <p className="my-4 text-gray-500 dark:text-gray-300">
            Haz click aquí para ir al convertidor de divisas y empezar a agilizar tus transacciones.
          </p>

          <ButtonLink className="relative z-50 font-bold" href="/conversor">
            Conversor
          </ButtonLink>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300">
              <div className="flex items-center">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1 text-red-500">566</span>
              </div>
              <div className="flex items-center">
                <ChatBubbleIcon className="h-6 w-6 text-green-500" />
                <span className="ml-1 text-green-500">241</span>
              </div>
              <div className="flex items-center">
                <LoopIcon className="h-6 w-6 text-blue-500" />
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
