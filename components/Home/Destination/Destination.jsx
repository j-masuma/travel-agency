'use client';

import React from 'react'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";

function Destination() {
    const [departureDate, setDepartureDate] = useState("2025-02-25");
    const [destination, setDestination] = useState("Thailand - Phuket");
    const [persons, setPersons] = useState("2 Adult - 2 Children");
  return (
    <div className='my-16 ml-8'>
        <h2 className="text-3xl md:text-5xl font-[500] ">
            Find Your 
            <span className="text-[#367272] "> Destination!</span>
        </h2>
        <div className="flex flex-wrap items-end gap-4 p-6">
            
            {/* Departure Date */}
            <div className="flex flex-col">
                <label className="text-[#1E1E1E] text-lg mb-1">Departure</label>
                <div className="flex justify-between items-center relative">
                    <CiCalendarDate className="absolute  ml-4" size={25} />
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="pl-12 pr-4 py-2 border border-[#D9D9D9] text-xl rounded-md focus:outline-none  w-[300px] appearance-none  [&::-webkit-calendar-picker-indicator]:hidden"
                        onFocus={(e) => (e.target.showPicker ? e.target.showPicker() : null)} // Opens calendar manually in supported browsers
   
                    />
                </div>
            </div>

            {/* Destination */}
            <div className="flex flex-col">
                <label className="text-[#1E1E1E] text-lg mb-1">Destination</label>
                <div className="relative flex items-center">
                    <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="px-4 py-2 border border-[#D9D9D9] text-xl rounded-md focus:outline-none appearance-none  w-[300px]"
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
            <div className="flex flex-col">
                <label className="text-[#1E1E1E] text-lg mb-1">Persons</label>
                <div className=" flex items-center relative">
                    <BsPerson className="absolute left-3 top-3" size={25}/>
                    <div className="relative flex items-center">
                        <select
                            value={persons}
                            onChange={(e) => setDestination(e.target.value)}
                            className="px-4 py-2 pl-10 border border-[#D9D9D9] text-xl rounded-md focus:outline-none appearance-none  w-[300px] pr-10"
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
            </div>

            {/* Search Button */}
            <button className="px-6 py-2 bg-[#154242] text-xl text-white rounded-md hover:bg-[#315959]  cursor-pointer transform transition-transform duration-300">
                Search Now
            </button>
        </div>
        </div>
  )
}

export default Destination