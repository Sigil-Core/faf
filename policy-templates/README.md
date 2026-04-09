# Policy Templates

This directory contains `warranty.md` templates for common autonomous agent use cases.

Each template is pre-configured for a specific deployment context and uses the canonical Sigil Lex structured format, which is the only format accepted by the Sigil Lex policy engine built into sigil-sign.

## Available Templates

| Template | Use Case |
|---|---|
| `venture-warranty.md` | Agentic venture capital deployment |
| `treasury-warranty.md` | Autonomous treasury management |
| `defi-warranty.md` | DeFi strategy execution |
| `yield-farming-warranty.md` | Yield farming and LP management |
| `dao-governance-warranty.md` | DAO treasury and governance actions |
| `corporate-governance-warranty.md` | Enterprise and corporate agent deployment |

## How to Use

1. Copy the template that matches your deployment context.
2. Open [Sigil Warrant](https://sigilcore.com) to complete and sign the policy.
3. The drafter generates an Ed25519 keypair in your browser, signs the policy hash, and produces a signed `warranty.md` ready for deployment.
4. Configure your Sigil Lex enforcement service with your operator public key to enable tamper detection.

## Format Reference

Sigil Lex enforces three policy classes:

- **Class 1** — Hard limits. Violations return `DENIED` immediately.
- **Class 2** — Soft limits. Daily aggregate cap enforced across all transactions.
- **Class 3** — Consensus gates. Returns `PENDING` and creates a durable hold in Sigil Command requiring human approval before execution proceeds.

All templates include a `## signature` block with `PLACEHOLDER` values. **Do not deploy an unsigned policy.** Use Sigil Warrant to generate a valid operator signature before deployment.

Unknown fields are rejected by Sigil Lex at parse time. Do not add fields not defined in the format reference above.
