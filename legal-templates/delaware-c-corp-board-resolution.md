# Delaware C-Corp - Board Resolution: Algorithmic Agent Delegation

**Jurisdiction:** State of Delaware, United States
**Statutory Authority:** Delaware General Corporation Law § 141; Caremark Int'l Inc. Derivative Litigation, 698 A.2d 959 (Del. Ch. 1996)
**Template Version:** 1.0.0
**Maintainer:** Sigil Core / Legal Templates

---

## Purpose

Under Delaware law, the Board of Directors owes a non-delegable Duty of Care to the corporation and its stockholders. Where the Board delegates treasury management or operational execution to autonomous agents, it retains oversight responsibility and cannot insulate itself from liability by pleading ignorance of agent behavior. *Caremark* and its progeny require the Board to implement affirmative monitoring systems for material corporate risks.

A stochastic Large Language Model granted unilateral execution authority without deterministic constraints constitutes an unmonitored, un-underwritable risk that a court applying *Caremark* scrutiny could treat as a failure of the Board's oversight obligation. This resolution authorizes algorithmic agent deployment while preserving the Board's fiduciary position by binding every agent action to a cryptographically enforced policy framework.

---

## UNANIMOUS WRITTEN CONSENT OF THE BOARD OF DIRECTORS

**Corporation:** [CORPORATION NAME], a Delaware corporation (the "Corporation")
**Applicable Law:** Delaware General Corporation Law § 141(f) (action by written consent)
**Effective Date:** [DATE]

---

### Recitals

WHEREAS, the Board of Directors (the "Board") has determined that deploying autonomous algorithmic agents (each, an "Agent") to optimize treasury management, operational execution, and related functions is in the best interests of the Corporation and its stockholders;

WHEREAS, the Board acknowledges its non-delegable fiduciary Duty of Care under Delaware law and its obligation under *In re Caremark Int'l Inc. Derivative Litigation*, 698 A.2d 959 (Del. Ch. 1996), and *Stone v. Ritter*, 911 A.2d 362 (Del. 2006), to implement and maintain a reasonable information and reporting system sufficient to allow the Board to monitor material corporate risks;

WHEREAS, the Board finds that probabilistic Large Language Models and other stochastic AI systems, if granted unilateral execution authority over corporate assets without deterministic constraints, present a material, un-underwritable risk of stochastic drift, unauthorized transfers, and governance failures that would implicate the Board's Duty of Care;

WHEREAS, the Board has reviewed the Corporation's operative **`warranty.md`** file (the "Policy Matrix"), which specifies the hard constraints, whitelisted counterparties, monetary velocity limits, and escalation procedures within which Agents are authorized to act;

WHEREAS, the Board has determined that deploying Agents exclusively through the Corporation's designated **Execution Policy Firewall** (Sigil OS) and requiring a cryptographically valid **Ed25519 Intent Attestation** for every Agent-initiated transaction provides the affirmative monitoring mechanism required by *Caremark* and its progeny;

NOW, THEREFORE, BE IT RESOLVED, and it is hereby resolved, as follows:

---

### Resolution 1: Authorization of Algorithmic Agents

**1.1** The Board hereby authorizes the Corporation to deploy one or more Agents to initiate transactions, execute operational instructions, and perform functions on behalf of the Corporation, subject in all respects to the conditions and limitations set forth in this Consent.

**1.2** No authorization conferred by this Consent extends to any Agent action that violates the Policy Matrix in effect at the time of execution.

---

### Resolution 2: Condition Precedent -- Deterministic Execution Policy Firewall

**2.1 Mandatory Routing**

The following condition is a strict condition precedent to the validity and authorization of any Agent-initiated transaction: every transaction initiated by an Agent must be cryptographically signed and routed through the Corporation's designated Execution Policy Firewall, Sigil OS (the "Firewall"), before execution. A transaction that bypasses or circumvents the Firewall is not authorized by this Consent, does not bind the Corporation, and shall be treated as an unauthorized act for all purposes under Delaware law.

**2.2 Scope**

This condition precedent applies to all Agent-initiated actions involving:

(a) the transfer, swap, or disposal of any corporate asset, including cash, digital assets, securities, and general intangibles;

(b) the execution of any contract, agreement, or binding commitment on behalf of the Corporation with a value exceeding $[THRESHOLD];

(c) any governance action, including voting or proxy submission, taken on behalf of the Corporation; and

(d) any API call, smart contract interaction, or protocol transaction that could alter the Corporation's asset balances or legal obligations.

---

### Resolution 3: Intent Attestation Requirement

**3.1** Every transaction routed through the Firewall must contain a valid **Ed25519 Intent Attestation** (the "Attestation") generated by the Sigil OS runtime parser (`Lex`) at the time of execution. The Attestation constitutes cryptographic proof that the transaction:

(a) falls within the categorical permissions defined in the Policy Matrix;

(b) does not exceed any monetary, velocity, or counterparty limit specified in the Policy Matrix; and

(c) has been evaluated against the Policy Matrix version identified by the commit hash recorded in the Attestation.

**3.2** A transaction lacking a valid Attestation, or bearing an Attestation that does not match the Policy Matrix in effect at the time of execution, is void and unauthorized. No officer, employee, or agent of the Corporation has authority to waive this requirement.

---

### Resolution 4: Policy Matrix as Board-Approved Control

