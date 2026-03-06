import { encodeFunctionData, parseUnits, type Address, type Hex } from "viem";
import { generateIntentAttestation } from "@sigilcore/sigil-sign";

const SIGIL_ENDPOINT = "https://rpc.sigilcore.com/v1/authorize";
const POLICY_ID = "SIGIL-POL-DEFI-002";

const AGENT_WALLET_ADDRESS: Address = "0xREPLACE_WITH_AGENT_WALLET";
const AAVE_POOL_ADDRESS: Address = "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2";
const USDC_ADDRESS: Address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

const AAVE_POOL_ABI = [
  {
    inputs: [
      { internalType: "address", name: "asset", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      { internalType: "uint16", name: "referralCode", type: "uint16" },
    ],
    name: "supply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

interface ProposedAction {
  to: Address;
  value: bigint;
  data: Hex;
}

function assertConfigured(): void {
  const placeholders: Array<[string, string]> = [
    ["AGENT_WALLET_ADDRESS", AGENT_WALLET_ADDRESS],
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

  // 1) Agent attempts to supply 50,000 USDC to Aave V3.
  const amountToSupply = parseUnits("50000", 6);

  const callData = encodeFunctionData({
    abi: AAVE_POOL_ABI,
    functionName: "supply",
    args: [USDC_ADDRESS, amountToSupply, AGENT_WALLET_ADDRESS, 0],
  });

  const proposedAction: ProposedAction = {
    to: AAVE_POOL_ADDRESS,
    value: 0n,
    data: callData,
  };

  // 2) Request Sigil Intent Attestation (deterministic policy brakes).
  const attestationJwt = await generateIntentAttestation({
    payload: proposedAction,
    policyId: POLICY_ID,
    sigilEndpoint: SIGIL_ENDPOINT,
  });

  if (!attestationJwt) {
    throw new Error(
      "SIGIL_POLICY_VIOLATION: Action failed DEFI assurance policy validation.",
    );
  }

  // 3) Inject JWT into your UserOperation/signature path, then broadcast via proxy.
  console.log("Attestation acquired. Transaction bounded and authorized.");
  console.log("Attestation JWT:", attestationJwt);
}

void main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
