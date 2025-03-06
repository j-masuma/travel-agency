'use client';

import React, { useState, useEffect, useRef } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
const TopDest = () => {
  return (
    <div>
        <div className="flex flex-col gap-4 mx-8">
            <h4 className=" text-sm sm:text-lg md:text-2xl">
                Top Destinations
            </h4>
            <div className='flex justify-between items-end'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[500] w-[50%]">
                    <span className="text-[#367272]"> Discover </span>
                    Your Next Dream
                    <span className="text-[#367272]"> Destination</span>
                </h2>
                <p className="text-[#575757] font-[400] text-lg w-[50%] text-right">
                    Lorem ipsum dolor sit amet consectetur. Mauris hendrerit aliquam nisi sit
                    eget sit. Natoque placerat eu volutpat est pellentesque bibendum iaculis sit.
                </p>
            </div>
            <TopPicks/>
        </div>
    </div>
  )
}





 
const topPicks = [
    { 
        id: 1, 
        name: 'Lorem Ipsum Doler1', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png'
     },
    { 
        id: 2, 
        name: 'Lorem Ipsum Doler2', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png' },
    { 
        id: 3, 
        name: 'Lorem Ipsum Doler3', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png' },
    { 
        id: 4, 
        name: 'Lorem Ipsum Doler4', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png' 
    },
    { 
        id: 5, 
        name: 'Lorem Ipsum Doler5', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png' 
    },
    { 
        id: 6, 
        name: 'Lorem Ipsum Doler6', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png' 
    },
    { 
        id: 7, 
        name: 'Lorem Ipsum Doler7', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png' 
    },
    { 
        id: 8, 
        name: 'Lorem Ipsum Doler8', 
        desc : 'lorem ipsum dolor sit amet',
        image: '/images/about-1.png' 
    },
  ];

export const TopPicks = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % topPicks.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + topPicks.length) % topPicks.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);

  const getVisibleTopPicks = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 550) return 1;
    if (windowWidth < 768) return 2;
    return 3;
  };

  const visibleTopPicks = getVisibleTopPicks();

  const visibleItems = [
    ...topPicks.slice(index, index + visibleTopPicks),
    ...topPicks.slice(0, Math.max(0, index + visibleTopPicks - topPicks.length)),
  ];

  return (
    <div className="featured-topPicks">
       
        
                {/* <button className="carousel-control prev" onClick={prevSlide}>
                    <HiArrowLongLeft size={20}/>
                </button> */}
                <div className="flex justify-center gap-4">
                {visibleItems.map((place, i) => (
                    <div key={place.id + "-" + i} className="flex flex-col gap-2">
                        <img src={place.image} alt="place" className="" />
                        <div>
                            <p className="text-2xl font-[500]">{place.name}</p>
                            <p className="text-lg text-gray-500">{place.desc}</p>
                        </div>
                    </div>
                ))}
                </div>
                {/* <button className="carousel-control next" onClick={nextSlide}>
                    <HiArrowLongRight size={20} />
                </button> */}
       
    </div>
  );
};












export default TopDest