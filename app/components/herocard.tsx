"use client";
import { useState } from "react";

interface HeroCardProps {
  customStyle?: string;
}
export default function HeroCard({ customStyle }: HeroCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${customStyle} relative transition-all duration-300 ${
        hover ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Second shadow */}
      <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-green-800 opacity-20"></div>

      {/* First shadow*/}
      <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl bg-green-700 opacity-30"></div>

      {/* Main card */}
      <div className="relative w-full h-full bg-gradient-to-br from-green-900/70 to-green-800/70 rounded-xl p-6 flex flex-col justify-between shadow-lg overflow-hidden backdrop-blur-md border border-green-700/30">
        {/* Card pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_70%)]"></div>
        </div>

        {/* Top section */}
        <div className="flex justify-between items-start relative z-10">
          <div className="text-white font-bold text-lg">BTC</div>
          <div className="text-gray-200 text-sm">Bitcoin</div>
        </div>

        {/* Middle section - Bitcoin logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-600 rounded-full flex items-center justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Bitcoin symbol */}
            <div className="text-white text-5xl font-bold transform rotate-12">
              ₿
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-end relative z-10">
          <div>
            <div className="text-gray-300 text-xs">Dollar Rate</div>
            <div className="text-white font-bold text-lg">$48,250.75</div>
          </div>
          <div className="text-xs text-right">
            <div className="text-gray-300">Last updated</div>
            <div className="text-gray-200">Just now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
