import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Coins,
  Users,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wallet,
  ArrowRightLeft,
  LineChart,
  PartyPopper,
  Bot,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContractBar } from "@/components/contract-bar";
import { MissionSection } from "@/components/mission";
import { TrustedBrands } from "@/components/trusted-brands";
import mascot from "@/assets/mascot.png";
import { DEXSCREENER_URL, PUMP_FUN_URL } from "@/lib/token";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XNOVA — Professional Solana Community Token" },
      {
        name: "description",
        content:
          "XNOVA is a community-powered Solana token with official mint details, live chart access, and clear risk guidance.",
      },
      { property: "og:title", content: "XNOVA — Professional Solana Community Token" },
      {
        property: "og:description",
        content:
          "Community-powered Solana token with live chart access, roadmap details, and official mint verification.",
      },
    ],
  }),
  component: Home,
});

const perks = [
  {
    icon: Zap,
    title: "Fast Solana settlement",
    text: "Designed around Solana's fast confirmation times and low-friction user experience.",
  },
  {
    icon: Coins,
    title: "Low network costs",
    text: "Solana network fees keep basic interactions accessible for community members.",
  },
  {
    icon: Users,
    title: "Community powered",
    text: "Community members help shape awareness, feedback, and ecosystem direction.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by default",
    text: "Official mint details are published clearly, and on-chain activity can be reviewed publicly.",
  },
  {
    icon: Sparkles,
    title: "Built for participation",
    text: "Brand assets, community content, and project updates are designed to be easy to share.",
  },
  {
    icon: Rocket,
    title: "Forward-looking roadmap",
    text: "The roadmap highlights future utilities, integrations, and community programs without guarantees.",
  },
];

const steps = [
  {
    icon: Wallet,
    title: "Get a wallet",
    text: "Install Phantom or Solflare and fund it with SOL.",
  },
  {
    icon: ArrowRightLeft,
    title: "Open Pump.fun",
    text: "Use the official link and confirm the mint address before any transaction.",
  },
  {
    icon: LineChart,
    title: "Swap for XNOVA",
    text: "Review the details, confirm in your wallet, and keep a record of your transaction.",
  },
  {
    icon: PartyPopper,
    title: "Join the family",
    text: "Join official channels, follow updates, and help strengthen the community.",
  },
];

const stats = [
  { label: "Chain", value: "Solana" },
  { label: "Launch", value: "Fair, on Pump.fun" },
  { label: "Team tokens", value: "0%" },
  { label: "Ticker", value: "$XNOVA" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-16 pb-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[image:var(--gradient-glow)] animate-pulse-glow" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
              Professional Solana community token
            </span>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient-nova">XNOVA</span>
              <br />
              Built on Solana. Powered by community.
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Next generation, endless possibilities. XNOVA combines Solana speed with transparent
              project information, official mint verification, and a community-first ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">
                  Buy $XNOVA on Pump.fun
                </a>
              </Button>
              <Button asChild variant="outlineNova" size="xl">
                <Link to="/chart">View live chart</Link>
              </Button>
            </div>
            <ContractBar />
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <img
              src={mascot}
              alt="XNOVA purple monster mascot holding the X coin"
              width={1024}
              height={1024}
              className="animate-float relative w-72 drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] sm:w-96"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border/60 bg-card/40 py-3">
        <div className="animate-marquee flex w-max gap-8 font-display text-sm tracking-widest whitespace-nowrap text-muted-foreground uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>Speed</span>
              <span className="text-accent">◆</span>
              <span>Utility</span>
              <span className="text-primary">◆</span>
              <span>Community</span>
              <span className="text-accent">◆</span>
              <span>Future</span>
              <span className="text-primary">◆</span>
              <span>Join the XNOVA community</span>
              <span className="text-accent">◆</span>
              <span>Transparent project information</span>
              <span className="text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
            <div className="font-display text-xl text-gradient-nova">{s.value}</div>
            <div className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* Why */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl">
            Why <span className="text-gradient-nova">XNOVA</span>?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you love about Solana, wrapped in the friendliest monster in the galaxy.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div
              key={p.title}
              className="glass-card group rounded-3xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-primary/20 p-3 text-accent">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to buy */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl">How to buy in 4 steps</h2>
          <p className="mt-3 text-muted-foreground">
            A simple overview for users who understand crypto risks.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="glass-card relative rounded-3xl p-6">
              <span className="font-display absolute top-4 right-5 text-4xl text-primary/30">
                {i + 1}
              </span>
              <div className="mb-4 inline-flex rounded-2xl bg-accent/15 p-3 text-accent">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">
              Start buying now
            </a>
          </Button>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass-card grid gap-8 rounded-4xl p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="font-display text-4xl">Tokenomics</h2>
            <p className="mt-3 text-muted-foreground">
              Simple by design. Published project details emphasize clear token information,
              official mint verification, and transparent user guidance.
            </p>
            <div className="mt-6">
              <ContractBar />
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["Buy / sell tax", "0%"],
              ["Team & insider allocation", "0%"],
              ["Liquidity", "Bonding curve on Pump.fun"],
              ["Supply", "Fixed at launch"],
              ["Mint authority", "Renounced at graduation"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/40 px-5 py-4"
              >
                <span className="text-sm text-muted-foreground">{k}</span>
                <span className="font-display text-sm text-accent">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MissionSection />
      <TrustedBrands />

      {/* AI + community */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="glass-card flex flex-col rounded-4xl p-8">
            <div className="mb-4 inline-flex w-fit rounded-2xl bg-primary/20 p-3 text-accent">
              <Bot className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl">NOVA AI</h2>
            <p className="mt-3 flex-1 text-muted-foreground">
              NOVA AI helps answer XNOVA questions clearly — how to verify the official mint, review
              project information, navigate charts, and understand risk disclosures.
            </p>
            <Button asChild variant="hero" className="mt-6 w-fit">
              <Link to="/ai">Ask NOVA AI</Link>
            </Button>
          </div>

          <div className="glass-card flex flex-col rounded-4xl p-8">
            <div className="mb-4 inline-flex w-fit rounded-2xl bg-accent/20 p-3 text-accent">
              <MessagesSquare className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl">Community chat</h2>
            <p className="mt-3 flex-1 text-muted-foreground">
              A live, public room for the family. Pick a nickname and talk to holders in real time —
              no signup, no invite link, no gatekeeping.
            </p>
            <Button asChild variant="neon" className="mt-6 w-fit">
              <Link to="/community">Enter the chat</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass-card relative overflow-hidden rounded-4xl px-6 py-14 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-glow)] opacity-70" />
          <div className="relative mx-auto max-w-2xl space-y-5">
            <img
              src={mascot}
              alt="XNOVA mascot celebrating"
              width={160}
              height={160}
              loading="lazy"
              className="animate-float mx-auto w-32"
            />
            <h2 className="font-display text-4xl">Hold XNOVA. Build XNOVA. Be XNOVA.</h2>
            <p className="text-muted-foreground">
              The family is growing every hour. Grab your bag, watch the chart, and bring a friend.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="xl">
                <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">
                  Buy on Pump.fun
                </a>
              </Button>
              <Button asChild variant="neon" size="xl">
                <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer noopener">
                  Open DexScreener
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
