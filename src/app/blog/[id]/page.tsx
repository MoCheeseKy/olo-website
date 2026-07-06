import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiUser, FiCalendar, FiBookOpen, FiArrowRight } from "react-icons/fi";
import { getBlogById } from "@/app/actions/blog.action";
import Wrapper from "@/components/_shared/Wrapper";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailBlogPage({ params }: PageProps) {
  const { id } = await params;
  const blog = await getBlogById(parseInt(id || "0"));

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center font-poppins">
        <h1 className="text-xl font-bold mb-4">Artikel tidak ditemukan</h1>
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-[#004AC6] border border-[#004AC6] hover:bg-[#004AC6] hover:text-white px-6 py-3 rounded-md transition-all duration-300"
        >
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#070707] text-white min-h-screen pt-28 pb-24 font-poppins relative overflow-hidden">
      {/* Background radial flows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#3a0832]/5 blur-[120px] pointer-events-none -z-10" />

      <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-6">
        {/* Navigation & Back button */}
        <div className="flex flex-col gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors duration-200 uppercase self-start"
          >
            <FiArrowLeft className="text-sm" />
            <span>Kembali ke Blog</span>
          </Link>

          <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
            <span>HOME</span>
            <span className="mx-2">/</span>
            <span>BLOG</span>
            <span className="mx-2">/</span>
            <span className="text-[#0043ff]">{blog.category}</span>
            <span className="mx-2">/</span>
            <span className="text-zinc-300 line-clamp-1 inline-block max-w-[200px] md:max-w-none">{blog.title}</span>
          </div>
        </div>

        {/* Article Header block */}
        <div className="flex flex-col gap-4 mt-2">
          {/* Category Badge */}
          <span className="bg-[#004AC6]/10 border border-[#004AC6]/30 text-blue-400 text-[10px] font-extrabold tracking-widest px-3.5 py-1.5 rounded-[4px] uppercase self-start">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase leading-tight text-white max-w-4xl">
            {blog.title}
          </h1>

          {/* Metadata details row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-zinc-500 border-b border-white/5 pb-6 mt-1">
            <div className="flex items-center gap-1.5">
              <FiUser className="text-zinc-600 text-sm" />
              <span>Oleh <strong className="text-zinc-400">{blog.author}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiCalendar className="text-zinc-600 text-sm" />
              <span>
                {new Date(blog.publishedDate).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiBookOpen className="text-zinc-600 text-sm" />
              <span>3 Menit Bacaan</span>
            </div>
          </div>
        </div>

        {/* Wide Cover Image Banner */}
        <div className="relative w-full aspect-[21/9] rounded-[28px] overflow-hidden border border-white/5 shadow-2xl mt-4">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover object-center brightness-[0.8]"
          />
        </div>

        {/* Article Body Content */}
        <article className="max-w-3xl mx-auto flex flex-col gap-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed mt-10 prose prose-invert prose-blue max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />

          {/* Dynamic Link CTA to Catalog */}
          <div className="border-t border-white/5 pt-8 mt-6 flex flex-col gap-4 items-center text-center sm:text-left sm:items-start select-none">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Ingin mengeksplorasi sensasi produk kami?
            </span>
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 bg-[#004AC6] hover:bg-[#003cb0] text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-lg shadow-lg shadow-blue-900/10 transition-colors duration-300 cursor-pointer"
            >
              <span>Jelajahi Produk OLO</span>
              <FiArrowRight className="text-sm" />
            </Link>
          </div>
        </article>
      </Wrapper>
    </div>
  );
}
