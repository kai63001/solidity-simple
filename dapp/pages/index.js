import { injected } from "../components/wallet/connections";
import {
  init,
  totalSupply,
  mint,
  changeFee,
  // address,
} from "../components/Web3Client";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

export default function Home({ web3 }) {
  // let [myAddress, setMyAddress] = useState('');
  const balance = async () => {
    // getBalance(account.toString()).then((balance) => {console.log(balance);}).catch((err) => {console.log(err)});
    totalSupply();
  };

  const minter = async () => {
    // mint(account.toString()).then((balance) => {console.log(balance);}).catch((err) => {console.log(err)});
    mint();
  };

  const _changeFee = () => {
    changeFee();
  };

  useEffect(async () => {
    // console.log(provider)
    // connect();
    init();
    // setMyAddress(await address())

    // console.log("effect")
  }, []);
  return (
    <div className="w-screen h-screen">
      <div className="m-auto text-center">
        CONNECT
        <br />
        <div>{"asd"}</div>
        <br />
        <div onClick={balance}>blance</div>
        <br />
        <button className="px-4 py-2 bg-red-500" onClick={minter}>
          mint
        </button>
        <br />
        <br />
        <button className="px-4 py-2 bg-red-500" onClick={_changeFee}>
          _changeFee
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
