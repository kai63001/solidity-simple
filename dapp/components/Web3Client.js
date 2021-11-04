import { ethers } from "ethers";
const privateKey =
  "0x26c4bcb34ceca1f4e0e7dd32d47baf480c32421c4b942a2013d460014cdf2aaa";
import data from "../../artifacts/contracts/SimpleMint.sol/TestNft.json";

let contract;
export const init = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-ropsten.alchemyapi.io/v2/ItzlUeRdcRPFxf0LpW4ggGAu6R0AnjJs",
    "ropsten"
  );
  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  //   provider.mintNFT("rrrr")
  const wallet = new ethers.Wallet(privateKey, provider);
  console.log(wallet);
  contract = new ethers.Contract(
    "0x39E7B73AA728e716b70bd067E8b685fc7F18922C",
    data.abi,
    wallet
  );
  console.log(contract);
};

export const name = () => {
  contract.name().then(function (transaction) {
    console.log(transaction);
  });
};
