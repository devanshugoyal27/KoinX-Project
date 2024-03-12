import React from "react";
import PriceAndChart from "./PriceAndChart";
import TrendingCoin from "./TrendingCoin";
import Routing from "./Routing";


const Body = () => {
  return (
    <div className="md:grid md:grid-cols-3 lg:px-14 md:px-6 px-4 gap-6">
      {/* price and analyis  */}
      <div className="col-span-2 mt-5">
        <PriceAndChart />
       <Routing/>
      </div>

      {/* trending coins  */}
      <div className="md:col-span-1 md:mt-14 mt-8 hidden md:block">
        <TrendingCoin />
      </div>
    </div>
  );
};

export default Body;
