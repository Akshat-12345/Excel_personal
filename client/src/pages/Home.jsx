import React from "react";
import Navbar from "../components/navbar"; 
import Footer from "../components/footer"; 
import HeroSection from "../components/Home/hero_section"; 
import MissionSection from "../components/Home/MissionSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#40916C] selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR (Fixed at top) */}
      <Navbar />

      {/* 2. HERO SECTION */}
      {/* Iske bottom mein humne subtle gradient rakha hai jo Mission se match karega */}
      <HeroSection />

      {/* 3. MISSION SECTION (Seamless Overlap & Rubbing) */}
      {/* Yeh section Hero ke upar thoda chadh kar (-mt) shuru hota hai partition hatane ke liye */}
      <MissionSection />

      {/* 4. SERVICES GRID */}
      <section className="relative py-32 px-10 bg-[#050505] z-30">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-6xl font-black mb-20 tracking-tighter uppercase text-white">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                t: "AI ANALYTICS", 
                d: "Smart assistance for complex data queries using neural models.",
                color: "#40916C" 
              },
              { 
                t: "3D VISUALS", 
                d: "Immersive visualizations that turn rows into 3D environments.",
                color: "#2D6A4F" 
              },
              { 
                t: "SECURE SYNC", 
                d: "Enterprise-grade encryption with real-time cloud data updates.",
                color: "#1B4332" 
              }
            ].map((box, i) => (
              <div 
                key={i} 
                className="h-72 bg-[#0f0f0f] border border-white/5 flex flex-col items-center justify-center p-8 text-center hover:border-[#40916C]/50 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#40916C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-[#40916C] font-black text-2xl mb-4 group-hover:scale-110 group-hover:text-white transition-all duration-300 tracking-tight">
                  {box.t}
                </h3>
                
                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[200px] group-hover:text-gray-300 transition-colors">
                  {box.d}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#40916C] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <Footer />

      {/* Global CSS for Smooth Scrolling Experience */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        /* Custom Scrollbar for Excel Theme */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #1B4332;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #40916C;
        }
      `}</style>

    </div>
  );
};

export default Home;