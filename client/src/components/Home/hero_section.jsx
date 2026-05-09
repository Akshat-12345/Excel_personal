import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#050505] pt-28 md:pt-36">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
          style={{ filter: "brightness(0.3) contrast(1.2)" }}
        />
        
        {/* Signature Warm Yellowish Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(255,192,0,0.2)_0%,transparent_70%)]"></div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto relative z-10 px-10 flex flex-col lg:flex-row justify-between items-center w-full">
        
        <div className="max-w-2xl animate-slide-in-left">
          {/* Top Label - Subtle light green */}
          <h4 className="text-[#D8F3DC] font-bold tracking-[5px] mb-4 uppercase text-xs md:text-sm opacity-80">
            AI Intelligence is Here
          </h4>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-[90px] font-black leading-[0.9] mb-8 tracking-tighter text-white text-left">
            EXCEL YOUR <br />
            <span className="text-[#40916C] drop-shadow-[0_10px_30px_rgba(64,145,108,0.4)]">
              DATA POTENTIAL
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[#D8F3DC] text-lg md:text-xl mb-12 max-w-lg font-medium leading-relaxed opacity-70 text-left">
            SheetSense turns complex spreadsheets into actionable 3D insights. 
            No formulas, just pure intelligence.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link 
              to="/register" 
              className="px-10 py-4 bg-white text-black font-black uppercase tracking-tighter border-2 border-white hover:bg-[#2D6A4F] hover:border-[#2D6A4F] hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
            <Link 
              to="/login" 
              className="px-10 py-4 bg-[#1B4332] text-white font-black uppercase tracking-tighter border-2 border-[#1B4332] hover:bg-transparent transition-all duration-300 shadow-[0_0_20px_rgba(27,67,50,0.3)]"
            >
              Chat With Data
            </Link>
          </div>
        </div>

        {/* 3. REFINED VISUAL OBJECT: 4 Bars with Minute Float Animation */}
        {/* translate-y-2 kiya hai (pehle translate-y-10 tha) taaki upar shift ho jaye */}
        <div className="hidden lg:block relative animate-float-minute pr-10">
          {/* Central Glow Aura */}
          <div className="absolute inset-0 bg-[#ffc000]/25 rounded-full blur-[150px] -z-10 animate-pulse"></div>
          
          <div className="relative flex items-end gap-3 translate-y-2">
            {/* Bar 1: #40916C */}
            <div className="w-[70px] h-[140px] bg-[#40916C] rounded-[20px] shadow-[0_10px_35px_rgba(64,145,108,0.4)] border border-white/5 relative z-40 transition-all hover:scale-105 duration-500"></div>
            
            {/* Bar 2: #2D6A4F */}
            <div className="w-[80px] h-[240px] bg-[#2D6A4F] rounded-[22px] shadow-[0_12px_45px_rgba(45,106,79,0.4)] border border-white/5 relative z-30 transition-all hover:scale-105 duration-500"></div>
            
            {/* Bar 3: #245741 */}
            <div className="w-[90px] h-[360px] bg-[#245741] rounded-[24px] shadow-[0_15px_55px_rgba(36,87,65,0.4)] border border-white/5 relative z-20 transition-all hover:scale-105 duration-500"></div>
            
            {/* Bar 4: #1B4332 */}
            <div className="w-[100px] h-[500px] bg-[#1B4332] rounded-[26px] shadow-[0_18px_65px_rgba(27,67,50,0.4)] border border-white/5 relative z-10 transition-all hover:scale-105 duration-500"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        /* Float animation range kam kar di hai (-12px) taaki movement subtle ho */
        @keyframes float-minute {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-slide-in-left { animation: slide-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-float-minute { animation: float-minute 5s ease-in-out infinite; }
      `}</style>

    </section>
  );
};

export default HeroSection;