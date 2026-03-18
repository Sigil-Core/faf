## version
1.0.0

## meta
agent_name: "VentureDeploymentAgent"
operator: "<OPERATOR_NAME>"
entity: "<LEGAL_ENTITY>"
issued: "<YYYY-MM-DDTHH:MM:SSZ>"

## class1
- max_transaction_eth: 31.3
- allowed_actions: [wallet.transfer, contract.call]
- allowed_chains: [1, 8453, 42161]
- chain_actions:
  - "1": [wallet.transfer, contract.call]
  - "8453": [wallet.transfer]
  - "42161": [wallet.transfer]

## class2
- daily_limit_eth: 156.3

## class3
- consensus_threshold_eth: 23.4
- require_hold: false

# Sign this file using the Sigil ASSURANCE.md Drafter at sigilcore.com before deploying.
## signature
- algorithm: Ed25519
- policy_hash: PLACEHOLDER
- operator_signature: PLACEHOLDER
- operator_public_key: PLACEHOLDER
- signed_at: PLACEHOLDER
