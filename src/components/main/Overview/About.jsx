import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white rounded-md mt-5 p-4">
      <h1 className="text-xl font-bold">About Bitcoin</h1>
      <h2 className="font-semibold mt-4">What is Bitcoin ?</h2>
      <p className="text-gray-600 border-b-2 pb-2">
        Bitcoin (BTC) is the first cryptocurrency built on blockchain
        technology, also known as a decentralized digital currency that is based
        on cryptography. Unlike government-issued or fiat currencies such as US
        Dollars or Euro which are controlled by the country's central bank,
        Bitcoin can operate without the need of a central authority like a
        central bank or a company. The decentralized nature allows it to operate
        on a peer-to-peer network whereby users are able to send funds to each
        other without going through intermediaries.
      </p>

      <h2 className="font-semibold mt-4">Who created Bitcoin?</h2>
      <p className="text-gray-600 border-b-2 pb-2">
        The creator is an unknown individual or group that goes by the name
        Satoshi Nakamoto with the idea of an electronic peer-to-peer cash system
        as it is written in a whitepaper. Until today, the true identity of
        Satoshi Nakamoto has not been verified though there has been speculation
        and rumor as to who Satoshi might be. What we do know is that
        officially, the first genesis block of BTC was mined on 9th January
        2009, defining the start of cryptocurrencies.
      </p>

      <h2 className="font-semibold my-4">Already Hold Bitcoin ?</h2>
      <div className="lg:flex justify-between lg:px-5 mt-5 pb-4 border-b-2 ">
        <div className="backBgCustom lg:w-[47%]   rounded-md p-4 flex gap-8">
            <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-18440,resizemode-75,msid-88303493/markets/stocks/news/decoding-sebis-move-to-ring-fence-retail-traders-from-dangers-of-algo-trading/stock-market-thinkstock.jpg" alt="img" className="md:w-36 md:h-30 w-20 h-20 rounded-md" />

            <div>
                <p className="md:text-2xl font-semibold text-white mb-4 w-40">Calculate your Profits</p>
                <button className="text-sm py-1 px-3 bg-white text-black rounded-md font-semibold flex items-center gap-2">Check Now <FaArrowRight /></button>
            </div>
        </div>
        <div className="backbgCustom2 lg:w-[47%]  rounded-md p-4 flex gap-8 mt-4 lg:mt-0">
            <img src="https://libertex.org/sites/default/files/styles/blog_detail_hero/public/2023-03/day-trading-main.jpg?itok=DHNj4PbF" alt="" className="md:w-36 md:h-30 w-20 h-20 rounded-md"/>

            <div>
                <p className="md:text-2xl font-semibold text-white mb-4">Calculate your tax liability</p>
                <button className="text-sm py-1 px-3 bg-white text-black rounded-md font-semibold flex items-center gap-2">Check Now <FaArrowRight /></button>
            </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">While the general public perceives Bitcoin as a physical looking coin, it is actually far from that. Under the hood, it is a distributed accounting ledger that is stored as a chain of blocks - hence the name blockchain.</p>
    </div>
  );
};

export default About;
