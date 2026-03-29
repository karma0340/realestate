"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaBars, FaTimes, FaGlobe, FaCaretDown, FaUserAlt, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState<"main" | string>("main");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", dropdown: ["Home Map", "Home Image", "Home Video", "Home Slider", "Home Styles"] },
    { name: "Listing", href: "/listings", dropdown: ["Listing Grid", "Listing List", "Listing Map", "Agent View", "Agencies View"] },
    { name: "Property", href: "/property/1", dropdown: [
      { label: "Single Property 1", href: "/property/1" },
      { label: "Single Property 2", href: "/property/2" },
      { label: "Single Property 3", href: "/property/3" },
      { label: "Single Property 4", href: "/property/4" },
      { label: "Single Property 5", href: "/property/5" }
    ] },
    { name: "Pages", href: "#", dropdown: ["About Us", "Dashboard", "User Profile", "My Properties", "Login", "Register", "FAQ", "Pricing"] },
    { name: "Blog", href: "#", dropdown: ["Blog Grid", "Blog List", "Blog Details"] },
    { name: "Contact", href: "#" },
  ];

  const Dropdown = ({ items }: { items: any[] }) => (
    <div className="absolute top-full left-0 min-w-[200px] bg-white border border-gray-100 shadow-xl py-4 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 z-50">
      {items.map((item: any) => {
        const label = typeof item === 'string' ? item : item.label;
        const href = typeof item === 'string' ? '#' : item.href;
        return (
          <Link key={label} href={href} className="block px-6 py-2 text-sm font-bold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors uppercase tracking-widest text-[11px]">
            {label}
          </Link>
        );
      })}
    </div>
  );

  // ... (inside the component)

  const handleLinkClick = (link: any) => {
    if (link.dropdown) {
      setCurrentPanel(link.name);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const menuVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(1);

  const goToPanel = (panel: string) => {
    setDirection(1);
    setCurrentPanel(panel);
  };

  const goBack = () => {
    setDirection(-1);
    setCurrentPanel("main");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[60] h-20 lg:h-24 px-4 sm:px-6 md:px-10 lg:pl-28 flex items-center justify-between transition-all duration-400 ${
        scrolled ? "bg-white shadow-md border-b" : "bg-white border-b border-gray-100"
      }`}
    >
      {/* 1. Left Section: Logo & Mobile Toggle */}
      <div className="flex items-center gap-4 sm:gap-6 shrink-0">
         <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2">
            <FaBars className="w-5 h-5 text-gray-800" />
         </button>
         
         <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 border-2 border-gray-900 flex items-center justify-center font-black relative overflow-hidden transition-transform group-hover:scale-105">
               <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-gray-900" />
               <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-gray-900" />
               <span className="text-[14px] sm:text-[16px]">RE</span>
            </div>
            <div className="flex flex-col">
               <span className="text-[12px] sm:text-[14px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-gray-900 leading-none">Real Estate</span>
               <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[1px] text-[#b28e5a] mt-0.5 sm:mt-1">Real Estate Portal</span>
            </div>
         </Link>
      </div>

      {/* 2. Center Section: Navigation Links (Desktop) */}
      <nav className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-10 h-full">
         {navLinks.map((link) => (
           <div key={link.name} className="relative group h-full flex items-center">
              <Link href={link.href} className="text-[11px] xl:text-[12px] font-black uppercase tracking-widest text-gray-700 hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none">
                {link.name} {link.dropdown && <FaCaretDown className="w-2.5 h-2.5 opacity-40 group-hover:rotate-180 transition-transform" />}
              </Link>
              {link.dropdown && <Dropdown items={link.dropdown} />}
              <div className="absolute bottom-6 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
           </div>
         ))}
      </nav>

      {/* 3. Right Section: Auth & CTA */}
      <div className="flex items-center justify-end gap-3 sm:gap-6 h-full shrink-0">
         {/* Language Dropdown */}
         <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-gray-700 cursor-pointer border-r pr-6 border-gray-100 h-8">
            <FaGlobe className="text-[#b28e5a] w-3.5 h-3.5" />
            ENG <FaCaretDown className="opacity-30" />
         </div>

         {/* Auth Actions */}
         <div className="flex items-center gap-2 sm:gap-6">
            {status === "authenticated" ? (
               <div className="flex items-center gap-3">
                 <div className="hidden lg:block text-right">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Welcome</p>
                    <p className="text-[11px] font-bold text-gray-800">{session.user?.name?.split(" ")[0]}</p>
                 </div>
                 <div className="group relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 border-2 border-[#b28e5a]/20 flex items-center justify-center text-gray-500 cursor-pointer overflow-hidden">
                       <FaUserAlt className="w-3 h-3 sm:w-4 sm:h-4 text-[#b28e5a]" />
                    </div>
                 </div>
               </div>
            ) : (
               <>
                 <Link href="/login" className="text-gray-800 hover:text-primary transition-colors block lg:hidden p-2">
                    <FaUserAlt className="w-4 h-4 text-[#b28e5a]" />
                 </Link>
                 <Link href="/login" className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-gray-800 hover:text-primary transition-colors hidden lg:block">
                    Sign In
                 </Link>
               </>
            )}

            <Link 
              href="/post-property" 
              className="bg-[#b28e5a] hover:bg-[#9a7b4f] text-white px-3 sm:px-8 py-2 sm:py-3.5 rounded-sm font-black text-[10px] sm:text-[11px] uppercase tracking-widest transition-all shadow-md hover:shadow-xl flex items-center gap-2 group active:scale-95 border border-[#b28e5a]"
            >
              <span className="hidden sm:inline">Add Listing</span>
              <span className="inline sm:hidden">ADD</span>
              <FaPlus className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:rotate-90 transition-transform" />
            </Link>
         </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               exit={{ opacity: 0 }} 
               className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70]"
               onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
               className="fixed top-0 left-0 bottom-0 w-[300px] bg-[#1d1d1d] z-[80] shadow-2xl flex flex-col text-white"
            >
              {/* Drawer Top / Panel Header */}
              <div className="p-6 flex justify-between items-center border-b border-white/5 flex-shrink-0 min-h-[80px]">
                 {currentPanel === "main" ? (
                    <div className="flex items-center gap-3">
                       <div className="w-9 h-9 border-2 border-white flex items-center justify-center font-black">
                          <span className="text-[14px]">RE</span>
                       </div>
                       <span className="text-[13px] font-black uppercase tracking-[2px]">Real Estate</span>
                    </div>
                 ) : (
                    <button 
                      onClick={goBack}
                      className="flex items-center gap-3 text-white group"
                    >
                      <FaCaretDown className="w-4 h-4 rotate-90 text-[#b28e5a] group-hover:-translate-x-1 transition-transform" />
                      <span className="text-[14px] font-black uppercase tracking-widest">{currentPanel}</span>
                    </button>
                 )}
                 <button 
                   onClick={() => setMobileMenuOpen(false)}
                   className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                 >
                   <FaTimes className="w-5 h-5" />
                 </button>
              </div>

              {/* Drawer Panels Wrapper */}
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  {currentPanel === "main" ? (
                    <motion.div
                      key="main"
                      custom={direction}
                      variants={menuVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 p-6 pt-8 space-y-1 overflow-y-auto"
                    >
                      {navLinks.map((link) => (
                        <div 
                          key={link.name} 
                          className="group border-b border-white/5 last:border-none flex items-center justify-between cursor-pointer py-4"
                          onClick={() => handleLinkClick(link)}
                        >
                          <span className="text-[13px] font-black uppercase tracking-[3px] text-white/90 group-hover:text-[#b28e5a] transition-colors">
                            {link.name}
                          </span>
                          {link.dropdown && (
                             <FaCaretDown className="w-3.5 h-3.5 -rotate-90 text-white/20 group-hover:text-[#b28e5a] transition-colors" />
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={currentPanel}
                      custom={direction}
                      variants={menuVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 p-6 pt-8 space-y-1 overflow-y-auto"
                    >
                      {navLinks.find(l => l.name === currentPanel)?.dropdown?.map((item: any) => {
                        const label = typeof item === 'string' ? item : item.label;
                        const href = typeof item === 'string' ? '#' : item.href;
                        return (
                          <div 
                            key={label}
                            className="group border-b border-white/5 last:border-none py-4 cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                             <Link href={href} className="text-[12px] font-bold uppercase tracking-widest text-white/60 group-hover:text-[#b28e5a] transition-colors block">
                               {label}
                             </Link>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Drawer Footer */}
              <div className="p-8 border-t border-white/5 space-y-5 bg-black/20 flex-shrink-0">
                <Link 
                  href="/login" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#b28e5a] text-white py-4 rounded-sm font-black text-[12px] uppercase tracking-[3px] text-center block shadow-2xl transition-transform active:scale-95"
                >
                  Sign In / Register
                </Link>
                <div className="flex items-center justify-center gap-4 text-white/30">
                  <FaGlobe className="text-[#b28e5a] w-4 h-4" />
                  <span className="text-[11px] uppercase font-black tracking-widest">English (US)</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
