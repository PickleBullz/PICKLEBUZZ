// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const Owner = ""; //change

  const PickleBullz = await ethers.getContractFactory("PICKLEBULLZ");

  const picklebullz = await PickleBullz.deploy(
    Owner,
    "Pickle Bullz",
    "PICKLEBULLZ",
    ethers.parseUnits("420000000000000", 18)
  );

  await picklebullz.waitForDeployment();

  console.log(` AudaXious contract address: ${picklebullz.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
