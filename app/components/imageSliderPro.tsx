"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageSliderprops } from "../types/types";
export default function ImageSliderPro({
  images,
  isHidden,
  grid,
}: ImageSliderprops) {
  const [active, setActive] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const visible = useRef(true);

  /** Helpers */
  const advance = useCallback(
    (dir: 1 | -1) =>
      setActive((p) => (p + dir + images.length) % images.length),
    [images.length]
  );

  /** Autoplay using RAF‑safe setInterval */
  const start = useCallback(() => {
    stop();
    timer.current = setInterval(() => advance(1), 4000);
  }, [advance]);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
  };

  /** Pause on tab hidden */
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        visible.current = false;
        stop();
      } else if (!visible.current) {
        visible.current = true;
        start();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [start]);

  /** Start autoplay on mount */
  useEffect(() => {
    start();
    return stop;
  }, [start]);

  /** Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") advance(1);
      if (e.key === "ArrowLeft") advance(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance]);

  /** Swipe navigation (very small util) */
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 40) advance(-1);
    if (dx < -40) advance(1);
    touchX.current = null;
  };

  /** Lazy‑load support */
  const imgRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("loaded");
        });
      },
      { rootMargin: "200px" }
    );
    imgRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  /** Render */
  return (
    <div className="max-w-6xl mx-auto p-4 select-none">
      {/* Slider viewport */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl group"
        onMouseEnter={stop}
        onMouseLeave={start}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative h-80"
          >
            <Image
              src={images[active].src}
              alt={images[active].label}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-lg font-semibold">
              {images[active].label}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next */}
        {/* <button
          aria-label="Previous"
          onClick={() => advance(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center bg-white/70 hover:bg-white shadow-lg backdrop-blur-sm rounded-full w-10 h-10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          aria-label="Next"
          onClick={() => advance(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center bg-white/70 hover:bg-white shadow-lg backdrop-blur-sm rounded-full w-10 h-10"
        >
          <ChevronRight className="size-5" />
        </button> */}
      </div>

      {/* Thumbnails grid for desktop */}
      <div
        className={`mt-6 ${isHidden ? "hidden" : "hidden lg:grid"} grid-cols-${
          grid ?? "5"
        } gap-4`}
      >
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => {
              imgRef.current[i] = el;
            }}
            onClick={() => setActive(i)}
            className={`relative h-28 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg ${
              i === active
                ? "ring-2 ring-green-500 scale-105"
                : "opacity-60 hover:opacity-90"
            } loaded:opacity-100`}
          >
            {/* We let IntersectionObserver toggle the "loaded" class before Next/Image loads */}
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 bg-green-600"
                : "w-4 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
