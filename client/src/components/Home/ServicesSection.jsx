import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    { t: "Predictive Modeling", d: "Forecast trends with 99% accuracy.", f: "font-galactic1" },
    { t: "Real-time Sync", d: "Cloud-native live data streaming.", f: "font-galactic2" },
    { t: "Neural Queries", d: "Ask data in plain English.", f: "font-galactic3" },
    { t: "3D Environments", d: "Visualize rows in 3D space.", f: "font-galactic4" },
    { t: "Automated ETL", d: "Zero-effort data cleaning.", f: "font-galactic5" },
    { t: "Custom APIs", d: "Connect anything to everything.", f: "font-galactic6" }
  ];

  return (
    <section className="relative py-32 px-10 md:px-24 bg-[#050505] overflow-hidden min-h-screen flex items-center z-30">
      
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      {/* Matrix-style Grid Overlay taaki page khali na lage */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#40916C 1px, transparent 1px), linear-gradient(90deg, #40916C 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#40916C]/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c3a35d]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: THE TECH GRID (7 Columns) */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-5 order-2 lg:order-1">
          {services.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`aspect-square bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-6 text-center group cursor-pointer transition-all duration-500 rounded-2xl relative overflow-hidden`}
            >
              {/* Animated Corner Border */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-[#40916C] transition-all duration-500 rounded-tl-2xl"></div>
              
              <h3 className={`text-white font-black text-sm md:text-base mb-3 tracking-tighter uppercase group-hover:text-[#40916C] transition-colors ${item.f}`}>
                {item.t}
              </h3>
              <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.d}
              </p>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#40916C]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE: THE POWER CONTENT (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left order-1 lg:order-2">
          <div className="mb-6">
            <span className="text-[#c3a35d] font-bold tracking-[6px] uppercase text-[10px] md:text-xs">
              Advanced Capabilities
            </span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.8] tracking-tighter uppercase text-white">
            MASTER YOUR <br />
            <span className="text-[#40916C] drop-shadow-[0_0_30px_rgba(64,145,108,0.4)]">
              DATA CHAOS
            </span>
          </h2>
          
          <div className="space-y-8 max-w-md">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
              SheetSense isn't just a tool; it's an AI-first ecosystem built for full-stack data dominance.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-[#c3a35d]/30 pl-6">
              Leverage neural querying and 3D environment mapping to turn static spreadsheets into dynamic assets within the MERN architecture.
            </p>
          </div>

          {/* Premium Tech Button */}
          <button className="mt-12 group relative px-12 py-5 overflow-hidden border-2 border-[#40916C] rounded-xl transition-all duration-500">
            <span className="relative z-10 text-[#40916C] font-black uppercase text-xs tracking-[3px] group-hover:text-white transition-colors duration-500">
              DEPLOY ANALYTICS
            </span>
            <div className="absolute inset-0 bg-[#40916C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>

      </div>

      <style>{`
        .font-galactic1 { font-family: 'Anton', sans-serif; }
        .font-galactic2 { font-family: 'Playfair Display', serif; }
        .font-galactic3 { font-family: 'Raleway', sans-serif; }
        .font-galactic4 { font-family: 'Oswald', sans-serif; }
        .font-galactic5 { font-family: 'Fjalla One', sans-serif; }
        .font-galactic6 { font-family: 'Barlow Condensed', sans-serif; }
      `}</style>
    </section>
  );
};

export default ServicesSection;