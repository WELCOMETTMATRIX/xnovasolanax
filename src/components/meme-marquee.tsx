import { MEMES } from "@/lib/memes";

const images = MEMES.filter((m) => m.type === "image");
const rowA = images.filter((_, i) => i % 2 === 0);
const rowB = images.filter((_, i) => i % 2 === 1);

function Row({ items, reverse }: { items: typeof images; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-4">
            {items.map((m, i) => (
              <img
                key={`${dup}-${i}`}
                src={m.src}
                alt="XNOVA community meme"
                loading="lazy"
                className="h-36 w-auto rounded-2xl border border-border/60 object-cover shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 sm:h-48"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MemeMarquee() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-glow)] opacity-40 animate-pulse-glow" />
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <h2 className="font-display text-4xl">
          The <span className="text-gradient-nova">meme engine</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Community-made art in constant motion — the culture never stops scrolling.
        </p>
      </div>
      <div className="relative mt-10 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
