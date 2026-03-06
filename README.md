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
- Deterministic policy enforcement (`ASSURANCE.md`)
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

Safety is not a property of prompts.
Safety is a property of architecture.

Under FAF:

- AI agents **never hold private keys**
- AI agents **never see raw API credentials**
- AI agents **cannot execute without deterministic authorization**
- High-stakes actions must route through a policy enforcement layer

Execution only proceeds if the action carries a valid **Intent Attestation**.

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

### 2. The `ASSURANCE.md` Policy Layer

Legal constraints are translated into deterministic, machine-readable rules in `ASSURANCE.md`.

Example:

```markdown
# ASSURANCE.md

- Do not invest more than 5 ETH per token.
- Only transact on allowlisted chainIds.
- Never execute transactions to non-whitelisted addresses.
- Require human approval for transfers > 10 ETH.
- Reject transactions exceeding defined daily treasury cap.
```

This file becomes the enforceable contract between the agent and the execution layer.

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

If the proposed action complies with `ASSURANCE.md`, the enforcement layer returns a short-lived **Intent Attestation** (JWT).

The attestation:

- binds to a specific `chainId`
- binds to a specific `txCommit` (EOA) or `userOpHash` (ERC-4337)
- is cryptographically signed using Ed25519
- expires quickly

If denied, the system returns a deterministic response:

```json
{
  "status": "DENIED",
  "error_code": "SIGIL_POLICY_VIOLATION",
  "message": "Transaction exceeds defined treasury limit.",
  "intent_attestation": null
}
```

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
| Treasury Drain          | Excess capital deployment beyond mandate      | `ASSURANCE.md` enforced spend limits          |
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
Boilerplate ASSURANCE.md templates

/examples
Example agent integration flows
```

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

- **Sigil Sign** - deterministic execution firewall
- **sigil-attestations** - canonical Intent Attestation specification (Ed25519 JWT standard)

OVE (Open Venture Engine) provides a practical implementation of FAF in an autonomous venture deployment context.

Developers building with OVE inherit the governance guarantees defined in FAF.

---

## Documentation

Documentation and integration guides are available at:

https://docs.sigilcore.com
