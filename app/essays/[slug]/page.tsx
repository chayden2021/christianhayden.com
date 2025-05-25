import Link from "next/link"
import { notFound } from "next/navigation"

const essays = {
  "the-startup-paradox": {
    title: "The Startup Paradox",
    date: "January 2024",
    content: `
The best startup ideas often sound terrible when you first hear them. This isn't a bug—it's a feature.

When someone told you in 2004 that college students would want to share their personal information online with strangers, you'd think they were crazy. When someone suggested in 2008 that people would pay to sleep in strangers' homes instead of hotels, you'd question their sanity. When someone proposed in 2009 that 140-character messages would become a primary news source, you'd laugh.

Yet Facebook, Airbnb, and Twitter all became billion-dollar companies.

The paradox exists because truly innovative ideas challenge our existing mental models. They require us to imagine a world that doesn't yet exist. Most people, including investors and potential customers, struggle with this leap of imagination.

This creates an opportunity. If an idea sounds obviously good to everyone, it's probably too late. The market is likely already crowded, or the idea isn't as revolutionary as it seems.

The key is distinguishing between ideas that sound bad because they're actually bad, and ideas that sound bad because they're ahead of their time. The difference often lies in understanding human behavior at a deeper level than surface preferences reveal.

People said they'd never trust strangers with their homes, but they were really saying they'd never trust strangers *without a system that made it safe*. Airbnb didn't just connect hosts and guests—it built trust through reviews, verification, and insurance.

The best entrepreneurs don't just have good ideas; they have the conviction to pursue ideas that others dismiss. They see the world not as it is, but as it could be.
    `,
    footnotes: [
      "This principle applies beyond startups to any form of innovation. Artists, scientists, and writers often face similar skepticism when introducing novel concepts.",
      "The 'Innovator's Dilemma' by Clayton Christensen explores this phenomenon in detail, particularly how established companies often miss disruptive innovations.",
      "It's worth noting that for every successful 'crazy' idea, there are thousands that were actually just crazy. The challenge is developing the judgment to tell the difference.",
    ],
  },
  "code-as-craft": {
    title: "Code as Craft",
    date: "December 2023",
    content: `
Programming is often taught as engineering, but practiced as art. This disconnect explains why so many developers feel frustrated with their formal education and why the best programmers are often self-taught.

Engineering implies predictability, standardization, and repeatable processes. You follow specifications, use proven methods, and achieve consistent results. Art, however, is about expression, creativity, and finding novel solutions to complex problems.

Code is closer to writing than to building bridges. Like writers, programmers start with a blank page and create something from nothing. They make countless micro-decisions about structure, style, and approach. They wrestle with trade-offs between elegance and practicality, between performance and readability.

The best code isn't just functional—it's beautiful. It has rhythm, clarity, and purpose. It tells a story about the problem it solves and the thinking behind the solution. When you read great code, you can sense the programmer's personality and approach to problem-solving.

This artistic nature of programming explains why code reviews can feel so personal. When someone critiques your code, they're not just pointing out technical issues—they're commenting on your thought process, your aesthetic choices, your approach to solving problems.

It also explains why programming is so satisfying when done well. Like any craft, there's deep pleasure in gradually improving your skills, developing your own style, and creating something that works beautifully.

The industry would benefit from embracing this artistic aspect more openly. Instead of pretending programming is pure engineering, we should acknowledge that it requires creativity, intuition, and personal expression. We should celebrate the craft, not just the output.

This doesn't mean abandoning rigor or best practices. Even artists need to understand their medium, learn techniques, and practice fundamentals. But they also need space for experimentation, personal style, and creative problem-solving.

The future belongs to programmers who can bridge both worlds—who understand the engineering principles but aren't constrained by them, who can write code that is both technically sound and creatively inspired.
    `,
    footnotes: [
      "Donald Knuth's 'The Art of Computer Programming' series explicitly frames programming as an art form, not just a technical discipline.",
      "This artistic view of programming is why pair programming and code reviews are so valuable—they're like having a writing workshop for your code.",
      "The open source movement thrives partly because it allows programmers to share and appreciate each other's craft, much like artists sharing their work in galleries.",
    ],
  },
  "the-attention-economy": {
    title: "The Attention Economy's Hidden Costs",
    date: "November 2023",
    content: `
We've built an economy around capturing and monetizing human attention, but we're only beginning to understand the true costs of this system.

The attention economy operates on a simple premise: if you can capture someone's attention, you can sell it to advertisers. This has driven the creation of incredibly sophisticated systems designed to be as engaging—and addictive—as possible.

But attention isn't renewable. Unlike other resources that can be replenished or substituted, each person has a fixed amount of attention each day. When we spend it on one thing, it's gone forever. We can't get it back, and we can't make more.

This scarcity makes attention incredibly valuable, but it also makes the attention economy fundamentally extractive. Every minute spent scrolling through social media is a minute not spent on deep work, meaningful relationships, or personal growth.

The hidden costs compound over time. When our attention is constantly fragmented, we lose the ability to focus deeply. When we're always consuming content, we have less time to create. When we're perpetually stimulated, we struggle with boredom—and boredom is often where creativity begins.

Perhaps most concerning is how the attention economy shapes what gets created. Content optimized for engagement isn't necessarily content that's true, useful, or beautiful. It's content that triggers immediate emotional responses: outrage, fear, envy, or shallow pleasure.

This creates a race to the bottom. Nuanced ideas lose out to simple ones. Thoughtful analysis loses out to hot takes. Long-term thinking loses out to immediate gratification.

The solution isn't to abandon technology, but to be more intentional about how we design and use it. We need systems that respect human attention rather than exploit it. We need business models that align with human flourishing rather than addiction.

Some companies are beginning to experiment with this. Subscription models, for instance, align the company's interests with providing genuine value rather than just capturing time. Tools that help users focus rather than distract them represent another promising direction.

Ultimately, we need to recognize that attention is our most precious resource. How we spend it determines not just our productivity, but our happiness, our relationships, and our ability to contribute meaningfully to the world.

The attention economy isn't going away, but we can choose to participate in it more consciously. We can demand better from the platforms we use, and we can be more intentional about where we direct our focus.

Our attention shapes our reality. It's time we started treating it with the respect it deserves.
    `,
    footnotes: [
      "Cal Newport's 'Deep Work' provides an excellent framework for understanding why sustained attention is becoming increasingly rare and valuable.",
      "The concept of 'continuous partial attention,' coined by Linda Stone, describes how modern technology fragments our focus across multiple streams simultaneously.",
      "Studies show that it takes an average of 23 minutes to fully refocus after an interruption, making the cost of attention switching much higher than most people realize.",
    ],
  },
  "building-for-humans": {
    title: "Building for Humans",
    date: "October 2023",
    content: `
The best technology doesn't replace human capabilities—it amplifies them. This distinction matters more than most builders realize.

When we try to replace humans, we often end up with systems that work well in theory but fail in practice. They handle the common cases beautifully but break down when faced with the messy complexity of real human needs and behaviors.

When we amplify humans instead, we create tools that make people more capable, more creative, and more connected. We build systems that work with human nature rather than against it.

Consider the difference between a fully automated customer service system and one that gives human agents better tools. The automated system might handle simple queries efficiently, but it frustrates customers with complex problems. The amplified human agent can handle both simple and complex issues while maintaining the empathy and creativity that only humans provide.

This principle applies across domains. The best writing tools don't write for you—they help you write better. The best design software doesn't design for you—it gives you more powerful ways to express your creative vision. The best productivity apps don't think for you—they help you organize and execute your own thinking.

Building for amplification requires understanding humans deeply. You need to know not just what people say they want, but how they actually behave. You need to understand their cognitive limitations, their emotional needs, and their social contexts.

It also requires humility. Instead of assuming you can engineer away human complexity, you accept it and design around it. You build systems that are forgiving of human error, adaptable to human variation, and respectful of human agency.

The amplification approach often leads to more sustainable businesses too. When you make humans more capable, you create genuine value that people are willing to pay for. When you try to replace humans, you often end up in a race to the bottom on cost.

This doesn't mean avoiding automation entirely. Automation is powerful when applied to tasks that are genuinely better done by machines: repetitive calculations, data processing, pattern recognition at scale. The key is using automation to free humans for higher-level work, not to eliminate human involvement entirely.

The future belongs to builders who understand this distinction. As AI and automation become more powerful, the companies that thrive will be those that use these tools to make humans more capable, not those that try to make humans obsolete.

We're building the tools that will shape how humans work, learn, and connect for generations to come. Let's make sure we're building tools that honor human potential rather than diminish it.
    `,
    footnotes: [
      "Douglas Engelbart, who invented the computer mouse, explicitly focused on 'augmenting human intellect' rather than replacing human thinking.",
      "The concept of 'centaur' teams—humans and AI working together—often outperforms either humans or AI working alone in complex problem-solving tasks.",
      "This philosophy aligns with the Japanese concept of 'jidoka'—automation with a human touch—which has been central to Toyota's manufacturing success.",
    ],
  },
  "the-myth-of-overnight-success": {
    title: "The Myth of Overnight Success",
    date: "September 2023",
    content: `
Every overnight success story has a long prequel that nobody talks about. This invisible preparation phase is where the real work happens, but it's also where most people give up.

We love overnight success stories because they're inspiring and simple. Someone has a great idea, works hard for a short time, and achieves massive success. It's a narrative that makes success feel accessible and luck-based rather than the result of years of deliberate effort.

But this narrative is almost always false. When you dig into any "overnight" success, you find years of preparation, failed attempts, skill development, and relationship building that preceded the visible breakthrough.

Instagram was built by founders who had spent years learning mobile development and understanding social behavior online. Airbnb's founders had multiple failed startups before finding their breakthrough idea. Even seemingly sudden viral hits usually come from creators who have been honing their craft for years.

The preparation phase is invisible because it's not newsworthy. Nobody writes articles about someone learning their craft, building their network, or iterating on ideas that don't work yet. The media only pays attention when something becomes obviously successful.

This creates a dangerous misconception. People see the visible success and assume it happened quickly and easily. When their own efforts don't produce immediate results, they conclude they're doing something wrong or lack talent.

In reality, the preparation phase is where most of the value is created. It's where you develop the skills, insights, and relationships that make success possible. It's where you learn to recognize opportunities and develop the confidence to pursue them.

The key insight is that preparation and opportunity are both necessary but neither is sufficient alone. You can prepare for years without the right opportunity presenting itself. You can have great opportunities but lack the preparation to capitalize on them.

The most successful people understand this dynamic. They prepare intensively even when no specific opportunity is visible. They build skills, create relationships, and develop insights that will be valuable when the right moment comes.

This requires a different mindset about time and effort. Instead of expecting immediate results, you invest in capabilities that will compound over time. Instead of looking for shortcuts, you embrace the long path of skill development.

It also requires faith. You have to believe that preparation will eventually meet opportunity, even when you can't see how or when that will happen.

The overnight success myth is harmful because it discourages the very behavior that leads to real success: sustained effort over long periods without immediate rewards. When we understand that every breakthrough has a long prequel, we can embrace our own preparation phase instead of feeling frustrated by it.

The next time you see an overnight success story, remember: you're seeing the final chapter of a much longer book. The real story is in all the chapters that came before.
    `,
    footnotes: [
      "Malcolm Gladwell's '10,000-hour rule' popularized the idea that expertise requires extensive practice, though the exact number varies by domain.",
      "The concept of 'luck surface area'—increasing your chances of lucky breaks through preparation and exposure—explains how preparation creates opportunities.",
      "Naval Ravikant's observation that 'specific knowledge' takes years to develop but can't be easily replicated helps explain why preparation periods are so valuable.",
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
              Essays
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
