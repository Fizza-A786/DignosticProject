import React from "react";
import { FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full py-20 px-6 md:px-16">
      
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-7">M360 Tool</h2>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Features</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Pricing</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Contact</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Get M360 Free</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Sign In</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-7">Industries</h2>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Retailers</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Wholesale</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Refurbishment</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Trade In</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Repair Centers</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Marketplaces</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-7">Learn</h2>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">What is M360?</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Recent Updates</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Help & Support</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Certification</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Policy</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Terms Of Use</li>
            <li className="hover:text-[#9d1f5d] transition-colors duration-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-7">Company Details</h2>
          <div className="space-y-3 text-gray-300 text-base text-lg leading-relaxed">
            <p>Atlas Soft Ltd.</p>
            <p>19-35 Prielle Kornélia St.</p>
            <p>1117 Budapest, Hungary</p>
            <p>Registration No.: 01-09-986926</p>
            <p>Tax Number: 23966994-2-43</p>
          </div>
             <div className="flex gap-3.5 mt-8">
          {[FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
            <div
              key={index}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-gray-300 
                         hover:bg-[#9d1f5d] hover:text-white 
                         hover:scale-110 hover:shadow-[0_0_15px_#9d1f5d]
                         transition-all duration-300 cursor-pointer"
            >
              <Icon size={20} />
            </div>
          ))}
        </div>
        </div>

      </div>

      {/* Subscribe Section */}
     

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-16 pt-8">
  
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Copyright */}
    <p className="text-base text-gray-400 text-center md:text-left">
      © {new Date().getFullYear()} M360soft. All rights reserved.
    </p>

    {/* Subscribe Section */}
    <div className="flex w-full md:w-auto flex-col sm:flex-row items-center gap-4">
      
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-64 md:w-72 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white text-lg focus:outline-none focus:border-[#9d1f5d] transition"
      />
      
      <button className="px-8 py-3 rounded-full bg-[#9d1f5d] text-white text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
        Subscribe
      </button>

    </div>

  </div>

</div>

    </footer>
  );
};

export default Footer;