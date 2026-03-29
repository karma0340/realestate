"use client";

import { FaBed, FaBath, FaExpand, FaHeart, FaVideo, FaShareAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status?: string;
}

export default function PropertyCard({ id, title, location, price, beds, baths, sqft, image, status = "FOR SALE" }: PropertyCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group relative bg-white premium-shadow border border-gray-100 overflow-hidden rounded-sm hover:-translate-y-2 transition-all duration-300"
    >
      {/* Top Image area */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1.5 rounded-sm">
              {status}
            </span>
            <span className="bg-gray-800/80 text-white text-[10px] font-black uppercase tracking-[2px] px-3 py-1.5 rounded-sm">
              FEATURED
            </span>
        </div>

        {/* Quick actions on image */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
            <button className="w-9 h-9 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
                <FaHeart className="w-3.5 h-3.5" />
            </button>
            <button className="w-9 h-9 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
                <FaVideo className="w-3.5 h-3.5" />
            </button>
            <button className="w-9 h-9 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
                <FaShareAlt className="w-3.5 h-3.5" />
            </button>
        </div>
      </div>

      {/* Content area */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-primary font-extrabold text-sm mb-2 uppercase tracking-widest">
           {price}
        </div>
        <h3 className="text-xl font-bold text-gray-800 hover:text-primary transition-colors cursor-pointer truncate">
          <Link href={`/property/${id}`}>{title}</Link>
        </h3>
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-6 mt-1 truncate">{location}</p>

        {/* Stats Grid */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2 text-gray-600">
             <FaBed className="text-primary w-4 h-4" />
             <span className="text-[11px] font-black">{beds} BDS</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
             <FaBath className="text-primary w-4 h-4" />
             <span className="text-[11px] font-black">{baths} BA</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
             <FaExpand className="text-primary w-4 h-4" />
             <span className="text-[11px] font-black">{sqft} SQ FT</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
