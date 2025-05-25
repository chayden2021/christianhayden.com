import Link from "next/link"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"

async function getEssayContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "essays", `${slug}.txt`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const content = fs.readFileSync(filePath, "utf8")
    const lines = content.split("\n")
    const title = lines[0].trim()
    const body = lines.slice(1).join("\n").trim()

    return { title, body }
  } catch (error) {
    console.error("Error reading essay:", error)
    return null
  }
}

export async function generateStaticParams() {
  const essaysDirectory = path.join(process.cwd(), "public", "essays")

  try {
    const filenames = fs.readdirSync(essaysDirectory)
    const txtFiles = filenames.filter((name) => name.endsWith(".txt"))

    return txtFiles.map((filename) => ({
      slug: filename.replace(".txt", ""),
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function EssayPage({ params }: { params: { slug: string } }) {
  const essay = await getEssayContent(params.slug)

  if (!essay) {
    notFound()
  }

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
          <div className="mb-8">
            <h2 className="text-xl font-normal">{essay.title}</h2>
          </div>

          <article className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{essay.body}</div>
          </article>
        </main>
      </div>
    </div>
  )
}
