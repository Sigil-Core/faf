# SIGIL POLICY: TREASURY MANAGEMENT

**Policy ID:** `SIGIL-POL-TREASURY-001`
**Version:** 1.0.0
**Target Framework:** Sigil Open Framework / ERC-4337 Proxy

## 1. Authorized Operations

The autonomous agent is strictly limited to the following operations:

- **Transfer:** Moving funds between Company-owned Whitelisted Wallets.
- **Swap:** Trading highly liquid assets (USDC, USDT, WETH, WBTC) on approved decentralized exchanges (Uniswap V3).

## 2. Hard Constraints (The Brakes)

If a generated UserOperation violates ANY of the following constraints, the Sigil Proxy MUST reject the transaction and drop the Intent Attestation.

- **Maximum Transaction Value:** $50,000 USD equivalent.
- **Maximum Daily Velocity:** $250,000 USD equivalent rolling 24-hour limit.
- **Gas Limit Ceiling:** Transaction must not exceed 500,000 gwei in execution costs.

## 3. Whitelisted Contract Addresses

- `USDC`: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`
- `WETH`: `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2`
- `Uniswap V3 Router`: `0xE592427A0AEce92De3Edee1F18E0157C05861564`
  _(Transactions interacting with any contract outside this list will trigger a `SIGIL_POLICY_VIOLATION` error)._
