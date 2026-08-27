import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContractBar } from "@/components/contract-bar";
import { PUMP_FUN_URL } from "@/lib/token";
import heroArt from "@/assets/xnova-hero.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About XNOVA — Professional Solana Community Token" },
      {
        name: "description",
        content:
          "Who is behind XNOVA, what we stand for, and the FAQ for a community-focused Solana token.",
      },
      { property: "og:title", content: "About XNOVA — Professional Solana Community Token" },
      {
        property: "og:description",
        content: "Our story, values, and FAQ for the XNOVA community on Solana.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Community first",
    text: "Community members drive awareness, feedback, and participation while project information remains public and easy to verify.",
  },
  {
    title: "Radical transparency",
    text: "Official project claims should be checked against public on-chain data and trusted ecosystem tools.",
  },
  {
    title: "Ship in public",
    text: "Website updates, chart links, tools, and documentation are maintained for public access.",
  },
  {
    title: "Participation matters",
    text: "Community content, education, and transparent resources help the project remain accessible.",
  },
];

const faqs = [
  {
    q: "What is XNOVA?",
    a: "XNOVA is a community-focused token on the Solana blockchain. It is built around clear mint verification, accessible project resources, and a recognizable purple mascot.",
  },
  {
    q: "Where can I buy it?",
    a: "Use the official project links and always verify the mint address before interacting with any token, swap, or third-party service.",
  },
  {
    q: "Is there a tax?",
    a: "The project materials list 0% buy and sell tax. Always verify current trading details through reputable Solana tools before transacting.",
  },
  {
    q: "Did the team get an allocation?",
    a: "Project materials state no team allocation and no presale. Users should independently verify claims with public on-chain data where possible.",
  },
  {
    q: "Is XNOVA an investment?",
    a: "No. XNOVA is a meme token created for entertainment and community. It carries no promise of profit — only buy what you can afford to lose.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">
          About <span className="text-gradient-nova">XNOVA</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Next generation. Endless possibilities. A Solana community token built around
          transparency.
        </p>
      </div>

      <div className="glass-card mt-10 grid gap-8 rounded-4xl p-8 md:grid-cols-2 md:p-10">
        <div className="space-y-4 text-muted-foreground">
          <h2 className="font-display text-2xl text-foreground">Our story</h2>
          <p>
            XNOVA began as a Solana community concept with a simple goal: make token information,
            participation, and verification easier for everyday users. The purple mascot gives the
            project a recognizable identity while the website keeps the focus on clarity.
          </p>
          <p>
            Project materials emphasize public access, official mint verification, and responsible
            communication. Users should verify token details through trusted Solana explorers and
            understand that crypto participation involves risk.
          </p>
          <p>
            The mission is simple: build a professional, transparent, and community-friendly XNOVA
            experience on Solana.
          </p>
        </div>
        <img
          src={heroArt.url}
          alt="XNOVA key art with the purple monster mascot in space"
          loading="lazy"
          className="w-full rounded-3xl border border-border object-cover"
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {values.map((v) => (
          <div key={v.title} className="glass-card rounded-3xl p-6">
            <h3 className="font-display text-lg">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl text-center">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="glass-card group rounded-2xl p-5">
              <summary className="cursor-pointer list-none font-display text-base">
                {f.q}
                <span className="float-right text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="glass-card mt-14 flex flex-col items-center gap-4 rounded-4xl p-10 text-center">
        <h2 className="font-display text-3xl">Ready to join the community?</h2>
        <ContractBar />
        <Button asChild variant="hero" size="xl">
          <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">
            Buy $XNOVA on Pump.fun
          </a>
        </Button>
      </div>
    </div>
  );
}
