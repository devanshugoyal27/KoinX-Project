import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
  mobile2: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const TrendingCrypto = ({ title }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      setData(response.data.coins);
      console.log(response.data.coins);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="flex justify-center items-center">
        <button
          className={
            currentSlide === 0
              ? "disable"
              : "bg-white rounded-full p-2 absolute left-0 top-8 md:top-14 border-2 "
          }
          onClick={() => previous()}
        >
          <IoIosArrowBack color="gray" size={15} />
        </button>
        <button
          className={
            currentSlide === 8
              ? "disable"
              : "bg-white rounded-full p-2 absolute right-0 top-8 md:top-14 border-2"
          }
          onClick={() => next()}
        >
          <span ><IoIosArrowForward size={15} color="gray"/></span>
        </button>
      </div>
    );
  };

  return (
    <div className="md:px-2">
      <h1 className="text-2xl font-semibold mb-4 px-5">{title}</h1>
      <div className="">
        {data && (
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          swipeable={false}
          draggable={false}
          className="md:my-5 w-[100%] md:w-[96vw]"
          arrows={false}
          customButtonGroup={<ButtonGroup />}
        >
          {data.map((coin) => (
            <div
              key={coin.item.id}
              className="lg:w-[18vw] md:w-[28vw] lg:h-[20vh] w-[42vw] border-2 p-3 rounded-md md:ml-3 "
            >
              <div className="flex md:gap-3 gap-1 items-center">
                <img
                  src={coin.item.small}
                  alt=""
                  className="rounded-full md:w-8 w-4"
                />
                <span className="md:text-sm text-xs font-semibold">{coin.item.symbol}</span>
                <span
                  className={`md:px-2 px-1 text-xs md:text-sm ${
                    coin.item.data.price_change_percentage_24h.btc > 0
                      ? "text-green-600 bg-green-100"
                      : "text-red-600 bg-red-100"
                  }`}
                >
                  {coin.item.data.price_change_percentage_24h.btc.toFixed(2)}%
                </span>
              </div>
              <p className="font-bold md:text-xl">{coin.item.data.price}</p>

              <img
                src={coin.item.data.sparkline}
                alt="sparkline"
                className="md:w-40 w-24 mx-auto"
              />
            </div>
          ))}
        </Carousel>
      )}
      </div>
      
    </div>
  );
};

export default TrendingCrypto;
