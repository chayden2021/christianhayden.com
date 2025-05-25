import Link from "next/link"

const essays = [
  {
    id: "the-startup-paradox",
    title: "The Startup Paradox",
    date: "January 2024",
    description: "Why the best startup ideas often sound terrible at first.",
  },
  {
    id: "code-as-craft",
    title: "Code as Craft",
    date: "December 2023",
    description: "Programming is more art than science, and that's perfectly fine.",
  },
  {
    id: "the-attention-economy",
    title: "The Attention Economy's Hidden Costs",
    date: "November 2023",
    description: "What we lose when everything competes for our focus.",
  },
  {
    id: "building-for-humans",
    title: "Building for Humans",
    date: "October 2023",
    description: "Technology should amplify human capabilities, not replace them.",
  },
  {
    id: "the-myth-of-overnight-success",
    title: "The Myth of Overnight Success",
    date: "September 2023",
    description: "Every 'sudden' breakthrough has years of invisible preparation behind it.",
  },
]

export default function EssaysPage() {
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
            <span className="text-black font-medium">Essays</span>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </nav>
        </header>

        <main>
          <div className="space-y-8">
            {essays.map((essay) => (
              <article key={essay.id} className="border-b border-gray-200 pb-6">
                <h2 className="text-xl mb-2">
                  <Link href={`/essays/${essay.id}`} className="text-blue-600 hover:underline">
                    {essay.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-2">{essay.date}</p>
                <p className="text-gray-700 leading-relaxed">{essay.description}</p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
