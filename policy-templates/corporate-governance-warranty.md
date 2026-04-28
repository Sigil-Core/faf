# Corporate Governance Agent — Warranty Policy
<!-- agent: CorporateGovernanceAgent -->
<!-- Edit values to match your deployment, then sign with Sigil Warrant at sigilcore.com. -->

version: 1.0.0

## evm
max_transaction_eth: 0.5
allowed_actions: contract.call, erc4337.userop
allowed_chains: 1, 8453
chain_actions:
  "1": contract.call, erc4337.userop
  "8453": contract.call
consensus_threshold_eth: 0.1
consensus_require_hold: true

## soft_limits
daily_evm_limit_eth: 2.0

## signature
sigil-sig: REPLACE_WITH_OUTPUT_FROM_SIGNING_TOOL
