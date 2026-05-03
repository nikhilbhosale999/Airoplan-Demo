import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col z-10">
          
          {/* Navigation Bar */}
          <nav className="max-w-7xl mx-auto w-full px-8 py-6 relative">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold text-gray-900">
                SkyElite
              </div>
              
              <div className="hidden md:flex gap-8 items-center">
                {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-900 hover:text-gray-700 focus:outline-none transition-colors"
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 mx-8 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden md:hidden transition-all border border-gray-100 z-50">
                <div className="flex flex-col py-2">
                  {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="px-6 py-3 text-gray-900 hover:bg-gray-50 transition-colors font-medium text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col items-center justify-center -mt-80 text-center px-4">
            <span className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">
              PRIVATE JETS
            </span>
            
            <h1 className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                Premium.
              </span>
              <span 
                className="text-6xl md:text-7xl lg:text-8xl font-normal text-[#202A36] leading-none tracking-tighter"
                style={{ marginTop: '-12px' }}
              >
                Accessible.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-4 mb-6 max-w-2xl text-center">
              Your dedication deserves recognition.
            </p>
            
            <div className="flex gap-4 items-center justify-center">
              <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors">
                Discover
              </button>
              <button className="px-4 py-2 rounded-full text-white bg-[#202A36] hover:bg-[#1a2229] transition-colors font-medium">
                Book Now
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
