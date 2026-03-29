"use client";

import { FaBed, FaBath, FaExpand, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Luxury House",
    price: "$230,000",
    beds: 6,
    baths: 3,
    sqft: 720,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    status: "FOR SALE"
  },
  {
    id: 2,
    title: "Family Apartment",
    price: "$150,000",
    beds: 3,
    baths: 2,
    sqft: 450,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    status: "FOR SALE"
  },
  {
    id: 3,
    title: "Villa House",
    price: "$320,000",
    beds: 5,
    baths: 4,
    sqft: 900,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    status: "FOR SALE"
  },
  {
    id: 4,
    title: "Luxury Condo",
    price: "$450,000",
    beds: 2,
    baths: 2,
    sqft: 320,
    image: "https://images.unsplash.com/photo-1628592102751-ba83b035e251?auto=format&fit=crop&w=800&q=80",
    status: "FOR SALE"
  },
  {
    id: 5,
    title: "Modern Villa",
    price: "$280,000",
    beds: 4,
    baths: 3,
    sqft: 650,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    status: "FOR SALE"
  }
];

export default function PropertiesForSale() {
  return (
    <section className="py-12 bg-gray-50/30 relative overflow-hidden">
      {/* Background Dotted Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-10 border-l-[6px] border-[#b28e5a] pl-6">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-[4px] mb-2">Properties</span>
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">For Sale</h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-[#b28e5a] !opacity-30',
            bulletActiveClass: '!opacity-100 !w-8 transition-all duration-300 rounded-full'
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4.5 }
          }}
          className="properties-swiper !pb-16"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[320px] sm:h-[420px] rounded-sm overflow-hidden shadow-2xl"
              >
                {/* Image */}
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Status Tag */}
                <div className="absolute top-4 left-4 bg-[#ff385c] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-xs">
                  {property.status}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex flex-col items-start transition-all duration-300">
                  <h3 className="text-white text-[15px] sm:text-[17px] font-bold mb-0.5">{property.title}</h3>
                  <p className="text-white text-[13px] sm:text-[15px] font-bold mb-2 sm:mb-3 tracking-tight">{property.price}</p>
                  
                  {/* Stats Bar */}
                  <div className="flex items-center gap-4 text-white text-[11px] font-medium w-full mt-2">
                    <div className="flex items-center gap-2">
                       <FaBed className="text-[#ff385c]" size={14} /> 
                       <span>{property.beds} Bed</span>
                    </div>
                    <div className="flex items-center gap-1 border-l border-white/20 pl-4">
                       <FaBath className="text-[#ff385c]" size={14} /> 
                       <span>{property.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1 border-l border-white/20 pl-4">
                       <FaExpand className="text-[#ff385c]" size={14} /> 
                       <span>{property.sqft} sq ft</span>
                    </div>
                  </div>

                  {/* Minimalist View Details Text (appears on hover) */}
                  <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300 w-full mt-4">
                    <Link href={`/property/${property.id}`} className="text-white/90 text-[11px] font-bold uppercase tracking-[2px] hover:text-[#ff385c] transition-colors flex items-center gap-2">
                      View Details <FaChevronRight size={8} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
