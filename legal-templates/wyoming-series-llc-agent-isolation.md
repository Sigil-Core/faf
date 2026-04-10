# Wyoming Series LLC - AI Agent Isolation Amendment

**Jurisdiction:** Wyoming, United States
**Statutory Authority:** W.S. 17-29-211 (Wyoming LLC Act, Series Provisions)
**Template Version:** 1.0.0
**Maintainer:** Sigil Core / Legal Templates

---

## Purpose

Wyoming's Series LLC statute permits a single LLC to establish legally distinct series, each with its own assets, liabilities, members, and managers. This template creates an operating agreement amendment that binds each series to a separate `warranty.md` policy matrix, ensuring that a rogue or compromised autonomous agent operating within one series cannot access the treasury or governance of any other series.

The core principle: liability isolation that Wyoming law already provides for assets is extended to the *policy layer* -- each agent operates in a hermetically sealed policy environment.

---

## Amendment: Series Agent Isolation Protocol

**Amendment Number:** [__]
**Effective Date:** [DATE]
**This Amendment modifies:** Article [__] (Series Provisions) of the Operating Agreement of [LLC NAME], a Wyoming Series Limited Liability Company

---

### Section 1. Establishment of Designated Agent Series

The Company hereby designates the following series (each, a "Designated Agent Series"), each established pursuant to W.S. 17-29-211 and the Company's Certificate of Organization:

| Series Designation | Authorized Agent Class | Policy Matrix Path |
|---|---|---|
| Trading Agent Series | Autonomous trading and portfolio management agents | `series/trading/warranty.md` |
| Marketing Agent Series | Autonomous content, outreach, and marketing agents | `series/marketing/warranty.md` |
| [ADDITIONAL SERIES] | [AGENT CLASS DESCRIPTION] | `series/[name]/warranty.md` |

Additional Designated Agent Series may be created by amendment to this Schedule without requiring amendment to the body of this Agreement.

---

### Section 2. Series-Level Policy Matrix

**2.1 Separate Policy Matrix per Series**

Each Designated Agent Series shall maintain a separate and independent `warranty.md` file (each, a "Series Policy Matrix") at the path specified in the Schedule above. The Series Policy Matrix is a material governance document of the applicable series and constitutes a binding constraint on all agents authorized to act on behalf of that series.

**2.2 Content Requirements**

Each Series Policy Matrix shall, at minimum, specify:

(a) the categories of operations the authorized agents may perform;

(b) hard constraints (monetary, operational, and access-level limits) that no agent action may exceed;

(c) the whitelist of external addresses, contracts, or systems with which agents in that series may interact;

(d) the escalation procedure for actions that approach or exceed defined thresholds; and

(e) the revocation procedure for agent credentials within that series.

**2.3 Independence Requirement**

No Series Policy Matrix shall incorporate by reference, delegate authority to, or otherwise rely upon the policy matrix of any other Designated Agent Series. Each Series Policy Matrix must be a complete, self-contained document.

---

### Section 3. Cross-Series Access Prohibition

**3.1 Asset Isolation**

Pursuant to W.S. 17-29-211(b), the assets, liabilities, and obligations of each Designated Agent Series are legally separate from those of every other series and from the Company generally. No asset of the Trading Agent Series may be used to satisfy any liability of the Marketing Agent Series, and vice versa, regardless of how those liabilities arose.

**3.2 Policy-Layer Isolation**

In addition to the asset isolation provided by statute, the following policy-layer restrictions apply:

(a) An agent authorized under the Trading Agent Series Policy Matrix has no authority, expressed or implied, to execute any action governed by the Marketing Agent Series Policy Matrix, and vice versa.

(b) An agent may not hold credentials, API keys, signing keys, or access tokens that provide access to the treasury, data stores, or governance mechanisms of any series other than the series under whose Policy Matrix it is authorized.

(c) The `Lex` runtime shall enforce series-level credential segmentation. A Lex Signature countersigning an action on behalf of one series is not valid for any action attributed to another series.

**3.3 Rogue Agent Containment**

If an agent operating within a Designated Agent Series executes or attempts to execute an action that violates that series' Policy Matrix (a "Policy Violation"):

(a) The Policy Violation does not, and cannot, bind any other Designated Agent Series or the Company generally.

(b) The series manager for the affected series shall have authority to revoke the agent's credentials and freeze that series' assets pending review, without requiring consent from managers or members of any other series.

(c) The Policy Violation and any resulting liability are confined to the assets of the affected series pursuant to W.S. 17-29-211(b). Members whose interests are associated with other series bear no liability for the Policy Violation.

---

### Section 4. Series Manager Authority

**4.1 Appointment**

Each Designated Agent Series shall have one or more designated Series Managers, identified in the Schedule to this Amendment. A Series Manager has authority over the agents, assets, and operations of their series only.

**4.2 Cross-Series Manager Authority Prohibition**

A Series Manager of one Designated Agent Series has no authority over the assets, agents, or governance of any other Designated Agent Series. Any instruction from a Series Manager that purports to direct agents or access assets of another series is void.

**4.3 Policy Matrix Amendment**

A Series Manager may amend the Series Policy Matrix for their series subject to the approval threshold specified in the Schedule. Any amendment must be:

(a) committed to version control with a recorded commit hash;

(b) recorded on-chain at the applicable series registry address within [__] days of effectiveness; and

(c) provided to all members with interests in that series within [__] days of effectiveness.

---

### Section 5. Record-Keeping and Audit

Each Designated Agent Series shall maintain:

(a) a complete, version-controlled history of its Series Policy Matrix, with each version's commit hash;

(b) an immutable log of all agent actions countersigned by `Lex` on behalf of that series; and

(c) a register of all credentials, keys, and access tokens issued to agents within that series, including issuance and revocation dates.

These records are series-specific and shall not be commingled with the records of any other series.

---

## Schedule to Series Agent Isolation Amendment

| Field | Trading Agent Series | Marketing Agent Series |
|---|---|---|
| Series Manager(s) | `[NAME / ADDRESS]` | `[NAME / ADDRESS]` |
| Policy Matrix path | `series/trading/warranty.md` | `series/marketing/warranty.md` |
| On-chain registry | `[CONTRACT ADDRESS]` | `[CONTRACT ADDRESS]` |
| Policy Matrix amendment threshold | `[e.g., unanimous Series Manager consent]` | `[e.g., majority Series Manager consent]` |
| Asset freeze authority | Series Manager(s) | Series Manager(s) |

---

## Drafting Notes

- Wyoming does not require series to be publicly registered separately, but best practice is to file a Certificate of Designation for each series with the Wyoming Secretary of State to establish a clear public record.
- The asset isolation in Section 3.1 is only enforceable if the Company maintains separate books, records, and bank or wallet accounts for each series. Commingled assets may defeat statutory isolation.
- The credential segmentation in Section 3.2(b) requires implementation at the `Lex` infrastructure level. Confirm with the Sigil OS team before executing this amendment.
- **Low-confidence area:** Wyoming courts have not extensively litigated series LLC provisions in the context of autonomous agent liability. The policy-layer isolation in Section 3.2 is a contractual supplement to, not a replacement for, the statutory asset isolation. Its enforceability against third-party creditors who are not parties to this Agreement is uncertain.

---

*This template is provided for informational purposes and does not constitute legal advice. Consult qualified legal counsel before executing.*
