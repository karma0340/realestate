"use client";

import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "49.99",
    features: [
      "100GB Monthly Bandwidth",
      "$100 Google AdWords",
      "100 Domain Hosting",
      "SSL Shopping Cart",
      "24/7 Live Support"
    ],
    featured: false
  },
  {
    id: 2,
    name: "Standard",
    price: "99.99",
    features: [
      "100GB Monthly Bandwidth",
      "$100 Google AdWords",
      "100 Domain Hosting",
      "SSL Shopping Cart",
      "24/7 Live Support"
    ],
    featured: false
  },
  {
    id: 3,
    name: "Professional",
    price: "149.99",
    features: [
      "100GB Monthly Bandwidth",
      "$100 Google AdWords",
      "100 Domain Hosting",
      "SSL Shopping Cart",
      "24/7 Live Support"
    ],
    featured: true
  },
  {
    id: 4,
    name: "Premium",
    price: "399.99",
    features: [
      "100GB Monthly Bandwidth",
      "$100 Google AdWords",
      "100 Domain Hosting",
      "SSL Shopping Cart",
      "24/7 Live Support"
    ],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="py-12 bg-gray-50/30 relative">
      {/* Background Dotted Pattern */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-10 border-l-[6px] border-[#b28e5a] pl-6">
          <span className="text-gray-400 text-sm font-bold uppercase tracking-[4px] mb-2">Pricing</span>
          <h2 className="text-4xl font-black text-gray-800 uppercase tracking-tight">Packages</h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden flex flex-col items-center ${plan.featured ? 'ring-2 ring-gray-900' : ''}`}
            >
              {/* Plan Header */}
              <div className="w-full text-center py-5 sm:py-8">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-gray-800">{plan.name}</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Monthly Plan</p>
              </div>

              {/* Price Block with Featured Gold/Black Banner */}
              <div className={`w-full py-6 sm:py-8 text-white text-center relative ${plan.featured ? 'bg-gray-900' : 'bg-[#b28e5a]'}`}>
                <div className="text-3xl sm:text-4xl font-black flex items-center justify-center gap-1">
                  <span className="text-lg align-top mt-1">$</span>
                  {plan.price.split('.')[0]}
                  <span className="text-lg mt-3">.{plan.price.split('.')[1]}</span>
                </div>
                {/* Arrow Pointer Triangle */}
                <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent ${plan.featured ? 'border-t-[16px] border-t-gray-900' : 'border-t-[16px] border-t-[#b28e5a]'}`} />
              </div>

              {/* Features List */}
              <ul className="w-full py-6 sm:py-10 px-6 sm:px-8 flex flex-col gap-4 sm:gap-6 items-center">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-[12px] sm:text-[13px] font-medium text-gray-500 transition-all cursor-default">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Sign Up Button */}
              <div className="pb-8 sm:pb-10 pt-2 w-full px-8 sm:px-12">
                <button className={`w-full py-3.5 sm:py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] rounded-sm transition-all active:scale-95 shadow-lg shadow-gray-200 ${plan.featured ? 'bg-gray-900 text-white hover:bg-black' : 'bg-[#b28e5a] text-white hover:bg-[#a67e4e]'}`}>
                  Sign Up
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
