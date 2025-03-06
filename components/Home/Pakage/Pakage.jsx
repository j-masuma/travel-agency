'use client';

import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pakage = () => {
  return (
    <div className='m-8 space-y-4 py-12'>
        <div className='flex'>
            <h4 className="w-[50%] text-sm sm:text-lg md:text-2xl">
                Top Pakages
            </h4>
            <div className='w-[50%] space-y-4'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-[500] ">
                    Top Tours To 
                    <span className="text-[#367272] "> Spark </span>
                    Your
                    <span className="text-[#367272] "> Wonderlust!</span>
                </h2>
                <p className='text-lg'>
                    Lorem ipsum dolor sit amet consectetur. Vivamus vitae nisi eget in sit et  integer vestibulum. Mi euismod id urna malesuada.
                </p>
            </div>
        </div>
        <TopPakages/>
    </div>
  )
}






const pakages = [
    { 
        id: 1, 
        image1 : '/images/pack-santorini-1.png',
        image2 : '/images/pack-santorini-2.png',
        image3 : '/images/pack-santorini-3.png',
        name1 : 'Santorini Sunset ',
        name: 'Santorini Sunset Escape', 
        name3 : 'Santorini Sunset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque excepturi eveniet iste architecto, eos impedit ipsum minima delectus ut neque, quis ullam hic? Exercitationem aspernatur reprehenderit reiciendis, debitis maiores eum!',
        price : '910'
    },
    { 
        id: 2, 
        image1 : '/images/pack-santorini-1.png',
        image2 : '/images/pack-santorini-2.png',
        image3 : '/images/pack-santorini-3.png',
        name1 : 'Santorini Sunset ',
        name: 'Santorini Sunset Escape', 
        name3 : 'Santorini Sunset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque excepturi eveniet iste architecto, eos impedit ipsum minima delectus ut neque, quis ullam hic? Exercitationem aspernatur reprehenderit reiciendis, debitis maiores eum!',
        price : '915'
    },
    { 
        id: 3, 
        image1 : '/images/pack-santorini-1.png',
        image2 : '/images/pack-santorini-2.png',
        image3 : '/images/pack-santorini-3.png',
        name1 : 'Santorini Sunset ',
        name: 'Santorini Sunset Escape', 
        name3 : 'Santorini Sunset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque excepturi eveniet iste architecto, eos impedit ipsum minima delectus ut neque, quis ullam hic? Exercitationem aspernatur reprehenderit reiciendis, debitis maiores eum!',
        price : '930'
    },
    { 
        id: 4, 
        image1 : '/images/pack-santorini-1.png',
        image2 : '/images/pack-santorini-2.png',
        image3 : '/images/pack-santorini-3.png',
        name1 : 'Santorini Sunset ',
        name: 'Santorini Sunset Escape', 
        name3 : 'Santorini Sunset',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque excepturi eveniet iste architecto, eos impedit ipsum minima delectus ut neque, quis ullam hic? Exercitationem aspernatur reprehenderit reiciendis, debitis maiores eum!',
        price : '950'
    },
  ];

export const TopPakages = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pakages.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + pakages.length) % pakages.length);
  };

  const getVisiblePakages = () => {
    return 1;
  };

  const visiblePakages  = getVisiblePakages ();

  const visibleItems = [
    ...pakages.slice(index, index + visiblePakages),
    ...pakages.slice(0, Math.max(0, index + visiblePakages - pakages.length)),
  ];
  const progress = ((index + 1) / pakages.length) * 100;
  return (
    
    <div className=" mr-4">
        {visibleItems.map((pack, i) => (
            <div key={pack.id + "-" + i} className="space-y-4">
                <div className='flex justify-between items-center'>
                    <div className="w-[35%] bg-gray-200 h-1 rounded-full overflow-hidden">
                        <div className="h-full bg-[#154242] transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className='flex gap-2'>
                        <button className="text-[#286C6C] border-[1px] px-2 py-1 border-[#F2F2F2] rounded cursor-pointer hover:bg-black hover:text-white transform transition-transform duration-300" onClick={prevSlide}>
                            <IoIosArrowBack  size={20}/>
                        </button>
                        <button className="text-[#286C6C] border-[1px] px-2 py-1 border-[#F2F2F2] rounded cursor-pointer hover:bg-black hover:text-white transform transition-transform duration-300" onClick={nextSlide}>
                            <IoIosArrowForward size={20} />
                        </button>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='w-[26%] space-y-4'>
                        <img src={pack.image1} alt="dest" className="w-full rounded-2xl aspect-square" />
                        <p className='text-2xl'>{pack.name1}</p>
                    </div>
                    <div className='w-[48%] space-y-4'>
                        <img src={pack.image2} alt="dest" className="w-full  rounded-2xl " />
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <p className='text-2xl'>{pack.name1}</p>
                                <p className='text-[16px]'>4 Days<span className='text-gray-500'>/3 Nights</span></p>
                            </div>
                            <p className='text-lg text-gray-500 w-[90%]'>
                                Lorem ipsum dolor sit amet consectetur. Vivamus vitae nisi eget in sit et  integer vestibulumiva.    
                            </p>
                            <div className='flex justify-between'>
                                <button className='text-lg border-[1px] rounded py-1 px-2'>
                                    From ${pack.price}
                                </button>
                                <button className='text-lg border-[1px] rounded py-1 px-2 bg-[#154242] text-white cursor-pointer hover:bg-[#2b4a4a]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[26%] space-y-4'>
                        <img src={pack.image3} alt="dest" className="w-full rounded-2xl aspect-square" />
                        <p className='text-2xl'>{pack.name3}</p>
                    </div>
                </div>
                
                
            </div>
        ))}
    </div>
  );
};



export default Pakage