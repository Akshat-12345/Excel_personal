import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="relative min-h-[110vh] w-full flex items-center overflow-hidden bg-[#050505] z-30 py-20">
      
      {/* 1. CINEMATIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/story.jpg" 
          className="w-full h-full object-cover opacity-70" 
          alt="Premium Story Background"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=2070" }}
        />
        
        {/* --- DYNAMIC OVERLAYS --- */}
        {/* Pure Black Top & Bottom (Zero Gap Fix) */}
        <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
        
        {/* GREENISH-YELLOW AURA (Matches HeroSection Lighting) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(64,145,108,0.12)_0%,transparent_70%)] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(255,192,0,0.08)_0%,transparent_60%)] z-10"></div>
        
        {/* Soft Vignette for Depth */}
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#050505]/50 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto relative z-20 px-8 md:px-24">
        
        {/* --- THE COMPACT GLASS CARD --- */}
        <div className="w-full lg:w-[50%]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="group relative bg-black/40 backdrop-blur-2xl p-10 md:p-14 rounded-[45px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden max-w-[700px]"
          >
            {/* Subtle Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Label - Gold Accent */}
            <h5 className="text-[#c3a35d] font-bold tracking-[8px] mb-4 uppercase text-[10px] md:text-xs opacity-90 drop-shadow-[0_0_10px_rgba(195,163,93,0.3)]">
              Our Story
            </h5>
            
            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase">
              In Delhi, <br />
              <span className="text-[#40916C] drop-shadow-[0_0_35px_rgba(64,145,108,0.5)]">India...</span>
            </h1>
            
            {/* Story Content */}
            <div className="space-y-8 text-white/90 text-lg md:text-xl font-medium leading-relaxed">
              <p className="drop-shadow-sm">
                SheetSense turns complex spreadsheets into actionable insights. 
                We bridge the gap between raw numbers and human understanding.
              </p>
              
              {/* Mission Box with Accent Glow */}
              <div className="border-l-[5px] border-[#40916C] pl-8 py-4 bg-white/5 backdrop-blur-sm rounded-r-2xl transition-transform hover:scale-[1.01] duration-300 relative overflow-hidden group/box">
                <div className="absolute inset-0 bg-gradient-to-r from-[#40916C]/5 to-transparent opacity-0 group-hover/box:opacity-100 transition-opacity"></div>
                <p className="italic text-white font-bold text-xl md:text-2xl leading-snug relative z-10">
                  Our mission? To break data stigma in India—one conversation at a time.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-12 group/btn relative px-12 py-5 overflow-hidden border-2 border-[#40916C] rounded-2xl transition-all duration-500 shadow-xl">
              <span className="relative z-10 text-[#40916C] font-black uppercase text-xs tracking-[3px] group-hover/btn:text-white transition-colors duration-500">
                Explore More
              </span>
              <div className="absolute inset-0 bg-[#40916C] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 shadow-[0_0_30px_rgba(64,145,108,0.4)]"></div>
            </button>
            
          </motion.div>
        </div>

      </div>

      {/* Hero-Style Decorative Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#40916C]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#c3a35d]/5 blur-[100px] rounded-full pointer-events-none"></div>

    </section>
  );
};

export default StorySection;