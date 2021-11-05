import { ethers } from "ethers";
const privateKey =
  "0x26c4bcb34ceca1f4e0e7dd32d47baf480c32421c4b942a2013d460014cdf2aaa";
import data from "../../artifacts/contracts/SimpleMint.sol/TestNft.json";
const address = "0xA62c61858c10fD54C385f6FbcE867aE803B22FE0";

let contract;
export const init = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider(
  //     "https://eth-ropsten.alchemyapi.io/v2/ItzlUeRdcRPFxf0LpW4ggGAu6R0AnjJs",
  //     "ropsten"
  //   );
  const provider = new ethers.providers.Web3Provider(web3.currentProvider);
  console.log(provider);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log(signer);
  //   console.log(signer.getAddress());
  const signatures = await signer.getAddress()
  console.log(signatures);

  //   provider.mintNFT("rrrr")
//   const wallet = new ethers.Wallet(signatures, provider);
//   console.log(wallet);
  contract = new ethers.Contract(address, data.abi, signer);
  console.log(contract);
};

export const totalSupply = () => {
  contract.deposit({value:1000000000000000}).then(function (transaction) {
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
}
