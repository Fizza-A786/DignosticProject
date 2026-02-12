import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <nav className="bg-gray-50 w-full z-10">

      <div className="flex justify-between items-center px-6 md:px-10 h-[75px]">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[90px] w-[90px] cursor-pointer" />
        </Link>

        <ul className="hidden md:flex items-center gap-10 ms-16">
          <li className="relative group cursor-pointer font-semibold text-black">
           <Link to="/" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300 group-hover:after:w-full">
              Industries
            </Link> 

            <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-3 -ms-3">
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/retailers">Retailers</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/wholesale">Wholesale</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/refurbishment">Refurbishment</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/trade-in">Trade In</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/repair-centers">Repair Centers</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/marketplaces">Marketplaces</Link>
              </li>
            </ul>
          </li>

          <li className="relative cursor-pointer font-semibold text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300 hover:after:w-full">
            <Link to="/features">Features</Link>
          </li>

          <li className="relative cursor-pointer font-semibold text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300 hover:after:w-full">
            <Link to="/pricing">Pricing</Link>
          </li>

          <li className="relative cursor-pointer font-semibold text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300 hover:after:w-full">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="relative group cursor-pointer font-semibold text-black">
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8a1b43] after:transition-all after:duration-300 group-hover:after:w-full">
              Learn More
            </span>

            <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-3 -ms-4">
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/what-is-m360">What is M360?</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/updates">Recent Updates</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/help-support">Help & Support</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/certification">Certification</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-50 hover:text-[#8a1b43]">
                <Link to="/social">Social</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="hidden md:flex gap-5">
          <Link to="/getfree">
            <button className="py-2 px-4 cursor-pointer rounded text-white bg-[linear-gradient(16deg,#b2246a,#700f2a)]">
              Get M360 Free
            </button>
          </Link>

          <Link to="/signin">
            <button className="py-2 px-6 cursor-pointer rounded text-white bg-black">
              Sign In
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross1 /> : <AiOutlineBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
