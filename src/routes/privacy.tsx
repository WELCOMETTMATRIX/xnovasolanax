import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — XNOVA" },
      {
        name: "description",
        content:
          "How the XNOVA website handles data: what we store for the community chat and NOVA AI, and what we never collect.",
      },
      { property: "og:title", content: "Privacy Policy — XNOVA" },
      { property: "og:description", content: "How the XNOVA website handles your data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: 22 August 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">Who we are</h2>
          <p>
            This policy covers the XNOVA community website. XNOVA is a community meme token on the
            Solana blockchain. The site is informational and does not custody funds, hold private
            keys or process payments.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">What we collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-foreground">Community chat.</span> When you post a message we
              store the nickname you typed, the message text and the time it was sent. Everything you
              post is public to every visitor. Your nickname is also saved in your browser so you
              don&apos;t have to retype it.
            </li>
            <li>
              <span className="text-foreground">NOVA AI.</span> Questions you send to the assistant
              are forwarded to our AI provider to generate a reply. We do not attach an account or a
              profile to those questions.
            </li>
            <li>
              <span className="text-foreground">Technical logs.</span> Our hosting and backend
              providers keep standard request logs (such as IP address and browser type) for
              security and abuse prevention.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">What we never collect</h2>
          <p>
            We never ask for and never store seed phrases, private keys or wallet signatures. No
            member of the XNOVA community will ever ask you for them. There is no account system on
            this site, so we do not collect names, emails or payment details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">Cookies and tracking</h2>
          <p>
            The site uses browser local storage for small preferences such as your chat nickname. We
            do not run advertising trackers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">Public blockchain data</h2>
          <p>
            Solana is a public ledger. Any transaction involving the XNOVA contract is visible to
            anyone through explorers such as Solscan. That data is published by the blockchain, not
            by us, and we cannot delete or modify it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">Removing your data</h2>
          <p>
            Want a chat message removed? Ask in the community chat or through our social channels and
            we&apos;ll take it down. Because chat posts are anonymous, we may not be able to verify
            who wrote a specific message.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl text-foreground">Changes</h2>
          <p>
            We may update this policy as the site grows. The date at the top always shows the current
            version.
          </p>
        </section>

        <p className="text-xs">
          See also our <Link to="/terms" className="text-accent hover:underline">Terms &amp; Risk Disclaimer</Link>.
        </p>
      </div>
    </div>
  );
}
