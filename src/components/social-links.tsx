import { Send, Twitter, MessageCircle, Bot, Activity, Users } from "lucide-react";
import {
  TELEGRAM_URL,
  TELEGRAM_CHAT2_URL,
  TELEGRAM_HUB_BOT_URL,
  TELEGRAM_PRICE_BOT_URL,
  TWITTER_URL,
  DISCORD_URL,
} from "@/lib/links";

const channels = [
  {
    icon: Send,
    name: "Telegram — Market Chat",
    handle: "t.me/XNOVASOLANAMARKET",
    desc: "Main community channel for market talk and updates.",
    href: TELEGRAM_URL,
  },
  {
    icon: Users,
    name: "Telegram — Community Chat 2",
    handle: "t.me/XNOVASOLANA",
    desc: "Second hangout for the XNOVA family.",
    href: TELEGRAM_CHAT2_URL,
  },
  {
    icon: Bot,
    name: "XNOVA Hub Bot",
    handle: "@XNOVAHBBOT",
    desc: "Bot hub & social app platform for the ecosystem.",
    href: TELEGRAM_HUB_BOT_URL,
  },
  {
    icon: Activity,
    name: "Price & Buy/Sell Bot",
    handle: "@XNOVASOLANABOT",
    desc: "Live price pings, buy/sell alerts and group welcomer.",
    href: TELEGRAM_PRICE_BOT_URL,
  },
  {
    icon: Twitter,
    name: "Twitter / X",
    handle: "@XNOVASOLANA",
    desc: "Announcements, memes and community highlights.",
    href: TWITTER_URL,
  },
  {
    icon: MessageCircle,
    name: "Discord",
    handle: "discord.gg/WgFnMJzkAs",
    desc: "Voice chats, support and community events.",
    href: DISCORD_URL,
  },
];

export function SocialLinks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl">
          Join the <span className="text-gradient-nova">official channels</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Every place the XNOVA family lives. Always verify you're in an official channel — admins
          never DM first.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-card group flex flex-col rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="mb-4 inline-flex w-fit rounded-2xl bg-primary/20 p-3 text-accent">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg">{c.name}</h3>
            <p className="mt-0.5 text-xs font-medium text-accent">{c.handle}</p>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
