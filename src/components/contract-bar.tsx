import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { CONTRACT_ADDRESS } from "@/lib/token";
import { cn } from "@/lib/utils";

export function ContractBar({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={copy}
      className={cn(
        "group glass-card flex w-full max-w-xl items-center gap-3 rounded-full px-4 py-3 text-left transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
        Contract
      </span>
      <span className="min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground sm:text-sm">
        {CONTRACT_ADDRESS}
      </span>
      <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-foreground">
        {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
