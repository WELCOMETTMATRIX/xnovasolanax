import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PUMP_FUN_URL } from "@/lib/token";
import mascot from "@/assets/mascot.png";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "XNOVA Roadmap — From Fair Launch to Nova Everywhere" },
      {
        name: "description",
        content:
          "The XNOVA roadmap: fair launch on Pump.fun, community growth, DEX graduation, listings and culture expansion across Solana.",
      },
      { property: "og:title", content: "XNOVA Roadmap — From Fair Launch to Nova Everywhere" },
      {
        property: "og:description",
        content: "Four phases: Believe, HODL, Grow, XNOVA Everywhere. See what's shipping next.",
      },
    ],
  }),
  component: RoadmapPage,
});

type Status = "done" | "active" | "next";

const phases: { phase: string; title: string; status: Status; items: string[] }[] = [
  {
    phase: "Phase 1",
    title: "Believe — Ignition",
    status: "done",
    items: [
      "Fair launch on Pump.fun with zero presale",
      "Contract published and verified on Solscan",
      "Mascot, brand identity and meme kit released",
      "First 1,000 holders onboarded",
    ],
  },
  {
    phase: "Phase 2",
    title: "HODL — Momentum",
    status: "active",
    items: [
      "Official website with live chart integration",
      "24/7 community raids and meme contests",
      "Trending pushes on DexScreener and Dextools",
      "Influencer and community-caller partnerships",
    ],
  },
  {
    phase: "Phase 3",
    title: "Grow — Graduation",
    status: "next",
    items: [
      "Bonding curve graduation and DEX liquidity",
      "CoinGecko and CoinMarketCap listings",
      "Holder dashboard and on-chain leaderboard",
      "Merch drop for the XNOVA family",
    ],
  },
  {
    phase: "Phase 4",
    title: "XNOVA Everywhere",
    status: "next",
    items: [
      "Centralized exchange listings",
      "NFT collection of the XNOVA monster crew",
      "Community treasury for creators and builders",
      "Global meme takeover — nova everywhere",
    ],
  },
];

const statusMeta: Record<Status, { label: string; icon: typeof Circle; className: string }> = {
  done: { label: "Completed", icon: CheckCircle2, className: "text-accent" },
  active: { label: "In progress", icon: Loader2, className: "text-primary" },
  next: { label: "Upcoming", icon: Circle, className: "text-muted-foreground" },
};

function RoadmapPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">
          The <span className="text-gradient-nova">XNOVA</span> roadmap
        </h1>
        <p className="mt-3 text-muted-foreground">
          From zero to nova. Every phase is community-first and shipped in public.
        </p>
      </div>

      <div className="relative mt-12 space-y-6 before:absolute before:top-0 before:bottom-0 before:left-[27px] before:w-px before:bg-border md:before:left-1/2">
        {phases.map((p, i) => {
          const meta = statusMeta[p.status];
          const Icon = meta.icon;
          return (
            <div
              key={p.phase}
              className={`relative flex gap-5 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}
            >
              <div
                className={`relative z-10 mt-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-card ${meta.className} ${
                  i % 2 ? "md:absolute md:-left-7" : "md:absolute md:-right-7 md:order-2"
                }`}
              >
                <Icon className={`h-6 w-6 ${p.status === "active" ? "animate-spin" : ""}`} />
              </div>
              <div className="glass-card w-full rounded-3xl p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-xs tracking-widest text-accent uppercase">
                    {p.phase}
                  </span>
                  <span className="rounded-full border border-border px-3 py-0.5 text-xs text-muted-foreground">
                    {meta.label}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass-card mt-14 flex flex-col items-center gap-4 rounded-4xl p-10 text-center">
        <img src={mascot} alt="XNOVA mascot" width={120} height={120} loading="lazy" className="w-24 animate-float" />
        <h2 className="font-display text-3xl">Get in before the next phase</h2>
        <p className="max-w-md text-muted-foreground">
          Every milestone gets harder to enter early. The best seat is the one you take now.
        </p>
        <Button asChild variant="hero" size="xl">
          <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">Buy $XNOVA</a>
        </Button>
      </div>
    </div>
  );
}
