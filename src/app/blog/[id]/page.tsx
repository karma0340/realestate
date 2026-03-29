"use client";

import { FaHeart, FaComment, FaShareAlt, FaSearch, FaTag, FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const blogPost = {
  title: "Real Estate News",
  date: "Jun 23, 2020",
  author: "By Admin",
  category: "Real Estate",
  views: 306,
  comments: 34,
  shares: 122,
  image: "https://images.unsplash.com/photo-1560185127-6a7a8f54b23e?auto=format&fit=crop&w=1200&q=80",
  content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea? Vitae pariatur ab amet iusto tempore neque a, deserunt eaque recusandae obcaecati eos atque delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi labore vel enim repellendus excepturi autem. Eligendi cum laboriosam exercitationem illum repudiandae quasi sint dicta consectetur porro fuga ea, perspiciatis aut!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea? Vitae pariatur ab amet iusto tempore neque a, deserunt eaque recusandae obcaecati eos atque delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi labore vel enim repellendus excepturi autem. Eligendi cum laboriosam exercitationem illum repudiandae quasi sint dicta consectetur porro fuga ea, perspiciatis aut!`,
};

const comments = [
  { name: "Mario Smith", date: "Jun 23, 2020", avatar: "https://i.pravatar.cc/60?img=12", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed." },
  { name: "Mary Tyron", date: "Jun 23, 2020", avatar: "https://i.pravatar.cc/60?img=5", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed." },
  { name: "Leo Williams", date: "Jun 23, 2020", avatar: "https://i.pravatar.cc/60?img=9", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed." },
];

const categories = ["House", "Garages", "Real Estate", "Real Home", "Bath", "Beds"];
const popularTags = ["Houses", "Real Home", "Baths", "Beds", "Garages", "Family", "Real Estates", "Properties", "Location", "Price"];
const recentPosts = [
  { title: "Real Estate", date: "May 10, 2020", image: "https://code-theme.com/html/findhouses/images/blog/b-1.jpg" },
  { title: "Real Estate", date: "May 10, 2020", image: "https://code-theme.com/html/findhouses/images/blog/b-2.jpg" },
  { title: "Real Estate", date: "May 10, 2020", image: "https://code-theme.com/html/findhouses/images/blog/b-3.jpg" },
];

export default function BlogDetailsPage() {
  const [commentForm, setCommentForm] = useState({ name: "", email: "", comment: "" });
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-[#b28e5a] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog Details</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 xl:pl-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <div className="mb-6 overflow-hidden rounded-sm">
              <img src={blogPost.image} alt={blogPost.title} className="w-full h-[280px] sm:h-[380px] object-cover" />
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-3 text-xs text-gray-400 uppercase tracking-wider">
              <span className="flex items-center gap-1"><FaCalendar className="text-[#b28e5a]" /> {blogPost.date}</span>
              <span className="flex items-center gap-1"><FaUser className="text-[#b28e5a]" /> {blogPost.author}</span>
              <span className="flex items-center gap-1"><FaTag className="text-[#b28e5a]" /> {blogPost.category}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black text-gray-800 mb-3">{blogPost.title}</h1>
            <div className="flex items-center gap-5 text-sm text-gray-400 mb-6 pb-4 border-b border-gray-100">
              <span className="flex items-center gap-1"><FaHeart className="text-[#b28e5a]" /> {blogPost.views}</span>
              <span className="flex items-center gap-1"><FaComment className="text-[#b28e5a]" /> {blogPost.comments}</span>
              <span className="flex items-center gap-1"><FaShareAlt className="text-[#b28e5a]" /> {blogPost.shares}</span>
            </div>
            {blogPost.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-500 leading-relaxed text-[15px] mb-5">{para}</p>
            ))}
            <div className="flex flex-wrap gap-2 mb-10 py-4 border-t border-b border-gray-100">
              <span className="text-sm font-bold text-gray-700 mr-2">Tags:</span>
              {["Real Estate", "Houses", "Property"].map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 hover:bg-[#b28e5a] hover:text-white text-gray-600 px-3 py-1 cursor-pointer transition-colors rounded-sm">{tag}</span>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-black text-gray-800 mb-6 pb-3 border-b border-gray-100">{comments.length} Comments</h2>
              <div className="space-y-6">
                {comments.map((c, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-gray-800 text-sm">{c.name}</h4>
                        <span className="text-xs text-gray-400">{c.date}</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed mb-2">{c.comment}</p>
                      <button className="text-xs text-[#b28e5a] font-bold uppercase tracking-wider hover:underline">Reply</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-800 mb-6 pb-3 border-b border-gray-100">Leave a Comment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Your Name" value={commentForm.name} onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })} className="border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
                <input type="email" placeholder="Your Email" value={commentForm.email} onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })} className="border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
              </div>
              <textarea placeholder="Your Message" rows={5} value={commentForm.comment} onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors mb-4 resize-none" />
              <button className="bg-[#b28e5a] hover:bg-[#a07a4a] text-white font-bold uppercase tracking-wider text-sm px-8 py-3 transition-colors">Submit Comment</button>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-gray-800 px-5 py-4"><h3 className="text-white font-bold uppercase tracking-wider text-sm">Search</h3></div>
              <div className="p-5">
                <div className="relative">
                  <input type="text" placeholder="Search..." className="w-full border border-gray-200 rounded-sm pl-4 pr-12 py-3 text-sm outline-none focus:border-[#b28e5a] transition-colors" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b28e5a]"><FaSearch /></button>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-gray-800 px-5 py-4"><h3 className="text-white font-bold uppercase tracking-wider text-sm">Category</h3></div>
              <div className="p-5">
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#b28e5a] transition-colors group py-1 border-b border-gray-50">
                        <FaArrowRight className="text-[#b28e5a] text-[10px]" /> {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-gray-800 px-5 py-4"><h3 className="text-white font-bold uppercase tracking-wider text-sm">Popular Tags</h3></div>
              <div className="p-5 flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <a key={tag} href="#" className="text-xs bg-gray-100 hover:bg-[#b28e5a] hover:text-white text-gray-600 px-3 py-1.5 transition-colors rounded-sm">{tag}</a>
                ))}
              </div>
            </div>

            <div className="border border-gray-100 shadow-md rounded-sm overflow-hidden">
              <div className="bg-gray-800 px-5 py-4"><h3 className="text-white font-bold uppercase tracking-wider text-sm">Recent Posts</h3></div>
              <div className="p-5 space-y-4">
                {recentPosts.map((post, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-16 h-12 overflow-hidden rounded-sm flex-shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-700 group-hover:text-[#b28e5a] transition-colors">{post.title}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5"><FaCalendar size={10} /> {post.date}</p>
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
