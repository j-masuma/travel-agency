

"use client";
import { useState } from "react";
import Link from "next/link"; // ✅ 
import { IoSearchOutline } from "react-icons/io5";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <header>
      <nav className="flex justify-between items-center p-4 mt-3 mx-4">

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-4 text-white">
            <Link href="/">Home</Link>
          
            <Link href="/aboutus">About Us</Link>
          
            <Link href="/tours">Tours</Link>
          
            <Link href="/pakages">Pakages</Link>
          
        </div>

        {/* Logo */}
        <div className="text-black font-semibold text-2xl -mt-2">
          LOGO
        </div>

        {/* Search Button */}
        <div className="">
          <div className="hidden relative md:flex items-center border-[1px] border-[#FFFFFF] rounded-lg px-2">
            
            <input
              type="text"
              placeholder="Find Destination"
              className="flex-grow px-2 py-1 outline-none border-none text-[#FFFFFF]"
            />
            <button  className="text-[#FFFFFF] cursor-pointer ml-2">
            <IoSearchOutline size={25} />
            </button>
          </div>
        </div>
        

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden block bg-white p-4 py-12 rounded-xl shadow-md absolute top-[70px] left-0 w-[50%] mt-4 z-10">
          <div className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/" className="text-gray-600 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/aboutus" className="text-gray-600 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/tours" className="text-gray-600 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              Tours
            </Link>
            <Link href="/pakages" className="text-gray-600 hover:text-yellow-500" onClick={() => setIsMenuOpen(false)}>
              Pakages
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
