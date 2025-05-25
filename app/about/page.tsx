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
              I'm a writer and technologist interested in the intersection of technology and human behavior. I spend my
              time thinking about how we can build better tools and systems that actually serve people.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              My background is in software engineering and product development. I've worked at both startups and larger
              companies, which has given me perspective on how different organizational structures affect the products
              we build.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I write about technology, startups, design, and occasionally life philosophy. My essays tend to focus on
              practical insights rather than abstract theory.
            </p>

            <p className="text-gray-700 leading-relaxed">
              You can reach me at christian@example.com if you'd like to discuss any of my writing or just want to say
              hello.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
