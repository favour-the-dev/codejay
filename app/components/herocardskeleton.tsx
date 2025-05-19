// HeroCardSkeleton.tsx – shimmering placeholder that mimics HeroCard layout
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroCardSkeleton({
  className = "",
}: {
  className?: string;
}) {
  const shimmer = {
    backgroundImage:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.1) 40%, rgba(255,255,255,0) 80%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  } as const;

  return (
    <div className={`${className} relative animate-pulse`}>
      {/* second + first shadow */}
      <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-green-800 opacity-20" />
      <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl bg-green-700 opacity-30" />

      {/* main skeleton card */}
      <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-green-900/60 to-green-800/60 rounded-xl p-4 md:p-6 shadow-lg overflow-hidden border border-green-700/30">
        {/* radial pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_70%)]" />

        {/* top rows */}
        <div className="flex justify-between items-start mb-10 z-10 relative">
          <div className="h-4 w-16 rounded bg-green-700/40" style={shimmer} />
          <div className="h-4 w-24 rounded bg-green-700/40" style={shimmer} />
        </div>

        {/* circle icon placeholder */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full bg-green-700/40"
          style={shimmer}
        />

        {/* bottom rows */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 z-10 relative mt-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1 md:text-left text-right">
              <div
                className="h-3 w-20 rounded bg-green-700/30"
                style={shimmer}
              />
              <div
                className="h-4 w-28 rounded bg-green-700/40"
                style={shimmer}
              />
            </div>
          ))}
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
