import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FaUserAlt, FaList, FaHeart, FaPlus, FaCreditCard, FaLock, FaSignOutAlt, FaAngleRight, FaTachometerAlt } from "react-icons/fa";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "User Profile", href: "/dashboard/profile", icon: <FaUserAlt /> },
    { name: "My Properties", href: "/dashboard/listings", icon: <FaList /> },
    { name: "Favorited Properties", href: "/dashboard/wishlist", icon: <FaHeart /> },
    { name: "Add Property", href: "/post-property", icon: <FaPlus /> },
    { name: "Payment Method", href: "/dashboard/payment", icon: <FaCreditCard /> },
    { name: "Change Password", href: "/dashboard/password", icon: <FaLock /> },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Dashboard Top Banner */}
      <section className="bg-gray-800 py-12 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10 z-0" />
         <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-3xl font-black uppercase tracking-widest mb-4">User Panel</h1>
            <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
               <a href="/" className="text-white hover:text-primary transition-colors">Home</a>
               <FaAngleRight className="w-3 h-3 text-gray-400" />
               <span>Dashboard</span>
            </div>
         </div>
      </section>

      {/* Main Dashboard Body */}
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
        
        {/* Dashboard Sidebar Navigation */}
        <aside className="w-full lg:w-[350px] shrink-0">
           <div className="bg-white premium-shadow border border-gray-100 rounded-sm overflow-hidden">
              
              {/* User Header in Sidebar */}
              <div className="bg-background-off p-8 text-center border-b border-gray-100">
                  <div className="w-24 h-24 rounded-full bg-white mx-auto mb-6 flex items-center justify-center text-primary text-3xl font-black premium-shadow border-4 border-gray-50 uppercase">
                     {session.user?.name?.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{session.user?.name}</h3>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">{session.user?.email}</p>
              </div>

              {/* Navigation Menu */}
              <nav className="p-4 space-y-1">
                 {navLinks.map((link) => (
                   <Link 
                     key={link.name} 
                     href={link.href} 
                     className="flex items-center gap-4 px-6 py-4 rounded-sm text-sm font-bold uppercase tracking-widest text-gray-500 hover:bg-primary/5 hover:text-primary transition-all group"
                   >
                     <span className="text-primary group-hover:scale-110 transition-transform">{link.icon}</span>
                     {link.name}
                   </Link>
                 ))}
                 
                 <button 
                   className="w-full flex items-center gap-4 px-6 py-4 rounded-sm text-sm font-bold uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all mt-4 border-t pt-8"
                 >
                   <FaSignOutAlt className="text-red-400" /> Log Out
                 </button>
              </nav>

           </div>
        </aside>

        {/* Dynamic Dashboard Page Content Area */}
        <main className="flex-1 space-y-8 min-w-0">
           {children}
        </main>

      </div>
    </div>
  );
}
