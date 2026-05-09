import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111418] text-white pt-16 pb-8 px-6 md:px-12 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left Side: Link Columns (Mast wala part - Unchanged) */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-24 w-full md:w-3/5">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold tracking-wider mb-6 uppercase text-gray-200">SheetSense</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Features</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Pricing</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Careers</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold tracking-wider mb-6 uppercase text-gray-200">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Help Center</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Documentation</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">API Reference</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold tracking-wider mb-6 uppercase text-gray-200">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Data Security</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-[#ffc000] hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Side: Premium Newsletter & Socials */}
        <div className="w-full md:w-2/5 flex flex-col items-start md:items-end">
          <h3 className="text-2xl font-bold tracking-wider mb-3 text-white">Get Data Insights</h3>
          <p className="text-gray-400 text-sm mb-6 text-left md:text-right max-w-sm leading-relaxed">
            Join 10,000+ data analysts. Get the latest features, tips, and platform updates delivered straight to your inbox.
          </p>

          {/* Sleek Input Group */}
          <div className="flex w-full max-w-md mb-8 shadow-lg">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-[#1c1c1c] text-white px-5 py-3 rounded-l-lg border border-r-0 border-gray-700 focus:outline-none focus:border-[#ffc000] transition-colors text-sm placeholder-gray-500"
            />
            <button className="bg-[#ffc000] hover:bg-[#e6ad00] text-black font-bold px-6 py-3 rounded-r-lg transition-all duration-300 text-sm whitespace-nowrap hover:shadow-[0_0_15px_rgba(255,192,0,0.4)]">
              Subscribe
            </button>
          </div>

          {/* Minimalist Social Icons */}
          <div className="flex space-x-4">
            <a href="https://x.com/akshatrp17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#ffc000] hover:text-black hover:border-[#ffc000] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://github.com/Akshat-12345" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#ffc000] hover:text-black hover:border-[#ffc000] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            {/* Added LinkedIn icon as it's an analytics tool */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#ffc000] hover:text-black hover:border-[#ffc000] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:akshatbajpai@gmail.com" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#ffc000] hover:text-black hover:border-[#ffc000] hover:-translate-y-1 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section (Clean & Minimal) */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex gap-4 font-medium">
          <Link to="/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link to="/" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          <span>•</span>
          <Link to="/" className="hover:text-gray-300 transition-colors">Cookie Settings</Link>
        </div>

        <p className="text-center md:text-right max-w-lg">
          Powered By Dhvani AI. <br className="hidden md:block" />
          © {new Date().getFullYear()} SheetSense Analytics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;