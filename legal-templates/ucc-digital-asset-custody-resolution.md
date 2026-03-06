# UCC Digital Asset Custody - Board Resolution

**Jurisdiction:** Wyoming, United States
**Statutory Authority:** Wyoming Uniform Commercial Code, Articles 8 and 9; Wyoming Digital Asset Statute (W.S. 34-29-101 et seq.)
**Template Version:** 1.0.0
**Maintainer:** Sigil Core / Legal Templates

---

## Purpose

Wyoming classifies digital assets as property under a tiered UCC framework: "digital consumer assets" (UCC Article 9 general intangibles), "digital securities" (UCC Article 8), and "virtual currency" (UCC Article 9, treated as money-adjacent). This board resolution authorizes an autonomous agent to transfer these asset classes on the company's behalf, strictly bounded by the deterministic constraints enforced by Sigil OS. It creates a documented chain of authorization that satisfies UCC Article 9 requirements for control and commercial reasonableness.

---

## Resolutions of the Board of Directors (or Governing Body) of [COMPANY NAME]

**Date:** [DATE]
**Meeting type:** [Special Meeting / Written Consent in Lieu of Meeting]
**Quorum present / consenting:** [YES / NO]

---

### Recitals

WHEREAS, [COMPANY NAME] (the "Company") holds digital assets classified under Wyoming law as general intangibles, virtual currency, and/or digital securities (collectively, "Digital Assets"), the custody and transfer of which is governed by the Wyoming Uniform Commercial Code, W.S. Titles 34.1 and 34-29;

WHEREAS, the Company operates Sigil OS, an autonomous agent management system, and utilizes the Sigil OS runtime parser (`Lex`) as the deterministic governance layer for all autonomous agent activity;

WHEREAS, the Board has reviewed the Company's operative `ASSURANCE.md` file (the "Policy Matrix"), which specifies the hard constraints, whitelisted addresses, velocity limits, and operational boundaries within which `Lex` will countersign agent actions;

WHEREAS, the Board finds that authorizing a `Lex`-governed autonomous agent to transfer Digital Assets within the bounds of the Policy Matrix is commercially reasonable under W.S. 34.1-9-102 and consistent with the Company's fiduciary obligations;

NOW, THEREFORE, BE IT RESOLVED as follows:

---

### Resolution 1: Authorization of Autonomous Agent for Digital Asset Transfers

**1.1** The Board hereby authorizes one or more autonomous agents operating under the governance of the Sigil OS `Lex` runtime (each, an "Authorized Agent") to execute transfers of Digital Assets on behalf of the Company, subject in all respects to the constraints set forth in the Policy Matrix and this Resolution.

**1.2** For the avoidance of doubt, "Digital Assets" authorized for transfer under this Resolution include:

(a) **Virtual currency**, as defined in W.S. 34-29-101(a)(vii), including but not limited to Bitcoin (BTC), Ether (ETH), and stablecoins pegged to fiat currency that qualify as virtual currency under Wyoming law;

(b) **General intangibles**, as that term is used in UCC Article 9 and applied to digital consumer assets under W.S. 34-29-101(a)(ii), including fungible tokens that do not qualify as securities or virtual currency; and

(c) **Investment property and security entitlements**, as classified under UCC Article 8, if and when the Company holds digital securities as defined in W.S. 34-29-101(a)(iv).

**1.3** This authorization does not extend to the transfer of Digital Assets classified as digital securities under W.S. 34-29-101(a)(iv) unless the Board adopts a separate resolution specifically authorizing securities transfers, which shall comply with applicable securities laws in addition to the requirements of this Resolution.

---

### Resolution 2: Policy Matrix as Binding Limit on Agent Authority

**2.1** The authority granted to each Authorized Agent is strictly limited to actions that fall within the deterministic bounds specified in the Policy Matrix in effect at the time of transfer. No Authorized Agent has authority to execute any Digital Asset transfer that would violate a hard constraint in the Policy Matrix.

**2.2** The Policy Matrix is incorporated by reference into this Resolution as a binding limitation on agent authority. The Board shall maintain the Policy Matrix in a version-controlled repository, with each operative version's commit hash recorded in the Company's corporate records.

**2.3** The current operative Policy Matrix is identified as follows:

| Field | Value |
|---|---|
| Document title | `ASSURANCE.md` |
| Repository | `[INSERT REPO URL]` |
| Commit hash (at time of this Resolution) | `[INSERT COMMIT HASH]` |
| On-chain record | `[INSERT CONTRACT ADDRESS AND NETWORK]` |

