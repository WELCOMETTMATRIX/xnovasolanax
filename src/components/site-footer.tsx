import { Link } from "@tanstack/react-router";
import { ContractBar } from "@/components/contract-bar";
import { DEXSCREENER_URL, PUMP_FUN_URL, SOLSCAN_URL } from "@/lib/token";
import mascot from "@/assets/mascot.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={mascot} alt="XNOVA mascot" width={44} height={44} loading="lazy" className="h-11 w-11" />
            <span className="font-display text-2xl text-gradient-nova">XNOVA</span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Cute. Chaotic. XNOVA. A community-powered meme token living on Solana — fast, cheap and
            built for the culture.
          </p>
          <ContractBar />
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm tracking-widest text-foreground uppercase">Explore</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/chart" className="hover:text-foreground">Live chart</Link>
            <Link to="/ai" className="hover:text-foreground">NOVA AI</Link>
            <Link to="/community" className="hover:text-foreground">Community chat</Link>
            <Link to="/roadmap" className="hover:text-foreground">Roadmap</Link>
            <Link to="/about" className="hover:text-foreground">About us</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacy policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms &amp; risk</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm tracking-widest text-foreground uppercase">Trade</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
              Pump.fun
            </a>
            <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
              DexScreener
            </a>
            <a href={SOLSCAN_URL} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
              Solscan
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 px-4 py-6 text-center text-xs text-muted-foreground">
        XNOVA is a meme token with no intrinsic value or expectation of financial return. Crypto is
        risky — always do your own research. © {new Date().getFullYear()} XNOVA.
      </div>
    </footer>
  );
}
