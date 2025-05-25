import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-2xl font-normal mb-4">
            <Link href="/" className="text-black hover:text-blue-600">
              Christian Hayden
            </Link>
          </h1>
          <nav className="space-x-6">
            <Link href="/essays" className="text-blue-600 hover:underline">
              Essays
            </Link>
            <span className="text-black font-medium">About</span>
          </nav>
        </header>

        <main>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              <p>
                I just graduated from college. 
              </p>

              <p>
                Before starting my current company, I worked at several startups where I learned that the most
                interesting problems aren't technical—they're about understanding human behavior and building systems
                that work with human nature rather than against it.
              </p>

              <p>
                I write about startups, technology, and the craft of building software. My essays explore the
                intersection of human psychology and digital systems, with a focus on how we can create technology that
                makes people more capable and creative.
              </p>

              <p>
                When I'm not writing or coding, I enjoy reading history, hiking in the Bay Area, and experimenting with
                new programming languages. I'm particularly interested in how historical patterns of innovation can
                inform how we build technology today.
              </p>

              <p>
                I studied Computer Science at Stanford, where I first became fascinated by the gap between how we think
                computers should work and how humans actually use them. This tension continues to drive much of my work
                and writing.
              </p>

              <p>
                You can reach me at alex@example.com or find me on Twitter{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  @alexchen
                </a>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
