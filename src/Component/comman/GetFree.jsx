import React from 'react';

const GetFree = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f4f9fd] p-4 pt-10 py-20">
      {/* Main Card Container */}
      <div className="bg-white w-full max-w-[550px] rounded-lg shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] p-10 border border-gray-100 ">
        
        {/* Title & Subtitle */}
        <div className="mb-8">
          <h1 className="text-[42px] font-bold text-[#212529] leading-tight tracking-tight">
            Registration
          </h1>
          <p className="text-[#6c757d] text-[15px] mt-1">
            Your account will receive the free license automatically!
          </p>
        </div>

        <form className="space-y-5">
          {/* Email Address */}
          <div>
            <label className="block text-[#495057] text-[14px] font-medium mb-2">
              E-mail address
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 py-[10px] border border-[#ced4da] rounded focus:border-[#adb5bd] outline-none transition-all text-gray-700"
              />
              {/* Teal Mail Icon */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20c997" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Create Password */}
          <div>
            <label className="block text-[#495057] text-[14px] font-medium mb-2">
              Create a password
            </label>
            <input
              type="password"
              className="w-full px-4 py-[10px] border border-[#ced4da] rounded focus:border-[#adb5bd] outline-none transition-all"
            />
          </div>

          {/* Password Again */}
          <div>
            <label className="block text-[#495057] text-[14px] font-medium mb-2">
              Password Again
            </label>
            <input
              type="password"
              className="w-full px-4 py-[10px] border border-[#ced4da] rounded focus:border-[#adb5bd] outline-none transition-all"
            />
          </div>

          {/* Checkboxes Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-5 h-5 border-[#ced4da] rounded bg-white checked:bg-[#b02665] focus:ring-0 cursor-pointer"
                />
              </div>
              <label htmlFor="terms" className="ml-3 text-[14px] text-[#495057]">
                I've read and agree to the <a href="#" className="text-[#b02665] hover:underline decoration-1">Terms of Service</a> and <a href="#" className="text-[#b02665] hover:underline decoration-1">Privacy Policy</a>
              </label>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="updates"
                  type="checkbox"
                  className="w-5 h-5 border-[#ced4da] rounded bg-white checked:bg-[#b02665] focus:ring-0 cursor-pointer"
                />
              </div>
              <label htmlFor="updates" className="ml-3 text-[14px] text-[#495057]">
                Keep me updated on news from M360
              </label>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#b02665] hover:bg-[#961f55] text-white font-semibold py-[12px] rounded shadow-sm transition-all text-[16px] mt-2"
          >
            Register
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-[14px] text-[#495057]">
          Already registered?{' '}
          <a href="#" className="text-[#b02665] font-bold hover:underline">
            Sign in
          </a>{' '}
          to access your dashboard!
        </div>
      </div>
    </div>
  );
};

export default GetFree;