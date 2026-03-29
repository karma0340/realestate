"use client";

import { useState, useEffect, useRef } from "react";
import { FaBed, FaBath, FaExpand, FaCar, FaChevronLeft, FaChevronRight, FaHome, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "Luxury Villa House",
      price: "$ 230,000",
      location: "Est St, 77 - Central Park South, NYC",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1500&q=80",
      beds: 6, baths: 3, sqft: 720, garage: 2,
      status: "FOR SALE"
    },
    {
      id: 2,
      title: "Modern Family Home",
      price: "$ 180,000",
      location: "West Av, 10 - Downtown Beverly Hills, CA",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80",
      beds: 4, baths: 2, sqft: 550, garage: 1,
      status: "FOR RENT"
    }
  ];

  // Extended mock data for fuzzy search demo
  const propertyData = [
    ...slides,
    { id: 3, title: "Oceanfront Condo", location: "Miami Beach, FL", price: "$ 540,000" },
    { id: 4, title: "Urban Penthouse", location: "Chicago, IL", price: "$ 890,000" },
    { id: 5, title: "Country Side Farm", location: "Nashville, TN", price: "$ 320,000" },
    { id: 6, title: "Suburban Retreat", location: "Seattle, WA", price: "$ 450,000" }
  ];

  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = propertyData.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative w-full h-auto lg:h-[calc(100vh-96px)] lg:min-h-[700px] overflow-hidden bg-white">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }}
        autoplay={{ delay: 5000 }}
        fadeEffect={{ crossFade: true }}
        effect="fade"
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex flex-col lg:flex-row items-start lg:items-center">
              {/* 1. Background Big Typography Text (ESTATE) */}
              <div className="absolute top-[2%] left-[1%] -z-10 opacity-[0.06] select-none pointer-events-none hidden lg:block">
                <h3 className="text-[140px] font-bold tracking-[-10px] uppercase leading-none text-gray-900">ESTATE</h3>
              </div>

              {/* 2. Left Content Section (Content Block) */}
              <div className="w-full lg:w-[35%] h-auto lg:h-full flex flex-col justify-start lg:justify-center items-center lg:items-start text-center lg:text-left pt-0 pb-0 lg:pt-20 lg:pb-0 px-6 lg:pl-[40px] xl:pl-[60px] lg:pr-12 z-20">
                
                {/* SEARCH BAR - Professional Fuzzy Search (Top on Mobile) */}
                <div ref={searchRef} className="relative max-w-md w-full z-50 mb-4 lg:mb-8">
                  <div className="relative group">
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
                      placeholder="Search items..."
                      className="w-full bg-gray-50/50 border border-gray-100 py-3 lg:py-4 pl-12 pr-6 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#b28e5a] transition-all rounded-sm shadow-sm backdrop-blur-sm group-hover:bg-white"
                    />
                    <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#b28e5a] transition-colors" />
                  </div>
                  {/* ...suggestions... */}
                  <AnimatePresence>
                    {showSuggestions && suggestions.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 shadow-2xl rounded-sm overflow-hidden py-2"
                      >
                        {suggestions.map((p) => (
                          <button 
                            key={p.id}
                            className="w-full text-left px-5 py-3 hover:bg-gray-50 flex items-center justify-between group transition-colors"
                          >
                            <div>
                              <p className="text-[13px] font-bold text-gray-800">{p.title}</p>
                              <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">{p.location}</p>
                            </div>
                            <span className="text-[#b28e5a] text-[12px] font-black">{p.price}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col space-y-2 lg:space-y-4"
                >
                  <span className="text-[#b28e5a] text-[12px] lg:text-[14px] font-bold uppercase tracking-[6px] lg:tracking-[8px] leading-none mb-1">
                    {slide.status}
                  </span>

                  <h3 className="text-2xl lg:text-[36px] font-bold leading-[1.1] text-gray-800 tracking-tight">
                    {slide.title}
                  </h3>

                  <p className="text-[#b28e5a] text-xl lg:text-[25px] font-bold mt-1 leading-none">
                    {slide.price}
                  </p>
                </motion.div>

                {/* Icon stats grid - Compact */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 lg:gap-x-4 pt-4 lg:pt-2">
                  <div className="flex items-center gap-3 text-gray-800">
                    <FaBed className="text-gray-500 w-3.5 h-3.5" />
                    <span className="text-[12px] lg:text-[13px] font-medium">{slide.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800">
                    <FaBath className="text-gray-500 w-3.5 h-3.5" />
                    <span className="text-[12px] lg:text-[13px] font-medium">{slide.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800">
                    <FaExpand className="text-gray-500 w-3.5 h-3.5" />
                    <span className="text-[12px] lg:text-[13px] font-medium">{slide.sqft} sq ft</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800">
                    <FaCar className="text-gray-500 w-3.5 h-3.5" />
                    <span className="text-[12px] lg:text-[13px] font-medium">{slide.garage} Garages</span>
                  </div>
                </div>

                <div className="pt-6 lg:pt-4 pb-6 lg:pb-0">
                  <Link href={`/property/${slide.id}`} className="bg-[#b28e5a] hover:bg-[#9a7b4f] text-white px-8 py-3.5 lg:py-4 font-bold text-[10px] lg:text-[11px] uppercase tracking-[2px] lg:tracking-[3px] transition-all rounded-sm flex items-center justify-between w-[200px] lg:w-[220px] group active:scale-95 shadow-xl shadow-primary/10 mx-auto lg:mx-0">
                    VIEW PROPERTY
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* 3. Right Image Section */}
              <div className="w-full lg:w-[65%] h-[200px] sm:h-[350px] lg:h-full relative overflow-hidden shrink-0">

                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  key={slide.image}
                  className="w-full h-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Shadow Overlay */}
                  <div className="absolute inset-0 bg-black/5" />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 4. REAL Watermark & Prev/Next Controls Grouped */}
      <div className="absolute bottom-[8%] left-[20px] lg:left-[40px] xl:left-[60px] z-30 hidden lg:flex flex-col items-start translate-y-4">
        <div className="opacity-[0.06] select-none pointer-events-none mb-[-30px]">
          <h3 className="text-[140px] font-bold uppercase text-gray-900 tracking-[-10px] leading-none">REAL</h3>
        </div>

        <div className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-[4px] text-gray-800">
          <div className="w-14 h-[1px] bg-gray-200" />
          <button className="hero-prev hover:text-[#b28e5a] transition-colors outline-none cursor-pointer z-50">PREV</button>
          <div className="w-14 h-[1px] bg-gray-200" />
          <button className="hero-next hover:text-[#b28e5a] transition-colors outline-none cursor-pointer z-50">NEXT</button>
          <div className="w-14 h-[1px] bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
