import React, { useEffect, useState } from "react";
import axios from "axios";
import Fundamentals from "./Fundamentals";
import ShimmerUi2 from "../Shimmer/ShimmerUi2";

const Performance = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pricePosition, setPricePosition] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=2"
      );
      setData(response.data[0]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const range = data.high_24h - data.low_24h;
    const position = ((data.current_price - data.low_24h) / range) * 100;
    setPricePosition(position);
  }, [data]);

  return (
    <div>
      {data ? (
        <div className="bg-white p-4 mt-5 rounded-md">
          <h1 className="text-2xl font-semibold mb-4">Performance</h1>

          {/* low and high  */}
          <div className="flex justify-between items-center gap-8">
            <div className="text-center">
              <p className="md:text-sm text-xs whitespace-nowrap text-gray-600 font-semibold">
                Today's Low
              </p>
              <p className="md:text-xl text-sm">
                {data?.low_24h.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="h-2 w-[70%] customBg rounded-md relative">
              <p
                className="absolute flex items-center flex-col right-0 md:text-sm text-xs whitespace-nowrap"
                style={{ left: `${pricePosition}%` }}
              >
                <span>▲</span>${data?.current_price.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="text-center">
              <p className="md:text-sm text-xs whitespace-nowrap text-gray-600 font-semibold">
                Today's High
              </p>
              <p className="md:text-xl text-sm">
                {data?.high_24h.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          {/* 52 weak low and high  */}

          <div className="flex justify-between items-center gap-8 mt-10">
            <div className="text-center">
              <p className="md:text-sm text-xs whitespace-nowrap text-gray-600 font-semibold">
                52W Low
              </p>
              <p className="md:text-xl text-sm">16,930</p>
            </div>

            <div className="h-2 w-[70%] customBg rounded-md relative"></div>
            <div className="text-center">
              <p className="md:text-sm text-xs whitespace-nowrap text-gray-600 font-semibold">
                52W High
              </p>
              <p className="md:text-xl text-sm">
                {data?.ath.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
          <Fundamentals data={data} />
        </div>
      ) : (
        <ShimmerUi2 />
      )}
    </div>
  );
};

export default Performance;
