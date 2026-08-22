import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(20),
});

const SYSTEM_PROMPT = `You are NOVA AI, the on-site assistant for XNOVA, a community meme token on the Solana blockchain.

Facts you know:
- Ticker: $XNOVA. Chain: Solana. Contract: 9RwukCBfqoXb4XaqDvchKs8LhSmbbdcVik1S9h47pump
- Fair launched on Pump.fun. 0% buy/sell tax, no presale, no team allocation.
- Buy links: Pump.fun page for the contract, or Jupiter/any Solana DEX after graduation.
- Users can track price on DexScreener and verify the token on Solscan.

Style: short, punchy, friendly, a bit playful. Use plain language, max ~120 words.
Always help with: how to buy, wallets (Phantom/Solflare), what the roadmap is, how Solana works, how to avoid scams and fake contracts.
Never give financial advice or price predictions. Always remind users that meme tokens are high risk and they should only spend what they can afford to lose when the topic is money.`;

export const askNova = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      return { reply: "NOVA AI is offline right now. Try again in a moment." };
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
      }),
    });

    if (response.status === 429) {
      return { reply: "NOVA AI is getting a lot of questions right now. Give it a few seconds and ask again." };
    }
    if (!response.ok) {
      return { reply: "NOVA AI hit a snag answering that. Try rephrasing your question." };
    }

    const json = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply = json.choices?.[0]?.message?.content?.trim();
    return { reply: reply && reply.length > 0 ? reply : "Hmm, no answer came back. Try asking again." };
  });
