import { generateIntentAttestation } from "@sigilcore/sigil-sign";

const SIGIL_ENDPOINT = "https://rpc.sigilcore.com/v1/authorize";
const POLICY_ID = "SIGIL-POL-GOV-003";
const SNAPSHOT_HUB_URL = "https://hub.snapshot.org/api/msg";

const SNAPSHOT_VOTER = "0xREPLACE_WITH_AGENT_WALLET";
const SNAPSHOT_SIGNATURE = "0xREPLACE_WITH_EIP712_SIGNATURE";

interface VotePayload {
  space: string;
  proposal: string;
  choice: number;
  app: string;
}

interface SnapshotEnvelope {
  address: string;
  sig: string;
  data: {
    domain: {
      name: string;
      version: string;
    };
    types: Record<string, Array<{ name: string; type: string }>>;
    message: VotePayload & {
      from: string;
      timestamp: number;
      metadata: string;
    };
  };
}

function assertConfigured(): void {
  const placeholders: Array<[string, string]> = [
    ["SNAPSHOT_VOTER", SNAPSHOT_VOTER],
    ["SNAPSHOT_SIGNATURE", SNAPSHOT_SIGNATURE],
  ];

  const unresolved = placeholders
    .filter(([, value]) => value.includes("REPLACE_WITH"))
    .map(([name]) => name);

  if (unresolved.length > 0) {
    throw new Error(
      `Replace placeholder values before running: ${unresolved.join(", ")}`,
    );
  }
}

async function submitSnapshotVote(envelope: SnapshotEnvelope): Promise<void> {
  const response = await fetch(SNAPSHOT_HUB_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(envelope),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Snapshot vote submission failed: ${body}`);
  }
}

async function main(): Promise<void> {
  assertConfigured();

  // 1) Agent analyzes a Snapshot proposal and decides to vote FOR.
  const votePayload: VotePayload = {
    space: "uniswap.eth",
    proposal: "0x12345...",
    choice: 1,
    app: "sigil-agent-framework",
  };

  // 2) Sigil validates the vote payload against governance warranty policy.
  const attestationJwt = await generateIntentAttestation({
    payload: votePayload,
    policyId: POLICY_ID,
    sigilEndpoint: SIGIL_ENDPOINT,
  });

  if (!attestationJwt) {
    throw new Error(
      "SIGIL_POLICY_VIOLATION: Governance vote failed warranty policy validation.",
    );
  }

  // 3) Append attestation to vote metadata and submit to Snapshot hub.
  const snapshotEnvelope: SnapshotEnvelope = {
    address: SNAPSHOT_VOTER,
    sig: SNAPSHOT_SIGNATURE,
    data: {
      domain: { name: "snapshot", version: "0.1.4" },
      types: {
        Vote: [
          { name: "from", type: "address" },
          { name: "space", type: "string" },
          { name: "timestamp", type: "uint64" },
          { name: "proposal", type: "string" },
          { name: "choice", type: "uint32" },
          { name: "app", type: "string" },
          { name: "metadata", type: "string" },
        ],
      },
      message: {
        ...votePayload,
        from: SNAPSHOT_VOTER,
        timestamp: Math.floor(Date.now() / 1000),
        metadata: JSON.stringify({
          sigil_attestation: attestationJwt,
        }),
      },
    },
  };

  await submitSnapshotVote(snapshotEnvelope);
  console.log("Snapshot vote submitted with Sigil attestation metadata.");
}

void main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
