"use client";

import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Cristy Mayer",
    city: "San Francisco",
    image: "https://code-theme.com/html/findhouses/images/testimonials/ts-1.jpg",
    text: "Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.",
    rating: 5
  },
  {
    id: 2,
    name: "Ichiro Tasaka",
    city: "Houston",
    image: "https://code-theme.com/html/findhouses/images/testimonials/ts-2.jpg",
    text: "Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.",
    rating: 4
  },
  {
    id: 3,
    name: "Lisa Smith",
    city: "New York",
    image: "https://code-theme.com/html/findhouses/images/testimonials/ts-3.jpg",
    text: "Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.",
    rating: 5
  },
  {
    id: 4,
    name: "Jhon Morris",
    city: "Los Angeles",
    image: "https://code-theme.com/html/findhouses/images/testimonials/ts-4.jpg",
    text: "Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Dotted Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-10 border-l-[6px] border-[#b28e5a] pl-6">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-[4px] mb-2">Happy</span>
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Customers</h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-[#b28e5a] !opacity-30',
            bulletActiveClass: '!opacity-100 !w-8 transition-all duration-300 rounded-full'
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="testimonials-swiper !pb-20"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 p-10 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <h3 className="text-[17px] font-bold text-gray-800 mb-6 group-hover:text-[#b28e5a] transition-colors">{t.name}</h3>
                
                {/* Avatar with Ring */}
                <div className="w-24 h-24 rounded-full overflow-hidden p-1 bg-white ring-2 ring-gray-50 ring-offset-2 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <p className="text-[12px] text-gray-400 font-bold mb-3 tracking-widest">{t.city}</p>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < t.rating ? "text-yellow-400" : "text-gray-200"} 
                      size={12} 
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <FaQuoteRight className="text-[#b28e5a] text-2xl mb-6 opacity-80" />

                <p className="text-[14px] text-gray-500 italic leading-relaxed font-medium">
                  "{t.text}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
