"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { BlogCardProps } from "@/interfaces/components/BlogCard";

export function BlogCard({
  image,
  category,
  title,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  link = "#",
  showDescription = true,
  className = "",
}: BlogCardProps) {
  return (
    <Link
      href={link}
      className={`flex flex-col bg-[#111322]/40 border border-white/5 rounded-3xl overflow-hidden group hover:border-white/10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer ${className}`}
    >
      {/* Top half - Image & Category Badge */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.9]"
        />
        {/* Category Pill */}
        <span className="absolute top-4 left-4 z-10 bg-[#004AC6] text-white text-[9px] font-extrabold tracking-wider px-3 py-1.5 rounded-[4px] uppercase font-poppins">
          {category}
        </span>
      </div>

      {/* Bottom half - Content Text Details */}
      <div className="p-6 flex flex-col justify-between flex-1 gap-3 bg-[#0a0a0c]/40 border-t border-white/5">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-wide leading-snug group-hover:text-blue-400 transition-colors duration-300 uppercase font-poppins line-clamp-2">
            {title}
          </h3>
          {showDescription && (
            <p className="text-xs text-zinc-400 font-light leading-relaxed font-poppins line-clamp-3">
              {description}
            </p>
          )}
        </div>

        {/* Read More Link */}
        <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] text-zinc-400 group-hover:text-white uppercase transition-colors duration-300 font-poppins mt-2">
          <span>Baca Selengkapnya</span>
          <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
