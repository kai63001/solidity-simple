import Web3 from "web3";

import NFTContractBuild from "../../artifacts/contracts/SimpleMint.sol/TestNft.json";

let nftContract;

export const init = async () => {
  let provider = window.ethereum;
  if (typeof provider !== "undefined") {
    console.log("welcome");
  }

  const web3 = new Web3("https://eth-ropsten.alchemyapi.io/v2/ItzlUeRdcRPFxf0LpW4ggGAu6R0AnjJs");
  console.log(web3);
  // const netWorkId = await web3.net.getId();

  nftContract = new web3.eth.Contract(NFTContractBuild.abi, "0x38c99034Ca6f902E86aB86391d3f0Dc9b35D99Ff");
//   nftContract.deploy().send()
  console.log(nftContract);
};

export const getBalance = (address) => {
  return nftContract.methods.getBalance().call();
};
