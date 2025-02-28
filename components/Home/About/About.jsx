

import React from 'react'

const About = () => {
    
  return (
    <section className="flex flex-col text-center py-12 px-4 space-y-20">
        {/* Title & Description */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            <h4 className=" text-sm sm:text-lg md:text-2xl">
                About Us
            </h4>
            <h2 className="text-3xl md:text-5xl font-[500] ">
                Welcome to 
                <span className="text-[#367272] ml-2">Serenity</span>
            </h2>
            <p className="text-[#575757] font-[400] text-lg ">
                Lorem ipsum dolor sit amet consectetur. Mauris hendrerit aliquam nisi sit
                eget sit. Natoque placerat eu volutpat est pellentesque bibendum iaculis sit.
            </p>
        </div>

        
        <div className='flex flex-col space-y-3'>
            <div className='flex gap-3 items-end justify-center m-0'>
                <div className='w-[20%] h-[280px]'>
                    <img 
                    src="/images/about-1.png" 
                    alt=""
                    className='w-full h-full object-cover rounded-[17px] shadow-lg'
                    />
                </div>
                <div className='w-[20%] h-[314px]'>
                    <img 
                    src="/images/about-2.png" 
                    alt=""
                    className='w-full h-full object-cover rounded-[17px] shadow-lg'
                    />
                </div>
                <div className='w-[20%] h-[280px]'>
                    <img 
                    src="/images/about-3.png" 
                    alt=""
                    className='w-full h-full object-cover rounded-[17px] shadow-lg'
                    />
                </div>
                </div>
                <div>
            </div>
            <div className='flex gap-3  justify-center'>
                <div className='w-[20%] h-[280px]'>
                    <img 
                    src="/images/about-4.png" 
                    alt=""
                    className='w-full h-full object-cover rounded-[17px] shadow-lg'
                    />
                </div>
                <div className='w-[20%] h-[314px]'>
                    <img 
                    src="/images/about-5.png" 
                    alt=""
                    className='w-full h-full object-cover rounded-[17px] shadow-lg'
                    />
                </div>
                <div className='w-[20%] h-[280px]'>
                    <img 
                    src="/images/about-6.png" 
                    alt=""
                    className='w-full h-full object-cover rounded-[17px] shadow-lg'
                    />
                </div>
                </div>
                <div>
            </div>
        </div>
    </section>
  )
}

export default About