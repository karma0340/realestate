"use client";

import { FaEye, FaComment, FaShareAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "The Real Estate News",
    date: "Jun 23, 2020",
    author: "By Admin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    image: "https://code-theme.com/html/findhouses/images/blog/b-1.jpg",
    views: 306,
    comments: 34,
    shares: 122
  },
  {
    id: 2,
    title: "The Real Estate News",
    date: "Jun 23, 2020",
    author: "By Admin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    image: "https://code-theme.com/html/findhouses/images/blog/b-2.jpg",
    views: 306,
    comments: 34,
    shares: 122
  },
  {
    id: 3,
    title: "The Real Estate News",
    date: "Jun 23, 2020",
    author: "By Admin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    image: "https://code-theme.com/html/findhouses/images/blog/b-3.jpg",
    views: 306,
    comments: 34,
    shares: 122
  },
  {
    id: 4,
    title: "The Real Estate News",
    date: "Jun 23, 2020",
    author: "By Admin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    image: "https://code-theme.com/html/findhouses/images/blog/b-4.jpg",
    views: 306,
    comments: 34,
    shares: 122
  }
];

export default function LatestNews() {
  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Background Dotted Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-10 border-l-[6px] border-[#b28e5a] pl-6">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-[4px] mb-2">Latest</span>
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">News</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 flex flex-col sm:flex-row rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Section */}
              <div className="sm:w-1/3 h-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="sm:w-2/3 p-5 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] lg:text-[17px] font-bold text-gray-800 mb-2 group-hover:text-[#b28e5a] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[10px] lg:text-[11px] text-[#b28e5a] font-bold mb-3 uppercase tracking-widest">
                    {item.date} / {item.author}
                  </p>
                  <p className="text-[13px] lg:text-[14px] text-gray-500 leading-relaxed mb-4 lg:mb-6 line-clamp-2">
                    {item.excerpt}
                  </p>

                  <Link href={`/blog/${item.id}`} className="flex items-center gap-2 text-[11px] lg:text-[12px] font-black text-[#b28e5a] hover:text-[#a67e4e] uppercase tracking-widest transition-all">
                    Read more... <FaArrowRight size={10} />
                  </Link>
                </div>

                {/* Meta stats */}
                <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold border-t border-gray-50 pt-4 mt-6">
                  <div className="flex items-center gap-1">
                    <FaEye className="text-[#b28e5a]" /> {item.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaComment className="text-[#b28e5a]" /> {item.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaShareAlt className="text-[#b28e5a]" /> {item.shares}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
