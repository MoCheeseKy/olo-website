"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";

const CATEGORIES = [
  {
    id: 1,
    image: "/images/category_1.png",
    title: "BERTEKSTUR",
    link: "/category/textured",
  },
  {
    id: 2,
    image: "/images/category_1.png",
    title: "BERTEKSTUR",
    link: "/category/textured",
  },
  {
    id: 3,
    image: "/images/category_1.png",
    title: "BERTEKSTUR",
    link: "/category/textured",
  },
  {
    id: 4,
    image: "/images/category_1.png",
    title: "BERTEKSTUR",
    link: "/category/textured",
  },
];

export function ProductCategory() {
  return (
    <section className="w-full bg-[#070707] py-20 border-t border-zinc-900">
      <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between border-b border-zinc-900 pb-6">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0043ff] uppercase">
              BAHAN NYA APA
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase mt-1">
              PICK YOUR TASTE
            </h2>
          </div>
          <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-200 uppercase cursor-pointer select-none pb-1">
            KLIK UNTUK DETAIL
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="relative w-full h-[280px] sm:h-[320px] rounded-[28px] overflow-hidden border border-white/5 shadow-xl group cursor-pointer"
            >
              {/* Background Image with Zoom effect */}
              <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover object-center brightness-[0.4] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Content & Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 flex flex-col items-center justify-center p-6 gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-widest uppercase transition-transform duration-500 group-hover:-translate-y-1">
                  {cat.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-white/80 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-105 uppercase">
                  <span>SELENGKAPNYA</span>
                  <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Center Read More Button */}
        <div className="flex justify-center mt-6">
          <button className="border border-white/20 hover:border-white bg-transparent text-white hover:bg-white hover:text-black py-3 px-10 text-xs font-bold tracking-[0.2em] uppercase rounded-[4px] transition-all duration-300 cursor-pointer">
            BACA LAINNYA
          </button>
        </div>
      </Wrapper>
    </section>
  );
}
