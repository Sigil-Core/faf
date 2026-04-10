## version
1.0.0

## meta
agent_name: "CorporateGovernanceAgent"
operator: "<OPERATOR_NAME>"
entity: "<LEGAL_ENTITY>"
issued: "<YYYY-MM-DDTHH:MM:SSZ>"

## class1
- max_transaction_eth: 0.5
- allowed_actions: [contract.call, erc4337.userop]
- allowed_chains: [1, 8453]
- chain_actions:
  - "1": [contract.call, erc4337.userop]
  - "8453": [contract.call]

## class2
- daily_limit_eth: 2.0

## class3
- consensus_threshold_eth: 0.1
- require_hold: true

# Sign this file using Sigil Warrant at sigilcore.com before deploying.
## signature
- algorithm: Ed25519
- policy_hash: PLACEHOLDER
- operator_signature: PLACEHOLDER
- operator_public_key: PLACEHOLDER
- signed_at: PLACEHOLDER
