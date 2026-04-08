---
title: "FAF Architecture"
description: "How the Fiduciary Agent Framework converts technical enforcement into bounded legal instruments."
---

# Architecture

The Fiduciary Agent Framework (FAF) is Layer 2 of the Sigil stack. It sits on top of the Open Execution Engine (OEE) and converts technical enforcement into bounded legal instruments.

---

## Role in the Sigil Stack

```
Layer 3: Vertical Boilerplates (industry-specific configurations)
Layer 2: FAF (legal governance and fiduciary structure)    <-- this repo
Layer 1: OEE (deterministic policy enforcement)
```

OEE enforces policy deterministically. FAF defines who is legally responsible for that policy and to what limit.

---

## Core Components

**Entity Templates**
Pre-built legal entity structures (LLC, DAO LLC) that establish the human General Partner as the bounded fiduciary. These templates scope liability to the deployed warranty policy.

**Operating Agreement Structures**
Standard operating agreement components anchored to the cryptographic record OEE produces. The `policyHash` in each Intent Attestation creates a verifiable link between a legal agreement and the technical enforcement in effect at any point in time.

**Policy Template Library**
Vertical-specific policy templates for regulated industries (venture capital, healthcare, banking). Each template maps industry-specific compliance requirements to OEE policy block types (`## evm`, `## tool_calls`, `## custom`, `## soft_limits`).

---

## How FAF Connects to OEE

FAF does not execute policy. OEE does. FAF provides:

1. The legal wrapper that defines liability boundaries for the operator
2. The policy templates that operators customize and sign as their `warranty.md`
3. The bridge between `policyHash` in an Intent Attestation and a legally defensible audit record

Every Intent Attestation issued by OEE contains a `policyHash` (SHA-256 of the warranty.md content at evaluation time). This hash is the cryptographic anchor that ties legal agreements to technical enforcement.

---

## Contributing

FAF is a public repository. Contributions must follow the Sigil contribution guidelines. Do not include internal infrastructure details, IP addresses, secret names, or production topology in any file in this repository.
