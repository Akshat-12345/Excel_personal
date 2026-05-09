import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#050505] pt-20">
      
      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          className="w-full h-full object-cover opacity-30"
          style={{ filter: "brightness(0.5) contrast(1.1) saturate(1.2)" }}
          alt="background"
        />
        
        {/* Cinematic Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#050505] z-10"></div>
        
        {/* Soft Gold/Green Aura - Premium Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(64,145,108,0.15)_0%,transparent_70%)] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(255,192,0,0.08)_0%,transparent_60%)] z-10"></div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto relative z-20 px-10 flex flex-col lg:flex-row justify-between items-center w-full">
        
        <div className="max-w-2xl animate-slide-in-left">
          {/* Refined Label */}
          <h4 className="text-[#c3a35d] font-bold tracking-[8px] mb-6 uppercase text-[10px] md:text-xs opacity-80">
            AI Intelligence is Here
          </h4>

          {/* Bold Heading with Text Glow */}
          <h1 className="text-6xl md:text-[90px] font-black leading-[0.85] mb-8 tracking-tighter text-white">
            EXCEL YOUR <br />
            <span className="text-[#40916C] drop-shadow-[0_0_35px_rgba(64,145,108,0.5)]">
              DATA POTENTIAL
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg font-medium leading-relaxed opacity-80">
            SheetSense turns complex spreadsheets into actionable 3D insights. 
            No formulas, just pure intelligence.
          </p>

          {/* Action Buttons with Premium Hover */}
          <div className="flex gap-5">
            <Link 
              to="/register" 
              className="px-10 py-4 bg-white text-black font-bold uppercase text-[11px] tracking-[2px] border-2 border-white hover:bg-[#2D6A4F] hover:border-[#2D6A4F] hover:text-white transition-all duration-500 shadow-xl"
            >
              Learn More
            </Link>
            <Link 
              to="/login" 
              className="px-10 py-4 bg-transparent text-white font-bold uppercase text-[11px] tracking-[2px] border-2 border-[#1B4332] hover:bg-[#1B4332] transition-all duration-500 shadow-[0_0_25px_rgba(27,67,50,0.2)]"
            >
              Chat With Data
            </Link>
          </div>
        </div>

        {/* 3. VISUAL OBJECT: 4 Bars with Glassmorphism Refined */}
        <div className="hidden lg:block relative animate-float pr-10">
          {/* Intense Back-glow */}
          <div className="absolute inset-0 bg-[#ffc000]/15 rounded-full blur-[140px] -z-10 animate-pulse"></div>
          
          <div className="relative flex items-end gap-5">
            {/* Bar 1: Shortest */}
            <div className="w-[85px] h-[160px] bg-gradient-to-tr from-[#40916C] to-[#52b788] rounded-[22px] shadow-[25px_25px_50px_rgba(0,0,0,0.6)] border-t border-l border-white/20 relative z-40">
                <div className="absolute inset-0 bg-white/5 rounded-[22px]"></div>
            </div>
            {/* Bar 2 */}
            <div className="w-[100px] h-[260px] bg-gradient-to-tr from-[#2D6A4F] to-[#40916C] rounded-[24px] shadow-[25px_25px_60px_rgba(0,0,0,0.7)] border-t border-l border-white/10 relative z-30">
                <div className="absolute inset-0 bg-white/5 rounded-[24px]"></div>
            </div>
            {/* Bar 3 */}
            <div className="w-[115px] h-[380px] bg-gradient-to-tr from-[#245741] to-[#2D6A4F] rounded-[26px] shadow-[25px_25px_70px_rgba(0,0,0,0.8)] border-t border-l border-white/10 relative z-20">
                <div className="absolute inset-0 bg-white/5 rounded-[26px]"></div>
            </div>
            {/* Bar 4: Tallest */}
            <div className="w-[130px] h-[520px] bg-gradient-to-tr from-[#1B4332] to-[#245741] rounded-[28px] shadow-[25px_25px_80px_rgba(0,0,0,0.9)] border-t border-l border-white/10 relative z-10">
                <div className="absolute inset-0 bg-white/5 rounded-[28px]"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-slide-in-left { animation: slide-in-left 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

    </section>
  );
};

export default HeroSection;