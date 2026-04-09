# Cayman Islands Foundation Company - Supervisor Mandate & Articles Amendment

**Jurisdiction:** Cayman Islands
**Statutory Authority:** Foundation Companies Act, 2017 (as amended); Companies Act (2023 Revision)
**Template Version:** 1.0.0
**Maintainer:** Sigil Core / Legal Templates

---

## Purpose

The Cayman Islands Foundation Company structure is the dominant legal wrapper for major Web3 protocol treasuries (Arbitrum, Optimism, Uniswap, and others) because it allows a non-profit entity with no shareholders to hold and deploy assets according to a defined set of objects, supervised by a Supervisor who is independent of the Directors. The Supervisor's role is statutory: they exist to ensure the Directors act consistently with the Foundation's Memorandum and Articles of Association (the "M&A"). If an autonomous agent deploys Foundation assets outside the Foundation's objects, the Supervisor bears direct accountability.

This template creates a Supervisor Mandate and a corresponding Articles Amendment that classifies autonomous AI agents as Restricted Operators, requires cryptographic enclosure via Sigil OS for all Virtual Asset actions, and grants the Supervisor real-time audit and freeze authority backed by the Foundation's M&A.

---

## Part I: Supervisor Mandate

**Foundation:** [FOUNDATION NAME], a Cayman Islands Foundation Company (the "Foundation")
**Supervisor:** [SUPERVISOR NAME / ENTITY] (the "Supervisor")
**Effective Date:** [DATE]

This Mandate is issued pursuant to the Foundation's Articles of Association and the Foundation Companies Act, 2017, and sets out the scope, authority, and obligations of the Supervisor with respect to Algorithmic Operators (as defined below) acting on behalf of the Foundation.

---

### Section 1: Classification of Algorithmic Operators

**1.1 Definition**

Any autonomous artificial intelligence, smart contract, algorithmic agent, or automated software system (each, an "Algorithmic Operator") that has been granted any of the following access credentials is hereby classified as a Restricted Operator for the purposes of this Mandate and the Foundation's Articles of Association:

(a) private keys or seed phrases controlling Foundation wallet addresses;

(b) API keys or authentication tokens enabling transactions on behalf of the Foundation;

(c) multisig co-signing authority for Foundation treasury accounts;

(d) governance voting keys or delegation authority over the Foundation's on-chain governance participation; or

(e) any other execution access that permits the Algorithmic Operator to alter the Foundation's Virtual Asset balances or initiate binding obligations.

**1.2 Restricted Operator Register**

The Directors shall maintain a current register of all Restricted Operators (the "Restricted Operator Register"), including for each: the Operator's identifier or public key, the class of access credentials granted, the date of authorization, the authorizing resolution, and the applicable Policy Matrix version in force at the time of authorization. The Directors shall provide the Supervisor with access to the Restricted Operator Register at all times and shall notify the Supervisor within [__] business days of any addition, removal, or material change to the Register.

---

### Section 2: Mandatory Cryptographic Enclosure

**2.1 Sigil OS Enclosure Requirement**

The Directors shall not permit any Restricted Operator to execute transfers, swaps, staking actions, governance votes, or any other transaction involving the Foundation's Virtual Assets unless the Restricted Operator is strictly enclosed within and subject to the deterministic runtime governance of the Sigil OS execution framework (the "Runtime"). For the purposes of this Mandate, "enclosed" means that the Restricted Operator's transaction instructions are:

(a) evaluated against the Foundation's operative **`warranty.md`** policy matrix (the "Mandate Policy Matrix") before execution;

(b) countersigned by the Sigil OS runtime parser (`Lex`) via a valid **Ed25519 Intent Attestation** (the "Attestation"); and

(c) rejected by the Runtime if they conflict with any hard constraint in the Mandate Policy Matrix.

**2.2 No Delegation Around the Runtime**

The Directors may not grant any Restricted Operator direct execution authority that bypasses the Runtime, regardless of the commercial rationale or time pressure involved. Any technical configuration that permits a Restricted Operator to execute Virtual Asset transactions without a valid Attestation is a breach of this Mandate and of the Directors' obligations under the Foundation's Articles.

