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
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
               My name is Christian Hayden. This is a space to upload writing on a variety of topics that I find interesting. I hope it can be helpful or at least entertaining.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
