"use client";

import { FaBed, FaBath, FaExpand, FaCar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaHeart, FaShare, FaPrint, FaCheckCircle, FaVideo, FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const property = {
  id: 1,
  title: "Luxury House",
  address: "77 - Central Park South, NYC",
  price: "$230,000",
  pricePerSqft: "$1,200 / sq ft",
  status: "For Sale",
  featured: true,
  beds: 7,
  baths: 4,
  sqft: 720,
  garages: 2,
  rooms: 6,
  yearBuilt: "10/6/2020",
  propertyId: "V254680",
  propertyType: "House",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum.`,
  amenities: [
    "Air Cond", "Balcony", "Internet", "Dishwasher", "Bedding",
    "Cable TV", "Parking", "Pool", "Fridge"
  ],
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560185127-6a7a8f54b23e?auto=format&fit=crop&w=1200&q=80",
  ],
  agent: {
    name: "Carls Jhons",
    company: "FindHouses Agency",
    phone: "(234) 0200 17813",
    email: "info@agent.com",
    image: "https://code-theme.com/html/findhouses/images/team/t-1.jpg",
  },
  nearby: {
    education: [
      { name: "Education Mandarin", distance: "15.61 miles" },
      { name: "Marry's Education", distance: "15.23 miles" },
      { name: "The Kaplan", distance: "15.16 miles" },
    ],
    health: [
      { name: "Natural Market", distance: "13.20 miles" },
      { name: "Food For Health", distance: "13.22 miles" },
      { name: "A Matter of Health", distance: "13.34 miles" },
    ],
    transportation: [
      { name: "Airport Transportation", distance: "11.36 miles" },
      { name: "NYC Executive Limo", distance: "11.87 miles" },
      { name: "Empire Limousine", distance: "11.52 miles" },
    ],
  },
  comments: [
    { name: "Mary Smith", date: "May 30 2020", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.", avatar: "https://i.pravatar.cc/60?img=5" },
    { name: "Abraham Tyron", date: "June 1 2020", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.", avatar: "https://i.pravatar.cc/60?img=12" },
    { name: "Lisa Williams", date: "Jul 12 2020", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.", avatar: "https://i.pravatar.cc/60?img=9" },
  ],
  recentProperties: [
    { title: "Family Home", price: "$230,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80" },
    { title: "Family Home", price: "$230,000", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80" },
    { title: "Family Home", price: "$230,000", image: "https://images.unsplash.com/photo-1560185127-6a7a8f54b23e?auto=format&fit=crop&w=200&q=80" },
  ]
};

export default function SinglePropertyPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [activeNearby, setActiveNearby] = useState("education");
  const [tourForm, setTourForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Banner */}
      <div className="bg-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-[#b28e5a] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Property Details</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 xl:pl-8">
        {/* Property Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {property.featured && (
                <span className="bg-[#b28e5a] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Featured</span>
              )}
              <span className="bg-[#ff385c] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">{property.status}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black text-gray-800 mb-1">{property.title}</h1>
            <p className="text-gray-500 flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-[#b28e5a]" /> {property.address}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-[#b28e5a]">{property.price}</div>
            <div className="text-sm text-gray-400">{property.pricePerSqft}</div>
            <div className="flex items-center gap-3 mt-2 justify-end">
              <button className="text-gray-400 hover:text-[#b28e5a] transition-colors"><FaHeart /></button>
              <button className="text-gray-400 hover:text-[#b28e5a] transition-colors"><FaShare /></button>
              <button className="text-gray-400 hover:text-[#b28e5a] transition-colors"><FaPrint /></button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap items-center gap-6 bg-gray-50 px-6 py-4 mb-8 text-sm text-gray-600">
          <div className="flex items-center gap-2"><FaBed className="text-[#ff385c]" /> <span>{property.beds} Bedrooms</span></div>
          <div className="flex items-center gap-2"><FaBath className="text-[#ff385c]" /> <span>{property.baths} Bathrooms</span></div>
          <div className="flex items-center gap-2"><FaExpand className="text-[#ff385c]" /> <span>{property.sqft} sq ft</span></div>
          <div className="flex items-center gap-2"><FaCar className="text-[#ff385c]" /> <span>{property.garages} Garages</span></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative h-[300px] sm:h-[450px] overflow-hidden rounded-sm mb-3">
                <img
                  src={property.images[activeImage]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <button
                  onClick={() => setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-[#b28e5a] transition-colors"
                ><FaChevronLeft /></button>
                <button
                  onClick={() => setActiveImage((prev) => (prev + 1) % property.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-[#b28e5a] transition-colors"
                ><FaChevronRight /></button>
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-20 h-16 overflow-hidden rounded-sm border-2 transition-all ${activeImage === i ? "border-[#b28e5a]" : "border-transparent"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap border-b border-gray-200 mb-6 gap-1">
                {["description", "details", "amenities", "floorplans", "nearby", "video", "location"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 -mb-px ${
                      activeTab === tab ? "border-[#b28e5a] text-[#b28e5a]" : "border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Description Tab */}
              {activeTab === "description" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Description</h3>
                  {property.description.split("\n\n").map((p, i) => (
                    <p key={i} className="text-gray-500 leading-relaxed mb-4 text-sm">{p}</p>
                  ))}
                </div>
              )}

              {/* Property Details Tab */}
              {activeTab === "details" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Property Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      ["Property ID", property.propertyId],
                      ["Property Type", property.propertyType],
                      ["Property Status", property.status],
                      ["Property Price", property.price],
                      ["Rooms", property.rooms],
                      ["Bedrooms", property.beds],
                      ["Bathrooms", property.baths],
                      ["Garages", property.garages],
                      ["Year Built", property.yearBuilt],
                    ].map(([label, value]) => (
                      <div key={label as string} className="flex items-center gap-3 p-3 bg-gray-50 rounded-sm">
                        <span className="text-sm font-bold text-gray-700 min-w-[120px]">{label}:</span>
                        <span className="text-sm text-gray-500">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities Tab */}
              {activeTab === "amenities" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-[#b28e5a] flex-shrink-0" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Floor Plans */}
              {activeTab === "floorplans" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Floor Plans</h3>
                  <div className="bg-gray-50 rounded-sm p-8 text-center text-gray-400">
                    <FaExpand size={40} className="mx-auto mb-3 opacity-30" />
                    <p>Floor plan coming soon</p>
                  </div>
                </div>
              )}

              {/* Nearby Tab */}
              {activeTab === "nearby" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">What&apos;s Nearby</h3>
                  <div className="flex gap-2 mb-4">
                    {["education", "health", "transportation"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveNearby(cat)}
                        className={`px-4 py-2 text-xs font-bold capitalize rounded-sm transition-all ${activeNearby === cat ? "bg-[#b28e5a] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                      >{cat}</button>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {(property.nearby[activeNearby as keyof typeof property.nearby] || []).map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, s) => (
                              s < 4 ? <FaStar key={s} className="text-[#b28e5a] text-[10px]" /> : <FaRegStar key={s} className="text-gray-300 text-[10px]" />
                            ))}
                          </div>
                          <span className="text-sm font-bold text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-xs text-gray-400">({item.distance})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Tab */}
              {activeTab === "video" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Property Video</h3>
                  <div className="bg-gray-900 rounded-sm aspect-video flex items-center justify-center">
                    <div className="text-center text-white">
                      <FaVideo size={50} className="mx-auto mb-3 opacity-50" />
                      <p className="text-gray-400 text-sm">Video tour available upon request</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Location Tab */}
              {activeTab === "location" && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Location</h3>
                  <div className="bg-gray-100 rounded-sm aspect-video flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <FaMapMarkerAlt size={40} className="mx-auto mb-3 opacity-30" />
                      <p className="text-sm">77 - Central Park South, NYC</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Comments Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100">
                {property.comments.length} Comments
              </h3>
              <div className="space-y-6">
                {property.comments.map((comment, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                      <img src={comment.avatar} alt={comment.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-sm p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-800 text-sm">{comment.name}</h4>
                        <span className="text-xs text-gray-400">{comment.date}</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leave a Comment Form */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100">Leave a Comment</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Your Name" className="border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
                <input type="email" placeholder="Your Email" className="border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
              </div>
              <textarea placeholder="Your Message" rows={5} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors mb-4 resize-none" />
              <button className="bg-[#b28e5a] hover:bg-[#a07a4a] text-white font-bold uppercase tracking-wider text-sm px-8 py-3 transition-colors">
                Submit Comment
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Schedule a Tour */}
            <div className="bg-white border border-gray-100 shadow-lg rounded-sm overflow-hidden">
              <div className="bg-[#b28e5a] px-6 py-4">
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Schedule a Tour</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <input
                    type="text" placeholder="Your Name"
                    value={tourForm.name} onChange={(e) => setTourForm({ ...tourForm, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors"
                  />
                  <input
                    type="email" placeholder="Your Email"
                    value={tourForm.email} onChange={(e) => setTourForm({ ...tourForm, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors"
                  />
                  <input
                    type="tel" placeholder="Your Phone"
                    value={tourForm.phone} onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors"
                  />
                  <input
                    type="date"
                    value={tourForm.date} onChange={(e) => setTourForm({ ...tourForm, date: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors"
                  />
                  <textarea
                    placeholder="Message" rows={4}
                    value={tourForm.message} onChange={(e) => setTourForm({ ...tourForm, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors resize-none"
                  />
                  <button className="w-full bg-[#b28e5a] hover:bg-[#a07a4a] text-white font-bold uppercase tracking-wider text-sm py-3 transition-colors">
                    Submit Request
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Agent Card */}
            <div className="bg-white border border-gray-100 shadow-lg rounded-sm overflow-hidden">
              <div className="bg-gray-800 px-6 py-4">
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Contact {property.agent.name}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img src={property.agent.image} alt={property.agent.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <Link href="/agents/1" className="font-bold text-gray-800 hover:text-[#b28e5a] transition-colors">{property.agent.name}</Link>
                    <p className="text-xs text-gray-400">{property.agent.company}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <FaPhoneAlt className="text-[#b28e5a]" size={10} />
                      {property.agent.phone}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <input
                    type="text" placeholder="Your Name"
                    value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors"
                  />
                  <input
                    type="email" placeholder="Your Email"
                    value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors"
                  />
                  <input
                    type="tel" placeholder="Phone"
                    value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors"
                  />
                  <textarea
                    placeholder="Message" rows={3}
                    value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors resize-none"
                  />
                  <button className="w-full bg-[#b28e5a] hover:bg-[#a07a4a] text-white font-bold uppercase tracking-wider text-sm py-3 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Properties */}
            <div className="bg-white border border-gray-100 shadow-lg rounded-sm overflow-hidden">
              <div className="bg-gray-800 px-6 py-4">
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Recent Properties</h3>
              </div>
              <div className="p-6 space-y-4">
                {property.recentProperties.map((prop, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-20 h-14 overflow-hidden rounded-sm flex-shrink-0">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 group-hover:text-[#b28e5a] transition-colors">{prop.title}</p>
                      <p className="text-xs text-[#b28e5a] font-bold">{prop.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Properties Sidebar */}
            <div className="bg-white border border-gray-100 shadow-lg rounded-sm overflow-hidden">
              <div className="bg-[#b28e5a] px-6 py-4">
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Feature Properties</h3>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { title: "House Luxury New York", price: "$ 230,000", status: "For Sale", beds: 2, baths: 3, sqft: 720 },
                  { title: "House Luxury Los Angles", price: "$ 6,500", status: "For Rent", beds: 2, baths: 3, sqft: 720 },
                  { title: "House Luxury San Francisco", price: "$ 230,000", status: "For Sale", beds: 2, baths: 3, sqft: 720 },
                ].map((fp, i) => (
                  <div key={i} className="border border-gray-100 rounded-sm p-3 hover:border-[#b28e5a] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-white bg-[#ff385c] px-2 py-0.5">{fp.status}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