**2.3 Mandate Policy Matrix**

The Mandate Policy Matrix governs all Restricted Operator activity and is identified as follows:

| Field | Value |
|---|---|
| Document title | `warranty.md` |
| Repository | `[INSERT REPO URL]` |
| Commit hash (at time of this Mandate) | `[INSERT COMMIT HASH]` |
| On-chain record | `[INSERT CONTRACT ADDRESS AND NETWORK]` |

Any amendment to the Mandate Policy Matrix that expands a Restricted Operator's authority (including raising monetary limits, adding new asset categories, or adding new counterparties) requires prior written approval from the Supervisor before taking effect.

---

### Section 3: Supervisor Audit Rights and Freeze Authority

**3.1 Append-Only Attestation Ledger**

To enable the Supervisor to fulfill their statutory duty to protect the Foundation's objects, the Directors shall configure all Restricted Operators to log every generated Attestation to a secure, append-only ledger (the "Attestation Ledger"). The Attestation Ledger shall record, for each transaction: the Attestation signature, the transaction hash, the asset type and amount, the counterparty address, the Runtime version, and the Mandate Policy Matrix commit hash applicable at the time of execution. Records in the Attestation Ledger shall be immutable once written and shall be retained indefinitely.

**3.2 Supervisor Access**

The Supervisor shall have read access to the Attestation Ledger at all times. The Directors shall provide the Supervisor with real-time read access via the interface described in Exhibit A to this Mandate.

**3.3 Routine Audit**

The Supervisor shall review the Attestation Ledger at the frequency set forth in the Schedule and shall confirm to the Foundation's Directors, in writing, whether:

(a) all logged transactions bear valid Attestations consistent with the Mandate Policy Matrix in force at the time of each transaction; and

(b) no anomalous patterns, velocity spikes, or counterparty concentrations are apparent from the Attestation Ledger that would indicate Restricted Operator behavior outside authorized parameters.

**3.4 Immediate Freeze Authority**

The Supervisor reserves the right, and the Directors hereby authorize the Supervisor, to direct the immediate suspension of any Restricted Operator's execution access if:

(a) a transaction is attempted or executed without a cryptographically valid Attestation;

(b) an Attestation is found to be inconsistent with the Mandate Policy Matrix in force at the time of execution;

(c) the Attestation Ledger shows a pattern of transactions that the Supervisor reasonably believes constitutes drift from the Foundation's objects; or

(d) the Supervisor is unable to verify the integrity of the Runtime or the Mandate Policy Matrix for any reason.

A freeze directive from the Supervisor takes effect immediately upon delivery to the Directors or their designated technical contact and does not require a Board resolution or any further procedural step before the Foundation's technical operators are obligated to implement it.

**3.5 Reinstatement**

A Restricted Operator's access may be reinstated after a Supervisor-directed freeze only upon: (a) written confirmation from the Supervisor that the cause of the freeze has been remediated; and (b) a Directors' resolution confirming the technical controls are restored and the Mandate Policy Matrix has been updated if necessary.

---

### Section 4: Directors' Obligations

**4.1** The Directors shall:

(a) implement and maintain the technical infrastructure necessary to enforce the Runtime enclosure requirement in Section 2;

(b) maintain the Restricted Operator Register in current form and provide the Supervisor with immediate notice of any change;

(c) provide the Supervisor with all information reasonably requested to fulfill the Supervisor's audit obligations under Section 3;

(d) not amend the Mandate Policy Matrix in a manner that expands Restricted Operator authority without the Supervisor's prior written approval; and

(e) include the Supervisor's rights and the Runtime enclosure requirement in any agreement entered into with a third party that grants that party API or key access to Foundation assets.

**4.2** The Directors' compliance with this Mandate constitutes fulfillment of their duty to act in accordance with the Foundation's objects with respect to Algorithmic Operator deployments. Non-compliance does not limit the Supervisor's authority to act under Section 3.4.

---

## Part II: Articles of Association Amendment

**Amendment to:** Articles of Association of [FOUNDATION NAME]
**Insert as:** Article [__] (Algorithmic Treasury Deployment and Asset Protection)
**Effective:** Upon adoption by the Directors pursuant to the Foundation Companies Act, 2017 and the existing Articles

