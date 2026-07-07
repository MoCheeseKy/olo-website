"use client";

import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";
import { Carousel } from "@/components/_shared/Carousel";

interface HeroBanner {
  id: number;
  image: string;
  title: string;
  description: string;
  order: number;
}

interface HeroSectionProps {
  banners?: HeroBanner[];
}

export function HeroSection({ banners = [] }: HeroSectionProps) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80, // Scroll past the header
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] bg-black">
      <Carousel autoplay={true} autoplayInterval={7000} className="h-full">
        {banners.length > 0 ? (
          banners.map((banner) => (
            <div key={banner.id} className="relative w-full h-full">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority
                  className="object-cover object-center brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
              </div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
                <div className="pointer-events-auto max-w-2xl flex flex-col items-center gap-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md select-none">
                    {banner.title}
                  </h1>
                  <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-zinc-300 uppercase leading-relaxed">
                    {banner.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Fallback Slide if no banners in DB */
          <div className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full -z-10">
              <Image
                src="/images/hero_slide_1.png"
                alt="OLO Default"
                fill
                priority
                className="object-cover object-center brightness-[0.35]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
              <div className="pointer-events-auto max-w-2xl flex flex-col items-center gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md select-none">
                  LOREM IPSUM DOLOR
                </h1>
                <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-zinc-300 uppercase leading-relaxed">
                  PROTECTION THAT FEELS AS NATURAL AS YOU.
                </p>
              </div>
            </div>
          </div>
        )}
      </Carousel>

      {/* Down Chevron Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-all duration-300 cursor-pointer animate-bounce hover:scale-110 p-2"
        aria-label="Scroll down to next section"
      >
        <FiChevronDown className="text-2xl" />
      </button>
    </section>
  );
}
