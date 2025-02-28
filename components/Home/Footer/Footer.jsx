"use client";

import React, { useRef, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div
    //h-[550px] min-h-screen
      className=" bg-cover m-1 rounded-2xl "
      style={{
        backgroundImage: 'url("/images/footer-bg.png")',
      }}
    >
      <div className="h-full flex flex-col text-center justify-between items-center text-white pt-10 md:pt-16  py-6 w-full">
    
        <div className="flex flex-col  justify-center items-center gap-6 ">
            <h1 className="text-xl sm:text-4xl md:text-[3rem] w-[95%] ">
            Find the Perfect trip for you and discover Extraordinary adventures with us! 
            </h1>

            <p className=" text-[16px] w-[80%] md:w-[60%]">
                Want a fully personalized travel experience? Design your own itinerary, choose your destinations, and travel at your own pace.
            </p>
            <button className="inline-flex w-fit items-center text-lg px-3 py-2 rounded-full cursor-pointer bg-white text-black">
                Explore Now
                <span className="border-2 border-[#154242] bg-[#154242] p-1 ml-1 rounded-full text-white ">
                  <GoArrowUpRight
                    size={15}
                    className="text-black md:w-5 md:h-5"
                  />
                </span>
            </button>
            
        </div>
        <div className="w-[93%]">
            <div className="text-[96px] md:text-[150px] lg:text-[200px] font-[500]">
                LOGO
            </div>
           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div>
                    LOGO
                </div>
                <div className="flex gap-4 md:gap-3 justify-center items-center">
                    <Link href="/" className="p-2 border-[1px] border-white rounded-full  hover:bg-gray-200 text-white hover:text-black transform transition-tranform duration-300 ">
                        <SiGmail  size={20}/>
                    </Link>
                    <Link href="/" className="p-2 border-[1px] border-white rounded-full hover:bg-gray-200 text-white hover:text-black transform transition-tranform duration-300">
                        <FaBehance size={20}/>
                    </Link>
                    <Link href="/" className="p-2 border-[1px] border-white rounded-full hover:bg-gray-200 text-white hover:text-black transform transition-tranform duration-300">
                        <RiLinkedinBoxLine size={25}/>
                    </Link>
                    <Link href="/" className="p-2 border-[1px] border-white rounded-full hover:bg-gray-200 text-white hover:text-black transform transition-tranform duration-300">
                        <FaFacebookF size={20}/>
                    </Link>
                    <Link href="/" className="p-2 border-[1px] border-white rounded-full hover:bg-gray-200 text-white hover:text-black transform transition-tranform duration-300">
                        <FaInstagram size={20}/>
                    </Link>
                    <Link href="/" className="p-2 border-[1px] border-white rounded-full hover:bg-gray-200 text-white hover:text-black transform transition-tranform duration-300">
                        <FaXTwitter size={20}/>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={'/template'}>Template</Link>
                    <Link href={'/tools'}>Tools</Link>
                    <Link href={'/features'}>Features</Link>
                    <Link href={'/aboutus'}>About Us</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer