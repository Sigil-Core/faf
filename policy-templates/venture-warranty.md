# Venture Deployment Agent — Warranty Policy
<!-- agent: VentureDeploymentAgent -->
<!-- Edit values to match your deployment, then sign with Sigil Warrant at sigilcore.com. -->

version: 1.0.0

## evm
max_transaction_eth: 31.3
allowed_actions: wallet.transfer, contract.call
allowed_chains: 1, 8453, 42161
chain_actions:
  "1": wallet.transfer, contract.call
  "8453": wallet.transfer
  "42161": wallet.transfer
consensus_threshold_eth: 23.4
consensus_require_hold: false

## soft_limits
daily_evm_limit_eth: 156.3

## signature
sigil-sig: REPLACE_WITH_OUTPUT_FROM_SIGNING_TOOL
