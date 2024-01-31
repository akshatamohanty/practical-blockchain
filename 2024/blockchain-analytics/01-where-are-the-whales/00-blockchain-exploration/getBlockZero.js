const { ethers } = require("ethers");

async function getBlock(nodeUrl) {
  try {
    // Connect to the Ethereum node
    const provider = new ethers.JsonRpcProvider(nodeUrl);

    const blockNumber = 0;
    // Fetch the block
    const block = await provider.getBlock(blockNumber);
    console.log(`Block ${block}`, block);
    if (block && block.transactions) {
      // Process and display the transactions
      console.log(
        `Transactions in Block ${blockNumber}: ${block.transactions.length}`
      );

      // Array of Transaction Hashes
      console.log("Txns: ", block.transactions);

      // Return the list of transaction hashes (if needed)
      return block.transactions;
    } else {
      console.log(`No transactions found in Block ${blockNumber}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}

// Transactions in Block 0: 0
const nodeUrl = "https://cloudflare-eth.com";
getBlock(nodeUrl);
