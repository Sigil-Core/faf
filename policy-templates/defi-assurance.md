# SIGIL POLICY: DEFI STRATEGY EXECUTION

**Policy ID:** `SIGIL-POL-DEFI-001`  
**Version:** 1.0.0  
**Target Framework:** Sigil Open Framework / ERC-4337 Proxy

## 1. Authorized Operations

The autonomous agent is strictly limited to the following operations:

- **Swap:** Spot token swaps on approved DEX routers.
- **LP Management:** Add/remove liquidity only for allowlisted pools.
- **Staking/Unstaking:** Deposit or withdraw on approved staking contracts.
- **Rebalancing:** Move treasury allocations among allowlisted assets.

## 2. Hard Constraints (The Brakes)

If a generated UserOperation violates ANY of the following constraints, the Sigil Proxy MUST reject the transaction and drop the Intent Attestation.

- **Maximum Transaction Value:** $75,000 USD equivalent.
- **Maximum Daily Velocity:** $350,000 USD equivalent rolling 24-hour limit.
- **Maximum Slippage:** 1.50% per swap.
- **Maximum Position Concentration:** 35% of treasury value in any single protocol.
- **Gas Limit Ceiling:** Transaction must not exceed 700,000 gwei in execution costs.

## 3. Approved Assets

- `USDC`
- `USDT`
- `DAI`
- `WETH`
- `WBTC`

## 4. Whitelisted Contract Addresses

- `Uniswap V3 Router`: `0xE592427A0AEce92De3Edee1F18E0157C05861564`
- `USDC`: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`
- `WETH`: `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2`

_(Transactions interacting with any contract outside this list will trigger a `SIGIL_POLICY_VIOLATION` error.)_

## 5. Emergency Override

- **Pause Condition:** If portfolio drawdown exceeds 12% in rolling 24 hours, all new risk-increasing positions are blocked.
- **Human Approval Trigger:** Any transaction above $40,000 USD equivalent requires human co-sign approval.
