const jsonData = require("./genesis-wallets.json");
const fs = require("fs");
function convertJsonAndSaveToFile(jsonData, outputFilePath) {
  const result = [];

  for (const address in jsonData) {
    if (jsonData.hasOwnProperty(address)) {
      const weiValue = jsonData[address].wei;
      const numericValue = weiValue / 10 ** 18;

      if (!isNaN(numericValue)) {
        result.push({ wallet: address, value: numericValue });
      }
    }
  }

  result.sort((a, b) => b.value - a.value);

  // Convert the result array to JSON
  const convertedDataJson = JSON.stringify(result, null, 2);

  // Write the JSON to the output file
  fs.writeFileSync(
    outputFilePath,
    `window.walletData = ${convertedDataJson}`,
    "utf8"
  );
}

const outputFilePath = "walletData.js";
convertJsonAndSaveToFile(jsonData, outputFilePath);
console.log(`Data has been saved to ${outputFilePath}`);
