import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Technologies', href: '#technologies', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'About', href: '#about', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <nav className="w-full bg-white text-black border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between">

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-pink-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:order-first">
            <img 
              src="logo-text.png" 
              alt="Dev Stack Logo" 
              className="w-36 md:w-40 h-8 object-contain"
            />
          </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  link.active
                    ? 'text-pink-500 font-semibold hover:text-pink-400'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

           <div className="flex items-center gap-2 md:gap-4 text-sm font-medium">
            <button className="text-gray-600 hover:text-black px-2 md:px-3 py-1.5 transition-colors">
              Sign In
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 md:px-4 py-2 rounded-full font-semibold transition-all shadow-sm">
              Sign Up
            </button>
          </div>

        </div>

          {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} 
                className={`block px-2 py-2 text-sm font-medium rounded-lg transition-colors ${
                  link.active
                    ? 'text-pink-500 bg-pink-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;