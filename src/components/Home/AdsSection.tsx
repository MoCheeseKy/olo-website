"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";

export function AdsSection() {
  return (
    <section className="w-full bg-[#070707] py-24 border-t border-zinc-900">
      <Wrapper
        backgroundColor="bg-transparent"
        className="flex flex-col gap-20 font-poppins"
      >
        {/* Section Header with Outlined Typography */}
        <div className="flex flex-col items-center text-center select-none">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.15)] leading-tight tracking-wider uppercase">
            Ada Begitu Banyak Cara
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-wider uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] my-2">
            SEMUA KEBUTUHANMU
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.15)] leading-tight tracking-wider uppercase">
            Untuk Memenuhi
          </h2>
        </div>

        {/* Ads Cards Grid */}
        <div className="flex flex-col gap-12">
          {/* Card 1: BEST CONDOM OF 2025 */}
          <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-r from-[#141235] via-[#1a0e2a] to-[#250d24] border border-white/5 shadow-2xl group transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-12">
              {/* Text Content */}
              <div className="flex-1 flex flex-col items-start z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white uppercase">
                  BEST CONDOM OF 2025
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed tracking-wide mt-4 max-w-xl">
                  best seller gjaeitghaigt aiogsroihjsrghj sighbest seller
                  gjaeitghaigt aiogsroihjsrghj sighbest seller gjaeitghaigt
                  aiogsroihjsrghj sighbest seller gjaeitghaigt aiogsroihjsrghj
                  sighbest seller gjaeitghaigt aiogsroihjsrghj sighbest seller
                  gjaeitghaigt aiogsroihjsrghj sighbest seller gjaeitghaigt
                  aiogsroihjsrghj sigh
                </p>
                <button className="flex items-center gap-2 border border-white/30 hover:border-white hover:bg-white bg-transparent hover:text-black text-white rounded-[4px] px-6 py-3 text-[10px] font-bold tracking-[0.2em] mt-8 transition-all duration-300 uppercase cursor-pointer">
                  <span>LIHAT SELENGKAPNYA</span>
                  <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Product Visual Container */}
              <div className="relative w-full md:w-[40%] h-64 sm:h-80 flex items-center justify-center">
                {/* Neon Cyan Glow behind the product */}
                <div className="absolute w-48 h-48 rounded-full bg-blue-500/20 blur-[60px] animate-pulse" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/ads_product_1.png"
                    alt="THE BULLET OLO Condom Box"
                    fill
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: BEST SELLER IN SHOPEE */}
          <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-r from-[#141235] via-[#1a0e2a] to-[#250d24] border border-white/5 shadow-2xl group transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-16 gap-12">
              {/* Product Visual Container */}
              <div className="relative w-full md:w-[40%] h-64 sm:h-80 flex items-center justify-center">
                {/* Neon Cyan Glow behind the product */}
                <div className="absolute w-48 h-48 rounded-full bg-cyan-500/20 blur-[60px] animate-pulse" />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/ads_product_1.png"
                    alt="THE BULLET Shopee Best Seller Box"
                    fill
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col items-start md:items-end md:text-right z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white uppercase">
                  BEST SELLER IN SHOPEE
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed tracking-wide mt-4 max-w-xl md:ml-auto">
                  best seller gjaeitghaigt aiogsroihjsrghj sighbest seller
                  gjaeitghaigt aiogsroihjsrghj sighbest seller gjaeitghaigt
                  aiogsroihjsrghj sighbest seller gjaeitghaigt aiogsroihjsrghj
                  sighbest seller gjaeitghaigt aiogsroihjsrghj sighbest seller
                  gjaeitghaigt aiogsroihjsrghj sighbest seller gjaeitghaigt
                  aiogsroihjsrghj sigh
                </p>
                <button className="flex items-center gap-2 border border-white/30 hover:border-white hover:bg-white bg-transparent hover:text-black text-white rounded-[4px] px-6 py-3 text-[10px] font-bold tracking-[0.2em] mt-8 transition-all duration-300 uppercase cursor-pointer">
                  <span>LIHAT SELENGKAPNYA</span>
                  <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
