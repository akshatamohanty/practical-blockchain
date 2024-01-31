const fs = require("fs");
const { ethers } = require("ethers");
const walletData = require("../00-blockchain-exploration/sortedWallets.json");

const provider = new ethers.JsonRpcProvider("https://cloudflare-eth.com");

const getDurationInMilliseconds = (start) => {
  const NS_PER_SEC = 1e9;
  const NS_TO_MS = 1e6;
  const diff = process.hrtime(start);

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

// Function to get the wallet balance
async function getWalletBalance(walletAddress) {
  try {
    const balanceWei = await provider.getBalance(walletAddress);
    const balanceEther = ethers.formatEther(balanceWei);
    return balanceEther;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function main() {
  const start = process.hrtime();
  const results = [];
  const wallets = walletData.slice(0, count);
  for (let i = 0; i < wallets.length; i++) {
    const walletAddress = wallets[i].wallet;
    const value = await getWalletBalance("0x" + walletAddress);
    console.log(`Wallet Address: ${walletAddress} Value: ${value}`);
    results.push({
      wallet: walletAddress,
      initValue: walletData[i].value,
      newValue: value,
    });
  }

  // fs.writeFileSync("./currentBalances.json", JSON.stringify(results), "utf8");

  // Notes
  // [CLOSED] 33,690.771 ms for 50 wallet addresses
  // [CLOSED] 611,552.918 ms for 1000 wallet addresses
  // 90 minutes for 80k wallets
  const durationInMilliseconds = getDurationInMilliseconds(start);
  console.log(`[CLOSED] ${durationInMilliseconds.toLocaleString()} ms`);
}

const count = 1000;
main();
