import { task } from "hardhat/config";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

task("sign", "Sign message")
  .addParam("from", "From address")
  .addParam("to", "To address")
  .addParam("amount", "Amount")
  .addParam("nfrom", "ID network from")
  .addParam("nto", "ID network to")
  .addParam("nonce", "Nonce")
  .setAction(async ({ from, to, amount, nfrom, nto, nonce }, {ethers}) => {
    const [owner]: SignerWithAddress[] = await ethers.getSigners();
    const msg = ethers.utils.solidityKeccak256(
      ["address", "address", "uint256", "uint256", "uint256", "uint256"],
      [from, to, amount, nfrom, nto, nonce]
    );
    const signature = await owner.signMessage(ethers.utils.arrayify(msg));
    console.log(signature);
  });