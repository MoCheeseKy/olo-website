import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";
import { getSiteSettings } from "@/app/actions/setting.action";

export default async function PrivacyPage() {
  const settings = await getSiteSettings();
  const content = settings["privacy_content"] || "<p>Kebijakan Privasi sedang dalam pembaruan.</p>";

  return (
    <div className="w-full bg-[#070707] text-white min-h-screen pt-28 pb-24 font-poppins relative overflow-hidden">
      {/* Background radial flows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#3a0832]/5 blur-[120px] pointer-events-none -z-10" />

      <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-6">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors duration-200 uppercase self-start"
          >
            <FiArrowLeft className="text-sm" />
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
            <span>HOME</span>
            <span className="mx-2">/</span>
            <span className="text-[#0043ff]">LEGAL</span>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">PRIVACY POLICY</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col gap-4 mt-2 border-b border-white/5 pb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase leading-tight text-white max-w-4xl">
            Privasi & Keamanan Data
          </h1>
        </div>

        {/* Article Body Content */}
        <article className="max-w-3xl mx-auto flex flex-col gap-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed mt-6 prose prose-invert prose-blue max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </Wrapper>
    </div>
  );
}
