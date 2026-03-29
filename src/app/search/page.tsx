"use client";

import { useState } from "react";
import FilterSidebar from "@/components/search/FilterSidebar";
import PropertyCard from "@/components/property/PropertyCard";
import { FaThLarge, FaList, FaAngleRight, FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SearchPage() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  const DUMMY_LISTINGS = [
    { id: "1", title: 'Luxury 3BHK Apartment', price: '$150,000', location: 'Connaught Place, New Delhi', beds: 3, baths: 3, sqft: 1800, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" },
    { id: "2", title: 'Modern Independent Villa', price: '$320,000', location: 'Golf Course Road, Gurgaon', beds: 4, baths: 5, sqft: 3200, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" },
    { id: "3", title: 'Semi-Furnished 2BHK', price: '$85,000', location: 'Dwarka Sector 11, New Delhi', beds: 2, baths: 2, sqft: 1100, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { id: "4", title: 'Commercial Office Space', price: '$500,000', location: 'Cyber Hub, Gurgaon', beds: 0, baths: 2, sqft: 4000, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { id: "5", title: 'Cozy Beach Cottage', price: '$150,000', location: 'Shore Ln, 45 - Miami Beach, FL', beds: 3, baths: 2, sqft: 400, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" },
    { id: "6", title: 'Luxury Sky Penthouse', price: '$950,000', location: 'Skyline Dr, 99 - Seattle, WA', beds: 5, baths: 6, sqft: 4500, image: "https://images.unsplash.com/photo-1512918766671-ad6507962077?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb / Page Header */}
      <section className="bg-gray-800 py-16 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10 z-0" />
         <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-black uppercase tracking-widest mb-4">Properties Grid</h1>
            <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
               <a href="/" className="text-white hover:text-primary transition-colors">Home</a>
               <FaAngleRight className="w-3 h-3 text-gray-400" />
               <span>Listing Grid</span>
            </div>
         </div>
      </section>

      {/* Main Results Body */}
      <section className="py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
           
           {/* Left Sidebar Filter */}
           <FilterSidebar />

           {/* Right Results Area */}
           <div className="flex-1 space-y-10">
              
              {/* Controls Bar */}
              <div className="bg-white premium-shadow border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between rounded-sm gap-6">
                 <div className="lg:section-head pb-0 lg:before:h-12 flex items-center">
                    <h2 className="text-xl font-bold text-gray-800 leading-none">
                       Found {DUMMY_LISTINGS.length} Results
                    </h2>
                 </div>

                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                       Sort by: 
                       <div className="flex items-center gap-1 text-gray-800 cursor-pointer hover:text-primary transition-colors px-3 py-1 bg-background-off rounded-sm">
                          Latest <FaCaretDown className="w-3 h-3" />
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-2 border-l pl-6">
                        <button 
                          onClick={() => setViewType("grid")}
                          className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${viewType === "grid" ? "bg-primary text-white" : "bg-background-off text-gray-400"}`}
                        >
                           <FaThLarge className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => setViewType("list")}
                          className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${viewType === "list" ? "bg-primary text-white" : "bg-background-off text-gray-400"}`}
                        >
                           <FaList className="w-4 h-4" />
                        </button>
                    </div>
                 </div>
              </div>

              {/* Grid of cards */}
              <div className={`grid gap-8 ${viewType === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                 {DUMMY_LISTINGS.map((l, idx) => (
                   <motion.div 
                     key={l.id} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.05 }}
                    >
                     <PropertyCard {...l} />
                   </motion.div>
                 ))}
              </div>

              {/* Pagination Mock */}
              <div className="pt-10 flex justify-center">
                 <div className="flex items-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center bg-background-off hover:bg-primary hover:text-white transition-all rounded-sm font-black text-xs">«</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-sm font-black text-xs">1</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-background-off hover:bg-primary hover:text-white transition-all rounded-sm font-black text-xs">2</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-background-off hover:bg-primary hover:text-white transition-all rounded-sm font-black text-xs">3</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-background-off hover:bg-primary hover:text-white transition-all rounded-sm font-black text-xs">»</button>
                 </div>
              </div>
           </div>

        </div>
      </section>
    </div>
  );
}
