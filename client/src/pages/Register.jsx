import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // API call register route par jayegi
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      
      if (response.ok) {
        alert('Registration successful! Please sign in.');
        navigate('/login'); // Register hone ke baad login par bhej do
      } else {
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert('Server se connect nahi ho pa raha hai.');
    }
  };

  return (
    <>
      <Navbar />

      {/* ================= CUSTOM PREMIUM CSS ANIMATIONS ================= */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(30px) scale(0.95); }
        }
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-25deg); animation: sweep 3s infinite;
        }
      `}</style>

      {/* Main Content Area */}
      <div className="min-h-screen relative font-sans text-white flex items-center justify-center overflow-hidden bg-[#050505]">
        
        {/* CINEMATIC BACKGROUND */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }} 
        ></div>
        
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-[#0088a9]/20 rounded-full blur-[130px] z-0 pointer-events-none animate-float"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] bg-[#ffc000]/15 rounded-full blur-[120px] z-0 pointer-events-none animate-float-delayed"></div>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 flex flex-col md:flex-row w-full justify-between max-w-7xl mx-auto px-6 pt-[150px] pb-[100px]">
          
          {/* LEFT SIDE: Typography */}
          <div className="w-full md:w-1/2 p-4 md:pr-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-max mb-8 shadow-[0_0_15px_rgba(0,136,169,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#0088a9] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Join 10,000+ Analysts</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Start Your <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc000] via-[#ffd659] to-[#0088a9] drop-shadow-[0_0_30px_rgba(255,192,0,0.3)]">
                Analytics Journey.
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-md leading-relaxed font-light">
              Create a free account today to transform raw data into stunning visual insights and make smarter decisions.
            </p>
            
            {/* Premium Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a href="https://x.com/akshatrp17" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-[#ffc000] hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,192,0,0.3)] transition-all duration-300">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://github.com/Akshat-12345" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-[#ffc000] hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,192,0,0.3)] transition-all duration-300">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="mailto:akshatbajpai@gmail.com" className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-[#ffc000] hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(255,192,0,0.3)] transition-all duration-300">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: THE ULTRA-PREMIUM CARD */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end mt-16 md:mt-0 relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088a9] via-[#ffc000] to-[#00b4d8] rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="w-full relative p-[1px] rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-white/5">
              <div className="w-full h-full bg-[#0a0a0a]/80 backdrop-blur-3xl p-10 md:p-12 rounded-[23px] shadow-2xl relative overflow-hidden">
                
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Sign Up</h2>
                  <p className="text-gray-400 text-sm mt-3">Create your SheetSense account.</p>
                </div>

                <form className="space-y-6" onSubmit={handleRegister}>
                  
                  {/* Full Name Input */}
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <svg className="w-5 h-5 text-gray-500 group-focus-within/input:text-[#0088a9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <input 
                      type="text" id="name"
                      value={name} onChange={(e) => setName(e.target.value)} 
                      className="peer w-full pl-12 pr-4 pt-6 pb-2 bg-[#141414] border border-white/5 rounded-xl focus:outline-none focus:border-[#0088a9] focus:bg-[#1a1a1a] text-white transition-all duration-300" 
                      placeholder=" " required 
                    />
                    <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 left-12 z-10 origin-[0] peer-focus:text-[#0088a9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Full Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <svg className="w-5 h-5 text-gray-500 group-focus-within/input:text-[#0088a9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                    </div>
                    <input 
                      type="email" id="email"
                      value={email} onChange={(e) => setEmail(e.target.value)} 
                      className="peer w-full pl-12 pr-4 pt-6 pb-2 bg-[#141414] border border-white/5 rounded-xl focus:outline-none focus:border-[#0088a9] focus:bg-[#1a1a1a] text-white transition-all duration-300" 
                      placeholder=" " required 
                    />
                    <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 left-12 z-10 origin-[0] peer-focus:text-[#0088a9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Email Address
                    </label>
                  </div>

                  {/* Password Input */}
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <svg className="w-5 h-5 text-gray-500 group-focus-within/input:text-[#0088a9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input 
                      type="password" id="password"
                      value={password} onChange={(e) => setPassword(e.target.value)} 
                      className="peer w-full pl-12 pr-4 pt-6 pb-2 bg-[#141414] border border-white/5 rounded-xl focus:outline-none focus:border-[#0088a9] focus:bg-[#1a1a1a] text-white transition-all duration-300" 
                      placeholder=" " required 
                    />
                    <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 left-12 z-10 origin-[0] peer-focus:text-[#0088a9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none">
                      Password
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn-shine w-full bg-[#ffc000] text-black font-extrabold py-4 mt-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(255,192,0,0.6)]"
                  >
                    Create Account
                  </button>

                  {/* Login Link */}
                  <div className="mt-6 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#0088a9] font-semibold hover:text-white transition-colors duration-300">
                      Sign in here
                    </Link>
                  </div>

                </form>

                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffc000] to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;