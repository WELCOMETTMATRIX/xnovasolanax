import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import mascot from "@/assets/mascot.png";
import { PUMP_FUN_URL } from "@/lib/token";

const links = [
  { to: "/", label: "Home" },
  { to: "/chart", label: "Chart" },
  { to: "/ai", label: "NOVA AI" },
  { to: "/community", label: "Chat" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={mascot} alt="XNOVA mascot" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-xl tracking-wide text-gradient-nova">XNOVA</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">
              Buy XNOVA
            </a>
          </Button>
          <button
            aria-label="Toggle menu"
            className="rounded-lg border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="hero" className="mt-2">
            <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">
              Buy XNOVA
            </a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
