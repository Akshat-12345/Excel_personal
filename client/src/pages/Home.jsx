import React from "react";
import Navbar from "../components/navbar"; 
import Footer from "../components/footer"; 
import HeroSection from "../components/Home/hero_section"; 

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#ffc000] selection:text-black font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* Ab image sirf iske andar hi rahegi */}
      <HeroSection />

      {/* --- VISION SECTION --- */}
      <section className="relative py-32 px-10 border-y border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" className="w-full h-[500px] object-cover opacity-80" alt="Vision" />
            </div>
            <div className="w-full md:w-1/2">
                <h5 className="text-[#c3a35d] font-bold mb-4 uppercase tracking-widest text-sm">Our Vision</h5>
                <h2 className="text-5xl font-black mb-8 tracking-tighter">MAKING DATA <br/> HUMAN-FRIENDLY.</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Data analytics simplified. Every row and column tells a story that matters.
                </p>
                <button className="px-8 py-3 border border-[#c3a35d] text-[#c3a35d] font-bold hover:bg-[#c3a35d] hover:text-black transition-all">
                    READ OUR STORY
                </button>
            </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-32 px-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-6xl font-black mb-20 tracking-tighter uppercase">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "AI ANALYTICS", d: "Smart assistance for complex data queries." },
              { t: "3D VISUALS", d: "Immersive visualizations that pop." },
              { t: "SECURE SYNC", d: "Your data is safe and updated in real-time." }
            ].map((box, i) => (
              <div key={i} className="h-60 bg-[#0f0f0f] border border-white/5 flex flex-col items-center justify-center p-6 hover:border-[#ffc000]/50 transition-all group">
                <h3 className="text-[#ffc000] font-bold mb-4 group-hover:scale-110 transition-transform">{box.t}</h3>
                <p className="text-gray-500 text-sm">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;