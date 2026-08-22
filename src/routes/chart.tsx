import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContractBar } from "@/components/contract-bar";
import {
  DEXSCREENER_EMBED_URL,
  DEXSCREENER_URL,
  JUPITER_URL,
  PUMP_FUN_URL,
  SOLSCAN_URL,
} from "@/lib/token";

export const Route = createFileRoute("/chart")({
  head: () => ({
    meta: [
      { title: "XNOVA Live Chart — Price, Volume & Liquidity on Solana" },
      {
        name: "description",
        content:
          "Track the live XNOVA price chart, volume and liquidity on Solana, straight from DexScreener. Buy on Pump.fun in one click.",
      },
      { property: "og:title", content: "XNOVA Live Chart — Price, Volume & Liquidity" },
      {
        property: "og:description",
        content: "Real-time XNOVA market data on Solana with direct links to Pump.fun and Jupiter.",
      },
    ],
  }),
  component: ChartPage,
});

function ChartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">
          <span className="text-gradient-nova">XNOVA</span> live chart
        </h1>
        <p className="mt-3 text-muted-foreground">
          Real-time price, volume and liquidity from DexScreener. If the chart is empty, the token
          is still early on its bonding curve — trade it on Pump.fun.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <ContractBar />
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero">
            <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener">Buy on Pump.fun</a>
          </Button>
          <Button asChild variant="neon">
            <a href={JUPITER_URL} target="_blank" rel="noreferrer noopener">Swap on Jupiter</a>
          </Button>
          <Button asChild variant="outlineNova">
            <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer noopener">DexScreener</a>
          </Button>
          <Button asChild variant="outlineNova">
            <a href={SOLSCAN_URL} target="_blank" rel="noreferrer noopener">Solscan</a>
          </Button>
        </div>
      </div>

      <div className="glass-card mt-10 overflow-hidden rounded-3xl p-1.5">
        <iframe
          src={DEXSCREENER_EMBED_URL}
          title="XNOVA live price chart on DexScreener"
          className="h-[70vh] min-h-[520px] w-full rounded-2xl border-0 bg-background"
          loading="lazy"
        />
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Market data is provided by third parties and may be delayed. Nothing here is financial
        advice.
      </p>
    </div>
  );
}
