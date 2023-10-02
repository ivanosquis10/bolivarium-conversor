import Link from 'next/link'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export const HeroCard = () => {
  return (
    <Card
      key="1"
      className="w-[500px] mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
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
                <svg
                  className="w-6 h-6 text-red-500 "
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span className="ml-1 text-red-500">566</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 "
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
                <span className="ml-1 text-green-500">241</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 "
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m17 2 4 4-4 4" />
                  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                  <path d="m7 22-4-4 4-4" />
                  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                </svg>
                <span className="ml-1 text-blue-500">487</span>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-300">7:22 AM · Aug 22, 2023</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
