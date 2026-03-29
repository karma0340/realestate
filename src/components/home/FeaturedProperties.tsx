"use client";

import PropertyCard from "@/components/property/PropertyCard";
import { motion } from "framer-motion";

export default function FeaturedProperties() {
  const properties = [
    {
      id: "1",
      title: "Luxury Villa House",
      price: "$230,000",
      location: "Est St, 77 - Central Park South, NYC",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      beds: 6, baths: 3, sqft: 720, status: "FOR SALE"
    },
    {
       id: "2",
       title: "Modern Family Home",
       price: "$180,000",
       location: "West Av, 10 - Downtown Beverly Hills, CA",
       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
       beds: 4, baths: 2, sqft: 550, status: "FOR RENT"
    },
    {
      id: "3",
      title: "Cozy Beach Cottage",
      price: "$150,000",
      location: "Shore Ln, 45 - Miami Beach, FL",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
      beds: 3, baths: 2, sqft: 400, status: "FOR SALE"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <div className="flex flex-col">
              <span className="text-primary text-xs font-black uppercase tracking-[6px] mb-3">Trending</span>
              <div className="section-head">
                 <h2 className="text-4xl text-gray-800">Featured Properties</h2>
              </div>
           </div>
           
           <div className="hidden md:block">
              <a href="/listings" className="text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-2 hover:text-gray-800 hover:border-gray-800 transition-all">
                Browse All Properties
              </a>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {properties.map((prop) => (
             <PropertyCard key={prop.id} {...prop} />
           ))}
        </div>
      </div>
    </section>
  );
}
