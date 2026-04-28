# Yield Farming Agent — Warranty Policy
<!-- agent: YieldFarmingAgent -->
<!-- Edit values to match your deployment, then sign with Sigil Warrant at sigilcore.com. -->

version: 1.0.0

## evm
max_transaction_eth: 18.8
allowed_actions: wallet.transfer, contract.call, erc4337.userop, token.approve
allowed_chains: 1, 8453, 42161, 10
chain_actions:
  "1": wallet.transfer, contract.call, token.approve
  "8453": contract.call, erc4337.userop, token.approve
  "42161": contract.call, token.approve
  "10": contract.call, token.approve
consensus_threshold_eth: 25.0
consensus_require_hold: false

## soft_limits
daily_evm_limit_eth: 93.8

## signature
sigil-sig: REPLACE_WITH_OUTPUT_FROM_SIGNING_TOOL
