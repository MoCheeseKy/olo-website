"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CarouselProps } from "@/interfaces/components/Carousel";

export function Carousel({
  children,
  autoplay = true,
  autoplayInterval = 6000,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || totalSlides <= 1) return;
    const timer = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, nextSlide, totalSlides]);

  if (totalSlides === 0) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {React.Children.map(children, (child, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10 pointer-events-auto scale-100"
                  : "opacity-0 z-0 pointer-events-none scale-[1.02]"
              }`}
            >
              {child}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Exceeding the wrapper bounds, positioned at screen edges) */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/10 hover:bg-black/40 text-white/60 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-xs cursor-pointer focus:outline-none"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-xl md:text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/10 hover:bg-black/40 text-white/60 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-xs cursor-pointer focus:outline-none"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-xl md:text-2xl" />
          </button>
        </>
      )}

      {/* Indicators at the bottom */}
      {totalSlides > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive ? "w-10 bg-white" : "w-6 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
