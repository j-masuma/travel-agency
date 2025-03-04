'use client';

import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonial = () => {
  return (
    <div className='flex flex-col space-y-6 justify-center items-center my-16'>
        <h4 className=" text-sm sm:text-lg md:text-2xl">
            Testimonials
        </h4>
  
        <AnimatedText2/>
        <div className='flex justify-center  items-center gap-4 mt-4'>
            <div className='items-center'>
              <img src="/images/test-1.png" alt="Test-1" />
            </div>
            <div className='text-center'>
              <img src="/images/test-2.png" alt="Test-2" />
              <div className='text-center mt-2'>
                <h6 className='text-2xl'>James Carter</h6>
                <p className='text-[#5A5A5A] text-lg'>Subtitle Here</p>
              </div>
            </div>
            <div className='items-center'>
              <img src="/images/test-3.png" alt="Test-3" />
            </div>
        </div>
    </div>
  )
}

export default Testimonial




// gsap.registerPlugin(ScrollTrigger);

// export function AnimatedText() {
//   const textRef = useRef(null);

//   const text =
//      "I've been on countless trips, but this one was different. Everything was perfectly organized, and the local insights made it truly unique. Can't wait for my next adventure!";
//   const words = text.split(" ");

//   useEffect(() => {
//     if (textRef.current) {
//       gsap.fromTo(
//         textRef.current.children,
//         { color: "gray" },
//         {
//           color: "black",
//           stagger: 0.1, 
//           duration: 2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: textRef.current,
//             start: "top 70%", 
//             end: "top 30%", 
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <p
//       ref={textRef}
//       className="w-[77%] flex justify-center flex-wrap gap-[5px] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[400]"
//     >
//       {words.map((word, index) => (
//         <span key={index} className="inline-block">
//           {word}
//         </span>
//       ))}
//     </p>
//   );
// }







gsap.registerPlugin(ScrollTrigger);

export function AnimatedText2() {
  const textRef = useRef(null);

  const text =
    "I've been on countless trips, but this one was different. Everything was perfectly organized, and the local insights made it truly unique. Can't wait for my next adventure!";
  
  const words = text.split(" ");

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { color: "gray" },
        {
          color: "black",
          stagger: 0.1, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%", 
            end: "top 30%", 
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <p
      ref={textRef}
      className="w-[70%] flex flex-wrap gap-2.5 justify-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[400]"
      
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block">
          {word}
        </span>
      ))}
    </p>
  );
}

