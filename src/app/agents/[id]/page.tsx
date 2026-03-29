"use client";

import { FaBed, FaBath, FaExpand, FaCar, FaPhoneAlt, FaFax, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const agent = {
  name: "Carls Jhons",
  role: "Real Estate Agent",
  company: "Company Name",
  totalListings: 4,
  image: "https://code-theme.com/html/findhouses/images/team/t-1.jpg",
  office: "(234) 0200 17813",
  mobile: "(657) 9854 12095",
  fax: "809 123 0951",
  email: "info@agent.com",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam.`,
};

const listings = [
  { id: 1, title: "Luxury House", price: "$9,000", status: "For Sale", tag: "Featured", address: "Est St, 77 - Central Park, NYC", beds: 6, baths: 3, sqft: 720, garages: 2, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Luxury House", price: "$3,000", status: "For Rent", tag: null, address: "Est St, 77 - Central Park, NYC", beds: 6, baths: 3, sqft: 720, garages: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Luxury House", price: "$9,000", status: "For Sale", tag: null, address: "Est St, 77 - Central Park, NYC", beds: 6, baths: 3, sqft: 720, garages: 2, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Luxury House", price: "$3,000", status: "For Rent", tag: "Featured", address: "Est St, 77 - Central Park, NYC", beds: 6, baths: 3, sqft: 720, garages: 2, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" },
];

const recentProperties = [
  { title: "Family Home", price: "$230,000", image: "https://images.unsplash.com/photo-1560185127-6a7a8f54b23e?auto=format&fit=crop&w=200&q=80" },
  { title: "Family Home", price: "$230,000", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80" },
  { title: "Family Home", price: "$230,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80" },
];

const featureProperties = [
  { title: "House Luxury New York", price: "$ 230,000", status: "For Sale", beds: 2, baths: 3, sqft: 720 },
  { title: "House Luxury Los Angles", price: "$ 6,500", status: "For Rent", beds: 2, baths: 3, sqft: 720 },
  { title: "House Luxury San Francisco", price: "$ 230,000", status: "For Sale", beds: 2, baths: 3, sqft: 720 },
  { title: "House Luxury Miami FL", price: "$ 6,500", status: "For Rent", beds: 2, baths: 3, sqft: 720 },
];

export default function AgentDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Banner */}
      <div className="bg-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-[#b28e5a] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Agent Single</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 xl:pl-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Agent Profile Card */}
            <div className="bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden mb-8">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-64 flex-shrink-0">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-64 sm:h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h1 className="text-2xl font-black text-gray-800">{agent.name}</h1>
                    <span className="text-xs bg-[#b28e5a] text-white px-3 py-1 rounded-sm font-bold">{agent.totalListings} Listings</span>
                  </div>
                  <p className="text-sm text-[#b28e5a] font-bold uppercase tracking-wider mb-1">{agent.role}</p>
                  <p className="text-sm text-gray-400 mb-5">{agent.company}</p>

                  <ul className="space-y-2 mb-5">
                    <li>
                      <a href={`tel:${agent.office}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#b28e5a] transition-colors">
                        <FaPhoneAlt className="text-[#b28e5a] text-[11px]" />
                        <span className="font-bold text-gray-700 mr-1">Office:</span> {agent.office}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${agent.mobile}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#b28e5a] transition-colors">
                        <FaPhoneAlt className="text-[#b28e5a] text-[11px]" />
                        <span className="font-bold text-gray-700 mr-1">Mobile:</span> {agent.mobile}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#b28e5a] transition-colors">
                        <FaFax className="text-[#b28e5a] text-[11px]" />
                        <span className="font-bold text-gray-700 mr-1">Fax:</span> {agent.fax}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#b28e5a] transition-colors">
                        <FaEnvelope className="text-[#b28e5a] text-[11px]" />
                        <span className="font-bold text-gray-700 mr-1">Email:</span> {agent.email}
                      </a>
                    </li>
                  </ul>

                  <div className="flex items-center gap-3">
                    <a href="#" className="bg-[#1877f2] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"><FaFacebook size={14} /></a>
                    <a href="#" className="bg-[#1da1f2] text-white p-2 rounded-sm hover:opacity-90 transition-opacity"><FaTwitter size={14} /></a>
                    <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-sm hover:opacity-90 transition-opacity"><FaInstagram size={14} /></a>
                    <Link href="/properties" className="bg-[#b28e5a] hover:bg-[#a07a4a] text-white text-xs font-bold uppercase tracking-wider px-5 py-2 transition-colors ml-2">
                      View My Listings
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-3 border-b border-gray-100">Description</h2>
              {agent.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-500 leading-relaxed text-sm mb-4">{p}</p>
              ))}
            </div>

            {/* Listings */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100">
                Listing By {agent.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {listings.map((listing) => (
                  <Link key={listing.id} href={`/property/${listing.id}`} className="group block bg-white border border-gray-100 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {listing.tag && (
                          <span className="bg-[#b28e5a] text-white text-[10px] font-bold px-2 py-1 uppercase">{listing.tag}</span>
                        )}
                        <span className="bg-[#ff385c] text-white text-[10px] font-bold px-2 py-1 uppercase">{listing.status}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-[#b28e5a] text-white text-xs font-bold px-3 py-1">{listing.price}</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 group-hover:text-[#b28e5a] transition-colors mb-1">{listing.title}</h3>
                      <p className="text-xs text-gray-400 mb-3">{listing.address}</p>
                      <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs border-t border-gray-50 pt-3">
                        <span className="flex items-center gap-1"><FaBed className="text-[#ff385c]" /> {listing.beds} Beds</span>
                        <span className="flex items-center gap-1"><FaBath className="text-[#ff385c]" /> {listing.baths} Baths</span>
                        <span className="flex items-center gap-1"><FaExpand className="text-[#ff385c]" /> {listing.sqft} sq ft</span>
                        <span className="flex items-center gap-1"><FaCar className="text-[#ff385c]" /> {listing.garages} Gar</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Schedule a Tour */}
            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-[#b28e5a] px-5 py-4">
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Schedule a Tour</h3>
              </div>
              <div className="p-5 space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
                <input type="tel" placeholder="Your Phone" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
                <input type="date" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
                <textarea placeholder="Message" rows={4} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors resize-none" />
                <button className="w-full bg-[#b28e5a] hover:bg-[#a07a4a] text-white font-bold uppercase tracking-wider text-sm py-3 transition-colors">Submit Request</button>
              </div>
            </div>

            {/* Recent Properties */}
            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-gray-800 px-5 py-4"><h3 className="text-white font-bold uppercase tracking-wider text-sm">Recent Properties</h3></div>
              <div className="p-5 space-y-4">
                {recentProperties.map((prop, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-20 h-14 overflow-hidden rounded-sm flex-shrink-0">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-700 group-hover:text-[#b28e5a] transition-colors">{prop.title}</p>
                      <p className="text-xs text-[#b28e5a] font-bold">{prop.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Properties */}
            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-[#b28e5a] px-5 py-4"><h3 className="text-white font-bold uppercase tracking-wider text-sm">Feature Properties</h3></div>
              <div className="p-4 space-y-3">
                {featureProperties.map((fp, i) => (
                  <div key={i} className="border border-gray-100 rounded-sm p-3 hover:border-[#b28e5a] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold text-white px-2 py-0.5 ${fp.status === "For Sale" ? "bg-[#b28e5a]" : "bg-[#ff385c]"}`}>{fp.status}</span>
                      <span className="text-[#b28e5a] font-bold text-sm">{fp.price}</span>
                    </div>
                    <p className="text-xs font-bold text-gray-700 group-hover:text-[#b28e5a] transition-colors">{fp.title}</p>
                    <div className="flex gap-3 text-[10px] text-gray-400 mt-2">
                      <span>Area {fp.sqft} sq ft</span>
                      <span>Beds {fp.beds}</span>
                      <span>Baths {fp.baths}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Twitter Feed */}
            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-[#1da1f2] px-5 py-4"><h3 className="text-white font-bold uppercase tracking-wider text-sm">Twitter Feeds</h3></div>
              <div className="p-5 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-gray-50 pb-4 last:border-none last:pb-0">
                    <p className="text-sm text-gray-600 mb-1">
                      <a href="#" className="text-[#1da1f2] font-bold">@findhouses</a> all share them with me baby said inspet.
                    </p>
                    <span className="text-xs text-gray-400">about 5 days ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
