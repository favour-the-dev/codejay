"use client";
import { useState } from "react";
import Image from "next/image";
// import { rateType } from "../types/types";
import { HeroCardProps } from "../types/types";

const formatPrice = (price: string) => {
  const n = parseFloat(price);
  if (n > 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  if (n > 1) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  return n.toLocaleString("en-US", { maximumFractionDigits: 6 });
};

export default function HeroCard({
  name,
  symbol,
  price,
  iconUrl,
  color,
  customStyle,
  rate,
}: HeroCardProps) {
  const [hover, setHover] = useState(false);
  const newPrice = formatPrice(price);
  function usdToNaira(usdAmount: number): number {
    return parseFloat(
      (usdAmount * (rate.usd ? parseFloat(rate.usd) : 1)).toFixed(2)
    );
  }

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
      <div className="relative w-full h-full bg-gradient-to-br from-green-900/70 to-green-800/70 rounded-xl p-4 md:p-6 flex flex-col justify-between shadow-lg overflow-hidden backdrop-blur-md border border-green-700/30">
        {/* Card pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_70%)]"></div>
        </div>

        {/* Top */}
        <div className="flex justify-between items-start relative z-10">
          <div className="text-white font-bold text-lg">{symbol ?? ""}</div>
          <div className="text-gray-200 text-sm">{name ?? ""}</div>
        </div>

        {/* middle */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 
        ${
          color !== "" ? `bg-[${color ?? "#ffffff"}]` : "bg-green-600"
        } rounded-full flex items-center justify-center`}
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="text-white text-5xl font-bold transform rotate-12">
              <Image
                src={iconUrl}
                alt={`${symbol} icon`}
                width={30}
                height={30}
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>

        {/* Bottom*/}
        <div className="flex flex-col md:flex-row justify-between md:items-end relative z-10">
          <div>
            <div className="text-gray-300 text-xs">Dollar Rate</div>
            <div className="text-white font-bold text-lg">${newPrice}</div>
          </div>
          <div>
            <div className="text-gray-300 text-xs">Naira Rate</div>
            <div className="text-white font-bold text-lg">
              ₦
              {usdToNaira(parseFloat(newPrice ?? ""))?.toLocaleString("en-US", {
                maximumFractionDigits: 6,
              })}
            </div>
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
