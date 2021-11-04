import { injected } from "../components/wallet/connections";
import { init, totalSupply,mint } from "../components/Web3Client";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

export default function Home({ web3 }) {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const balance = async () => {
    // getBalance(account.toString()).then((balance) => {console.log(balance);}).catch((err) => {console.log(err)});
    totalSupply()
  };

  const minter = async () => {
    // mint(account.toString()).then((balance) => {console.log(balance);}).catch((err) => {console.log(err)});
    mint();
  };

  useEffect(() => {
    // console.log(provider)
    // connect();
    init();
    // console.log("effect")
  }, [account]);
  return (
    <div className="w-screen h-screen">
      <div className="m-auto w-32">
        CONNECT
        <br />
        {active ? <span>{account}</span> : <span>not connect</span>}
        <br />
        <button className="px-4 py-2 bg-red-500" onClick={connect}>
          LOGIN
        </button>
        <br />
        <div onClick={balance}>blance</div>
        <br />
        <button className="px-4 py-2 bg-red-500" onClick={minter}>
          mint
        </button>
        <br />
        <button className="px-4 py-2 bg-red-500" onClick={disconnect}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}
