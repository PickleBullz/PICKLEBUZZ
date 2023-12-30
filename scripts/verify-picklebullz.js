// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

//

const hre = require("hardhat");
const { ethers } = require("hardhat");
const network = hre.network.name;

async function main() {
  const Owner = "";
  const contractAddress = "0x581F7475653ada515299F99e7F58583E86b9884b";

  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
      Owner,
      "Pickle Bullz",
      "PICKLEBULLZ",
      ethers.parseUnits("420000000000000", 18),
    ],
    contract: "contracts/PICKLEBULLZ.sol:PICKLEBULLZ",
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
