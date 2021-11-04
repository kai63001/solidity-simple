import { injected } from "../components/wallet/connections";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

export default function Home() {
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
  useEffect(() => {
    // connect();
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
        <button className="px-4 py-2 bg-red-500" onClick={disconnect}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}
