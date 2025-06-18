'use client';

import React, { useRef, useState, useLayoutEffect, useMemo } from "react";
import { gsap } from "gsap";

const TopDest = () => {
  return (
    <div>
        <div className="flex flex-col gap-8 ">
            <h4 className=" text-sm sm:text-lg md:text-2xl mx-8">
                Top Destinations
            </h4>
      
            <div className='flex flex-col md:flex-row justify-between md:items-end gap-4 mx-8 '>
                <h2 className=" font-[500]  text-xl sm:text-2xl  md:text-3xl lg:text-4xl">
                    <span className="text-[#367272]  text-2xl  sm:text-3xl md:text-4xl lg:text-5xl"> Discover </span>
                    Your Next <br /> Dream
                    <span className="text-[#367272] text-2xl  sm:text-3xl md:text-4xl lg:text-5xl"> Destination</span>
                </h2>
                <p className="text-[#575757] font-[400] text-lg md:w-[50%] md:text-right">
                    Discover our handpicked top destinations, each offering a unique blend of comfort, charm, and unforgettable experiences. From serene beaches to lush valleys, every location is thoughtfully selected to inspire your next journey.
                </p>
            </div>
            <TopPicks/>
        </div>
    </div>
  )
}





 



const destinations = [
  {
    id: 1,
    image: "/images/d1.png",
    title: "Mystic Blue Lagoon",
    description: "A tranquil haven surrounded by azure waters and peaceful skies. Perfect for unwinding, capturing memories, and soaking in nature's beauty with every breath and gentle breeze.",
  },
  {
    id: 2,
    image: "/images/d2.png",
    title: "Golden Dunes Escape",
    description: "Experience a dreamy getaway nestled among golden sands and warm sunlight. Ideal for sunset lovers, adventure seekers, and those longing for quiet moments by the sea.",
  },
  {
    id: 3,
    image: "/images/d1.png",
    title: "Cliffside Serenity",
    description: "Perched above the waves, this peaceful retreat offers breathtaking views and refreshing air. The perfect escape from busy city life into peaceful coastal calm.",
  },
  {
    id: 4,
    image: "/images/d2.png",
    title: "Verdant Valley Lodge",
    description: "Surrounded by lush greenery and rolling hills, this scenic lodge invites you to relax, explore nearby trails, and reconnect with nature in comfort and style.",
  },
  {
    id: 5,
    image: "/images/d1.png",
    title: "Sunrise Bay Retreat",
    description: "Wake up to dazzling sunrises and soft waves at your doorstep. A serene destination for slow mornings, beach walks, and meaningful time with loved ones.",
  },
  {
    id: 6,
    image: "/images/d2.png",
    title: "Hidden Oasis Resort",
    description: "A luxurious escape tucked away in paradise. Enjoy lush surroundings, spa treatments, and peaceful evenings under the stars at this hidden gem of relaxation.",
  },
];


export const TopPicks = () => {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Memoized destinations array (looping effect)
  const displayedDestinations = useMemo(() => [...destinations, ...destinations], []);

  useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const itemWidth = scrollContainer.firstChild?.offsetWidth || 300;
    const totalWidth = itemWidth * destinations.length + 24 * destinations.length;

    if (animationRef.current) animationRef.current.kill();

    animationRef.current = gsap.to(scrollContainer, {
      x: -totalWidth,
      duration: window.innerWidth < 768 ? 30 : 20,
      ease: "none",
      repeat: -1,
      paused: isHovering,
      force3D: true,
    });

    const handleResize = () => {
      animationRef.current?.kill();
      animationRef.current = gsap.to(scrollContainer, {
        x: -totalWidth,
        duration: window.innerWidth < 768 ? 30 : 20,
        ease: "none",
        repeat: -1,
        paused: isHovering,
        force3D: true,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      animationRef.current?.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isHovering]);

  return (
    <section className="py-10 container mx-auto">
      

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 py-4 pb-12"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            display: "flex",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          {displayedDestinations.map((destination, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${index % 2 === 0 ? "mt-16 w-[300px]" : "mb-12 w-[380px]"}`}
            >
              <div className="rounded-lg overflow-hidden shadow-md h-64 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <img src={destination.image} alt={destination.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-[500]">{destination.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default TopDest