**4.1** The Board hereby approves the Policy Matrix as the operative control document governing all Agent activity. The Policy Matrix is incorporated by reference into this Consent as a binding limitation on the scope of Agent authority.

**4.2** The current operative Policy Matrix is identified as follows:

| Field | Value |
|---|---|
| Document title | `warranty.md` |
| Repository | `[INSERT REPO URL]` |
| Commit hash (at time of this Consent) | `[INSERT COMMIT HASH]` |
| On-chain record (if applicable) | `[INSERT ADDRESS AND NETWORK]` |

**4.3** Any amendment to the Policy Matrix that expands Agent authority -- including raising monetary thresholds, adding new asset categories, or adding new authorized counterparties -- requires prior Board approval by the vote threshold specified in the Corporation's bylaws for material operational decisions, or by further written consent of the Board.

**4.4** Amendments that restrict Agent authority (reducing limits, removing counterparties, or adding constraints) may be made by the CEO or designated Chief Compliance Officer without prior Board approval, provided that written notice is given to the Board within [__] business days.

---

### Resolution 5: Liability Containment

**5.1** Any transaction bypassing the Firewall or lacking a valid Attestation is:

(a) legally void and of no force or effect as against the Corporation;

(b) strictly unauthorized by this Board and outside the scope of any actual or apparent authority granted to any Agent, officer, or employee;

(c) a critical breach of the Corporation's internal security protocols; and

(d) the sole liability, if any, of the individual or system responsible for the bypass, and not of the Corporation or its Board.

**5.2** The Corporation's officers are hereby authorized and directed to include appropriate representations regarding the Firewall and Attestation requirements in any representations and warranties made to counterparties, insurers, or auditors concerning the Corporation's AI governance framework.

---

### Resolution 6: Caremark Compliance -- Monitoring and Reporting

**6.1** The Board hereby designates the [Audit Committee / Chief Compliance Officer / [DESIGNEE]] (the "Monitor") as responsible for ongoing oversight of Agent activity and compliance with this Consent.

**6.2** The Monitor shall:

(a) receive a periodic report of all Agent-initiated transactions, including the Attestation hash and Policy Matrix version applicable to each transaction, at the frequency set forth in the Schedule;

(b) report to the full Board at each regular Board meeting regarding material Agent activity, any Policy Matrix violations detected, and any proposed amendments to the Policy Matrix; and

(c) immediately notify the full Board of any transaction that bypasses the Firewall, any failed Attestation, or any Agent behavior that the Monitor believes may constitute a material deviation from authorized parameters.

**6.3** The Board's receipt of the Monitor's periodic reports and its review of material Agent activity constitutes the affirmative oversight mechanism required by *Caremark* and its progeny. The Board shall document its review of these reports in the Corporation's minute book.

---

### Resolution 7: Officer Authorization

The officers of the Corporation are hereby authorized and directed, individually and collectively, to:

(a) implement the technical infrastructure necessary to enforce the Firewall and Attestation requirements set forth in this Consent;

(b) execute any agreements, certifications, or representations necessary to maintain the Corporation's compliance with this Consent;

(c) amend the Schedule to this Consent to reflect changes in monitoring personnel, reporting frequency, or operational thresholds, without requiring further Board action, provided that no such amendment expands Agent authority beyond the limits set in Resolution 2 and Resolution 4; and

(d) take all other actions necessary or appropriate to carry out the intent of this Consent.

---

## Schedule to Board Consent

| Field | Value |
|---|---|
| Designated Monitor | `[NAME / TITLE]` |
| Firewall system | Sigil OS |
| Policy Matrix commit hash | `[INSERT HASH]` |
| Reporting frequency | `[e.g., monthly]` |
| Transaction alert threshold | `[e.g., 80% of any Policy Matrix monetary limit]` |
| Board approval threshold for Policy Matrix expansion | `[e.g., majority of the full Board]` |

---

## Signature Block

The undersigned, constituting all of the directors of [CORPORATION NAME], hereby adopt the foregoing resolutions by written consent pursuant to Delaware General Corporation Law § 141(f), effective as of the date first written above.

| Name | Title | Signature | Date |
|---|---|---|---|
| | Director | | |
| | Director | | |
| | Director | | |

---

## Drafting Notes

- This Consent is designed to be adopted by unanimous written consent under DGCL § 141(f), which requires all directors to sign. If unanimous consent is not available, adapt for adoption at a duly noticed Board meeting with appropriate quorum and vote.
- The *Caremark* framework imposes liability for a "sustained or systematic failure of the board to exercise oversight." This Consent addresses that risk by creating an affirmative monitoring obligation (Resolution 6) rather than relying solely on technical controls.
- Resolution 5.1(d) is aspirational from a corporate law standpoint. Delaware courts may still hold the Corporation liable for apparent authority if counterparties reasonably relied on an Agent's apparent authority. Consult counsel on representations to third parties.
- **Low-confidence area:** Delaware courts have not addressed the *Caremark* standard specifically in the context of autonomous AI agents as of the drafting date. The analogy to existing oversight precedent is strong but untested. The monitoring mechanism in Resolution 6 is designed conservatively to exceed what current case law requires.
- If the Corporation is publicly traded or subject to SEC oversight, additional disclosure obligations regarding AI governance may apply under SEC guidance on cybersecurity and risk factor disclosure.

---

*This template is provided for informational purposes and does not constitute legal advice. Consult qualified legal counsel before executing.*
