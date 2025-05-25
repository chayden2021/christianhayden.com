import Link from "next/link"
import fs from "fs"
import path from "path"

async function getEssays() {
  const essaysDirectory = path.join(process.cwd(), "public", "essays")

  try {
    const filenames = fs.readdirSync(essaysDirectory)
    const txtFiles = filenames.filter((name) => name.endsWith(".txt"))

    const essays = await Promise.all(
      txtFiles.map(async (filename) => {
        const filePath = path.join(essaysDirectory, filename)
        const content = fs.readFileSync(filePath, "utf8")
        const title = content.split("\n")[0].trim() // First line is the title
        const slug = filename.replace(".txt", "")

        return { title, slug }
      }),
    )

    return essays
  } catch (error) {
    console.error("Error reading essays directory:", error)
    return []
  }
}

export default async function EssaysPage() {
  const essays = await getEssays()

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
            <Link href="/essays" className="text-blue-600 hover:underline font-medium">
              Essays
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </nav>
        </header>

        <main>
          <div className="space-y-3">
            {essays.map((essay) => (
              <div key={essay.slug}>
                <Link href={`/essays/${essay.slug}`} className="text-blue-600 hover:underline text-base">
                  {essay.title}
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