---

### Article [__]: Algorithmic Treasury Deployment and Asset Protection

**[__].1** For the purposes of this Article, "Algorithmic Operator," "Restricted Operator," "Runtime," "Attestation," "Mandate Policy Matrix," and "Attestation Ledger" have the meanings given in the Supervisor Mandate effective [DATE], as amended from time to time.

**[__].2** The Directors shall not authorize any Restricted Operator to hold execution access to Foundation Virtual Assets unless the Restricted Operator is enclosed within the Runtime and the Mandatory Cryptographic Enclosure requirement in the Supervisor Mandate is satisfied.

**[__].3** The Supervisor's freeze authority under the Supervisor Mandate is hereby incorporated into these Articles as a reserved power of the Supervisor, exercisable without further Directors' resolution. Any purported Directors' resolution or technical configuration that purports to limit or waive the Supervisor's freeze authority is void.

**[__].4** Any transaction executed by a Restricted Operator without a valid Attestation:

(a) is not authorized by the Foundation and does not bind the Foundation;

(b) does not constitute a disposal or transfer of Foundation assets for the purposes of the Foundation's objects; and

(c) shall be reported by the Directors to the Supervisor within [__] hours of discovery.

**[__].5** The Supervisor's rights under this Article and the Supervisor Mandate are personal to the Supervisor and may not be delegated without the Supervisor's written consent and a corresponding amendment to these Articles.

---

## Schedule to Supervisor Mandate

| Field | Value |
|---|---|
| Supervisor name / entity | `[NAME / REGISTERED NAME]` |
| Supervisor contact for freeze directives | `[EMAIL / SECURE CHANNEL]` |
| Attestation Ledger interface | Per Exhibit A |
| Routine audit frequency | `[e.g., monthly]` |
| Mandate Policy Matrix commit hash | `[INSERT HASH]` |
| Directors' technical contact for freeze implementation | `[NAME / CONTACT]` |
| Reinstatement approval threshold | Supervisor written confirmation + Directors' resolution |

---

## Exhibit A -- Attestation Ledger Access

| Field | Value |
|---|---|
| Ledger endpoint / interface | `[INSERT API URL OR CONTRACT ADDRESS]` |
| Authentication method | `[INSERT METHOD]` |
| Log format | Structured JSON; schema per Sigil OS specification |
| Retention | Indefinite; immutable once written |

---

## Drafting Notes

- The Foundation Companies Act, 2017 requires every Cayman Foundation Company to have at least one Supervisor. This template assumes the Supervisor is already appointed; it does not replace the appointment instrument.
- The Supervisor's freeze authority in Section 3.4 is a contractual power embedded in the Supervisor Mandate and reinforced by the Articles Amendment. Its enforceability depends on both documents being validly adopted. Confirm with Cayman Islands counsel that the Articles Amendment is adopted in compliance with existing Articles amendment procedures.
- Section 3.4 grants the Supervisor unilateral freeze authority without a Directors' resolution. This is intentional -- it mirrors the Supervisor's statutory independence from the Directors -- but should be reviewed carefully with the Foundation's Directors to ensure they understand the scope before signing.
- "Virtual Assets" should be defined by reference to the Cayman Islands Virtual Asset (Service Providers) Act, 2020 (as amended) if the Foundation holds assets regulated under that Act, and separate VASP licensing obligations should be assessed.
- **Low-confidence area:** The treatment of a Supervisor freeze directive as immediately operative (Section 3.4) without a cooling-off period or Directors' right of appeal is aggressive. Some Foundations may prefer a 24- or 48-hour notice period before freeze implementation. Adjust the Schedule if a notice period is commercially required.
- Major protocol Foundations (Arbitrum, Optimism) typically have additional governance layers (token holder votes, Guardian multisigs) beyond what is captured here. This template addresses the Supervisor/Director relationship only and should be integrated with, not substituted for, those broader governance frameworks.

---

*This template is provided for informational purposes and does not constitute legal advice. Consult qualified legal counsel familiar with Cayman Islands Foundation Company law before executing.*
