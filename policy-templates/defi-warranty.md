# DeFi Strategy Agent — Warranty Policy
<!-- agent: DeFiStrategyAgent -->
<!-- Edit values to match your deployment, then sign with Sigil Warrant at sigilcore.com. -->

version: 1.0.0

## evm
max_transaction_eth: 23.4
allowed_actions: wallet.transfer, contract.call, erc4337.userop, token.approve
allowed_chains: 1, 8453, 42161, 10
chain_actions:
  "1": wallet.transfer, contract.call, token.approve
  "8453": contract.call, token.approve
  "42161": contract.call, token.approve
  "10": contract.call, token.approve
consensus_threshold_eth: 12.5
consensus_require_hold: false

## soft_limits
daily_evm_limit_eth: 109.4

## signature
sigil-sig: REPLACE_WITH_OUTPUT_FROM_SIGNING_TOOL
