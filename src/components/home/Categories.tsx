"use client";

import { FaHome, FaBuilding, FaHotel, FaWarehouse, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    { name: "Houses", icon: <FaHome />, count: "12 Properties" },
    { name: "Apartments", icon: <FaBuilding />, count: "25 Properties" },
    { name: "Commercial", icon: <FaWarehouse />, count: "08 Properties" },
    { name: "Hotels", icon: <FaHotel />, count: "15 Properties" },
    { name: "Villas", icon: <FaMapMarkerAlt />, count: "10 Properties" },
  ];

  return (
    <section className="py-24 bg-background-off overflow-hidden lg:pl-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#b28e5a] text-xs font-black uppercase tracking-[6px] mb-3">Our Services</span>
            <div className="section-head before:bg-[#b28e5a]">
               <h2 className="text-4xl text-gray-800 uppercase tracking-tight font-black">Property Categories</h2>
            </div>
            <p className="max-w-xl text-gray-500 mt-6 font-bold uppercase tracking-widest text-[11px]">Browse our handpicked selection of properties curated specifically for your lifestyle and investment needs.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
           {categories.map((cat, idx) => (
             <motion.div 
               key={cat.name} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="group flex flex-col items-center p-8 bg-white premium-shadow hover:bg-[#b28e5a] transition-all duration-300 rounded-sm cursor-pointer"
             >
                <div className="w-16 h-16 rounded-full border-2 border-[#b28e5a] text-[#b28e5a] flex items-center justify-center text-2xl group-hover:bg-white group-hover:border-white group-hover:scale-110 transition-all duration-300 mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-800 group-hover:text-white transition-colors">{cat.name}</h3>
                <span className="text-[10px] text-gray-400 font-bold group-hover:text-white/80 transition-colors uppercase tracking-[2px] mt-2">{cat.count}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
