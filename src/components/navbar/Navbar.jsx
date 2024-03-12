import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md md:px-14 px-4 flex justify-between items-center w-full md:h-[10vh]">
      <div>
        <img
          src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
          alt="logo"
          className="md:w-30 w-20"
        />
      </div>

      <div
        className={`md:flex gap-4 items-center ${
          isMenuOpen ? "flex flex-col gap-5 w-full h-[100vh] py-10 absolute top-0 left-0 bg-white bg-opacity-90 transition-all duration-500 ease-in-out" : "hidden"
        }`}
      >
        <p className="font-semibold cursor-pointer">Crypto Taxes</p>
        <p className="font-semibold cursor-pointer">Free Tools</p>
        <p className="font-semibold cursor-pointer">Resourse Center</p>
        <button className="py-2 px-4 bg-blue-600 text-white rounded-md font-semibold">
          Get Started
        </button>
      </div>

      <div className="md:hidden">
        {isMenuOpen ? (
          <IoClose className="absolute right-3 top-2" size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <IoMdMenu size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
