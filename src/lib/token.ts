export const TOKEN_NAME = "XNOVA";
export const TOKEN_TAGLINE = "Next generation. Endless possibilities.";
export const CONTRACT_ADDRESS = "9RwukCBfqoXb4XaqDvchKs8LhSmbbdcVik1S9h47pump";
export const PUMP_FUN_URL = `https://pump.fun/coin/${CONTRACT_ADDRESS}`;
export const DEXSCREENER_URL = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`;
export const DEXSCREENER_EMBED_URL = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&trades=0&info=0`;
export const SOLSCAN_URL = `https://solscan.io/token/${CONTRACT_ADDRESS}`;
export const JUPITER_URL = `https://jup.ag/swap/SOL-${CONTRACT_ADDRESS}`;

export function shortAddress(address: string, size = 6) {
  return `${address.slice(0, size)}...${address.slice(-size)}`;
}
