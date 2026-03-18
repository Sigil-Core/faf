## version
1.0.0

## meta
agent_name: "DeFiStrategyAgent"
operator: "<OPERATOR_NAME>"
entity: "<LEGAL_ENTITY>"
issued: "<YYYY-MM-DDTHH:MM:SSZ>"

## class1
- max_transaction_eth: 23.4
- allowed_actions: [wallet.transfer, contract.call, erc4337.userop, token.approve]
- allowed_chains: [1, 8453, 42161, 10]
- chain_actions:
  - "1": [wallet.transfer, contract.call, token.approve]
  - "8453": [contract.call, token.approve]
  - "42161": [contract.call, token.approve]
  - "10": [contract.call, token.approve]

## class2
- daily_limit_eth: 109.4

## class3
- consensus_threshold_eth: 12.5
- require_hold: false

# Sign this file using the Sigil ASSURANCE.md Drafter at sigilcore.com before deploying.
## signature
- algorithm: Ed25519
- policy_hash: PLACEHOLDER
- operator_signature: PLACEHOLDER
- operator_public_key: PLACEHOLDER
- signed_at: PLACEHOLDER
