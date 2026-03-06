# SIGIL POLICY: VENTURE CAPITAL DEPLOYMENT

**Policy ID:** `SIGIL-POL-VENTURE-001`  
**Version:** 1.0.0  
**Target Framework:** Sigil Open Framework / ERC-4337 Proxy

## 1. Authorized Operations

The autonomous agent is strictly limited to the following operations:

- **Capital Deployment:** Execute approved on-chain investment transfers to allowlisted deal wallets.
- **Follow-On Allocation:** Deploy pro-rata or predefined follow-on commitments to previously approved portfolio entities.
- **Treasury Rebalancing:** Move idle stablecoin liquidity across Company-owned wallets.

## 2. Hard Constraints (The Brakes)

If a generated UserOperation violates ANY of the following constraints, the Sigil Proxy MUST reject the transaction and drop the Intent Attestation.

- **Maximum Single Deployment:** $100,000 USD equivalent.
- **Maximum Daily Deployment Velocity:** $500,000 USD equivalent rolling 24-hour limit.
- **Maximum Portfolio Exposure per Entity:** 15% of total committed capital.
- **Dry Powder Floor:** Agent must maintain minimum 20% treasury reserves in stable assets.
- **Gas Limit Ceiling:** Transaction must not exceed 600,000 gwei in execution costs.

## 3. Approved Asset Universe

- `USDC`
- `USDT`
- `DAI`

## 4. Whitelisted Deal Contract and Wallet Addresses

- `Portfolio Wallet A`: `0xREPLACE_WITH_APPROVED_PORTFOLIO_WALLET_A`
- `Portfolio Wallet B`: `0xREPLACE_WITH_APPROVED_PORTFOLIO_WALLET_B`
- `Treasury Custody Wallet`: `0xREPLACE_WITH_COMPANY_TREASURY_WALLET`

_(Transactions interacting with any contract or wallet outside this list will trigger a `SIGIL_POLICY_VIOLATION` error.)_

## 5. Governance and Human Controls

- **Mandatory Human Approval:** Any first-time deployment to a new recipient address.
- **Mandatory Human Approval:** Any transfer above $75,000 USD equivalent.
- **Auto-Reject Condition:** If recipient is not mapped to an approved investment memo ID.
