import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <nav className="bg-gray-50 w-full">

      <div className="flex justify-between items-center px-6 md:px-10 h-[75px]">
        <img src={logo} alt="Logo" className="h-[90px] w-[90px] cursor-pointer" />
        <ul className="hidden md:flex items-center gap-10 ms-16">
          <li className="relative group cursor-pointer font-semibold text-black">

            <span className=" relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300 group-hover:after:w-full
            ">
              Industries
            </span>
            <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-md  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200  z-50 mt-3 -ms-3
            ">
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Retailers</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Wholesale</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Refurbishment</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Trade In</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Repair Centers</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Marketplaces</li>
            </ul>
          </li>
          {["Features","Pricing","Contact"].map((item,i)=>(
            <li key={i} className=" relative cursor-pointer font-semibold text-black  after:content-['']  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300  hover:after:w-full
            ">
              {item}
            </li>
          ))}

          <li className="relative group cursor-pointer font-semibold text-black">

            <span className=" relative after:content-['']  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300 group-hover:after:w-full ">
              Learn More
            </span>

            <ul className=" absolute left-0 top-full w-56 bg-white shadow-lg rounded-md opacity-0 invisible  group-hover:opacity-100 group-hover:visible  transition-all duration-200 z-50 mt-3 -ms-4 ">
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">What is M360?</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Recent Updates</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Help & Support</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Certification</li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">Social</li>
            </ul>
          </li>

        </ul>
        <div className="hidden md:flex gap-5">
          <button className="py-2 px-4 rounded text-white bg-[linear-gradient(16deg,#b2246a,#700f2a)]">
            Get M360 Free
          </button>

          <button className="py-2 px-6 rounded text-white bg-black">
            Sign In
          </button>
        </div>
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross1 /> : <AiOutlineBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6">
          <div>
            <p
              onClick={()=>{
                setIndustryOpen(!industryOpen);
                setLearnOpen(false);
              }}
              className="py-3 font-semibold cursor-pointer"
            >
              Industries
            </p>

            {industryOpen && (
              <ul className="pl-4">
                {["Retailers","Wholesale","Refurbishment","Trade In","Repair Centers","Marketplaces"].map((item,i)=>(
                  <li key={i} className="py-2 text-gray-600">{item}</li>
                ))}
              </ul>
            )}
          </div>

          <p className="py-3 font-semibold">Features</p>
          <p className="py-3 font-semibold">Pricing</p>
          <p className="py-3 font-semibold">Contact</p>
          <div>
            <p
              onClick={()=>{
                setLearnOpen(!learnOpen);
                setIndustryOpen(false);
              }}
              className="py-3 font-semibold cursor-pointer"
            >
              Learn More
            </p>

            {learnOpen && (
              <ul className="pl-4">
                <li className="py-2 text-gray-600">What is M360?</li>
                <li className="py-2 text-gray-600">Recent Updates</li>
                <li className="py-2 text-gray-600">Help & Support</li>
                <li className="py-2 text-gray-600">Certification</li>
                <li className="py-2 text-gray-600">Social</li>
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button className="py-2 rounded text-white bg-[linear-gradient(16deg,#b2246a,#700f2a)]">
              Get M360 Free
            </button>

            <button className="py-2 rounded text-white bg-black">
              Sign In
            </button>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
