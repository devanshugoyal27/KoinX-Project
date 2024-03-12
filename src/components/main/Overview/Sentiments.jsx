import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Sentiments = () => {

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="flex justify-center items-center">
        <button className={currentSlide === 0 ? 'disable' : 'bg-white rounded-full p-2 absolute left-8'} onClick={() => previous()} ><IoIosArrowBack color="gray" size={30} /></button>
        <button className={currentSlide === 2 ? 'disable' : 'bg-white rounded-full p-2 absolute right-8'} onClick={() => next()}><IoIosArrowForward size={30} color="gray"/></button>
      </div>
    );
  }


  return (
    <div className="bg-white p-4 mt-5 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Sentiment</h1>
      <h2 className="text-xl text-gray-600 font-bold flex gap-1 items-center">
        Key Events
        <span className="text-gray-500">
          <IoInformationCircleOutline size={20} />
        </span>
      </h2>

      <Carousel
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        swipeable={false}
        draggable={false}
        className="my-5"
        arrows={false} 
        customButtonGroup={<ButtonGroup />}
      >
        <div className="flex gap-3 bg-blue-100 rounded-lg p-4 mx-4">
          <img
            src="https://www.pngitem.com/pimgs/m/536-5366304_media-and-pr-icon-hd-png-download.png"
            alt="logo"
            className="w-14 h-14 rounded-full"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
            </h2>
            <p className="text-gray-500 tex-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              adipisci dolorem natus fugit perspiciatis? Dolorum alias
              temporibus quisquam tempora nesciunt perspiciatis quis, illum{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-3 bg-red-100 rounded-lg p-4 mx-4">
          <img
            src="https://www.pngitem.com/pimgs/m/536-5366304_media-and-pr-icon-hd-png-download.png"
            alt="logo"
            className="w-14 h-14 rounded-full"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
            </h2>
            <p className="text-gray-500 tex-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              adipisci dolorem natus fugit perspiciatis? Dolorum alias
              temporibus quisquam tempora nesciunt perspiciatis quis, illum{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-3 bg-green-100 rounded-lg p-4 mx-4">
          <img
            src="https://www.pngitem.com/pimgs/m/536-5366304_media-and-pr-icon-hd-png-download.png"
            alt="logo"
            className="w-14 h-14 rounded-full"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
            </h2>
            <p className="text-gray-500 tex-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              adipisci dolorem natus fugit perspiciatis? Dolorum alias
              temporibus quisquam tempora nesciunt perspiciatis quis, illum{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-3 bg-yellow-100 rounded-lg p-4 mx-4">
          <img
            src="https://www.pngitem.com/pimgs/m/536-5366304_media-and-pr-icon-hd-png-download.png"
            alt="logo"
            className="w-14 h-14 rounded-full"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
            </h2>
            <p className="text-gray-500 tex-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              adipisci dolorem natus fugit perspiciatis? Dolorum alias
              temporibus quisquam tempora nesciunt perspiciatis quis, illum{" "}
            </p>
          </div>
        </div>
      </Carousel>

      <div>
        <h2 className="text-xl text-gray-600 font-bold flex gap-1 items-center">
        Analyst Estimate
        <span className="text-gray-500">
          <IoInformationCircleOutline size={20} />
        </span>
      </h2>

      <div className="flex gap-10 mt-5 items-center">
        <div className="w-32 h-32 rounded-full font-semibold  bg-green-100 text-4xl text-green-600 flex justify-center items-center">76%</div>


        <div>
        <div className="flex gap-4 items-center">
        <span className="text-gray-600">Buy</span>
        <p className="h-2 bg-green-600 rounded-md w-[20vw]"></p>
        <span className="text-gray-600">76%</span>
        </div>
        <div className="flex gap-4 items-center">
        <span className="text-gray-600">Hold</span>
        <p className="h-2 bg-gray-400 rounded-md w-[3vw]"></p>
        <span className="text-gray-600">8%</span>
        </div>
        <div className="flex gap-4 items-center">
        <span className="text-gray-600">Sell</span>
        <p className="h-2 bg-red-600 rounded-md w-[5vw]"></p>
        <span className="text-gray-600">16%</span>
        </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Sentiments;
