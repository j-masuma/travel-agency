'use client';

import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pakage = () => {
  return (
    <div className='m-8 space-y-4 py-12'>
        <div className='flex flex-col gap-4 md:flex-row'>
            <h4 className="md:w-[50%] text-sm sm:text-lg md:text-2xl">
                Top Pakages
            </h4>
            <div className='md:w-[50%] space-y-4'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-[500] ">
                    Top Tours To 
                    <span className="text-[#367272] "> Spark </span>
                    Your
                    <span className="text-[#367272] "> Wonderlust!</span>
                </h2>
                <p className='text-lg'>
                Golden hues painted the sky as the sun dipped below the horizon. The warm glow kissed the clouds, turning them shades of pink, orange, and lavender. Gentle waves shimmered with light, and a calm breeze whispered through the trees.
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
      image1: '/images/bliss1.png',
      image2: '/images/bliss2.png',
      image3: '/images/bliss3.png',
      name1: 'Aegean Bliss',
      name: 'Aegean Bliss Sunset Tour', 
      name3: 'Aegean Bliss',
      description: 'Experience the breathtaking Santorini sunset with a guided tour, perfect for couples and dreamers alike.',
      price: '910'
    },
    { 
      id: 2, 
      image1: '/images/pack-santorini-1.png',
      image2: '/images/pack-santorini-2.png',
      image3: '/images/pack-santorini-3.png',
      name1: 'Caldera Cruise',
      name: 'Golden Caldera Evening Cruise', 
      name3: 'Caldera Cruise',
      description: 'Sail along the caldera as the sky turns gold, with wine, music, and unforgettable views of Santorini.',
      price: '815'
    },
    { 
      id: 3, 
      image1: '/images/pak1.png',
      image2: '/images/bliss2.png',
      image3: '/images/pak2.png',
      name1: 'Twilight Memories',
      name: 'Santorini Twilight Memories Package', 
      name3: 'Twilight Memories',
      description: 'Capture magical moments as the sun sets over the Aegean Sea, with a professional photographer included.',
      price: '630'
    },
    { 
      id: 4, 
      image1: '/images/luxe1.png',
      image2: '/images/luxe2.png',
      image3: '/images/luxe3.png',
      name1: 'Oia Luxe',
      name: 'Oia Luxe Sunset Dining Experience', 
      name3: 'Oia Luxe',
      description: 'Enjoy a luxurious evening with local cuisine and panoramic sunset views from the cliffs of Oia.',
      price: '750'
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
    
    <div className="mr-2 md:mr-4">
        {visibleItems.map((pack, i) => (
            <div key={pack.id + "-" + i} className="space-y-4">
                <div className='flex  justify-between items-center'>
                    <div className="w-[35%] bg-gray-200 h-1 rounded-full overflow-hidden">
                        <div className="h-full bg-[#154242] transition-all duration-300" style={{ width: `${progress}%` }}></div>
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
                <div className='flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6'>
                    <div className='w-[50%] md:w-[26%]  flex md:flex-col gap-4'>
                        <img src={pack.image1} alt="dest" className="w-full rounded-lg md:rounded-2xl aspect-square" />
                        <p className='text-lg md:text-2xl'>{pack.name1}</p>
                    </div>
                    <div className='w-[100%] md:w-[48%] flex justify-center md:flex-col gap-4'>
                        <img src={pack.image2} alt="dest" className="w-[50%] md:w-full  rounded-lg md:rounded-2xl " />
                        <div className='space-y-2 md:space-y-4 w-[50%] md:w-full'>
                            <div className='flex flex-col sm:flex-row justify-between '>
                                <p className='text-lg md:text-2xl'>{pack.name1}</p>
                                <p className='text-base leading-relaxed md:text-[16px]'>4 Days<span className='text-gray-500'>/3 Nights</span></p>
                            </div>
                            <p className='text-sm md:text-base leading-relaxed lg:text-lg text-gray-500 w-[95%]'>
                                {pack.description}
                            </p>
                            <div className='flex flex-col md:flex-row justify-between gap-2'>
                                <button className='text-sm md:text-base leading-relaxed lg:text-lg border-[1px] rounded py-1 px-2'>
                                    From ${pack.price}
                                </button>
                                <button className='text-sm md:text-base leading-relaxed lg:text-lg border-[1px] rounded py-1 px-2 bg-[#154242] text-white cursor-pointer transition transform duration-300 hover:bg-[#4a8080]'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] md:w-[26%]  flex md:flex-col gap-4 '>
                        <img src={pack.image3} alt="dest" className=" w-full rounded-lg md:rounded-2xl aspect-square" />
                        <p className=' text-lg md:text-2xl'>{pack.name3}</p>
                    </div>
                </div>
                
                
            </div>
        ))}
    </div>
  );
};



export default Pakage