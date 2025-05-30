import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-2xl font-normal mb-4">
            <Link href="/" className="text-black no-underline">
              Christian Hayden
            </Link>
          </h1>
          <nav className="space-x-6">
            <Link href="/essays" className="text-blue-600 hover:underline">
              Essays
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </nav>
        </header>

        <main>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Thank you for visiting this digital hobbit hole. There's some writing on that desk over there that you might find interesting if you'd like to check it out. Besides that, there isn't much else. Light that candle and check it out if you have some time.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
