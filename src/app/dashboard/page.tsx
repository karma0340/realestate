import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { FaUserCircle, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUpload } from "react-icons/fa";

export default async function DashboardProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-12">
      {/* Page Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-gray-100 pb-10">
         <div className="section-head pb-0 leading-none">
            <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-widest">User Profile</h2>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Profile Image Column */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white p-10 premium-shadow border border-gray-100 rounded-sm text-center">
              <div className="relative inline-block group mb-8">
                 <div className="w-40 h-40 rounded-full bg-gray-50 flex items-center justify-center text-primary text-6xl font-black ring-4 ring-gray-100 cursor-pointer overflow-hidden transition-all group-hover:ring-primary/20">
                    {session?.user?.name?.charAt(0)}
                 </div>
                 <button className="absolute bottom-2 right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                    <FaUpload className="w-4 h-4" />
                 </button>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{session?.user?.name}</h3>
              <span className="text-xs font-black uppercase tracking-widest text-primary mt-1 block">Account Active</span>
              <p className="text-xs text-gray-400 mt-4 leading-relaxed px-4">Maximize your real estate experience by keeping your profile information up to date.</p>
           </div>
        </div>

        {/* Profile Form Column */}
        <div className="lg:col-span-2">
           <div className="bg-white p-10 premium-shadow border border-gray-100 rounded-sm">
              <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                       <div className="relative">
                          <FaUserCircle className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200" />
                          <input type="text" defaultValue={session?.user?.name || ""} className="w-full border-b-2 border-gray-50 py-3 focus:outline-none focus:border-primary text-sm font-bold text-gray-700 transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                       <div className="relative">
                          <FaEnvelope className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200" />
                          <input type="email" defaultValue={session?.user?.email || ""} className="w-full border-b-2 border-gray-50 py-3 focus:outline-none focus:border-primary text-sm font-bold text-gray-700 transition-all opacity-50 bg-gray-50" readOnly />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                       <div className="relative">
                          <FaPhoneAlt className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200" />
                          <input type="tel" placeholder="+1 (555) 000-0000" className="w-full border-b-2 border-gray-50 py-3 focus:outline-none focus:border-primary text-sm font-bold text-gray-700 transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Address Location</label>
                       <div className="relative">
                          <FaMapMarkerAlt className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200" />
                          <input type="text" placeholder="NYC, Manhattan" className="w-full border-b-2 border-gray-50 py-3 focus:outline-none focus:border-primary text-sm font-bold text-gray-700 transition-all" />
                       </div>
                    </div>
                 </div>

                 <div className="pt-8 flex justify-end">
                    <button type="submit" className="bg-primary hover:bg-[#a67e4e] text-white px-12 py-4 font-black text-xs uppercase tracking-widest transition-all rounded-sm shadow-md active:scale-95">
                       Update Profile
                    </button>
                 </div>
              </form>
           </div>
        </div>

      </div>
    </div>
  );
}
