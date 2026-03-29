"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronUp, FaPaperPlane, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer bg-white border-t border-gray-100 overflow-hidden relative">
      {/* Background Dotted Pattern */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-sm">
                <FaMapMarkerAlt className="text-[#b28e5a]" />
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter uppercase italic">Real <span className="text-[#b28e5a]">Estate</span></span>
            </Link>
            <p className="text-gray-500 text-[14px] leading-relaxed pr-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-gray-800 text-[13px] font-bold">
                <FaMapMarkerAlt className="text-[#b28e5a]" /> 95 South Park Avenue, USA
              </li>
              <li className="flex items-center gap-3 text-gray-800 text-[13px] font-bold">
                <FaPhoneAlt className="text-[#b28e5a]" /> +456 875 369 208
              </li>
              <li className="flex items-center gap-3 text-gray-800 text-[13px] font-bold border-b border-gray-100 pb-2">
                <FaEnvelope className="text-[#b28e5a]" /> support@realestate.com
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-8">
             <h3 className="text-[17px] font-bold text-gray-800 mb-8 border-l-[4px] border-[#b28e5a] pl-4 uppercase tracking-widest">Navigation</h3>
             <div className="grid grid-cols-2 gap-4">
               <ul className="space-y-4">
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Home One</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Properties Right</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Properties List</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Property Details</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Agents Listing</Link></li>
               </ul>
               <ul className="space-y-4">
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Agents Details</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">About Us</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Blog Default</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Blog Details</Link></li>
                 <li><Link href="#" className="text-gray-500 text-[14px] font-medium hover:text-[#b28e5a] transition-colors">Contact Us</Link></li>
               </ul>
             </div>
          </div>

          {/* Column 3: Twitter Feed */}
          <div>
            <h3 className="text-[17px] font-bold text-gray-800 mb-8 border-l-[4px] border-[#b28e5a] pl-4 uppercase tracking-widest">Twitter Feeds</h3>
            <ul className="space-y-6">
              {[1, 2, 3].map((tweet) => (
                <li key={tweet} className="flex gap-4 group">
                  <FaTwitter className="text-[#b28e5a] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="text-gray-500 text-[13px] leading-relaxed group-hover:text-gray-800 transition-colors">
                      <span className="text-[#b28e5a] font-bold">@realestate</span> All Share Them With Me Baby Said Inspet.
                    </p>
                    <p className="text-[11px] font-black italic text-gray-400">About 5 days ago</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletters */}
          <div className="lg:pl-6">
            <h3 className="text-[17px] font-bold text-gray-800 mb-8 border-l-[4px] border-[#b28e5a] pl-4 uppercase tracking-widest">Newsletters</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
              Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.
            </p>
            <div className="flex bg-gray-900 p-0.5 rounded-sm overflow-hidden border border-gray-900">
               <input 
                 type="email" 
                 placeholder="Enter Your Email"
                 className="w-full bg-gray-800/50 text-white px-4 py-4 focus:outline-none text-[12px] font-medium placeholder:text-gray-500"
               />
               <button className="bg-[#b28e5a] hover:bg-[#a67e4e] text-white px-6 transition-all uppercase text-[11px] font-black tracking-widest">
                 Subscribe
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-100 py-10 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-500 text-[13px] font-bold">
            2021 © Copyright - All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
             <Link href="#" className="w-10 h-10 bg-[#3b5998] text-white flex items-center justify-center rounded-sm hover:-translate-y-1 transition-all flex items-center justify-center"><FaFacebookF /></Link>
             <Link href="#" className="w-10 h-10 bg-[#1da1f2] text-white flex items-center justify-center rounded-sm hover:-translate-y-1 transition-all flex items-center justify-center"><FaTwitter /></Link>
             <Link href="#" className="w-10 h-10 bg-[#e1306c] text-white flex items-center justify-center rounded-sm hover:-translate-y-1 transition-all flex items-center justify-center"><FaInstagram /></Link>
             <button 
               onClick={scrollToTop}
               className="w-10 h-10 bg-[#b28e5a] text-white flex items-center justify-center rounded-sm hover:-translate-y-1 transition-all ml-4"
             >
               <FaChevronUp />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
