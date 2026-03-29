"use client";

import { FaHome, FaBuilding, FaWarehouse, FaBed, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Houses",
    description: "Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.",
    icon: FaHome,
  },
  {
    id: 2,
    title: "Apartments",
    description: "Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.",
    icon: FaBuilding,
  },
  {
    id: 3,
    title: "Commercial",
    description: "Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.",
    icon: FaWarehouse,
  },
  {
    id: 4,
    title: "Hotels",
    description: "Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.",
    icon: FaBed,
  }
];

export default function PropertyServices() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* 🏛️ Blueprint Background (Fixed Parallax Style) */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/images/bg-counter.jpg")',
          opacity: 90.18 // Standardized for responsiveness and visibility
        }}
      />
      {/* Lighter Blueprint Tint Overlay */}
      <div className="absolute inset-0 z-0 bg-white/70" />

      <div className="container mx-auto px-6 lg:px-4 relative z-10 text-center lg:text-left">
        {/* Section Header */}
        <div className="flex flex-col mb-10 border-l-[6px] border-[#b28e5a] pl-6 text-left">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-[4px] mb-2">Property</span>
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-6 sm:p-8 lg:p-10 pt-10 sm:pt-12 border border-dotted border-gray-300 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-[#b28e5a] transition-all duration-300 rounded-sm"
            >
              {/* Icon Circle - Top Right of Box */}
              <div className="absolute -top-6 sm:-top-7 right-6 w-12 h-12 sm:w-14 sm:h-14 bg-[#b28e5a] rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={20} className="sm:size-[22px]" strokeWidth={1} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#b28e5a] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-[11px] font-bold text-gray-800 uppercase tracking-widest hover:text-[#b28e5a] transition-colors">
                Read More <FaArrowRight size={10} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
