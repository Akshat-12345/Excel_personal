import React from "react";
import Navbar from "../components/navbar"; 
import Footer from "../components/footer"; 
import HeroSection from "../components/Home/hero_section"; 
import MissionSection from "../components/Home/MissionSection";
import StorySection from "../components/Home/StorySection";
import ServicesSection from "../components/Home/ServicesSection"; // Naya component import kiya

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#40916C] selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR (Fixed at top) */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. MISSION SECTION (Seamless Overlap & Rubbing) */}
      <MissionSection />

      {/* 4. STORY SECTION (Cinematic Storytelling) */}
      <StorySection />

      {/* 5. SERVICES & FEATURES SECTION */}
      {/* Yeh section aapke stockists-section reference par based hai */}
      <ServicesSection />

      

      {/* 7. FOOTER */}
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