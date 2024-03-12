import React from "react";
import CircleSvg from "./CircleSvg";
import { GoDotFill } from "react-icons/go";

const Toknomics = () => {
  return (
    <div className="bg-white rounded-md mt-5 p-4">
      <h1 className="text-2xl font-semibold">Toknomics</h1>
      <p className="font-semibold text-lg my-5">Initial Distribution</p>
      <div className="flex md:flex-row flex-col gap-5 items-center">
        <div className="">
         <CircleSvg/>
        </div>
        <div>
          <p className="flex gap-2 items-center"><GoDotFill size={22} color="#2d6cfd"/> Crowdsale investor: 80%</p>
          <p className="flex gap-2 items-center"><GoDotFill size={22} color="#fd842d"/> Foundation: 20%</p>
        </div>
      </div>

      <p className="text-gray-600 my-4">There is no allocation of Bitcoin as newly minted Bitcoin is awarded to whichever miner that mines a new block. That being said, it is worth noting that there had been speculation for years on "Satoshi's Bitcoin Holding" based on their alleged mining activity in the early onset of the Bitcoin Network's existence. Despite that, there is no concrete proof of their actual ownership of the coins and claims remain highly speculated. All currently mined Bitcoin is considered circulating with the arguable exception of certain provably burned bitcoin addresses.</p>
    </div>
  );
};

export default Toknomics;
