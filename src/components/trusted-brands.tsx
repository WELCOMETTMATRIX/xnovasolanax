const brands = [
  { name: "Solana", tag: "Layer 1", href: "https://solana.com" },
  { name: "Pump.fun", tag: "Launchpad", href: "https://pump.fun" },
  { name: "Jupiter", tag: "Aggregator", href: "https://jup.ag" },
  { name: "Raydium", tag: "DEX", href: "https://raydium.io" },
  { name: "DexScreener", tag: "Charts", href: "https://dexscreener.com" },
  { name: "Phantom", tag: "Wallet", href: "https://phantom.app" },
  { name: "Solflare", tag: "Wallet", href: "https://solflare.com" },
  { name: "Solscan", tag: "Explorer", href: "https://solscan.io" },
];

export function TrustedBrands() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl">
          Built on <span className="text-gradient-nova">trusted rails</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          XNOVA plugs into the tools millions of Solana traders already use every day.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {brands.map((b) => (
          <a
            key={b.name}
            href={b.href}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-card group flex flex-col items-center gap-1 rounded-2xl px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <span className="font-display text-lg text-foreground transition-colors group-hover:text-accent">
              {b.name}
            </span>
            <span className="text-[11px] tracking-widest text-muted-foreground uppercase">
              {b.tag}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Logos and names belong to their owners. Listing indicates compatibility, not endorsement or
        partnership.
      </p>
    </section>
  );
}
