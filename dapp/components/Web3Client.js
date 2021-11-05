import { ethers } from "ethers";
const privateKey =
  "0x26c4bcb34ceca1f4e0e7dd32d47baf480c32421c4b942a2013d460014cdf2aaa";
import data from "../../artifacts/contracts/SimpleMint.sol/TestNft.json";
const conTractAddress = "0xA62c61858c10fD54C385f6FbcE867aE803B22FE0";

let myAddress = "";
let contract;
const provider = new ethers.providers.Web3Provider(web3.currentProvider);
export const init = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider(
  //     "https://eth-ropsten.alchemyapi.io/v2/ItzlUeRdcRPFxf0LpW4ggGAu6R0AnjJs",
  //     "ropsten"
  //   );
  console.log(provider);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log(signer);
  console.log(web3.currentProvider);
  //   console.log(signer.getAddress());
  // const balance = await signer.getBalance();
  // console.log(parseFloat(balance.toString()) / 10 ** 18);
  // const signatures = await signer.signMessage("hel");
  // console.log(signatures)
  //   provider.mintNFT("rrrr")
  // const wallet = new ethers.Wallet(signatures, provider);
    // console.log(wallet);
  contract = new ethers.Contract(conTractAddress, data.abi, signer);
  console.log(contract);
  const balance = await contract.balanceOf(await signer.getAddress());
  console.log(balance.toString());
  // console.log((await contract.balanceOf("0xE64e6F6d295EC2D1dc34bA1d07ef3bB7571b0499")));
};

export const totalSupply = () => {
  contract.deposit({ value: 1000000000000000 }).then(function (transaction) {
    console.log(transaction);
  });
};

export const mint = () => {
  contract.mintNFT("hololo").then(function (transaction) {
    console.log(transaction);
  });
};

export const changeFee = () => {
  contract.changeFee(15).then(function (transaction) {
    console.log(transaction);
  });
};
