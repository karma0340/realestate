"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import { useState } from 'react';

export default function PropertyGallery({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="space-y-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="h-[500px] lg:h-[600px] rounded-sm overflow-hidden premium-shadow"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} className="w-full h-full object-cover" alt={`Property view ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="h-24 lg:h-32"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity swiper-slide-thumb-active:opacity-100">
             <div className="h-full border-2 border-transparent hover:border-primary rounded-sm overflow-hidden">
                <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx + 1}`} />
             </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
