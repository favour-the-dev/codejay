"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/general.jpeg",
    label: "Fiat & Crypto Exchange",
  },
  {
    src: "/images/coin.jpeg",
    label: "Degen Trading",
  },
  {
    src: "/images/giftcard.jpeg",
    label: "Gift Cards",
  },
];

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Start autoplay
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeIndex]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleNavigate = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    startAutoplay();
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 relative py-8 flex flex-col gap-5">
      {/* Slider */}
      <div className="relative h-80 md:h-64">
        {/* Mobile: Stacked card deck */}
        <div className="flex lg:hidden items-center justify-center h-full relative">
          {images.map((image, idx) => {
            const offset = idx - activeIndex;
            const isActive = idx === activeIndex;

            return (
              <div
                key={image.src}
                className={`
                  absolute transition-all duration-500 ease-in-out cursor-pointer
                  ${isActive ? "z-20 scale-100" : "z-10 scale-90 opacity-50"}
                `}
                style={{
                  transform: `translateX(${offset * 40}px) scale(${
                    isActive ? 1 : 0.9
                  })`,
                }}
                onClick={() => handleNavigate(idx)}
              >
                <div className="relative w-64 h-80 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    className="object-cover"
                  />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-sm font-semibold text-white bg-gradient-to-t from-black/70 to-transparent">
                    {image.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Classic grid layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 transition-all duration-500">
          {images.map((image, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={image.src}
                onClick={() => handleNavigate(idx)}
                className={`
                  relative overflow-hidden rounded-xl cursor-pointer
                  transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "scale-105 z-10 shadow-lg"
                      : "scale-95 opacity-50"
                  }
                `}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  width={400}
                  height={400}
                  className="object-cover w-full h-64"
                />

                {/* Caption */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0 p-3 text-white font-semibold
                    bg-gradient-to-t from-black/70 to-transparent
                  `}
                >
                  {image.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigate(idx)}
            className={`h-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
              activeIndex === idx ? "w-10 bg-green-600" : "w-6 bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
