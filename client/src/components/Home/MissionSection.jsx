import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MissionSection = () => {
  const targetRef = useRef(null);

  // Scroll Progress Tracking Specifically for this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Triggers when top of section enters viewport until bottom leaves
  });

  // RUB EFFECT LOGIC (Swapped movement for friction feel)
  const leftMove = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rightMove = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    /* mt-0 rakha hai, clash hatane ke liye padding-top use karenge */
    <section 
      ref={targetRef} 
      // bg-black ensures there's no background mismatch partition line
      className="relative min-h-screen w-full bg-black overflow-hidden z-30"
    >
      
      {/* SEAMLESS GRADIENT: Yeh partition ko cover karega bina negative margin ke */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-40"></div>

      <div className="flex h-screen w-full relative">
        
        {/* LEFT PART: Data Analytic Visual (Moves UP) */}
        <div className="relative w-1/2 h-full overflow-hidden border-r border-white/5 bg-[#050505]">
          <motion.div 
            style={{ y: leftMove }}
            className="absolute inset-0 w-full h-[130%]" // Extra height to allow dramatic movement
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" 
              className="w-full h-full object-cover opacity-50grayscale hover:grayscale-0 transition-all duration-700"
              alt="Data Analysis Visual"
            />
          </motion.div>
        </div>

        {/* RIGHT PART: Content + original top-barrel.jpg Background (Moves DOWN) */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <motion.div 
            style={{ y: rightMove }}
            className="absolute inset-0 w-full h-[130%]"
          >
            {/* PUBLIC FOLDER SE IMAGE UTHAYI HAI - Filter: brightness, contrast, saturate ko original jaisa dikhne ke liye optimize kiya gaya hai */}
            <img 
              src="/top-barrel.jpg" 
              className="w-full h-full object-cover opacity-80"
              alt="Top Barrel Background Original"
              style={{ filter: "brightness(0.9) contrast(1.1) saturate(1.1)" }}
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2037" }} // Fallback if image not found
            />
          </motion.div>

          {/* Center Split Shadow to create friction feel */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10"></div>

          {/* --- CONTENT AREA (RIGHT SIDE) --- */}
          <div className="relative z-30 h-full flex flex-col justify-center px-12 md:px-24 items-end text-right">
            <h5 className="text-[#c3a35d] font-bold tracking-[5px] mb-4 uppercase text-[10px] md:text-xs">
              Our Mission
            </h5>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              MAKING DATA <br /> 
              <span className="text-[#40916C] drop-shadow-[0_0_40px_rgba(64,145,108,0.4)]">
                HUMAN-FRIENDLY.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md leading-relaxed font-medium">
              SheetSense turns complex spreadsheets into actionable insights. 
              We bridge the gap between raw numbers and human understanding.
            </p>

            <button className="group relative px-10 py-4 overflow-hidden border-2 border-[#40916C] transition-all duration-300">
              <span className="relative z-10 text-[#40916C] font-black uppercase text-xs tracking-widest group-hover:text-white transition-colors duration-300">
                Our Story
              </span>
              <div className="absolute inset-0 bg-[#40916C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM BLEND */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  );
};

export default MissionSection;