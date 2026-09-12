import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-white text-black py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text and Actions */}
        <div className="space-y-6">

          {/* Heading with Linear Gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-black">
            Builder Your Ideal <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Developer Stack
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options,<br /> compare them side by side, and together the stack that fits your <br /> next project.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
             <a 
            href="#technologies" 
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-md text-sm"
          >
            Explore Technologies
          </a>
            
            <a 
              href="#about" 
              className="border border-gray-300 text-black-500 hover:bg-pink-50 font-semibold px-6 py-3 rounded-lg transition-all text-sm"
            >
              Learn More
            </a>
          </div>

        </div>

        {/* ✅ Right Column: Hero Image (শ্যাডো/বক্স ছাড়া) */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src="/banner-stack.png" 
            alt="Developer Workspace" 
            className="w-full max-w-lg h-auto max-h-[380px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;