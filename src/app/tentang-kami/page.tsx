"use client";

import Image from "next/image";
import { FiCpu, FiAward, FiLock } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";

export default function TentangKamiPage() {
  const values = [
    {
      icon: <FiCpu className="text-2xl text-blue-500" />,
      title: "Inovasi Teknologi",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
    {
      icon: <FiAward className="text-2xl text-blue-500" />,
      title: "Kualitas Premium",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
    {
      icon: <FiLock className="text-2xl text-blue-500" />,
      title: "Teruji Aman",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
  ];

  const historyItems = [
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    },
  ];

  return (
    <div className="w-full bg-[#070707] text-white min-h-screen pb-24 font-poppins relative">
      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        {/* Background Cover Image */}
        <div className="absolute inset-0 w-full h-full -z-20">
          <Image
            src="/images/about_hero.png"
            alt="About Us Foil Foil Scatter Background"
            fill
            priority
            className="object-cover object-center brightness-[0.4]"
          />
        </div>

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/35 to-black/10 -z-10" />

        <Wrapper backgroundColor="bg-transparent" className="flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-wide leading-snug max-w-4xl uppercase">
            Lorem ipsum dolor sit jamet <br />
            consectetur xi jinping adipiscing <br />
            elit.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl mt-6 leading-relaxed tracking-wide">
            Kami berkomitmen untuk menghadirkan tingkat kenyamanan dan keamanan tertinggi. Produk kami
            dirancang dengan cermat, menggabungkan inovasi material dengan pemahaman mendalam tentang
            koneksi antar manusia, memastikan setiap pengalaman terasa alami dan tak terlupakan.
          </p>
        </Wrapper>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-20">
        <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-12">
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#111322]/40 border border-white/5 p-8 flex flex-col gap-5 hover:border-white/10 hover:bg-[#111322]/60 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center transition-colors group-hover:bg-blue-600/10 group-hover:border-blue-500/20">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-base font-bold text-white tracking-wide uppercase transition-colors group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Sejarah Kami Section */}
      <section className="w-full py-16 border-t border-zinc-950">
        <Wrapper backgroundColor="bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Product Packaging Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-[32px] overflow-hidden bg-gradient-to-br from-[#111322]/40 to-transparent border border-white/5 p-10 flex items-center justify-center group shadow-xl">
                {/* Ambient Radial Glow */}
                <div className="absolute w-48 h-48 rounded-full bg-blue-500/10 blur-[50px] transition-all duration-500 group-hover:scale-110" />
                <div className="relative w-56 h-56 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/ads_product_1.png"
                    alt="OLO Brand History Product Box"
                    fill
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>
            </div>

            {/* Right: History Details */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                  Sejarah kami
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Lorem ipsum dolor sit ametik consectetur adipiscing elit. Quisque faucibus ex sapien
                  vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                  Tempus leo eu aenean sed diam urna tempor.
                </p>
              </div>

              {/* History Items list */}
              <div className="flex flex-col gap-6">
                {historyItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    {/* Circle Indicator */}
                    <div className="w-5 h-5 rounded-full bg-[#111322] border-2 border-blue-500/80 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-blue-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-bold text-white tracking-wide uppercase transition-colors group-hover:text-blue-400">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
