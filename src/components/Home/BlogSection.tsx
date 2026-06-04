"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";
import { BlogCard } from "@/components/_shared/BlogCard";

const BLOGS = [
  {
    id: 1,
    image: "/images/blog_couple.png",
    category: "Tips Hubungan",
    title: "Consent dalam Hubungan: Hal Kecil yang Penting",
  },
  {
    id: 2,
    image: "/images/blog_couple.png",
    category: "Produk",
    title: "Apa Bedanya Kondom Tipis, Bertekstur, dan Extra Safe?",
  },
  {
    id: 3,
    image: "/images/blog_couple.png",
    category: "Kesehatan",
    title: "Pentingnya Seks Aman Menjaga Kesehatan Rep...",
  },
];

export function BlogSection() {
  return (
    <section className="w-full bg-[#070707] py-20 border-t border-zinc-900">
      <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between border-b border-zinc-900 pb-6">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0043ff] uppercase">
              BLOG
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase mt-1">
              COPYWRITING PERSUASIF FOR BLOG
            </h2>
          </div>
          <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-200 uppercase cursor-pointer select-none pb-1">
            KLIK UNTUK BACA
          </span>
        </div>

        {/* Carousel/Track Container */}
        <div className="relative w-full flex items-center group/track">
          {/* Left Arrow Button */}
          <button className="absolute -left-4 md:-left-8 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/80 text-white/50 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-xs opacity-0 group-hover/track:opacity-100 cursor-pointer hidden sm:block">
            <FiChevronLeft className="text-xl" />
          </button>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {BLOGS.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                showDescription={false}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button className="absolute -right-4 md:-right-8 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/80 text-white/50 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-xs opacity-0 group-hover/track:opacity-100 cursor-pointer hidden sm:block">
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Bottom Read More Button */}
        <div className="flex justify-center mt-4">
          <button className="border border-white/20 hover:border-white bg-transparent text-white hover:bg-white hover:text-black py-3 px-10 text-xs font-bold tracking-[0.2em] uppercase rounded-[4px] transition-all duration-300 cursor-pointer">
            BACA LAINNYA
          </button>
        </div>
      </Wrapper>
    </section>
  );
}
