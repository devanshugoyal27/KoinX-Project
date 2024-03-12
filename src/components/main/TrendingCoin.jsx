import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";

const TrendingCoin = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      setData(response.data.coins.slice(0, 3));
      console.log(response.data.coins.slice(0, 3));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* poster  */}
      <div className="bg-blue-600 text-white rounded-md p-4 flex flex-col gap-3 items-center">
        <h1 className="font-bold text-2xl text-center md:w-[20vw]">
          Get Started with KoinX for FREE
        </h1>
        <p>
          with our range of features that you can equip for free, koinX allows
          you to be more educated and aware of your tax reports
        </p>
        <img
          src="https://www.koinx.com/_next/static/media/LowerSection.7ba5b083.png"
          alt="img"
          className="w-[12vw]"
        />
        <button className="bg-white py-2 px-3 text-black font-semibold flex items-center rounded-md">
          Get Started for FREE <IoIosArrowRoundForward />
        </button>
      </div>

      {/* trending coins  */}

      <div className="bg-white rounded-md p-5 mt-3">
        <h1 className="text-xl font-semibold mb-4">Trending Coins (24h)</h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            {data?.map((coins) => (
              <div className="flex">
                <img
                  src={coins.item.small}
                  alt="img"
                  className="lg:w-[2vw] md:w-[4vw] mr-3"
                />
                <button className="font-semibold text-sm">
                  {coins.item.name} ({coins.item.symbol})
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:gap-5 md:gap-8 gap-11 mt-2">
            {data?.map((coins) => (
             
                <p className="bg-green-100 text-green-500 ml-3 px-2 font-semibold text-sm mb-3 text-center whitespace-nowrap">
                  ▲ {coins.item.data.price_change_percentage_24h.btc.toFixed(2)}{" "}
                  %
                </p>
             
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCoin;
