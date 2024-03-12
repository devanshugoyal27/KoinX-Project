import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

const Fundamentals = ({ data }) => {
  return (
    <div className="mt-6">
      <h1 className="text-xl text-gray-600 font-semibold flex gap-1 items-center">
        Fundamentals{" "}
        <span className="text-gray-500">
          <IoInformationCircleOutline size={20} />
        </span>
      </h1>

      <div className="md:flex justify-between items-center w-[100%] my-5">
        {/* left  */}
        <div className="md:w-[45%] mt-2">
          <div className="flex justify-between border-b-[2px] pb-3 mb-3">
            <p className="text-gray-500 font-semibold text-sm">Bitcoin Price</p>
            <p>${data?.current_price?.toLocaleString("en-IN")}</p>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3 mb-3">
            <p className="text-gray-500 font-semibold text-sm">
              24h Low / 24H High
            </p>
            <p>
              ${data?.low_24h} / ${data?.high_24h}
            </p>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3 mb-3">
            <p className="text-gray-500 font-semibold text-sm">
              7d Low / 7d High
            </p>
            <p>${data?.current_price?.toLocaleString("en-IN")}</p>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3 mb-3" >
            <p className="text-gray-500 font-semibold text-sm">
              Trading Volume
            </p>
            <p>${data?.total_volume.toLocaleString("en-IN")}</p>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3">
            <p className="text-gray-500 font-semibold text-sm">
              Marke Cap Rank
            </p>
            <p>#{data?.market_cap_rank}</p>
          </div>
        </div>

        {/* right  */}
        <div className="md:w-[45%] mt-3 md:mt-0">
          <div className="flex justify-between border-b-[2px] pb-3 mb-3">
            <p className="text-gray-500 font-semibold text-sm">Market Cap</p>
            <p>${data?.market_cap.toLocaleString("en-IN")}</p>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3 mb-3">
            <p className="text-gray-500 font-semibold text-sm">
              Market Cap Dominance
            </p>
            <p>51.76%</p>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3 mb-3">
            <p className="text-gray-500 font-semibold text-sm">
              Volume/Market Cap
            </p>
            <p>{(data?.total_volume / data?.market_cap).toFixed(3)}</p>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3" mb-3>
            <p className="text-gray-500 font-semibold text-sm">All Time High</p>
            <div className="text-center">
              <p>
                ${data?.ath.toLocaleString("en-IN")}{" "}
                <span className={
                    data?.ath_change_percentage > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }>
                  {data?.ath_change_percentage}%
                </span>
              </p>
              <p className="text-xs">
                {`${new Date(data?.ath_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })} (${
                  new Date(data?.ath_date).toDateString() ===
                  new Date().toDateString()
                    ? "Just now"
                    : Math.floor(
                        (new Date() - new Date(data?.ath_date)) /
                          (1000 * 60 * 60 * 24)
                      ) + " days ago"
                })`}
              </p>
            </div>
          </div>
          <div className="flex justify-between border-b-[2px] pb-3 mt-3">
            <p className="text-gray-500 font-semibold text-sm">All Time Low</p>
            <div className="text-center">
              <p>
                ${data?.atl}{" "}
                <span
                  className={
                    data?.atl_change_percentage > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {data?.atl_change_percentage.toFixed(0)}%
                </span>
              </p>
              <p className="text-xs">
                {`${new Date(data?.atl_date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })} (${Math.floor(
                  (new Date() - new Date(data?.atl_date)) /
                    (1000 * 60 * 60 * 24 * 365)
                )} year${
                  Math.floor(
                    (new Date() - new Date(data?.atl_date)) /
                      (1000 * 60 * 60 * 24 * 365)
                  ) !== 1
                    ? "s"
                    : ""
                } ago)`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
