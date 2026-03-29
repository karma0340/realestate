"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUserCircle, FaLock, FaAngleRight, FaCircleNotch } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Header Banner */}
      <section className="bg-gray-800 py-16 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10 z-0" />
         <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl font-black uppercase tracking-widest mb-4">Login</h1>
            <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
               <a href="/" className="text-white hover:text-primary transition-colors">Home</a>
               <FaAngleRight className="w-3 h-3 text-gray-400" />
               <span>Login</span>
            </div>
         </div>
      </section>

      {/* Login Form Container */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-lg">
           <div className="bg-white premium-shadow border border-gray-100 p-10 rounded-sm">
              <div className="text-center mb-10">
                 <h2 className="text-2xl font-black uppercase tracking-widest text-gray-800">Sign In</h2>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Welcome back! Please enter your details.</p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                 {error && (
                   <div className="bg-red-50 text-red-700 p-4 border border-red-100 text-xs font-bold uppercase tracking-widest">
                     {error}
                   </div>
                 )}

                 <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <div className="relative">
                       <FaUserCircle className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200" />
                       <input 
                         name="email" 
                         type="email" 
                         required 
                         className="w-full border-b-2 border-gray-50 py-3 focus:outline-none focus:border-primary text-sm font-bold text-gray-700 transition-all" 
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Password</label>
                       <a href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Forgot?</a>
                    </div>
                    <div className="relative">
                       <FaLock className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200" />
                       <input 
                         name="password" 
                         type="password" 
                         required 
                         className="w-full border-b-2 border-gray-50 py-3 focus:outline-none focus:border-primary text-sm font-bold text-gray-700 transition-all" 
                       />
                    </div>
                 </div>

                 <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary" />
                    <label htmlFor="remember" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Remember Me</label>
                 </div>

                 <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-primary hover:bg-[#a67e4e] text-white py-4 font-black text-xs uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-primary/20"
                    >
                       {loading ? <FaCircleNotch className="w-4 h-4 animate-spin" /> : "Sign In Now"}
                    </button>
                 </div>

                 <div className="text-center pt-6 border-t border-gray-50">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                       Don't have an account? 
                       <Link href="/register" className="text-primary ml-2 hover:underline">Register</Link>
                    </p>
                 </div>
              </form>
           </div>
        </div>
      </section>
    </div>
  );
}
