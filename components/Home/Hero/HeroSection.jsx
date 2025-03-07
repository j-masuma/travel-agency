"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <div
      className="h-[550px] max:h-screen bg-cover -mt-[4.5rem] md:-mt-20 mx-1 sm:mx-2 rounded-2xl"
      style={{
        backgroundImage: 'url("/images/hero-bg.png")',
      }}
    >
      <div className="h-full flex flex-col justify-around md:flex-row md:justify-between text-white mx-4 md:ml-12 py-4 mt-2">
    
        <div className="flex flex-col  justify-end gap-4 w-[95%] xs:w-3/4 md:w-2/3 lg:w-[57%] my-12">
            <h1 className="text-2xl sm:text-4xl md:text-[3rem] font-[500]">
                Discover the World, <br />
                One Destination at a Time!
            </h1>

            <p className=" text-base leading-relaxed sm:text-lg">
                Want a fully personalized travel experience? Design your own itinerary, choose your destinations, and travel at your own pace.
            </p>
            <button className="inline-block w-fit text-lg border-[1.5px] p-2 rounded-lg cursor-pointer hover:border-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                Explore Now
            </button>
            
        </div>
        <div className="flex md:flex-col gap-2 justify-center items-center">
            <Link href="/" className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-300 text-black">
                <FaFacebookF className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"/>
            </Link>
            <Link href="/" className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-300 text-black">
                <FaInstagram className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"/>
            </Link>
            <Link href="/" className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-300 text-black">
                <FaXTwitter className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"/>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
