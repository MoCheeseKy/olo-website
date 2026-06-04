"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";
import { BlogCard } from "@/components/_shared/BlogCard";

// Mock Blog Data (9 Posts)
const BLOG_POSTS = [
  {
    id: 1,
    image: "/images/blog_couple.png",
    category: "Tips Hubungan",
    title: "Consent dalam Hubungan: Hal Kecil yang Penting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 2,
    image: "/images/blog_couple.png",
    category: "Produk",
    title: "Apa Bedanya Kondom Tipis, Bertekstur, dan Extra Safe?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 3,
    image: "/images/blog_couple.png",
    category: "Kesehatan",
    title: "Pentingnya Seks Aman untuk Menjaga Kesehatan Reproduksi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 4,
    image: "/images/blog_couple.png",
    category: "Tips Hubungan",
    title: "Consent dalam Hubungan: Hal Kecil yang Penting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 5,
    image: "/images/blog_couple.png",
    category: "Produk",
    title: "Apa Bedanya Kondom Tipis, Bertekstur, dan Extra Safe?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 6,
    image: "/images/blog_couple.png",
    category: "Kesehatan",
    title: "Pentingnya Seks Aman untuk Menjaga Kesehatan Reproduksi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 7,
    image: "/images/blog_couple.png",
    category: "Tips Hubungan",
    title: "Consent dalam Hubungan: Hal Kecil yang Penting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 8,
    image: "/images/blog_couple.png",
    category: "Produk",
    title: "Apa Bedanya Kondom Tipis, Bertekstur, dan Extra Safe?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
  {
    id: 9,
    image: "/images/blog_couple.png",
    category: "Kesehatan",
    title: "Pentingnya Seks Aman untuk Menjaga Kesehatan Reproduksi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
  },
];

const CATEGORIES = ["Semua", "Kesehatan", "Tips Hubungan", "Produk"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "Semua") return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full bg-[#070707] text-white min-h-screen pb-24 font-poppins relative">
      {/* Featured Blog Hero Banner */}
      <section className="relative w-full h-[550px] md:h-[650px] flex items-center overflow-hidden border-b border-zinc-900">
        {/* Background Cover Image */}
        <div className="absolute inset-0 w-full h-full -z-20">
          <Image
            src="/images/blog_couple.png"
            alt="Featured Sex Education Blog"
            fill
            priority
            className="object-cover object-center brightness-[0.4]"
          />
        </div>

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/40 to-black/10 -z-10" />

        <Wrapper backgroundColor="bg-transparent" className="flex flex-col items-start text-left pt-20">
          {/* Pill Badge */}
          <span className="border border-white/30 text-white rounded-full px-5 py-1.5 text-[9px] uppercase font-bold tracking-[0.2em] mb-6">
            Featured
          </span>

          {/* Title with Underlined text segment */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-tight tracking-wide max-w-4xl">
            Edukasi Seks: Mengapa <br className="hidden md:inline" />
            Tabu <span className="underline decoration-2 underline-offset-8">Harus Dipecah</span>?
          </h1>

          {/* Short teaser */}
          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-lg mt-6 leading-relaxed tracking-wide">
            Menghilangkan stigma seputar kesehatan seksual adalah langkah pertama menuju hubungan yang lebih sehat.
            Dirancang untuk mengedukasi dengan integritas dan pemahaman bersama.
          </p>

          {/* Call to Action */}
          <Link
            href="/blog/featured-post"
            className="bg-[#004AC6] hover:bg-[#003cb0] text-white text-xs font-bold tracking-widest px-8 py-4 rounded-[4px] mt-8 uppercase shadow-lg shadow-blue-900/30 transition-all duration-300"
          >
            Baca Selengkapnya
          </Link>
        </Wrapper>
      </section>

      {/* Grid Content Section */}
      <section className="w-full py-16">
        <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-12">
          {/* Category Filters row */}
          <div className="flex flex-wrap gap-2.5 pb-6 border-b border-zinc-950">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#004AC6] text-white shadow-md shadow-blue-600/20"
                      : "border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Dynamic Grid Layout */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, idx) => (
                <BlogCard
                  key={`${blog.id}-${idx}`}
                  image={blog.image}
                  category={blog.category}
                  title={blog.title}
                  description={blog.description}
                  showDescription={true}
                  link={`/blog/${blog.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-zinc-500 text-sm">Tidak ada artikel di kategori ini.</p>
            </div>
          )}

          {/* Centered Pagination Trigger */}
          <div className="flex justify-center mt-6">
            <button className="border border-white/20 hover:border-white bg-transparent text-white hover:bg-white hover:text-black py-3.5 px-12 text-xs font-bold tracking-[0.2em] uppercase rounded-[4px] flex items-center gap-2 transition-all duration-300 cursor-pointer">
              <span>SELENGKAPNYA</span>
              <FiArrowUpRight className="text-sm" />
            </button>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
