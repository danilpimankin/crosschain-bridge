import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

task("swap", "Swap tokens")
  .addParam("contract", "Contract address")
  .addParam("to", "To address")
  .addParam("amount", "Amount")
  .addParam("nto", "ID network to")
  .setAction(async ({ contract, to, amount, nto } , {ethers}) => {
    const bridge = await ethers.getContractAt("Bridge", contract);

    const tx = await bridge.swap(to, amount, nto);
    await tx.wait();
    console.log("Swapped");
  });