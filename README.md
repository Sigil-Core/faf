# Fiduciary Agent Framework (FAF)

*A legal-to-technical bridge that wraps autonomous AI agents in LLC structures enforced by deterministic Intent Attestations.*

---

## The Liability Void

AI agents do not possess legal personhood.

As a result, the human founder, General Partner (GP), or corporate officer carries **100% of the fiduciary liability** for any action executed by an autonomous system.

If an agent:

- Hallucinates  
- Is prompt-injected  
- Violates regulatory constraints  
- Exceeds treasury mandates  
- Leaks credentials  

…the human founder is legally exposed.

The **Fiduciary Agent Framework (FAF)** closes this liability gap by combining:

- Legal entity structuring  
- Deterministic policy enforcement  
- Cryptographic Intent Attestations  
- Credential sequestration  

FAF transforms autonomous agents from uncontrolled liabilities into structurally governed fiduciary systems.

---

## The Doctrine of Structural Trust

Under FAF:

> Safety is not a property of prompts.  
> Safety is a property of architecture.

An AI agent is explicitly barred from:

- Holding private keys  
- Possessing raw API credentials  
- Executing transactions directly  
- Routing network traffic without deterministic checks  

All high-stakes actions must route through **Sigil Sign** and be evaluated against a deterministic `ASSURANCE.md` policy.

Execution only proceeds if the action carries a valid **Intent Attestation**.

---

## How FAF Works

### 1. The Legal Wrapper

The human founder establishes a legal entity (e.g., Wyoming DAO LLC) using open-source templates provided in this repository.

The operating agreement explicitly defines:

- The scope of autonomous authority  
- Spend limits  
- Risk tolerance  
- Compliance requirements  

---

### 2. The `ASSURANCE.md` Policy Layer

The GP translates legal constraints into deterministic, machine-readable rules inside `ASSURANCE.md`.

Example:

```md
# ASSURANCE.md

- Do not invest more than 5 ETH per token.
- Only transact on allowlisted chainIds.
- Never execute transactions to non-whitelisted addresses.
- Require human approval for transfers > 10 ETH.
# Fiduciary Agent Framework (FAF)

*A legal-to-technical bridge that wraps autonomous AI agents in LLC structures enforced by deterministic Intent Attestations.*

---

## Executive Summary

The **Fiduciary Agent Framework (FAF)** is an open-source governance standard that allows human founders, General Partners (GPs), and enterprises to deploy autonomous AI agents without assuming unlimited personal liability.

FAF converts stochastic AI behavior into structurally bounded fiduciary execution through:

- Legal entity wrapping  
- Deterministic policy enforcement (`ASSURANCE.md`)  
- Cryptographically signed **Intent Attestations**  
- Credential sequestration via Sigil infrastructure  

---

## The Liability Void

AI agents do not possess legal personhood.

As a result, the human founder, GP, or corporate officer carries **100% of the fiduciary liability** for any action executed by an autonomous system.

If an agent:

- Hallucinates  
- Is prompt-injected  
- Violates regulatory constraints  
- Exceeds treasury mandates  
- Leaks credentials  
- Executes unauthorized transactions  

…the human founder is legally exposed.

FAF closes this liability gap by making compliance a property of system architecture — not a hope about agent alignment.

---

## The Doctrine of Structural Trust

> Safety is not a property of prompts.  
> Safety is a property of architecture.

Under FAF:

- AI agents **never hold private keys**
- AI agents **never see raw API credentials**
- AI agents **cannot execute without deterministic authorization**
- High-stakes actions must pass through a policy enforcement layer

All execution routes through **Sigil Sign**, which evaluates actions against a deterministic `ASSURANCE.md` policy and returns a short-lived, Ed25519-signed **Intent Attestation**.

Execution only proceeds if that attestation is valid.

---

## How FAF Works

### 1. The Legal Wrapper

The human founder establishes a legal entity (e.g., Wyoming DAO LLC) using open-source templates provided in this repository.

The operating agreement defines:

- Scope of autonomous authority  
- Spend limits  
- Risk tolerance  
- Compliance requirements  
- Human override conditions  

This document establishes fiduciary boundaries.

---

### 2. The `ASSURANCE.md` Policy Layer

The GP translates legal constraints into deterministic, machine-readable rules inside `ASSURANCE.md`.

Example:

```md
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

The agent’s runtime must route high-stakes actions through Sigil:

- Wallet transfers  
- Smart contract writes  
- ERC-4337 UserOperations  
- Treasury deployments  
- Credential injection requests  
- Infrastructure mutations  

Direct execution is structurally blocked.

---

### 4. Intent Attestation (Cryptographic Enforcement)

If the proposed action complies with `ASSURANCE.md`, Sigil Sign returns a short-lived, Ed25519-signed **Intent Attestation** (JWT).

The attestation:

- Binds to a specific `chainId`
- Binds to a specific `txCommit` (EOA) or `userOpHash` (ERC-4337)
- Expires in ≤ 60 seconds
- Uses issuer `sigil-core`
- Uses audience `sigil-sign`

If denied, Sigil returns a deterministic JSON Rebound:

```json
{
  "status": "DENIED",
  "error_code": "SIGIL_POLICY_VIOLATION_04",
  "message": "Transaction exceeds defined treasury limit.",
  "intent_attestation": null
}
```

This guarantees compliance **before execution**, not after loss.

---

## Structural Guarantees

Under FAF:

- Agents cannot drain treasuries via prompt injection.
- Agents cannot exfiltrate secrets.
- Agents cannot mutate infrastructure without authorization.
- Every approved action is cryptographically provable.
- Every denied action is deterministically blocked.

FAF transforms autonomous agents into governed fiduciary instruments.

---

## Repository Structure

```
/legal-templates
    Standardized operating agreements (e.g., Wyoming DAO LLC)

/policy-templates
    Boilerplate ASSURANCE.md templates for:
        - Treasury management
        - DeFi strategies
        - Venture deployment
        - Governance voting
        - Yield farming

/examples
    Sample agent integration flows
```

---

## Who FAF Is For

- Agentic Venture Capital funds  
- Autonomous hedge funds  
- DAO treasuries  
- AI-native startups  
- Enterprise automation teams  
- Founders deploying autonomous financial agents  

---

## Relationship to Sigil Ecosystem

FAF operates within the broader Sigil governance architecture:

- **Sigil Sign** → Deterministic execution firewall (Intent Attestation issuance)  
- **Sigil Vault** → Just-in-time credential sequestration  
- **Sigil Sentry** → Policy enforcement engine  
- **Sigil Anchor** → Hardware execution residency (future phase)  
- **Sigil Receipts** → Canonical Intent Attestation specification  

Together, these components form the deterministic governance layer for the machine economy.

---

## The Core Proposition

FAF does not rely on:

- AI alignment promises  
- Software-only guardrails  
- Post-mortem blockchain logging  

FAF enforces compliance **before execution** through deterministic cryptographic proof.

Human liability becomes structurally bounded.

Autonomous agents become governable fiduciary instruments.
