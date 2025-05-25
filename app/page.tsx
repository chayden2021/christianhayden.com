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
              Welcome to my website. I write essays about technology, startups, and life. You can find my writing in the
              essays section.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
