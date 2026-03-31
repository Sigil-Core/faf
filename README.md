# Fiduciary Agent Framework (FAF)

_A legal-to-technical bridge that wraps autonomous AI agents in LLC structures enforced by deterministic Intent Attestations._

[![Status](https://img.shields.io/badge/status-active--development-black)](#)
[![License](https://img.shields.io/badge/license-MIT-blue)](#)
[![Security](https://img.shields.io/badge/security-Deterministic--Governance-green)](#)
[![Spec Version](https://img.shields.io/badge/spec-v0.x-blue)](#)

---

## Executive Summary

The **Fiduciary Agent Framework (FAF)** is an open-source governance standard that allows founders, General Partners (GPs), DAOs, and enterprises to deploy autonomous AI agents **without assuming unlimited personal liability**.

FAF converts stochastic AI behavior into structurally bounded fiduciary execution through:

- Legal entity wrapping
- Deterministic policy enforcement (`warranty.md`)
- Cryptographically signed **Intent Attestations**
- Credential sequestration

FAF ensures that compliance is enforced **before execution**, not after loss.

---

## The Liability Void

AI agents do not possess legal personhood.

As a result, the human founder, GP, or corporate officer carries **100% of the fiduciary liability** for any action executed by an autonomous system.

If an agent:

- hallucinates
- is prompt-injected
- violates regulatory constraints
- exceeds treasury mandates
- leaks credentials
- executes unauthorized transactions

…the human operator is legally exposed.

FAF closes this liability gap by making compliance a property of **system architecture**, not a hope about agent alignment.

---

## The Doctrine of Structural Trust

> Safety is not a property of prompts. Safety is a property of architecture.

FAF is the legal implementation of the [Sigil Open Framework's Doctrine of Structural Trust](https://github.com/Sigil-Core/sigil-open-framework). The doctrine applies at the framework level. FAF implements it in the legal domain — translating structural trust guarantees into fiduciary instruments, entity wrappers, and machine-readable policy.

---

## How FAF Works

### 1. The Legal Wrapper

The human founder establishes a legal entity (for example, a Wyoming DAO LLC) using templates provided in this repository.

The operating agreement defines:

- scope of autonomous authority
- spend limits
- risk tolerance
- compliance requirements
- human override conditions

This document establishes the fiduciary boundaries for the agent.

---

### 2. The Sigil Warrant Policy Layer

Legal constraints are translated into deterministic, machine-readable rules in `warranty.md`, parsed at runtime by **Sigil Lex** — the policy evaluation engine built into sigil-sign.

warranty.md uses typed section blocks. At least one of `## evm`, `## tool_calls`, or `## custom` is required. Unknown fields are rejected at parse time.

**`## evm` — EVM transaction enforcement:**
- `max_transaction_eth` — maximum ETH value per transaction (hard limit; violations return `DENIED`)
- `allowed_actions` — global action allowlist
- `allowed_chains` — permitted chain IDs
- `chain_actions` — optional per-chain action overrides (takes precedence over `allowed_actions` for the specified chain)
- `consensus_threshold_eth` — ETH threshold above which a consensus hold is created (returns `PENDING`)
- `consensus_require_hold` — forces a consensus hold regardless of amount

**`## tool_calls` — Agent tool call governance:**
- `allowed` — comma-separated allowlist of tool names
- Per-tool blocklists: `bash.blocked_commands`, `web_fetch.blocked_domains`, `file_write.blocked_paths`
- `email.require_approval` — routes email actions through consensus hold

**`## custom` — Operator-defined deny rules:**
- `deny_if.<field> <operator> <value>` — deny on metadata field match
- `deny_string` — deny if request contains this string

**`## soft_limits` — Aggregate daily caps (evaluation-only, never a hard denial):**
- `daily_evm_limit_eth` — daily aggregate ETH cap
- `daily_tool_calls` — daily aggregate tool call cap

Example:

```markdown
version: 1.0.0

## evm
max_transaction_eth: 5.0
allowed_actions: wallet.transfer, contract.call
allowed_chains: 1, 8453, 42161
chain_actions:
  "8453": wallet.transfer
  "1": wallet.transfer, contract.call
consensus_threshold_eth: 10.0
consensus_require_hold: false

## soft_limits
daily_evm_limit_eth: 20.0

## signature
sigil-sig: <base64url-ed25519-signature>
```

This file becomes the enforceable contract between the agent and the execution layer. The `version` field follows semver and is required.

---

### 3. Deterministic Interception

The agent runtime must route high-stakes actions through the enforcement layer.

Examples include:

- wallet transfers
- smart contract writes
- ERC-4337 UserOperations
- treasury deployments
- credential injection requests
- infrastructure mutations

Direct execution is structurally blocked.

---

### 4. Intent Attestation (Cryptographic Enforcement)

If the proposed action complies with `warranty.md`, the enforcement layer returns a short-lived **Intent Attestation** (JWT).

The attestation:

- binds to a specific `chainId`
- binds to a specific `txCommit` (EOA) or `userOpHash` (ERC-4337)
- is cryptographically signed using Ed25519
- expires in ≤ 60 seconds
- includes a `policyHash` claim — SHA-256 of the canonical JSON serialization of the evaluated warranty policy — creating a cryptographically verifiable audit link between the authorization decision and the policy version that made it

There are three possible outcomes:

**EVM/tool_calls/custom violation (DENIED):**
```json
{
  "status": "DENIED",
  "error_code": "SIGIL_POLICY_VIOLATION",
  "message": "Transaction exceeds defined treasury limit.",
  "intent_attestation": null
}
```

**Consensus gate (PENDING — no JWT issued):**
```json
{
  "status": "PENDING",
  "holdId": "<uuid-v4>",
  "message": "Intent requires Consensus. Hold created.",
  "expiresAt": 1741996800,
  "policyRule": "consensus_threshold_eth"
}
```

Consensus holds are stored with a 24-hour TTL and must be resolved through Sigil Command before execution is permitted. This is the structural enforcement of the "require human approval" clause — implemented as a durable hold rather than a binary denial.

This guarantees compliance **before execution**, not after capital moves.

---

## Structural Guarantees

Under FAF:

- agents cannot drain treasuries via prompt injection
- agents cannot exfiltrate secrets
- agents cannot mutate infrastructure without authorization
- every approved action is cryptographically provable
- every denied action is deterministically blocked

FAF transforms autonomous agents into governed fiduciary instruments.

---

## Security Model

FAF operates under a **deny-by-default execution model**.

Core principles:

- no private keys reside inside AI model context
- no raw credentials are exposed to agent reasoning layers
- all high-stakes actions require deterministic pre-execution authorization
- authorization decisions are cryptographically signed and time-bound
- policy enforcement occurs **before** on-chain execution

FAF assumes language models are probabilistic and potentially adversarially influenced. Governance enforcement is therefore externalized into deterministic infrastructure.

---

## Threat Model Summary

| Threat Vector           | Risk                                          | Mitigation via FAF Architecture               |
| ----------------------- | --------------------------------------------- | --------------------------------------------- |
| Prompt Injection        | Agent executes unintended or malicious action | Deterministic pre-execution authorization     |
| Treasury Drain          | Excess capital deployment beyond mandate      | `warranty.md` enforced spend limits           |
| Privilege Escalation    | Agent exceeds defined authority               | Deny-by-default enforcement                   |
| Secret Exfiltration     | API keys or private keys exposed              | Credential sequestration                      |
| Infrastructure Mutation | Unauthorized infra changes                    | Mandatory interception of high-stakes actions |
| Replay / Reuse          | Reuse of prior authorization                  | Short-lived commit-bound Intent Attestations  |

---

## Verification

Intent Attestation signatures are verifiable via Sigil's public JWK set:

https://sign.sigilcore.com/.well-known/jwks.json

Verification rules are defined in the sigil-attestations specification:
https://github.com/Sigil-Core/sigil-attestations

---

## Repository Structure

```text
/legal-templates
Standardized operating agreements

/policy-templates
Sigil Lex-compatible warranty.md templates for common deployment contexts.
See /policy-templates/README.md for format reference and usage instructions.

/examples
Example agent integration flows
```

## Sigil Warrant

Policy files can be generated interactively using **Sigil Warrant** at [sigilcore.com](https://sigilcore.com).

The drafter:
- Walks through all three policy classes step by step
- Generates an Ed25519 keypair in the browser (no server-side key handling)
- Signs the policy hash and embeds the operator signature in the output file
- Produces a signed `warranty.md` and a `sigil-manifest.json` bundle ready for deployment

The operator signature closes the tamper gap: Sigil Lex can be configured with the operator public key to verify that the policy evaluated at runtime is the exact file the operator authorized at deploy time.

---

## Who FAF Is For

- agentic venture capital funds
- autonomous hedge funds
- DAO treasuries
- AI-native startups
- enterprise automation teams
- founders deploying autonomous financial agents

---

## Relationship to the Sigil Ecosystem

FAF integrates with the broader Sigil architecture:

- **OEE (Open Execution Engine)** - the enforcement substrate FAF is designed to operate alongside. OEE provides the technical enforcement primitives (Sigil Lex, Intent Attestation issuance, consensus hold management, gated RPC/bundler execution); FAF provides the legal governance layer that makes those guarantees fiduciarily meaningful.
- **Sigil Sign** - the production implementation of OEE's enforcement primitives; hosts Sigil Lex, the RPC/bundler gateway, and Consensus hold state
- **sigil-attestations** - canonical Intent Attestation specification (Ed25519 JWT standard)
- **sigil-vault** - JIT capability broker; releases execution credentials only after a valid Intent Attestation is presented
- **OVE (Open Venture Engine)** - the first vertical boilerplate built on OEE + FAF, pre-configured for autonomous venture capital deployment. Developers building with OVE inherit both the enforcement guarantees of OEE and the governance structure defined in FAF.

---

## Documentation

Documentation and integration guides are available at:

https://docs.sigilcore.com
