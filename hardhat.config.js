require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
const secret = require("./secret.json");
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "ItzlUeRdcRPFxf0LpW4ggGAu6R0AnjJs";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY =
  "26c4bcb34ceca1f4e0e7dd32d47baf480c32421c4b942a2013d460014cdf2aaa";

module.exports = {
  solidity: "0.8.5",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
    testnet: {
      url: secret.url,
      chainId: 97,
      accounts: [secret.key],
    },
  },
};
