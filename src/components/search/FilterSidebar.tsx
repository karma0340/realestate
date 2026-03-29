"use client";

import { FaSearch, FaMapMarkerAlt, FaCaretDown, FaList, FaAngleDoubleRight } from "react-icons/fa";

export default function FilterSidebar() {
  return (
    <aside className="w-full lg:w-[350px] space-y-8">
      {/* Search Header Banner */}
      <div className="bg-primary text-white p-6 rounded-sm flex items-center justify-between shadow-lg">
         <h3 className="text-lg font-bold uppercase tracking-wider flex items-center gap-3">
           <FaSearch className="w-4 h-4" /> Find Your House
         </h3>
         <FaList className="w-4 h-4 opacity-50" />
      </div>

      {/* Filter Form Card */}
      <div className="bg-white p-8 premium-shadow border border-gray-100 rounded-sm space-y-6">
        
        {/* Keywords */}
        <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">Keywords</label>
            <div className="relative">
               <input 
                 type="text" 
                 placeholder="Search Keyword..." 
                 className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-primary text-sm font-medium transition-all"
               />
            </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">Locations</label>
            <div className="relative">
               <FaMapMarkerAlt className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 w-3.5 h-3.5" />
               <select className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-primary text-sm font-medium bg-transparent cursor-pointer appearance-none transition-all">
                  <option>All Locations</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Miami</option>
               </select>
            </div>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">Property Type</label>
            <div className="relative">
               <FaCaretDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 w-3.5 h-3.5" />
               <select className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-primary text-sm font-medium bg-transparent cursor-pointer appearance-none transition-all">
                  <option>Any Type</option>
                  <option>Apartments</option>
                  <option>Villas</option>
                  <option>Houses</option>
               </select>
            </div>
        </div>

        {/* Property Status */}
        <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">Property Status</label>
            <div className="relative">
               <FaCaretDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 w-3.5 h-3.5" />
               <select className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-primary text-sm font-medium bg-transparent cursor-pointer appearance-none transition-all">
                  <option>Any Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
               </select>
            </div>
        </div>

        {/* Bedrooms / Bathrooms row */}
        <div className="grid grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
               <label className="text-xs font-black uppercase tracking-widest text-gray-400">Beds</label>
               <select className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-primary text-sm font-medium appearance-none bg-transparent">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
               </select>
            </div>
            <div className="space-y-2">
               <label className="text-xs font-black uppercase tracking-widest text-gray-400">Baths</label>
               <select className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-primary text-sm font-medium appearance-none bg-transparent">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
               </select>
            </div>
        </div>

        {/* Price Slider mockup */}
        <div className="space-y-4 pt-4 pb-4">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">Price Range</label>
            <div className="h-1 w-full bg-gray-100 relative rounded-full">
               <div className="absolute left-[20%] right-[30%] h-full bg-primary rounded-full">
                  <div className="absolute -left-1 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md" />
                  <div className="absolute -right-1 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md" />
               </div>
            </div>
            <div className="text-xs font-bold text-gray-500">$50,000 - $1,500,000</div>
        </div>

        <button className="w-full bg-primary hover:bg-[#a67e4e] text-white py-4 font-black text-xs uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-3 active:scale-95 group">
           Search Now <FaSearch className="w-3 h-3 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Featured Side Widget */}
      <div className="bg-white p-6 premium-shadow border border-gray-100 rounded-sm">
         <h4 className="text-sm font-black uppercase tracking-widest text-gray-800 mb-6 border-b pb-4 flex items-center justify-between">
           Featured <FaAngleDoubleRight className="text-primary w-3 h-3" />
         </h4>
         <div className="space-y-6">
            <div className="flex gap-4 group cursor-pointer">
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=100&q=80" className="w-20 h-20 object-cover rounded-sm group-hover:opacity-80 transition-opacity" />
               <div>
                  <h5 className="text-xs font-bold text-gray-800 hover:text-primary transition-colors truncate w-32">Luxury Villa</h5>
                  <p className="text-primary text-[11px] font-black mt-1">$230,000</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">New York, USA</p>
               </div>
            </div>
         </div>
      </div>
    </aside>
  );
}
