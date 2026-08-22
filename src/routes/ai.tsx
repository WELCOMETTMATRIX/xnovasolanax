import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, ShieldAlert, Gauge, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { askNova } from "@/lib/nova-ai.functions";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "NOVA AI — The XNOVA Onchain Assistant" },
      {
        name: "description",
        content:
          "NOVA AI answers your XNOVA questions instantly: how to buy on Solana, wallet setup, roadmap details and scam protection.",
      },
      { property: "og:title", content: "NOVA AI — The XNOVA Onchain Assistant" },
      {
        property: "og:description",
        content: "Ask NOVA AI anything about XNOVA, Solana wallets and how to buy safely.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiPage,
});

type Msg = { role: "user" | "assistant"; content: string };

const capabilities = [
  { icon: BookOpen, title: "Onboarding brain", text: "Explains wallets, SOL, slippage and Pump.fun in plain language — no crypto degree required." },
  { icon: ShieldAlert, title: "Scam radar", text: "Teaches you how to verify the real contract and spot the fake XNOVA copies before you click." },
  { icon: Gauge, title: "Market context", text: "Walks you through reading the live chart, liquidity and volume without the noise." },
  { icon: Sparkles, title: "Meme co-pilot", text: "Drafts raid captions, thread hooks and meme ideas for the community in seconds." },
];

const suggestions = [
  "How do I buy XNOVA step by step?",
  "How do I check I'm on the real contract?",
  "What's on the XNOVA roadmap?",
  "Explain Solana to a total beginner",
];

function AiPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hey, I'm NOVA AI 👾 — your XNOVA guide. Ask me how to buy, how to stay safe, or anything about Solana.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const ask = useServerFn(askNova);

  const mutation = useMutation({
    mutationFn: (next: Msg[]) => ask({ data: { messages: next.filter((m) => m.role !== "assistant" || next.indexOf(m) > 0) } }),
    onSuccess: (res) => setMessages((m) => [...m, { role: "assistant", content: res.reply }]),
    onError: () =>
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Connection glitched. Try that question one more time." },
      ]),
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, mutation.isPending]);

  function send(text: string) {
    const clean = text.trim();
    if (!clean || mutation.isPending) return;
    const next: Msg[] = [...messages, { role: "user", content: clean.slice(0, 2000) }];
    setMessages(next);
    setInput("");
    mutation.mutate(next.slice(1));
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
          <Bot className="h-3.5 w-3.5" /> Our AI system
        </span>
        <h1 className="font-display mt-5 text-4xl sm:text-5xl">
          Meet <span className="text-gradient-nova">NOVA AI</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          An assistant trained on everything XNOVA — so nobody in the family ever has to guess how
          this works.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <div key={c.title} className="glass-card rounded-3xl p-6">
            <div className="mb-4 inline-flex rounded-2xl bg-primary/20 p-3 text-accent">
              <c.icon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-lg">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="glass-card mt-10 overflow-hidden rounded-4xl">
        <div className="flex items-center gap-3 border-b border-border/60 px-6 py-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="font-display text-sm tracking-widest uppercase">NOVA AI · online</span>
        </div>

        <div ref={scrollRef} className="max-h-[26rem] space-y-4 overflow-y-auto px-6 py-6">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
              <div
                className={
                  m.role === "user"
                    ? "max-w-[80%] rounded-3xl rounded-br-lg bg-primary px-5 py-3 text-sm text-primary-foreground"
                    : "max-w-[80%] rounded-3xl rounded-bl-lg border border-border/60 bg-background/60 px-5 py-3 text-sm whitespace-pre-wrap text-foreground"
                }
              >
                {m.content}
              </div>
            </div>
          ))}
          {mutation.isPending ? (
            <div className="flex justify-start">
              <div className="rounded-3xl rounded-bl-lg border border-border/60 bg-background/60 px-5 py-3 text-sm text-muted-foreground">
                NOVA is thinking…
              </div>
            </div>
          ) : null}
        </div>

        <div className="border-t border-border/60 px-6 py-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask NOVA AI anything about XNOVA…"
              maxLength={2000}
              aria-label="Message NOVA AI"
            />
            <Button type="submit" variant="hero" disabled={mutation.isPending}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            NOVA AI can make mistakes and never gives financial advice. Always verify the contract
            yourself.
          </p>
        </div>
      </div>
    </div>
  );
}
