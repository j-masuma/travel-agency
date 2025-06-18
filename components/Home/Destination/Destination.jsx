'use client';

import React, { useState, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { FaAudioDescription } from 'react-icons/fa';

function Destination() {
    const [departureDate, setDepartureDate] = useState("2025-02-25");
    const [destination, setDestination] = useState("Thailand - Phuket");
    const [persons, setPersons] = useState("2 Adult - 2 Children");
  return (
    <div className='my-16 mx-4 md:ml-10 lg:ml-16 space-y-10'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[500] ">
            Find Your 
            <span className="text-[#367272] "> Destination!</span>
        </h2>

        {/* Search Destinations */}
        <div className="flex justify-center flex-wrap lg:flex-nowrap items-end gap-4 ">

            {/* Departure Date */}
            <div className="flex flex-col w-[80%] md:w-[45%] lg:w-[24%]">
                <label className="text-[#1E1E1E] text-[16px] md:text-lg mb-2">Departure</label>
                <div className="flex justify-between items-center relative">
                    <CiCalendarDate className="absolute ml-2 sm:ml-4 w-[20px] h-[20px] md:w-[25px] md:h-[25px]"  />
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className=" pl-10 sm:pl-12 pr-4 py-2 border border-[#D9D9D9] text-lg md:text-xl rounded-md focus:outline-none  w-full appearance-none  [&::-webkit-calendar-picker-indicator]:hidden"
                        onFocus={(e) => (e.target.showPicker ? e.target.showPicker() : null)} 
   
                    />
                </div>
            </div>

            {/* Destination */}
            <div className="flex flex-col w-[80%] md:w-[45%] lg:w-[24%]">
                <label className="text-[#1E1E1E] text-[16px] md:text-lg mb-2">Destination</label>
                <div className="relative flex items-center">
                    <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="px-4 py-2 border border-[#D9D9D9] text-lg md:text-xl rounded-md focus:outline-none appearance-none  w-full"
                    >
                        <option>Thailand - Phuket</option>
                        <option>Malaysia - Kuala Lumpur</option>
                        <option>Dubai - UAE</option>
                    </select>
                    
                    {/* Custom Arrow */}
                    <IoIosArrowDown
                        className="absolute right-4  pointer-events-none"
                        size={20} 
                    />
                </div>
            </div>

            {/* Persons */}
            <div className="flex flex-col w-[80%] md:w-[45%] lg:w-[24%]">
                <label className="text-[#1E1E1E] text-[16px] md:text-lg mb-2">Persons</label>
                <div className=" flex items-center w-full relative">
                    <BsPerson className="absolute ml-2 sm:ml-4 w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
                    
                        <select
                            value={persons}
                            onChange={(e) => setDestination(e.target.value)}
                            className="px-4 py-2 pl-10 border border-[#D9D9D9] text-lg md:text-xl rounded-md focus:outline-none appearance-none  w-full pr-10"
                        >
                            <option>2 Adult - 2 Children</option>
                            <option>1 Adult - 1 Child</option>
                            <option>3 Adult - 2 Children</option>
                        </select>
                        
                        {/* Custom Arrow */}
                        <IoIosArrowDown
                            className="absolute right-4  pointer-events-none"
                            size={20} 
                        />
                    
                </div>
            </div>

            {/* Search Button */}
            <button className="px-6 py-2  w-[80%] md:w-[45%] lg:w-[24%] bg-[#154242] text-xl text-white rounded-md hover:bg-[#3d6e6e]  cursor-pointer transform transition-transform duration-300">
                Search Now
            </button>
        </div>

        {/* Destinations */}
        <div>
            <Dests/>
        </div>
    </div>
  )
}






const destinations = [
  { 
    id: 1, 
    name: 'Azure Lagoon Villa', 
    description: 'Perched atop majestic cliffs, this resort delivers stunning sunset views and top-tier amenities. Experience gourmet dining, infinity pools, and cozy suites with breathtaking scenes of the Aegean Sea below.',
    image: '/images/dest-1.png', 
    minimage: '/images/destmini-1.png' 
  },
  { 
    id: 2, 
    name: 'Sunset Cliffside Resort', 
    description: 'Nestled by the shore, this intimate bungalow offers direct beach access and uninterrupted ocean views. It’s perfect for romantic escapes, morning walks, or peaceful nights listening to the waves.',
    image: '/images/about-2.png', 
    minimage: '/images/destmini-1.png' 
  },
  { 
    id: 3, 
    name: 'Seabreeze Bungalow', 
    description: 'Escape to this luxurious villa overlooking a crystal-clear lagoon. Surrounded by nature and designed for comfort, it is the ideal place to relax, unwind, and enjoy peaceful waterside views.',
    image: '/images/about-3.png', 
    minimage: '/images/destmini-1.png' 
  },
  { 
    id: 4, 
    name: 'Oasis Garden Retreat', 
    description: 'Escape into lush greenery, unwind with nature, and enjoy stylish interiors. This garden retreat offers comfort, serenity, and the perfect place to reconnect with yourself.',
    image: '/images/about-2.png', 
    minimage: '/images/destmini-1.png' 
  },
];


export const Dests = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  const getVisibleDestinations = () => {
    return 1;
  };

  const visibleDestinations  = getVisibleDestinations ();

  const visibleItems = [
    ...destinations.slice(index, index + visibleDestinations),
    ...destinations.slice(0, Math.max(0, index + visibleDestinations - destinations.length)),
  ];

  return (
    
    <div className=" md:mr-4">
        {visibleItems.map((dest, i) => (
            <div key={dest.id + "-" + i} className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-stretch  gap-4 w-full">
                <div className='w-[80%]  md:w-[45%] flex justify-self-center'>
                    <img src={dest.image} alt="dest" className="w-full h-full rounded md:rounded-2xl aspact-square md:aspect-[9/8]" />
                </div>
                <div className='w-[100%] md:w-[55%] flex flex-col justify-between gap-4 '>
                    <div className='mt-4 space-y-4 text-center md:text-left'>
                        <h5 className='text-2xl md:text-3xl xl:text-4xl font-[500]'>{dest.name}</h5>
                        <p className='text-base leading-relaxed md:text-lg text-[#555555]'>{dest.description}</p>
                    </div>
                    <div className='flex flex-row justify-between items-end'>
                        <div className='flex items-end gap-2'>
                            <img src={dest.minimage} alt="dest" className="rounded md:rounded-2xl w-[45%] md:w-[70%] aspect-square" />
                            <p className='text-base leading-relaxed md:text-lg font-[500]'>{dest.id}<span className='text-[12px] text-gray-500'>/60</span></p>
                        </div>
                        <div className='flex gap-2'>
                            <button className="text-[#286C6C] border-[1px] px-2 py-1 border-[#F2F2F2] rounded cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-300" onClick={prevSlide}>
                                <IoIosArrowBack  size={20}/>
                            </button>
                            <button className="text-[#286C6C] border-[1px] px-2 py-1 border-[#F2F2F2] rounded cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-300" onClick={nextSlide}>
                                <IoIosArrowForward size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};


export default Destination