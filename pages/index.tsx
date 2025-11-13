import Head from "next/head";
import { NameCard } from "@/components/NameCard";

const nameAnalyses = [
  {
    name: "squaretrigger.com",
    verdict: "standout",
    headline: "Feels sharp, memorable, and tech-forward—great for a performance-driven digital partner.",
    positioning:
      "Signals you orchestrate pivotal brand ‘triggers’ that unlock measurable growth across digital touchpoints.",
    differentiators: [
      "Modern, productized energy that hints at experimentation and rapid iteration",
      "Visual imagery (squares, buttons, pop-ups) that can translate into strong brand design",
      "Short, sticky phonetics that stand apart in a crowded agency marketplace"
    ],
    concerns: [
      "Slightly abstract—requires a succinct tagline to connect the metaphor to marketing outcomes",
      "May attract tech/startup clients more than traditional businesses"
    ],
    recommendations: (
      <ul className="space-y-2">
        <li>Lean into a brand story around activating the exact digital triggers that convert browsers into buyers.</li>
        <li>Create bold geometric visuals and kinetic web interactions to reinforce the ‘trigger’ concept.</li>
      </ul>
    )
  },
  {
    name: "Digitalwebz.com",
    verdict: "risky",
    headline: "Reads dated and hard-to-trust—hurts perceived expertise before prospects meet you.",
    positioning: "Suggests a generic web shop rather than a strategic growth partner.",
    differentiators: [
      "Clear that you work in the digital/web space",
      "Simple to pronounce and easy to spell despite the trailing “z”"
    ],
    concerns: [
      "The “z” ending feels early-2000s and undermines credibility with premium clients",
      "Too broad; you’ll blend in with template-driven freelance marketplaces",
      "Does not hint at strategic marketing, data, or creative differentiation"
    ],
    recommendations: (
      <ul className="space-y-2">
        <li>Consider a rename or a modified spelling (e.g., drop the “z”) if you target higher-value engagements.</li>
        <li>If you keep it, pair with proof of results front-and-center to rebuild trust quickly.</li>
      </ul>
    )
  },
  {
    name: "Digitalvismo.com",
    verdict: "usable",
    headline: "Distinct enough to own, but the meaning is vague—needs a narrative to land.",
    positioning: "Feels like a blend of “vision” and “cosmo”, hinting at forward-looking creative strategy.",
    differentiators: [
      "Unique string that is almost certainly brandable and ownable",
      "Phonetically smooth; lends itself to a sleek visual identity",
      "Works globally—no awkward translations or slang conflicts surfaced"
    ],
    concerns: [
      "Without context, prospective clients won’t know what “vismo” conveys",
      "Harder to remember or spell on first exposure compared with literal names"
    ],
    recommendations: (
      <ul className="space-y-2">
        <li>Craft messaging around “bringing digital vision into motion” to give the coined word substance.</li>
        <li>Use animation/motion motifs to visualize how ideas move from concept to measurable outcomes.</li>
      </ul>
    )
  },
  {
    name: "Madmindsmarketing.com",
    verdict: "usable",
    headline: "Edgy personality and collaborative vibe—good fit if you sell bold creative campaigns.",
    positioning: "Promises unconventional thinkers who turn ambitious ideas into full-funnel marketing plays.",
    differentiators: [
      "Memorable consonance and attitude suggest a fearless team",
      "Instantly communicates you’re a marketing agency",
      "Versatile for branded content, podcasts, and community-building"
    ],
    concerns: [
      "‘Mad’ can imply chaotic or unstructured; enterprise buyers may hesitate",
      "Long domain; consider using a separator or shorter URL in campaigns",
      "Needs polished branding to avoid leaning too far into “edgy startup” territory"
    ],
    recommendations: (
      <ul className="space-y-2">
        <li>Back the rebellious tone with case studies highlighting disciplined execution and ROI.</li>
        <li>Design a visual identity that pairs bold typography with clean layouts to balance the energy.</li>
      </ul>
    )
  }
] as const;

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Agency Name Feedback</title>
        <meta
          name="description"
          content="Strategic feedback on potential brand names for a digital marketing agency."
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pb-24">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pt-20">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Naming Intelligence Report
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-100 md:text-5xl">
              Feedback for Your Digital Marketing Agency Names
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
              Each assessment looks at memorability, positioning potential, and market fit so you can choose a name
              that resonates with the clients you want to attract.
            </p>
          </header>
          <section className="grid gap-8">
            {nameAnalyses.map((analysis) => (
              <NameCard key={analysis.name} {...analysis} />
            ))}
          </section>
          <footer className="mx-auto max-w-2xl text-center text-sm text-slate-400">
            Need more options? Spin out adjacent concepts by riffing on the winning attributes—distinct visuals,
            confident positioning, and proof-driven storytelling.
          </footer>
        </div>
      </main>
    </>
  );
}
