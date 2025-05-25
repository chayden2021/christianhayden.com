import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-2xl font-normal mb-4">Alex Chen</h1>
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
              Welcome to my corner of the internet. I write about technology, startups, and the intersection of human
              behavior and digital systems.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
