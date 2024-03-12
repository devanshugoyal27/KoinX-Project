import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Simmer from "./Simmer";
import TradingViewWidget from "./TradingViewWidget";

const PriceAndChart = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true&precision=2"
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   if (error) return <div><Simmer/></div>;

  return (
    <div>
      <div className="">
        <h1 className="flex gap-2 items-center ">
          <span className="flex gap-2 items-center text-gray-500 cursor-pointer">
            Cryptocurrencies <MdKeyboardDoubleArrowRight />
          </span>{" "}
          <span className="font-semibold cursor-pointer">Bitcoin</span>
        </h1>

        {/* charts  */}
        {data ? (
          <div className="bg-white rounded-md p-4 mt-3">
            <div className="flex items-center gap-3">
              <img className="md:w-[2.2vw] w-[6vw]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="btc" />
              <p className="font-semibold text-3xl">Bitcoin</p>
              <p className="text-gray-800">BTC</p>
              <p className="py-1 px-2 bg-gray-500 rounded-md text-white ml-5">
                Rank #1
              </p>
            </div>

            <div className="flex items-center gap-5 mt-5">
              <p className="text-4xl font-semibold">${data?.bitcoin?.usd.toLocaleString("en-IN")}</p>
              <p className="bg-green-100 text-green-500 whitespace-nowrap  px-2 font-semibold">
                ▲ {data?.bitcoin?.usd_24h_change.toFixed(2)} %
              </p>
              <p className="text-gray-500">(24H)</p>
            </div>
            <p className="font-semibold mt-2">
              ₹{data?.bitcoin?.inr.toLocaleString("en-IN")}
            </p>

            <div className="mt-4">
              <TradingViewWidget />
            </div>
          </div>
        ) : (
          <Simmer />
        )}
      </div>
    </div>
  );
};

export default PriceAndChart;
