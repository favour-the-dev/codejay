// components/CryptoCard.tsx
"use client";
import { TrendingUp, TrendingDown } from "lucide-react";
import { CoinSummary } from "../types/types";
import Image from "next/image";
import { AppContext } from "../context/context";
import { useContext } from "react";
import { ContactModalState } from "../types/types";
import { motion } from "framer-motion";

const formatNumber = (numvar: string) => {
  const num = parseFloat(numvar);
  if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
  return num.toFixed(2);
};

const formatPrice = (price: string) => {
  const n = parseFloat(price);
  if (n > 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  if (n > 1) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  return n.toLocaleString("en-US", { maximumFractionDigits: 6 });
};

export default function CryptoCard({
  name,
  symbol,
  price,
  change,
  iconUrl,
  sparkline = [],
  rank,
  marketCap,
  volume24h,
  color = "#f7931A",
  inNaira,
}: CoinSummary) {
  const isPositive = parseFloat(change) >= 0;
  const pctChange =
    (isPositive ? "+" : "") + parseFloat(change).toFixed(2) + "%";
  const displayPrice = `${!inNaira ? "$" : "₦"}` + formatPrice(price);
  const capDisplay = `${!inNaira ? "$" : "₦"}` + formatNumber(marketCap);
  const volDisplay = "$" + formatNumber(volume24h);
  const validSpark = sparkline.filter((p) => p !== null) as string[];
  const context = useContext(AppContext);
  const setIsContactModalOpen = context?.setIsContactModalOpen ?? (() => {});
  const setIsMobileNavOpen = context?.setIsMobileNavOpen ?? (() => {});

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-darkLighter rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4"
      style={{ borderColor: color }}
    >
      {/* Header */}
      <header className="flex flex-col gap-3 mb-4">
        <div className="flex flex-col sm:flex-row items-center space-x-3">
          <div
            className="flex-shrink-0 mx-auto md:mx-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}30` }}
          >
            <img src={iconUrl} alt={`${symbol} icon`} className="w-8 h-8" />
          </div>
          <div className="sm:ml-2">
            <h3 className="text-lg text-center sm:text-start font-semibold dark:text-white whitespace-nowrap">
              {name}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>24h</span>
              <span className={isPositive ? "text-green-500" : "text-red-500"}>
                {pctChange}{" "}
                {isPositive ? (
                  <TrendingUp className="inline h-4 w-4" />
                ) : (
                  <TrendingDown className="inline h-4 w-4" />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="sm:text-lg md:text-xl text-center font-bold dark:text-white">
            Price: {displayPrice}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            MCap: {capDisplay}
          </div>
        </div>
      </header>
      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Symbol: {symbol}</span>
        {rank && <span>Rank: #{rank}</span>}
      </footer>
      <button
        onClick={() => {
          setIsContactModalOpen({
            type: "trade",
            state: true,
            coin: symbol,
          } as ContactModalState);
          setIsMobileNavOpen(false);
        }}
        className="w-full text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out mt-4 
                  rounded-lg dark:bg-forestgreen-dark px-2 py-2 flex items-center justify-center gap-2 rounded-lg0"
      >
        <span className="text-sm hidden sm:block">Trade Now</span>{" "}
        <Image
          alt="whatsapp icon"
          src={"/icons/whatsapp-icon.svg"}
          width={20}
          height={20}
        />
      </button>
    </motion.div>
  );
}
