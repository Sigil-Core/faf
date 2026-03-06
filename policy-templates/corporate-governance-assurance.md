# SIGIL POLICY: CORPORATE GOVERNANCE VOTING

**Policy ID:** `SIGIL-POL-CORP-GOV-001`
**Version:** 1.0.0
**Target Framework:** Sigil Open Framework / ERC-4337 Proxy

## 1. Authorized Operations

The autonomous agent is strictly limited to the following operations:

- **Vote Casting:** Cast votes on allowlisted governance contracts.
- **Vote Delegation:** Delegate voting power to pre-approved delegate addresses.
- **Proposal Interaction:** Execute read and submit actions only where explicitly approved by governance rules.

## 2. Hard Constraints (The Brakes)

If a generated UserOperation violates any of the following constraints, the Sigil Proxy must reject the transaction and drop the Intent Attestation.

- **Vote Scope Limit:** Votes are only allowed for proposals matching approved proposal categories.
- **Proposal Type Restriction:** Agent must not vote on treasury drain, emergency ownership transfer, or admin key rotation proposals without human approval.
- **Execution Restriction:** Agent is forbidden from directly executing governance proposals unless explicitly allowlisted.
- **Gas Limit Ceiling:** Transaction must not exceed 400,000 gwei in execution costs.

## 3. Whitelisted Governance Contracts and Delegates

- `Governance Contract A`: `0xREPLACE_WITH_GOVERNANCE_CONTRACT_A`
- `Governance Contract B`: `0xREPLACE_WITH_GOVERNANCE_CONTRACT_B`
- `Approved Delegate`: `0xREPLACE_WITH_APPROVED_DELEGATE`

_Interactions with any contract or delegate outside this list will trigger a `SIGIL_POLICY_VIOLATION` error._

## 4. Human Oversight Requirements

- **Human Approval Required:** Any vote classified as high-impact governance.
- **Human Approval Required:** Any vote that changes quorum, timelock, emergency authority, or treasury spending limits.
- **Fail-Closed Behavior:** If proposal metadata cannot be classified, vote must be rejected.
