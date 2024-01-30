const ethers = require("ethers");
const walletData = require("../00-blockchain-exploration/sorted-wallets.json");
const genesisWallets = walletData.slice(0, 1000).map((t) => t.wallet);

async function main() {
  // Connect to the Ethereum node
  const provider = new ethers.providers.JsonRpcProvider(
    "https://cloudflare-eth.com"
  );

  // Subscribe to new incoming transactions
  provider.on("pending", async (tx) => {
    const receipt = await provider.getTransactionReceipt(tx);
    console.log(`Received a transaction: ${tx}`);
    console.log(`Block Number: ${receipt.blockNumber}`);
    console.log(`Transaction Hash: ${receipt.transactionHash}`);

    if (receipt && genesisWallets.indexOf(receipt.to)) {
      // TODO: Call a google cloud function or publish to pub/sub topic.
    }
  });
}

main(walletAddress);
