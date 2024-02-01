import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-silver-500 flex min-h-screen flex-col items-center justify-center space-y-5 text-center antialiased">
      <h3 className="text-yellow text-3xl font-bold lg:text-5xl">404 (sadge)</h3>

      <h3 className="text-xl lg:text-3xl">Whooops! You are in the wrong place.</h3>
      <p className="text-silver-500">the page you are looking for does not exist</p>
      <Link
        aria-label="Go back"
        className="border-yellow flex w-1/2 items-center justify-center rounded-md border py-3 text-center  font-bold uppercase transition-all md:w-1/4 lg:w-1/5"
        href="/"
        title="Go back"
      >
        Go back
      </Link>
    </div>
  )
}
