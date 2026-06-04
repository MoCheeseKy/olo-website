"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AccordionProps } from "@/interfaces/components/Accordion";

export function Accordion({
  title,
  children,
  isOpen: initialIsOpen = false,
  className = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <div
      className={`w-full rounded-2xl bg-[#111322]/70 border border-white/5 transition-all duration-300 hover:border-white/10 overflow-hidden ${className}`}
    >
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-6 md:py-6 md:px-8 text-left font-poppins text-white select-none cursor-pointer focus:outline-none"
      >
        <span className="text-sm md:text-base font-bold tracking-wide transition-colors duration-200 hover:text-blue-400">
          {title}
        </span>
        <FiChevronDown
          className={`text-lg md:text-xl text-zinc-400 transition-transform duration-300 shrink-0 ml-4 ${
            isOpen ? "rotate-180 text-blue-400" : ""
          }`}
        />
      </button>

      {/* Content wrapper with smooth height grid transition */}
      <div
        className={`grid transition-all duration-300 ease-in-out font-poppins ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6 px-6 md:pb-8 md:px-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light pt-2 border-t border-white/5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
