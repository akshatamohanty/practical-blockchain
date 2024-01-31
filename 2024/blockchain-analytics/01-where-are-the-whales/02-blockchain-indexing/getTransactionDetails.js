const { ethers } = require("ethers");

async function getTransactionDetails(txHash, nodeUrl, debug = false) {
  try {
    // Connect to the Ethereum node
    const provider = new ethers.JsonRpcProvider(nodeUrl);

    // Fetch the transaction details
    const tx = await provider.getTransaction(txHash);

    if (tx) {
      // Transaction Details:
      // Transaction Hash: 0x0e9dc827ab8ac7cb6c0177176a611d3b66822708e403dd253b7022390d6f4d13
      // From: 0x08De2113E6Ed6da4b898177fA2d05d980a32f8B7
      // To: 0x974CaA59e49682CdA0AD2bbe82983419A2ECC400
      // Value: 0.004079681970072933 ETH
      // Block Number: 19122528
      if (debug) {
        console.log("Transaction Details:");
        console.log(`Transaction Hash: ${tx.hash}`);
        console.log(`From: ${tx.from}`);
        console.log(`To: ${tx.to}`);
        console.log(`Value: ${ethers.formatEther(tx.value)} ETH`);
        console.log(`Block Number: ${tx.blockNumber}`);
        console.log("-----------------------");
      }

      // Return the transaction details (if needed)
      return tx;
    } else {
      console.error(`Transaction with hash ${txHash} not found.`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching transaction details:", error);
    return null;
  }
}

function main() {
  // Transactions in Block 0: 0
  const nodeUrl = "https://cloudflare-eth.com";
  const txnHash =
    "0x0e9dc827ab8ac7cb6c0177176a611d3b66822708e403dd253b7022390d6f4d13";
  getTransactionDetails(txnHash, nodeUrl, true);
}
// hacky
if (process.argv.includes("test")) {
  main();
}

module.exports = { getTransactionDetails };
