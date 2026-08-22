import { Target, HeartHandshake, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "The mission",
    text: "Make on-chain culture feel effortless. XNOVA turns a meme into a front door for people who have never touched Solana before.",
  },
  {
    icon: HeartHandshake,
    title: "The promise",
    text: "No presale, no team bag, no silent unlocks. Everything we build ships in public and every wallet is verifiable on-chain.",
  },
  {
    icon: Globe2,
    title: "The horizon",
    text: "A self-running community: AI tools, live data, a global chat and merch — all orbiting one purple monster.",
  },
];

export function MissionSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="glass-card relative overflow-hidden rounded-4xl p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-glow)] opacity-50" />
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
              Our mission
            </span>
            <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
              Give every degen a <span className="text-gradient-nova">fair shot</span> at the fun
              part of crypto.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most tokens are built for insiders. XNOVA is built for the person who found it on a
              timeline at 2am. Same entry, same information, same upside — one community, one
              contract, zero gatekeepers.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl border border-border/60 bg-background/50 p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-primary/20 p-3 text-accent">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
