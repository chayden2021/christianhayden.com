import Link from "next/link"
import { notFound } from "next/navigation"

const essays = {
  "essay-one": {
    title: "Essay One",
    date: "May 2025",
    content: `
      This will be my first essay. Content will be pasted directly in here (: 
    `,
    footnotes: [
      "[1] Examples of footnotes",
      "[2] Extra footnotes",
    ],
  },
  "essay-two": {
    title: "Essay Two",
    date: "May 2025",
    content: `
      This will be essay 2. Contents from essay 2 can be pasted here.
    `,
    footnotes: [
      "[1] Examples of footnote",
      "[2] More footnotes",
      "[3] Even more footnotes",
    ],
  },
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const essay = essays[params.slug as keyof typeof essays]

  if (!essay) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-2xl font-normal mb-4">
            <Link href="/" className="text-black hover:text-blue-600">
              Alex Chen
            </Link>
          </h1>
          <nav className="space-x-6">
            <Link href="/essays" className="text-blue-600 hover:underline">
              Christian Hayden
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </nav>
        </header>

        <main>
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl font-normal mb-2">{essay.title}</h1>
              <p className="text-gray-600 text-base">{essay.date}</p>
            </header>

            <div className="text-gray-800 leading-relaxed space-y-6">
              {essay.content
                .trim()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            {essay.footnotes && essay.footnotes.length > 0 && (
              <footer className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Notes</h3>
                <ol className="space-y-3">
                  {essay.footnotes.map((footnote, index) => (
                    <li key={index} className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-medium">{index + 1}.</span> {footnote}
                    </li>
                  ))}
                </ol>
              </footer>
            )}
          </article>
        </main>
      </div>
    </div>
  )
}
