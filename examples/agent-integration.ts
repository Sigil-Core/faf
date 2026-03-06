type Hex = `0x${string}`;

interface ProposedTrade {
  to: Hex;
  value: string;
  data: Hex;
  chainId: number;
}

interface UserOperation {
  sender: Hex;
  nonce: Hex;
  initCode: Hex;
  callData: Hex;
  callGasLimit: Hex;
  verificationGasLimit: Hex;
  preVerificationGas: Hex;
  maxFeePerGas: Hex;
  maxPriorityFeePerGas: Hex;
  paymasterAndData: Hex;
  signature: Hex;
}

const SIGIL_API_KEY = "REPLACE_WITH_SIGIL_API_KEY";
const SIGIL_AUTHORIZE_ENDPOINT = "https://rpc.sigilcore.com/v1/authorize";
const SIGIL_BUNDLER_ENDPOINT = "https://rpc.sigilcore.com/bundler/8453";
const POLICY_ID = "SIGIL-POL-TREASURY-001";
const AGENT_ID = "agent_alpha_01";

// Must be a lowercase 64-char hex string with no 0x prefix.
// In production, compute this from your canonical transaction intent hash.
const TX_COMMIT =
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

const ENTRYPOINT_ADDRESS: Hex = "0xREPLACE_WITH_ENTRYPOINT_ADDRESS";

// 1) The AI agent proposes an action.
const proposedTrade: ProposedTrade = {
  to: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  value: "0",
  data: "0xREPLACE_WITH_CALLDATA",
  chainId: 8453,
};

function assertConfigured(): void {
  const placeholders: Array<[string, string]> = [
    ["SIGIL_API_KEY", SIGIL_API_KEY],
    ["ENTRYPOINT_ADDRESS", ENTRYPOINT_ADDRESS],
    ["proposedTrade.data", proposedTrade.data],
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

async function requestIntentAttestation(
  intent: ProposedTrade,
): Promise<string> {
  const response = await fetch(SIGIL_AUTHORIZE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SIGIL_API_KEY}`,
    },
    body: JSON.stringify({
      framework: "agentkit",
      txCommit: TX_COMMIT,
      agentId: AGENT_ID,
      policyId: POLICY_ID,
      intent: {
        to: intent.to,
        amount: intent.value,
        chainId: intent.chainId,
      },
    }),
  });

  const result = (await response.json()) as
    | {
        intent_attestation?: string;
        error?: { message?: string; data?: { reason?: string } };
      }
    | undefined;

  if (!response.ok || !result?.intent_attestation) {
    const reason =
      result?.error?.data?.reason ??
      result?.error?.message ??
      "SIGIL_POLICY_VIOLATION";
    throw new Error(`Attestation rejected: ${reason}`);
  }

  return result.intent_attestation;
}

async function sendUserOperation(
  userOp: UserOperation,
  entryPoint: Hex,
  receiptJwt: string,
): Promise<string> {
  const response = await fetch(SIGIL_BUNDLER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Sigil-Receipt": receiptJwt,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_sendUserOperation",
      params: [userOp, entryPoint],
    }),
  });

  const rpc = (await response.json()) as
    | { result?: string; error?: { message?: string } }
    | undefined;

  if (!response.ok || rpc?.error || !rpc?.result) {
    throw new Error(
      `Proxy rejected UserOperation: ${rpc?.error?.message ?? "Unknown error"}`,
    );
  }

  return rpc.result;
}

async function main(): Promise<void> {
  assertConfigured();

  // 2) Ask Sigil for a deterministic Intent Attestation.
  const attestationJwt = await requestIntentAttestation(proposedTrade);

  // 3) Build a full ERC-4337 UserOperation.
  // Replace placeholder fields with real values from your signer / bundler flow.
  const userOp: UserOperation = {
    sender: "0xREPLACE_WITH_SMART_ACCOUNT_ADDRESS",
    nonce: "0x0",
    initCode: "0x",
    callData: proposedTrade.data,
    callGasLimit: "0x5208",
    verificationGasLimit: "0x249f0",
    preVerificationGas: "0xc350",
    maxFeePerGas: "0x59682f00",
    maxPriorityFeePerGas: "0x3b9aca00",
    paymasterAndData: "0x",
    signature: "0xREPLACE_WITH_USEROP_SIGNATURE",
  };

  // 4) Submit to the Sigil ERC-4337 proxy/bundler with the attestation header.
  const userOpHash = await sendUserOperation(
    userOp,
    ENTRYPOINT_ADDRESS,
    attestationJwt,
  );

  console.log("UserOperation submitted:", userOpHash);
}

void main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
