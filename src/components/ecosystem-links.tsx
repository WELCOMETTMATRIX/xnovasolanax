import { BookOpen, Github, Wallet, Globe, Rocket } from "lucide-react";
import {
  GITBOOK_URL,
  GITHUB_GITBOOK_URL,
  GITHUB_WALLET_URL,
  GITHUB_WEBSITE_URL,
  XNOVA_TERMINAL_URL,
  XNOVA_WEBSITE_URL,
} from "@/lib/links";
import { PUMP_FUN_URL } from "@/lib/token";

const resources = [
  {
    icon: Rocket,
    name: "Pump.fun",
    desc: "The official XNOVA coin page — buy, sell and track the bonding curve.",
    href: PUMP_FUN_URL,
    tag: "Trade",
  },
  {
    icon: BookOpen,
    name: "GitBook Docs",
    desc: "Full project documentation: vision, tokenomics, guides and updates.",
    href: GITBOOK_URL,
    tag: "Docs",
  },
  {
    icon: Github,
    name: "GitBook Source",
    desc: "Open-source repository behind the XNOVA documentation.",
    href: GITHUB_GITBOOK_URL,
    tag: "GitHub",
  },
  {
    icon: Wallet,
    name: "XNOVA Wallet App",
    desc: "Open-source wallet app repository — part of the growing ecosystem.",
    href: GITHUB_WALLET_URL,
    tag: "GitHub",
  },
  {
    icon: Globe,
    name: "XNOVA Terminal",
    desc: "The XNOVA terminal web experience.",
    href: XNOVA_TERMINAL_URL,
    tag: "Website",
  },
  {
    icon: Globe,
    name: "XNOVA Website",
    desc: "Main public website deployment for the project.",
    href: XNOVA_WEBSITE_URL,
    tag: "Website",
  },
  {
    icon: Github,
    name: "Website Source",
    desc: "Open-source repository for the XNOVA Solana website.",
    href: GITHUB_WEBSITE_URL,
    tag: "GitHub",
  },
];

export function EcosystemLinks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl">
          The <span className="text-gradient-nova">XNOVA ecosystem</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Docs, code, apps and official deployments — everything in one place, fully transparent.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <a
            key={r.name}
            href={r.href}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-card group flex flex-col rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex rounded-2xl bg-accent/15 p-3 text-accent">
                <r.icon className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-border/60 px-3 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                {r.tag}
              </span>
            </div>
            <h3 className="font-display text-lg">{r.name}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
