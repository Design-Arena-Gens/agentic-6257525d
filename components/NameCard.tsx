import { ReactNode } from "react";

type Verdict = "standout" | "usable" | "risky";

const verdictStyles: Record<Verdict, string> = {
  standout: "bg-emerald-500/20 text-emerald-200 border-emerald-400/60",
  usable: "bg-sky-500/15 text-sky-200 border-sky-400/60",
  risky: "bg-rose-500/15 text-rose-200 border-rose-400/60"
};

interface NameCardProps {
  name: string;
  verdict: Verdict;
  headline: string;
  positioning: string;
  differentiators: ReadonlyArray<string>;
  concerns: ReadonlyArray<string>;
  recommendations: ReactNode;
}

export function NameCard({
  name,
  verdict,
  headline,
  positioning,
  differentiators,
  concerns,
  recommendations
}: NameCardProps) {
  return (
    <article className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40 backdrop-blur">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Name Review</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-100">{name}</h2>
        </div>
        <span className={`rounded-full px-4 py-2 text-sm font-medium uppercase tracking-widest ${verdictStyles[verdict]}`}>
          {verdict}
        </span>
      </header>
      <p className="text-lg text-slate-200">{headline}</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">Positioning Snapshot</dt>
          <dd className="text-sm text-slate-200/90">{positioning}</dd>
        </div>
        <div className="space-y-1">
          <dt className="text-xs font-semibold uppercase tracking-widest text-slate-400">Signature Angle</dt>
          <dd className="text-sm text-slate-200/90">{differentiators.join(" • ")}</dd>
        </div>
      </dl>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">What Works</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
            {differentiators.map((point) => (
              <li key={point} className="rounded-lg border border-slate-700/70 bg-slate-800/70 px-4 py-2">
                {point}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Watch Outs</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
            {concerns.map((point) => (
              <li key={point} className="rounded-lg border border-slate-700/70 bg-slate-800/70 px-4 py-2">
                {point}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">Next Move</h3>
        <div className="mt-3 rounded-xl border border-slate-700/70 bg-slate-800/70 p-4 text-sm text-slate-200/90">
          {recommendations}
        </div>
      </section>
    </article>
  );
}
