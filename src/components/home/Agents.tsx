"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "Carls Jhons",
    role: "Real Estate Agent",
    image: "https://code-theme.com/html/findhouses/images/team/t-1.jpg"
  },
  {
    id: 2,
    name: "Arling Tracy",
    role: "Real Estate Agent",
    image: "https://code-theme.com/html/findhouses/images/team/t-2.jpg"
  },
  {
    id: 3,
    name: "Mark Web",
    role: "Real Estate Agent",
    image: "https://code-theme.com/html/findhouses/images/team/t-3.jpg"
  },
  {
    id: 4,
    name: "Katy Grace",
    role: "Real Estate Agent",
    image: "https://code-theme.com/html/findhouses/images/team/t-4.jpg"
  },
  {
    id: 5,
    name: "Katy Grace",
    role: "Real Estate Agent",
    image: "https://code-theme.com/html/findhouses/images/team/t-5.jpg"
  },
  {
    id: 6,
    name: "Katy Grace",
    role: "Real Estate Agent",
    image: "https://code-theme.com/html/findhouses/images/team/t-6.jpg"
  }
];

export default function Agents() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col mb-10 border-l-[6px] border-[#b28e5a] pl-6">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-[4px] mb-2">Meet Our</span>
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Agents</h2>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <Link href={`/agents/${agent.id}`} className="block">
                <div className="overflow-hidden rounded-sm mb-4 relative">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-full transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  {/* Hover overlay with social icons */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-2" onClick={(e) => e.preventDefault()}>
                      <button type="button" className="bg-[#1877f2] text-white p-2 rounded-sm hover:scale-110 transition-transform"><FaFacebook size={12} /></button>
                      <button type="button" className="bg-[#1da1f2] text-white p-2 rounded-sm hover:scale-110 transition-transform"><FaTwitter size={12} /></button>
                      <button type="button" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-sm hover:scale-110 transition-transform"><FaInstagram size={12} /></button>
                    </div>
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest border-t border-white/30 pt-2 mt-1">View Profile</span>
                  </div>
                </div>
                <h3 className="text-[17px] font-bold text-gray-800 mb-0.5 group-hover:text-[#b28e5a] transition-colors">{agent.name}</h3>
                <p className="text-[12px] text-gray-400 italic">{agent.role}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
