import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MessagesSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { PUMP_FUN_URL } from "@/lib/token";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "XNOVA Community Chat — Talk to the Family Live" },
      {
        name: "description",
        content:
          "Jump into the live XNOVA community chat. Share memes, ask questions and talk to holders in real time — no signup needed.",
      },
      { property: "og:title", content: "XNOVA Community Chat — Talk to the Family Live" },
      {
        property: "og:description",
        content: "Live, public chat for the XNOVA community on Solana. No signup required.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

type ChatMessage = {
  id: string;
  nickname: string;
  body: string;
  created_at: string;
};

const NICK_KEY = "xnova-nickname";

function CommunityPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [nickname, setNickname] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNickname(window.localStorage.getItem(NICK_KEY) ?? "");
  }, []);

  useEffect(() => {
    let active = true;

    setLoading(true);
    supabase
      .from("chat_messages")
      .select("id, nickname, body, created_at")
      .order("created_at", { ascending: false })
      .limit(100)
      .then(({ data, error: loadError }) => {
        if (!active) return;
        if (loadError) {
          console.error("[v0] Community messages failed to load:", loadError);
          setError("Community chat is temporarily unavailable. Please refresh and try again.");
        } else if (data) {
          setMessages([...data].reverse() as ChatMessage[]);
        }
        setLoading(false);
      });

    const handleSubscription = (status: string) => {
      if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
        console.error("[v0] Community realtime subscription failed:", status);
        if (active) setError("Live updates are unavailable right now. You can still refresh to see messages.");
      }
    };

    const channel = supabase
      .channel("xnova-community-chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat_messages" },
        (payload) => {
          const row = payload.new as ChatMessage;
          setMessages((prev) =>
            prev.some((m) => m.id === row.id) ? prev : [...prev, row].slice(-200),
          );
        },
      )
      .subscribe(handleSubscription);

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const nick = nickname.trim().slice(0, 24);
    const text = body.trim().slice(0, 300);
    if (!nick || !text || sending) return;

    setSending(true);
    setError(null);
    window.localStorage.setItem(NICK_KEY, nick);

    const { error: insertError } = await supabase
      .from("chat_messages")
      .insert({ nickname: nick, body: text });

    if (insertError) {
      setError("Message didn't send. Try again in a second.");
    } else {
      setBody("");
    }
    setSending(false);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
          <MessagesSquare className="h-3.5 w-3.5" /> Community chat
        </span>
        <h1 className="font-display mt-5 text-4xl sm:text-5xl">
          The <span className="text-gradient-nova">XNOVA</span> town square
        </h1>
        <p className="mt-3 text-muted-foreground">
          Live and public. Pick a nickname, say something, meet the family. No signup, no gatekeeping.
        </p>
      </div>

      <div className="glass-card mt-10 overflow-hidden rounded-4xl">
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-display text-sm tracking-widest uppercase">Live</span>
          </div>
          <span className="text-xs text-muted-foreground">{messages.length} recent messages</span>
        </div>

        <div ref={listRef} className="h-[28rem] space-y-4 overflow-y-auto px-6 py-6" aria-live="polite">
          {loading ? (
            <p className="pt-16 text-center text-sm text-muted-foreground">Loading community messages…</p>
          ) : messages.length === 0 ? (
            <p className="pt-16 text-center text-sm text-muted-foreground">
              Nobody has spoken yet. Be the first XNOVA voice.
            </p>
          ) : (
            messages.map((m) => (
              <div key={m.id} className="rounded-2xl border border-border/60 bg-background/50 px-4 py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-sm text-accent">{m.nickname}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {new Date(m.created_at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="mt-1 text-sm break-words whitespace-pre-wrap text-foreground">{m.body}</p>
              </div>
            ))
          )}
        </div>

        <form onSubmit={send} className="space-y-3 border-t border-border/60 px-6 py-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Nickname"
              maxLength={24}
              aria-label="Your nickname"
              className="sm:max-w-[12rem]"
            />
            <Input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Say something to the family…"
              maxLength={300}
              aria-label="Your message"
            />
            <Button type="submit" variant="hero" disabled={sending}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          {error ? <p className="text-xs text-destructive">{error}</p> : null}
          <p className="text-xs text-muted-foreground">
            Public chat. Be kind, no spam, no links to fake contracts — messages may be removed. Never
            share seed phrases or private keys.
          </p>
        </form>
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="hero" size="xl">
          <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">
            Join the family — buy $XNOVA
          </a>
        </Button>
      </div>
    </div>
  );
}
