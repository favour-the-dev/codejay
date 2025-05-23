// ImageSlider.tsx – unified support for src objects *and* simple string URLs
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ImageSliderprops, Imagestypes } from "../types/types";

function normaliseImages({
  images,
  stringImages,
}: {
  images?: Imagestypes[];
  stringImages?: string[];
}): Imagestypes[] {
  if (images && images.length) return images;
  if (stringImages && stringImages.length)
    return stringImages.map((src, i) => ({ src, label: `Image ${i + 1}` }));
  return [];
}

export default function ImageSlider({
  stringImage,
  stringImages,
  images,
  isHidden,
  fiat,
  rates,
}: ImageSliderprops) {
  const items = normaliseImages({ images, stringImages });
  if (!items.length) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const stop = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };
  const start = () => {
    stop();
    autoplayRef.current = setInterval(
      () => setActiveIndex((p) => (p + 1) % items.length),
      4_000
    );
  };
  useEffect(() => {
    start();
    return stop;
  }, [activeIndex]);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 40) setActiveIndex((p) => (p + 1) % items.length);
    if (dx < -40 && activeIndex >= 0)
      setActiveIndex((p) => (p - 1 + items.length) % items.length);
    touchX.current = null;
  };

  const goto = (i: number) => {
    if (i !== activeIndex) setActiveIndex(i);
  };
  return (
    <div className="w-full max-w-5xl mx-auto px-4 relative py-8 flex flex-col gap-5">
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={`relative h-80 ${stringImage ? "md:h-96" : "md:h-80"}`}
      >
        {/* mobile deck */}
        <div
          className={`${
            isHidden ? "flex" : "flex lg:hidden"
          } items-center justify-center h-full relative`}
        >
          {items.map((img, i) => {
            const offset = i - activeIndex;
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                onClick={() => goto(i)}
                className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                  isActive ? "z-20 scale-100" : "z-10 scale-90 opacity-50"
                }`}
                style={{
                  transform: `translateX(${offset * 40}px) scale(${
                    isActive ? 1 : 0.9
                  })`,
                }}
              >
                <div className="relative w-64 h-80 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                  />
                  {!stringImages && (
                    <div className="absolute bottom-0 inset-x-0 p-3 font-semibold text-white bg-gradient-to-t from-black/70 to-transparent">
                      <span>{img.label}</span>
                      {fiat && (
                        <span className="block">
                          Live Rate: ₦{img.rate && Number(img.rate).toFixed(2)}{" "}
                          /{" "}
                          {img.rate === rates?.usd
                            ? "$"
                            : img.rate === rates?.eur
                            ? "€"
                            : img.rate === rates?.gbp
                            ? "£"
                            : "₦"}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* desktop grid */}
        <div
          className={`${
            isHidden ? "hidden" : "hidden lg:grid"
          } grid-cols-3 gap-6 transition-all duration-500`}
        >
          {items.map((img, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                onClick={() => goto(i)}
                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive ? "scale-105 z-10 shadow-lg" : "scale-95 opacity-50"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  width={400}
                  height={400}
                  className={`object-cover ${stringImage ? "h-96" : "h-80"}`}
                />
                {!stringImages && (
                  <div className="absolute bottom-0 inset-x-0 p-3 font-semibold text-white bg-gradient-to-t from-black/70 to-transparent">
                    {img.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-3 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goto(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
              activeIndex === i ? "w-10 bg-green-600" : "w-6 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
