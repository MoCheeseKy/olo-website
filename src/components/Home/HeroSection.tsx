"use client";

import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";
import { Carousel } from "@/components/_shared/Carousel";
import { Button } from "@/components/_shared/Button";

export function HeroSection() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80, // Scroll past the header
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] bg-black">
      <Carousel autoplay={true} autoplayInterval={7000} className="h-full">
        {/* Slide 1: Hyaluronic Acid */}
        <div className="relative w-full h-full">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <Image
              src="/images/hero_slide_1.png"
              alt="OLO Hyaluronic Acid Zero One"
              fill
              priority
              className="object-cover object-center brightness-[0.35]"
            />
            {/* Ambient Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          </div>

          <Wrapper
            backgroundColor="bg-transparent"
            className="h-full flex items-center relative py-12 md:py-24"
          >
            {/* Left Info: Droplet & Details */}
            <div className="flex flex-col items-start gap-4 select-none max-w-xs md:max-w-md z-20">
              {/* Hyaluronic Acid Droplet */}
              <div className="relative flex items-center justify-center w-20 h-24 mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <svg
                  className="absolute w-full h-full text-blue-400/30 fill-current animate-pulse"
                  viewBox="0 0 100 120"
                >
                  <path d="M50 0 C50 0 100 65 100 90 A 50 50 0 0 1 0 90 C 0 65 50 0 50 0 Z" />
                </svg>
                <svg
                  className="w-[85%] h-[85%] text-blue-500/80 fill-current"
                  viewBox="0 0 100 120"
                >
                  <path d="M50 0 C50 0 100 65 100 90 A 50 50 0 0 1 0 90 C 0 65 50 0 50 0 Z" />
                </svg>
                {/* Vertical Text inside Droplet */}
                <div className="absolute flex flex-col items-center justify-center text-[10px] font-black text-blue-900 tracking-widest leading-none select-none uppercase">
                  <span>玻</span>
                  <span className="my-0.5">尿</span>
                  <span>酸</span>
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-bold tracking-widest text-zinc-100 uppercase">
                  HYALURONIC ACID
                </h3>
                <h4 className="text-xs md:text-sm font-semibold tracking-wider text-zinc-400 uppercase">
                  ASID HYALURONIC
                </h4>
              </div>

              <div className="space-y-1 border-l-2 border-blue-500/40 pl-4 mt-2">
                <p className="text-xs text-zinc-400 font-medium">
                  Ultra-moisturizing, smooth, and hydrating
                </p>
                <p className="text-xs text-zinc-500 font-medium italic">
                  Ultra-melembapkan, licin, dan menghidrat
                </p>
              </div>
            </div>

            {/* Bottom Left: Condom Contour Outline */}
            <div className="absolute bottom-16 left-4 md:left-[36px] hidden md:flex items-center gap-4 select-none opacity-40 hover:opacity-80 transition-opacity duration-300 z-20">
              <div className="relative w-32 h-10 border border-dashed border-white/20 rounded-full flex items-center justify-center px-3">
                <div className="absolute -left-1.5 w-3 h-6 border-l border-t border-b border-white/30 rounded-l-full bg-black/40" />
                <span className="text-[10px] font-bold tracking-widest text-white/60">
                  &gt; 160 mm
                </span>
                <div className="absolute -right-1.5 w-3 h-6 border-r border-t border-b border-white/30 rounded-r-full bg-black/40" />
              </div>
            </div>
          </Wrapper>

          {/* Center Content: Big Headers & CTA Buttons (Direct child of Slide, Centered Exactly on Banner) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
            <div className="pointer-events-auto max-w-2xl flex flex-col items-center gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md select-none">
                LOREM IPSUM DOLOR
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-zinc-300 uppercase leading-relaxed">
                PROTECTION THAT FEELS AS NATURAL AS YOU.
              </p>
              <div className="flex gap-4 mt-4">
                <Button variant="fill">ORDER NOW</Button>
                <Button variant="outline">EXPLORE</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Ultra Thin */}
        <div className="relative w-full h-full">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <Image
              src="/images/hero_slide_2.png"
              alt="OLO Ultra Thin"
              fill
              className="object-cover object-center brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          </div>

          <Wrapper
            backgroundColor="bg-transparent"
            className="h-full flex items-center relative py-12 md:py-24"
          >
            {/* Left Info */}
            <div className="flex flex-col items-start gap-4 select-none max-w-xs md:max-w-md z-20">
              {/* Ultra Thin Icon */}
              <div className="relative flex items-center justify-center w-20 h-24 mb-2 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                <svg
                  className="absolute w-full h-full text-purple-400/20 fill-current animate-pulse"
                  viewBox="0 0 100 120"
                >
                  <path d="M50 20 C20 40 20 80 50 100 C80 80 80 40 50 20 Z" />
                </svg>
                <svg
                  className="w-[85%] h-[85%] text-purple-500/70 fill-current"
                  viewBox="0 0 100 120"
                >
                  <path d="M50 20 C20 40 20 80 50 100 C80 80 80 40 50 20 Z" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-[9px] font-black text-purple-900 tracking-wider select-none uppercase">
                  <span>0.01</span>
                  <span>MM</span>
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-bold tracking-widest text-zinc-100 uppercase">
                  ULTRA-THIN
                </h3>
                <h4 className="text-xs md:text-sm font-semibold tracking-wider text-zinc-400 uppercase">
                  SANGAT TIPIS
                </h4>
              </div>

              <div className="space-y-1 border-l-2 border-purple-500/40 pl-4 mt-2">
                <p className="text-xs text-zinc-400 font-medium">
                  Sensational closeness, ultimate thinness
                </p>
                <p className="text-xs text-zinc-500 font-medium italic">
                  Keintiman sensasi, sangat tipis dan lembut
                </p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-16 left-4 md:left-[36px] hidden md:flex items-center gap-4 select-none opacity-40 hover:opacity-80 transition-opacity duration-300 z-20">
              <div className="relative w-32 h-10 border border-dashed border-white/20 rounded-full flex items-center justify-center px-3">
                <div className="absolute -left-1.5 w-3 h-6 border-l border-t border-b border-white/30 rounded-l-full bg-black/40" />
                <span className="text-[10px] font-bold tracking-widest text-white/60">
                  0.01 mm
                </span>
                <div className="absolute -right-1.5 w-3 h-6 border-r border-t border-b border-white/30 rounded-r-full bg-black/40" />
              </div>
            </div>
          </Wrapper>

          {/* Center Content: Big Headers & CTA Buttons (Direct child of Slide, Centered Exactly on Banner) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
            <div className="pointer-events-auto max-w-2xl flex flex-col items-center gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md select-none">
                FEEL EVERY SENSATION
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-zinc-300 uppercase leading-relaxed">
                EXPERIENCE THE THINNEST SILK TOUCH.
              </p>
              <div className="flex gap-4 mt-4">
                <Button variant="fill">ORDER NOW</Button>
                <Button variant="outline">EXPLORE</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Warming Sensation */}
        <div className="relative w-full h-full">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <Image
              src="/images/hero_slide_3.png"
              alt="OLO Warming Sensation"
              fill
              className="object-cover object-center brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          </div>

          <Wrapper
            backgroundColor="bg-transparent"
            className="h-full flex items-center relative py-12 md:py-24"
          >
            {/* Left Info */}
            <div className="flex flex-col items-start gap-4 select-none max-w-xs md:max-w-md z-20">
              {/* Flame/Warm Icon */}
              <div className="relative flex items-center justify-center w-20 h-24 mb-2 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <svg
                  className="absolute w-full h-full text-red-400/20 fill-current animate-pulse"
                  viewBox="0 0 100 120"
                >
                  <path d="M50 10 C65 35 75 55 75 75 A 25 25 0 0 1 25 75 C 25 55 35 35 50 10 Z" />
                </svg>
                <svg
                  className="w-[85%] h-[85%] text-red-500/70 fill-current"
                  viewBox="0 0 100 120"
                >
                  <path d="M50 10 C65 35 75 55 75 75 A 25 25 0 0 1 25 75 C 25 55 35 35 50 10 Z" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-[10px] font-black text-red-950 tracking-wider select-none uppercase">
                  <span>HOT</span>
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-bold tracking-widest text-zinc-100 uppercase">
                  WARMING SENSATION
                </h3>
                <h4 className="text-xs md:text-sm font-semibold tracking-wider text-zinc-400 uppercase">
                  SENSASI HANGAT
                </h4>
              </div>

              <div className="space-y-1 border-l-2 border-red-500/40 pl-4 mt-2">
                <p className="text-xs text-zinc-400 font-medium">
                  Intense warmth, enhanced pleasure
                </p>
                <p className="text-xs text-zinc-500 font-medium italic">
                  Kehangatan intens, meningkatkan gairah
                </p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-16 left-4 md:left-[36px] hidden md:flex items-center gap-4 select-none opacity-40 hover:opacity-80 transition-opacity duration-300 z-20">
              <div className="relative w-32 h-10 border border-dashed border-white/20 rounded-full flex items-center justify-center px-3">
                <div className="absolute -left-1.5 w-3 h-6 border-l border-t border-b border-white/30 rounded-l-full bg-black/40" />
                <span className="text-[10px] font-bold tracking-widest text-white/60">
                  52 mm
                </span>
                <div className="absolute -right-1.5 w-3 h-6 border-r border-t border-b border-white/30 rounded-r-full bg-black/40" />
              </div>
            </div>
          </Wrapper>

          {/* Center Content: Big Headers & CTA Buttons (Direct child of Slide, Centered Exactly on Banner) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
            <div className="pointer-events-auto max-w-2xl flex flex-col items-center gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md select-none">
                IGNITE THE PASSION
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-zinc-300 uppercase leading-relaxed">
                WARMING STIMULATION FOR DEEPER CONNECTION.
              </p>
              <div className="flex gap-4 mt-4">
                <Button variant="fill">ORDER NOW</Button>
                <Button variant="outline">EXPLORE</Button>
              </div>
            </div>
          </div>
        </div>
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
