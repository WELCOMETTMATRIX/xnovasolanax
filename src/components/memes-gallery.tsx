import { ImagePlay } from "lucide-react";
import { MEMES } from "@/lib/memes";

export function MemesGallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
          <ImagePlay className="h-3.5 w-3.5" /> Meme vault
        </span>
        <h2 className="font-display mt-5 text-4xl">
          Community <span className="text-gradient-nova">memes & videos</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Fresh drops straight from the family. Save, share, and spread XNOVA across the galaxy.
        </p>
      </div>

      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {MEMES.map((m, i) =>
          m.type === "video" ? (
            <video
              key={i}
              src={m.src}
              controls
              playsInline
              preload="metadata"
              className="glass-card w-full rounded-2xl break-inside-avoid"
            />
          ) : (
            <img
              key={i}
              src={m.src}
              alt={`XNOVA community meme ${i + 1}`}
              loading="lazy"
              className="glass-card w-full rounded-2xl break-inside-avoid transition-transform hover:scale-[1.02]"
            />
          ),
        )}
      </div>
    </section>
  );
}
