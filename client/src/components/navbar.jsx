import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* CSS For Navbar and Sidebar */}
      <style>{`
        /* --- NAVBAR STYLES --- */
        .custom-navbar {
          display: flex; justify-content: space-between; align-items: center;
          height: 130px; background: linear-gradient(to right, #1c1c1c, #0f0f0f);
          padding: 0 40px; position: fixed; top: 0; left: 0; right: 0;
          z-index: 1000; transition: all 0.3s ease; font-family: 'Helvetica Neue', sans-serif;
        }
        .custom-navbar.scrolled { height: 80px; background: #0f0f0f; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); }
        .nav-left { display: flex; align-items: center; }
        .nav-icon { font-size: 36px; cursor: pointer; color: white; padding-right: 20px; user-select: none; }
        .nav-logo { height: 50px; width: 50px; margin-right: 10px; display: block; animation: gentlePulse 3s infinite ease-in-out; transition: all 0.3s ease; color: #40916C; }
        .custom-navbar.scrolled .nav-logo { height: 40px; width: 40px; }
        
        @keyframes gentlePulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        
        .brand-text { display: flex; flex-direction: column; margin-left: 5px; }
        .brand-title { font-size: 33px; font-weight: bold; letter-spacing: 2px; color: white; transition: font-size 0.3s ease; line-height: 1.1; }
        .custom-navbar.scrolled .brand-title { font-size: 24px; }
        .brand-subtitle { font-size: 12px; letter-spacing: 2px; color: rgba(255,255,255,0.8); }
        
        .nav-right { display: flex; align-items: center; gap: 20px; }
        .shop-btn { background-color: #ffc000; color: #000; border: none; padding: 12px 28px; cursor: pointer; font-weight: bold; border-radius: 30px; font-size: 16px; transition: all 0.3s ease; }
        .shop-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 10px rgba(255, 192, 0, 0.3); }
        
        .account-icon { background-color: #e0e0e0; color: #111; padding: 8px; border-radius: 50%; cursor: pointer; transition: all 0.3s ease; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }
        .account-icon:hover { transform: translateY(-2px); box-shadow: 0 5px 10px rgba(224, 224, 224, 0.3); background-color: #fff; }
        
        /* --- SIDEBAR STYLES --- */
        .custom-sidebar {
          position: fixed; top: 0; left: 0; width: 450px; height: 100vh;
          background-color: #111; transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          z-index: 1001; padding: 60px 50px; box-shadow: 5px 0 30px rgba(0, 0, 0, 0.8); font-family: 'Helvetica Neue', sans-serif;
        }
        .custom-sidebar.open { transform: translateX(0); }
        
        .sidebar-header {
          display: flex; align-items: center; margin-bottom: 60px; position: relative;
        }
        
        /* Cross Icon Positioned in the top right corner */
        .close-btn { 
          position: absolute; top: -30px; right: -20px; 
          font-size: 45px; cursor: pointer; transition: all 0.3s ease; color: white; line-height: 1; 
        }
        .close-btn:hover { transform: rotate(90deg) scale(1.1); color: #ffc000; }
        
        .sidebar-logo { height: 50px; width: 50px; margin-right: 15px; color: #40916C; }
        .sidebar-brand-title { font-size: 32px; font-weight: bold; letter-spacing: 2px; color: white; line-height: 1.1; }
        .sidebar-brand-subtitle { font-size: 11px; letter-spacing: 2px; color: #40916C; font-weight: bold; text-transform: uppercase; }

        .sidebar-links { list-style: none; padding-left: 0; margin: 0; display: flex; flex-direction: column; }
        .sidebar-links li { padding: 20px 0; font-size: 28px; color: #aaa; cursor: pointer; position: relative; transition: all 0.3s ease; font-weight: bold; }
        .sidebar-links li::after { content: ''; position: absolute; bottom: 10px; left: 0; width: 0; height: 3px; background: #40916C; transition: width 0.3s ease; }
        .sidebar-links li:hover { color: white; transform: translateX(15px); }
        .sidebar-links li:hover::after { width: 80px; }
      `}</style>

      {/* Top Navbar */}
      <nav className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-left">
          <div className="nav-icon" onClick={() => setIsSidebarOpen(true)}>☰</div>
          <svg className="nav-logo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          <div className="brand-text">
            <span className="brand-title">SHEETSENSE</span>
            <span className="brand-subtitle">DATA ANALYTICS</span>
          </div>
        </div>

        <div className="nav-right">
          <button className="shop-btn hidden md:block" onClick={() => navigate('/dashboard')}>Dashboard</button>
          <div className="relative">
            <div className="account-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white rounded-md shadow-2xl overflow-hidden z-[1002]">
                <Link to="/login" className="block px-4 py-3 text-sm text-gray-800 font-bold hover:bg-gray-100 hover:text-[#ffc000] transition" onClick={() => setIsDropdownOpen(false)}>Login</Link>
                <Link to="/register" className="block px-4 py-3 text-sm text-gray-800 font-bold hover:bg-gray-100 hover:text-[#ffc000] transition border-t border-gray-100" onClick={() => setIsDropdownOpen(false)}>Register</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`custom-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          {/* Logo and Brand Text in Sidebar */}
          <svg className="sidebar-logo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          <div className="brand-text">
            <span className="sidebar-brand-title">SHEETSENSE</span>
            <span className="sidebar-brand-subtitle">DATA ANALYTICS</span>
          </div>
          
          {/* Corner Close Button */}
          <div className="close-btn" onClick={() => setIsSidebarOpen(false)}>×</div>
        </div>

        <ul className="sidebar-links">
          <li onClick={() => setIsSidebarOpen(false)}>HOME</li>
          <li onClick={() => setIsSidebarOpen(false)}>OUR SERVICES</li>
          <li onClick={() => setIsSidebarOpen(false)}>OUR FEATURES</li>
          <li onClick={() => setIsSidebarOpen(false)}>LATEST NEWS</li>
          <li onClick={() => setIsSidebarOpen(false)}>EVENTS</li>
          <li onClick={() => setIsSidebarOpen(false)}>CONTACT US</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;