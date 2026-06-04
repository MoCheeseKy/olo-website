"use client";

import Image from "next/image";
import Wrapper from "@/components/_shared/Wrapper";

const FEATURED_ITEMS = [
  {
    id: 1,
    image: "/images/ads_product_1.png",
    title: "VIVO THE BULLET",
    description:
      "ALAT GETAR YANG BERBENTUK PELURU PANJANG MENINGKATKAN SENSITIFITAS. GETARAN LEMBUTNYA UNTUK MENINGKATKAN STIMULASI",
  },
  {
    id: 2,
    image: "/images/ads_product_1.png",
    title: "VIVO THE BULLET",
    description:
      "ALAT GETAR YANG BERBENTUK PELURU PANJANG MENINGKATKAN SENSITIFITAS. GETARAN LEMBUTNYA UNTUK MENINGKATKAN STIMULASI",
  },
  {
    id: 3,
    image: "/images/ads_product_1.png",
    title: "VIVO THE BULLET",
    description:
      "ALAT GETAR YANG BERBENTUK PELURU PANJANG MENINGKATKAN SENSITIFITAS. GETARAN LEMBUTNYA UNTUK MENINGKATKAN STIMULASI",
  },
];

export function FeaturedProducts() {
  return (
    <section className="w-full bg-[#070707] py-20 border-t border-zinc-900">
      <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between border-b border-zinc-900 pb-6">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0043ff] uppercase">
              KOLEKSI
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase mt-1">
              FEATURED PRODUCTS
            </h2>
          </div>
          <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-200 uppercase cursor-pointer select-none pb-1">
            KLIK UNTUK DETAIL
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container with Glow Hover Effect */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
                {/* Radial Glow */}
                <div className="absolute w-36 h-36 rounded-full bg-blue-500/0 group-hover:bg-blue-500/10 blur-[40px] transition-all duration-500" />
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              {/* Info Details */}
              <div className="flex flex-col items-center gap-3 max-w-xs">
                <h3 className="text-base md:text-lg font-bold tracking-widest text-white uppercase transition-colors duration-300 group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-[10px] leading-relaxed tracking-wider text-zinc-400 font-medium uppercase min-h-[50px]">
                  {item.description}
                </p>
                <button className="border border-white/20 hover:border-white bg-transparent text-white hover:bg-white hover:text-black py-2.5 px-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-[2px] mt-2 transition-all duration-300 cursor-pointer">
                  SELENKAPNYA
                </button>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
