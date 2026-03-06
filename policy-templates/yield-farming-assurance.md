# SIGIL POLICY: YIELD FARMING STRATEGY

**Policy ID:** `SIGIL-POL-YIELD-001`  
**Version:** 1.0.0  
**Target Framework:** Sigil Open Framework / ERC-4337 Proxy

## 1. Authorized Operations

The autonomous agent is strictly limited to the following operations:

- **Deposit:** Deposit approved assets into allowlisted vaults and farms.
- **Withdraw:** Withdraw principal and rewards from allowlisted strategies.
- **Claim Rewards:** Claim farming or staking rewards from approved contracts.
- **Auto-Compound:** Reinvest rewards into the same allowlisted strategy.

## 2. Hard Constraints (The Brakes)

If a generated UserOperation violates ANY of the following constraints, the Sigil Proxy MUST reject the transaction and drop the Intent Attestation.

- **Maximum Transaction Value:** $60,000 USD equivalent.
- **Maximum Daily Velocity:** $300,000 USD equivalent rolling 24-hour limit.
- **Maximum Strategy Exposure:** 30% of treasury value in any single yield strategy.
- **Minimum Liquidity Requirement:** Agent must keep at least 25% of treasury in liquid stable assets.
- **APR Sanity Guard:** Agent must reject strategies with advertised APR above 80% unless human-approved.
- **Gas Limit Ceiling:** Transaction must not exceed 650,000 gwei in execution costs.

## 3. Approved Assets

- `USDC`
- `USDT`
- `DAI`
- `WETH`

## 4. Whitelisted Protocol Contracts

- `Vault Contract A`: `0xREPLACE_WITH_VAULT_CONTRACT_A`
- `Farm Contract B`: `0xREPLACE_WITH_FARM_CONTRACT_B`
- `Reward Contract C`: `0xREPLACE_WITH_REWARD_CONTRACT_C`

_(Transactions interacting with any contract outside this list will trigger a `SIGIL_POLICY_VIOLATION` error.)_

## 5. Drawdown and Safety Controls

- **Drawdown Circuit Breaker:** New deposits are blocked if strategy drawdown exceeds 10% in rolling 24 hours.
- **Human Approval Trigger:** Any strategy migration or full withdrawal event above $80,000 USD equivalent.
