# Treasury Management Agent — Warranty Policy
<!-- agent: TreasuryManagementAgent -->
<!-- Edit values to match your deployment, then sign with Sigil Warrant at sigilcore.com. -->

version: 1.0.0

## evm
max_transaction_eth: 15.6
allowed_actions: wallet.transfer, contract.call, token.approve
allowed_chains: 1, 8453, 42161
chain_actions:
  "1": wallet.transfer, contract.call, token.approve
  "8453": wallet.transfer, token.approve
  "42161": wallet.transfer, token.approve
consensus_threshold_eth: 10.0
consensus_require_hold: false

## soft_limits
daily_evm_limit_eth: 78.1

## signature
sigil-sig: REPLACE_WITH_OUTPUT_FROM_SIGNING_TOOL
