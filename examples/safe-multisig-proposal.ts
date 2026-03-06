import SafeApiKit from "@safe-global/api-kit";
import { generateIntentAttestation } from "@sigilcore/sigil-sign";

const SIGIL_ENDPOINT = "https://rpc.sigilcore.com/v1/authorize";
const POLICY_ID = "SIGIL-POL-VENTURE-001";

const SAFE_ADDRESS = "0xREPLACE_WITH_VENTURE_FUND_SAFE";
const AGENT_WALLET = "0xREPLACE_WITH_AGENT_WALLET";
const AGENT_SIGNATURE = "0xREPLACE_WITH_AGENT_SIGNATURE";
const SAFE_TX_HASH = "0xREPLACE_WITH_SAFE_TX_HASH";
const STARTUP_TOKEN_CONTRACT = "0xREPLACE_WITH_STARTUP_TOKEN_CONTRACT";
const BUY_TOKENS_CALLDATA = "0xREPLACE_WITH_BUY_TOKENS_CALLDATA";

interface VentureDeploymentTx {
  to: string;
  value: string;
  data: string;
  operation: number;
}

function assertConfigured(): void {
  const placeholders: Array<[string, string]> = [
    ["SAFE_ADDRESS", SAFE_ADDRESS],
    ["AGENT_WALLET", AGENT_WALLET],
    ["AGENT_SIGNATURE", AGENT_SIGNATURE],
    ["SAFE_TX_HASH", SAFE_TX_HASH],
    ["STARTUP_TOKEN_CONTRACT", STARTUP_TOKEN_CONTRACT],
    ["BUY_TOKENS_CALLDATA", BUY_TOKENS_CALLDATA],
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

async function main(): Promise<void> {
  assertConfigured();

  const safeService = new SafeApiKit({ chainId: 1n });

  // 1) Agent proposes a venture deployment transaction.
  const ventureDeploymentTx: VentureDeploymentTx = {
    to: STARTUP_TOKEN_CONTRACT,
    value: "0",
    data: BUY_TOKENS_CALLDATA,
    operation: 0,
  };

  // 2) Sigil validates transaction size and target against the VC mandate policy.
  const attestationJwt = await generateIntentAttestation({
    payload: ventureDeploymentTx,
    policyId: POLICY_ID,
    sigilEndpoint: SIGIL_ENDPOINT,
  });

  if (!attestationJwt) {
    throw new Error(
      "SIGIL_POLICY_VIOLATION: Deployment exceeds fund concentration limits.",
    );
  }

  // 3) Propose to Safe and append Sigil attestation proof in origin metadata.
  await safeService.proposeTransaction({
    safeAddress: SAFE_ADDRESS,
    safeTransactionData: ventureDeploymentTx,
    safeTxHash: SAFE_TX_HASH,
    senderAddress: AGENT_WALLET,
    senderSignature: AGENT_SIGNATURE,
    origin: `SigilAttestation:${attestationJwt}`,
  });

  console.log("Safe proposal submitted with Sigil attestation metadata.");
}

void main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