**2.4** Any amendment to the Policy Matrix that expands agent transfer authority (including raising monetary limits, adding new asset classes, or adding new recipient addresses) requires a further Board resolution before the expanded authority takes effect.

---

### Resolution 3: Lex Signature as Condition of Commercial Reasonableness

**3.1** The Board finds that a Digital Asset transfer executed by an Authorized Agent is commercially reasonable within the meaning of Wyoming UCC Article 9 if and only if:

(a) the transfer has been countersigned by the `Lex` runtime via a valid Lex Signature (as defined in the Company's operating agreement or governance documents); and

(b) the transfer is consistent with the Policy Matrix in effect at the time of countersignature.

**3.2** A Digital Asset transfer lacking a valid Lex Signature, or inconsistent with the Policy Matrix, is not commercially reasonable, does not bind the Company, and shall be treated as an unauthorized transfer for purposes of UCC Articles 8 and 9.

**3.3** The Company's custodian, wallet operator, or DeFi protocol interface shall, to the extent technically feasible, be configured to reject any transfer instruction that lacks a valid Lex Signature. The Company's officers are hereby authorized and directed to implement such technical controls within [__] days of this Resolution.

---

### Resolution 4: UCC Article 9 Control and Perfection

**4.1** For purposes of UCC Article 9, the Company's security interest in its Digital Assets is perfected by control, as that term is defined under W.S. 34-29-104 and applicable UCC provisions.

**4.2** The Board authorizes the Company's officers to take all actions necessary to maintain and document the Company's control over its Digital Asset accounts, including:

(a) entering into control agreements with custodians or intermediaries holding Digital Assets on the Company's behalf;

(b) registering the Company's control in any applicable on-chain registry; and

(c) maintaining records sufficient to establish the Company's priority as a secured party under UCC Article 9 in the event of a dispute.

---

### Resolution 5: Reporting and Audit

**5.1** The Authorized Agent (via the `Lex` runtime) shall maintain an immutable log of all Digital Asset transfers executed pursuant to this Resolution, including the asset type, amount, recipient address, transaction hash, Lex Signature, and Policy Matrix commit hash applicable at the time of transfer.

**5.2** The Company's officers shall provide the Board with a periodic report of all Digital Asset transfers executed by Authorized Agents, at the frequency specified in the Schedule to this Resolution.

**5.3** Any transfer that approaches within [__]% of a hard constraint in the Policy Matrix shall trigger an immediate alert to the Board. The Board may, by majority vote, suspend agent transfer authority pending review.

---

### Resolution 6: Ratification of Prior Actions

The Board hereby ratifies, confirms, and approves all prior Digital Asset transfers made by Authorized Agents under Sigil OS governance that are consistent with the Policy Matrix, to the extent such transfers were not previously formally authorized by Board resolution.

---

## Schedule to Board Resolution

| Field | Value |
|---|---|
| Authorized Agent identifier(s) | `[INSERT AGENT ID OR PUBLIC KEY]` |
| Lex runtime version | `[INSERT VERSION]` |
| Policy Matrix commit hash | `[INSERT HASH]` |
| Reporting frequency | `[e.g., monthly]` |
| Alert threshold (% of hard constraint) | `[e.g., 80%]` |
| Officers authorized to implement technical controls | `[NAME(S) AND TITLE(S)]` |

---

## Signature Block

The undersigned, constituting [all directors / a quorum of the Board] of [COMPANY NAME], hereby adopt the foregoing resolutions as of the date first written above.

| Name | Title | Signature | Date |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

---

## Drafting Notes

- Wyoming's digital asset classification (W.S. 34-29-101) distinguishes between virtual currency, digital consumer assets, and digital securities. Confirm which categories the Company actually holds before executing this resolution. Miscategorization may affect UCC priority rules.
- The "commercially reasonable" standard in Resolution 3 is derived from UCC Article 9 liquidation standards and is adapted here by analogy. Wyoming courts have not ruled on whether a Lex Signature constitutes commercial reasonableness in this specific context.
- Resolution 4 addresses UCC Article 9 perfection by control. If the Company also grants security interests in its Digital Assets to third-party lenders, a separate UCC-1 filing analysis is required.
- **Low-confidence area:** The treatment of stablecoins under Wyoming's virtual currency definition (W.S. 34-29-101(a)(vii)) is unsettled. Some stablecoins may qualify as payment instruments or investment contracts depending on their structure. Obtain a legal opinion on specific asset classifications before relying on this resolution for stablecoin transfers.
- This resolution should be stored in the Company's minute book alongside the Policy Matrix commit hash identified in Resolution 2.3.

---

*This template is provided for informational purposes and does not constitute legal advice. Consult qualified legal counsel before executing.*
