import React, { useRef, useEffect, useState } from 'react';
import { Rocket, ChevronDown } from 'lucide-react';
import SpaceshipCanvas from './SpaceshipCanvas'; // Import this at the top


const Introduction: React.FC = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  const [isBoostActive, setIsBoostActive] = useState(false);
  const [shutterOpen, setShutterOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!rocketRef.current) return;
      
      const rect = rocketRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const rotation = (angle * 180) / Math.PI + 90;
      const limitedRotation = Math.max(-15, Math.min(15, rotation));
      
      rocketRef.current.style.transform = `rotate(${limitedRotation}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBeginJourneyClick = () => {
    // Open the shutter (slide black frame up)
    setShutterOpen(true);

    // After shutter fully covers screen (duration 500ms), scroll to #skills
    setTimeout(() => {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    }, 600); // slightly longer than animation duration

    // Close the shutter after a short delay (1 second after scroll start)
    setTimeout(() => {
      setShutterOpen(false);
    }, 1600);
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative py-20 overflow-hidden">
      {/* Background gradients and glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl text-blue-400 font-medium opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
                Welcome to my universe
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
                <span className="block">Crafted by</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                  Hitesh Gupta
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed opacity-0 animate-[fadeIn_0.5s_ease-out_0.6s_forwards]">
              Join me on an interstellar journey through my portfolio, where each scroll reveals new dimensions of creativity and innovation.
            </p>
            
            <div className="flex gap-6 opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]">
              <button 
                onClick={handleBeginJourneyClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/30 flex items-center space-x-3 group"
              >
                <span>Begin Journey</span>
                <Rocket size={18} className="transform rotate-90 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-purple-500/30 rounded-full text-white font-medium hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Contact Me</span>
                <ChevronDown size={18} className="animate-bounce" />
              </button>
              
            </div>
          </div>
          
          <div className="hidden md:block relative opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">
  <div className="relative w-full h-96 md:h-[500px]">
    <SpaceshipCanvas />
  </div>
</div>
        </div>
      </div>

      {/* Black shutter sliding from bottom up */}
      <div
        className={`fixed left-0 bottom-0 w-full bg-black z-50 transition-[height] duration-500 ease-in-out`}
        style={{ height: shutterOpen ? '100vh' : '0' }}
      />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
  <button
    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
    className="group relative flex flex-col items-center space-y-3 focus:outline-none"
    aria-label="Scroll to Explore"
  >
    {/* Rocket */}
    <div className="relative w-12 h-20 sm:w-16 sm:h-28 flex items-center justify-center animate-rocket-bounce">
      {/* Rocket Body */}
      <div className="relative w-7 h-14 sm:w-10 sm:h-20 bg-gradient-to-b from-gray-300 via-gray-700 to-gray-900 rounded-full shadow-lg border border-gray-600">
        {/* Window */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 sm:w-5 sm:h-5 bg-blue-500 rounded-full border-2 border-white shadow-inner"></div>
        {/* Nose Cone */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-9 border-b-red-600 border-l-transparent border-r-transparent rounded-t-full shadow-md sm:border-l-8 sm:border-r-8 sm:border-b-12"></div>
        {/* Body Highlight */}
        <div className="absolute top-1.5 left-2 w-0.5 h-10 sm:w-1 sm:h-14 bg-white rounded-full opacity-20"></div>
      </div>
      {/* Left Fin */}
      <div className="absolute bottom-1.5 left-0 w-3 h-5 sm:w-4 sm:h-6 bg-gradient-to-tr from-red-700 to-red-900 rounded-bl-lg rounded-tl-lg rotate-[-20deg] shadow-md"></div>
      {/* Right Fin */}
      <div className="absolute bottom-1.5 right-0 w-3 h-5 sm:w-4 sm:h-6 bg-gradient-to-tl from-red-700 to-red-900 rounded-br-lg rounded-tr-lg rotate-[20deg] shadow-md"></div>
      {/* Flame */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-8 sm:w-6 sm:h-12">
        <div className="w-4 h-8 sm:w-6 sm:h-12 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full blur-sm opacity-80 animate-flame-flicker"></div>
        <div className="absolute top-2 left-1 w-2 h-5 sm:left-1.5 sm:w-3 sm:h-6 bg-gradient-to-b from-white to-yellow-400 rounded-full opacity-70 animate-flame-flicker-delay"></div>
      </div>
    </div>

    {/* Label */}
    <span className="text-sm tracking-wider text-blue-200 group-hover:text-purple-300 transition-colors duration-300">
      Scroll to Explore
    </span>
  </button>
</div>
    </section>
  );
};

export default Introduction;
