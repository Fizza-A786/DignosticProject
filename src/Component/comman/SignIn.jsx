import React from 'react';

const SignIn = () => {
  return (
    // Background gradient matching the source image exactly
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#ffffff] via-[#f0f7ff] to-[#e6effb] p-6 font-sans">
      
      {/* Container with specified shadow and max-width for 100% accuracy */}
      <div className="bg-white w-full max-w-[550px] rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-12 border border-gray-100">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-[42px] font-bold text-[#212529] leading-tight tracking-tight">
            Sign In
          </h1>
          <p className="text-[#6c757d] text-[16px] mt-1 font-normal">
            Sign in to access your dashboard!
          </p>
        </div>

        <form className="space-y-6">
          {/* Email or Username Field */}
          <div>
            <label className="block text-[#495057] text-[15px] font-medium mb-2">
              E-mail or Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-[11px] border border-[#ced4da] rounded focus:border-[#adb5bd] outline-none transition-all text-gray-800 text-[16px]"
              placeholder=""
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[#495057] text-[15px] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2.75 border border-[#ced4da] rounded focus:border-[#adb5bd] outline-none transition-all text-gray-800"
              placeholder=""
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center pt-1">
            <input
              id="remember"
              type="checkbox"
              className="w-5 h-[20px] border-[#ced4da] rounded bg-white checked:bg-[#b02665] focus:ring-0 cursor-pointer accent-[#b02665]"
            />
            <label htmlFor="remember" className="ml-3 text-[15px] text-[#495057] cursor-pointer">
              Remember me
            </label>
          </div>

          {/* Sign In Button - Using the exact Magenta color #b02665 */}
          <button
            type="submit"
            className="w-full bg-[#b02665] hover:bg-[#961f55] text-white font-semibold py-3.25 rounded shadow-sm transition-all text-[17px] mt-4"
          >
            Sign In
          </button>
        </form>

        {/* Forgot Password Footer */}
        <div className="mt-8 text-center text-[15px] text-[#495057]">
          Forgot password?{' '}
          <a href="#" className="text-[#b02665] hover:underline decoration-1">
            Click here
          </a>{' '}
          to recover it.
        </div>
      </div>
    </div>
  );
};

export default SignIn;