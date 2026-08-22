import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContractBar } from "@/components/contract-bar";
import { PUMP_FUN_URL } from "@/lib/token";
import heroArt from "@/assets/xnova-hero.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About XNOVA — The Community Meme Token on Solana" },
      {
        name: "description",
        content:
          "Who is behind XNOVA, what we stand for, and the FAQ every holder asks. A fair-launched, community-owned meme token on Solana.",
      },
      { property: "og:title", content: "About XNOVA — The Community Meme Token on Solana" },
      {
        property: "og:description",
        content: "Our story, values and FAQ for the XNOVA family on Solana.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Community first", text: "Holders are the marketing department, the treasury council and the meme factory. Every big decision goes to the family." },
  { title: "Radical transparency", text: "No presale, no team bag, no secret wallets. What's on-chain is the whole story." },
  { title: "Ship in public", text: "Website, chart, tools and drops go live for everyone at the same moment. No insiders." },
  { title: "Fun is the utility", text: "Memes travel further than whitepapers. We build things people want to share." },
];

const faqs = [
  { q: "What is XNOVA?", a: "XNOVA is a community-owned meme token on the Solana blockchain, fair-launched on Pump.fun. It's built around a purple monster mascot and a culture of speed, memes and mutual upside." },
  { q: "Where can I buy it?", a: "Directly on Pump.fun using the contract address, or on Jupiter/any Solana DEX once liquidity graduates. Always paste the contract from this site to avoid fakes." },
  { q: "Is there a tax?", a: "No. XNOVA has 0% buy and sell tax. You only pay standard Solana network fees, which are fractions of a cent." },
  { q: "Did the team get an allocation?", a: "No team allocation and no presale. Everyone entered through the same public bonding curve." },
  { q: "Is XNOVA an investment?", a: "No. XNOVA is a meme token created for entertainment and community. It carries no promise of profit — only buy what you can afford to lose." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">
          About <span className="text-gradient-nova">XNOVA</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Next generation. Endless possibilities. A meme token built by the people who hold it.
        </p>
      </div>

      <div className="glass-card mt-10 grid gap-8 rounded-4xl p-8 md:grid-cols-2 md:p-10">
        <div className="space-y-4 text-muted-foreground">
          <h2 className="font-display text-2xl text-foreground">Our story</h2>
          <p>
            XNOVA started as a joke between a few Solana degens who were tired of coins with
            fifty-page whitepapers and zero personality. One purple monster later, the joke had a
            face — and a community.
          </p>
          <p>
            We launched fair on Pump.fun: no presale, no allocations, no promises. Just a contract,
            a mascot and an open invitation. Everything you see — the art, the raids, the memes —
            comes from holders who decided this thing deserved to exist.
          </p>
          <p>
            The mission is simple: make the most fun, most shareable meme token on Solana, and let
            the culture do the rest.
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
        <h2 className="font-display text-3xl">Ready to join the family?</h2>
        <ContractBar />
        <Button asChild variant="hero" size="xl">
          <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">Buy $XNOVA on Pump.fun</a>
        </Button>
      </div>
    </div>
  );
}
