"use client";

import Image from "next/image";
import Wrapper from "@/components/_shared/Wrapper";
import { PromoCard } from "@/generated/prisma/client";

interface AdsSectionProps {
  cards?: PromoCard[];
}

export function AdsSection({ cards }: AdsSectionProps) {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="w-full bg-[#070707] py-24 border-t border-zinc-900">
      <Wrapper
        backgroundColor="bg-transparent"
        className="flex flex-col gap-20 font-poppins"
      >
        {/* Ads Cards Grid */}
        <div className="flex flex-col gap-12">
          {cards.map((card, idx) => {
            // Kita bisa membuat orientasi selang-seling jika mau, atau tetap sama.
            // Sesuai desain awal: gambar di kiri, memudar ke hitam, teks di kanan.
            const isReverse = idx % 2 !== 0;

            return (
              <div 
                key={card.id} 
                className="relative w-full rounded-[32px] overflow-hidden bg-[#0f0f11] border border-white/5 shadow-2xl group transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] min-h-[350px] md:min-h-[400px] flex items-stretch"
              >
                {/* Background Image Container with Fade Effect inside the card */}
                {/* Gambar menutupi sebagian sisi kartu (kiri/kanan tergantung isReverse) dan memudar */}
                <div className={`absolute inset-0 w-full h-full md:w-2/3 ${isReverse ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'}`}>
                  <div className="relative w-full h-full">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      fill 
                      className={`object-cover ${isReverse ? 'object-right' : 'object-left'}`}
                    />
                    {/* Gradient overlay to blend into the card's background */}
                    <div className={`absolute inset-0 bg-black/50 md:bg-transparent`} />
                    <div className={`hidden md:block absolute inset-0 ${isReverse ? 'bg-gradient-to-l from-transparent via-[#0f0f11]/80 to-[#0f0f11]' : 'bg-gradient-to-r from-transparent via-[#0f0f11]/80 to-[#0f0f11]'}`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`relative z-10 flex w-full p-8 md:p-16 items-center ${isReverse ? 'justify-start md:text-left' : 'justify-end md:text-right'}`}>
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-white uppercase drop-shadow-2xl">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed tracking-wide">
                      {card.description}
                    </p>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
