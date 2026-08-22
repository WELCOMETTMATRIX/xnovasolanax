import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTRACT_ADDRESS } from "@/lib/token";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Risk Disclaimer — XNOVA" },
      {
        name: "description",
        content:
          "The rules for using the XNOVA site and community, plus a plain-language risk disclaimer for the $XNOVA meme token on Solana.",
      },
      { property: "og:title", content: "Terms & Risk Disclaimer — XNOVA" },
      {
        property: "og:description",
        content: "Site rules and risk disclaimer for the XNOVA meme token community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl">Terms &amp; Risk Disclaimer</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: 22 August 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">1. Nothing here is financial advice</h2>
          <p>
            XNOVA is a meme token created for entertainment and community. Nothing on this site is
            investment, financial, legal or tax advice, and nothing is an offer to sell a security.
            Do your own research and only ever risk what you can afford to lose entirely.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">2. Risk of total loss</h2>
          <p>
            Meme tokens are extremely volatile. The price of $XNOVA can go to zero. Liquidity can
            disappear, markets can move against you in seconds, and there is no refund, no
            protection fund and no guarantee of any future value, listing, utility or return.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">3. Verify the contract</h2>
          <p>
            The only official XNOVA contract address is:
          </p>
          <p className="rounded-2xl border border-border/60 bg-background/50 px-4 py-3 font-mono text-xs break-all text-foreground">
            {CONTRACT_ADDRESS}
          </p>
          <p>
            Copies and imposter tokens are common. Always check the address before you swap. We are
            not responsible for funds lost to a fake token, a phishing site or a malicious link.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">4. Your wallet, your keys</h2>
          <p>
            You are solely responsible for your wallet, your keys and every transaction you sign. We
            never ask for a seed phrase or private key. Anyone who does is scamming you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">5. Community rules</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>No spam, scam links, or impersonation of team or community members.</li>
            <li>No harassment, hate speech, or threats.</li>
            <li>No posting of other people&apos;s private information.</li>
            <li>Messages that break these rules may be removed without notice.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">6. NOVA AI</h2>
          <p>
            NOVA AI is an automated assistant. It can be wrong, out of date or incomplete, and it
            does not give financial advice. Treat every answer as a starting point and verify
            anything that matters on-chain.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">7. Third-party services</h2>
          <p>
            Links to Pump.fun, Jupiter, DexScreener, Solscan, wallets and other tools are provided
            for convenience. Those services are independent, have their own terms, and are not
            partners or endorsers of XNOVA unless explicitly stated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">8. Site availability</h2>
          <p>
            The site is provided &quot;as is&quot; with no warranty. Data such as charts and market
            statistics comes from third-party sources and may be delayed or inaccurate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">9. Your responsibility</h2>
          <p>
            You are responsible for complying with the laws of your own country, including any rules
            about holding or trading digital assets. If meme tokens are restricted where you live, do
            not participate.
          </p>
        </section>

        <p className="text-xs">
          See also our <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
