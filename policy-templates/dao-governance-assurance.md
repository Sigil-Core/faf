# SIGIL POLICY: DAO GOVERNANCE VOTING

**Policy ID:** `SIGIL-POL-GOV-003`
**Version:** 1.0.0
**Target Framework:** Sigil Open Framework / ERC-4337 Proxy

## 1. Authorized Operations

The autonomous agent is strictly limited to the following operations:

- **Snapshot Voting:** Cast votes on allowlisted Snapshot spaces.
- **Delegation Management:** Delegate voting power only to allowlisted delegate addresses.
- **On-Chain Governance Voting:** Submit governance votes only to allowlisted timelock and governor contracts.

## 2. Hard Constraints (The Brakes)

If a generated vote payload or UserOperation violates any of the following constraints, the Sigil Proxy must reject the transaction and drop the Intent Attestation.

- **Proposal Scope Limit:** Agent may only vote on proposal categories explicitly approved by governance policy.
- **Treasury Protection Rule:** Agent must reject proposals that transfer treasury assets to non-allowlisted destinations.
- **Privilege Escalation Rule:** Agent must reject proposals that modify signer sets, admin roles, or upgrade authority without human approval.
- **Execution Restriction:** Agent may not execute queued governance actions unless an explicit human-approval flag is present.
- **Gas Limit Ceiling:** Governance execution must not exceed 500,000 gwei in execution costs.

## 3. Whitelisted DAO Targets

- `Snapshot Space`: `uniswap.eth`
- `Governor Contract`: `0xREPLACE_WITH_DAO_GOVERNOR_CONTRACT`
- `Timelock Contract`: `0xREPLACE_WITH_DAO_TIMELOCK_CONTRACT`
- `Approved Delegate`: `0xREPLACE_WITH_APPROVED_DAO_DELEGATE`

_Interactions with any space, contract, or delegate outside this list will trigger a `SIGIL_POLICY_VIOLATION` error._

## 4. Human Oversight Requirements

- **Human Approval Required:** Any vote affecting treasury custody, emergency controls, or protocol upgrades.
- **Human Approval Required:** Any proposal that changes governance thresholds, voting delay, voting period, or quorum.
- **Fail-Closed Behavior:** If proposal metadata is missing, malformed, or ambiguous, the vote is rejected.
