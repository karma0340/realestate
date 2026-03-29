"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaBehance, FaPinterestP, FaHome } from "react-icons/fa";
import Link from "next/link";

export default function SocialSidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 z-[70] flex flex-col items-center bg-white border-r border-gray-100 py-10 px-5 invisible xl:visible shadow-none w-20">
      
      {/* 1. Branded House Icon (Top Left of site in original) */}
      <div className="mb-12">
         <Link href="/" className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white text-2xl group transition-transform hover:rotate-12">
            <FaHome />
         </Link>
      </div>

      {/* 2. Top Socials */}
      <div className="flex flex-col space-y-7 text-gray-500 text-[14px]">
        <a href="#" className="hover:text-primary transition-all duration-300">
          <FaInstagram className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="hover:text-primary transition-all duration-300">
          <FaTwitter className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="hover:text-primary transition-all duration-300">
          <FaBehance className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="hover:text-primary transition-all duration-300">
          <FaLinkedinIn className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="hover:text-primary transition-all duration-300">
          <FaPinterestP className="w-3.5 h-3.5" />
        </a>
      </div>
      
      {/* Horizontal Divider exactly as in screenshot */}
      <div className="h-[1px] w-10 bg-gray-200 my-8" />
      
      {/* 3. Vertical Contact Info with Gold Icons */}
      <div className="flex flex-col items-center gap-4 flex-grow justify-end pb-32">
        <div 
          className="whitespace-nowrap flex items-center gap-4 text-[9px] font-bold tracking-[2px] text-gray-400 uppercase -translate-x-[1px]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <FaPhoneAlt className="w-3.5 h-3.5 text-primary rotate-90" />
           call +4 (204) 870-01785
        </div>
        
        <div 
          className="whitespace-nowrap flex items-center gap-4 text-[9px] font-bold tracking-[2px] text-gray-400 uppercase -translate-x-[1px]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <FaEnvelope className="w-3.5 h-3.5 text-primary rotate-90" />
          info@findhouses.com
        </div>
      </div>
    </aside>
  );
}
