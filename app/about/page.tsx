import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-blue-600 hover:underline font-medium">
              About
            </Link>
          </nav>
        </header>

        <main>
          <h2 className="text-xl font-normal mb-8">About</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
               My name is Christian Hayden, and this is a space to upload writing on a variety of topics with the goal of both helping me improve my writing and also putting together informative and useful stuff.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
