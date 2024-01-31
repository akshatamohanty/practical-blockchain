require("dotenv").config();
// It looks like Cloudflare doesn't support the RPC method eth_newPendingTransactionFilter, One workaround is to use your own local node instead of a hosted one.
// newPendingTransactionFilter
// https://ts.cloudflare.community/web3/ethereum-gateway/reference/supported-api-methods/
// https://dashboard.quicknode.com/endpoints/239323
const DEFAULT_URL = "https://cloudflare-eth.com";
const nodeUrl = process.env.NODE_URL || DEFAULT_URL;
console.log("Using Node URL", nodeUrl);
const { ethers } = require("ethers");
const walletData = require("../00-blockchain-exploration/sortedWallets.json");
const {
  getTransactionDetails,
} = require("../02-blockchain-indexing/getTransactionDetails");
const genesisWallets = walletData.slice(0, 1000).map((t) => t.wallet);

async function main() {
  // Connect to the Ethereum node
  const provider = new ethers.JsonRpcProvider(nodeUrl);
  // Subscribe to new incoming transactions
  provider.on("pending", async (tx) => {
    // TODO: Send message to queue
    // 1mi+ txns
    const txnDetails = await getTransactionDetails(tx, DEFAULT_URL);
    if (genesisWallets.indexOf(txnDetails?.from) > -1) {
      console.log(`Txn from genesis wallet holder: ${txnDetails?.from}`);
      console.log("Details", txnDetails.value);
      // TODO: Call a cloud function.
    } else {
      console.log("Skipping txn: (tx, from)", tx, txnDetails?.from);
    }
  });
}

main();
