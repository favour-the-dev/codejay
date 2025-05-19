"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "@/app/context/context";
import { useContext, useState, useEffect, useRef } from "react";
import { FaChartLine } from "react-icons/fa6";
import { ContactModalState } from "@/app/types/types";
import HeroCardSkeleton from "../herocardskeleton";
import HeroCard from "../herocard";
import { Persisted } from "@/app/types/types";
import { CryptoCoin } from "@/app/types/types";

function Hero() {
  const { setIsContactModalOpen, setIsMobileNavOpen, topCoins, rate } =
    useContext(AppContext) as any;
  const [index, setIndex] = useState(0);
  const [currentCoin, setCurrentCoin] = useState<CryptoCoin | null>(null);
  const initialRender = useRef(true);

  // Set the initial current coin when topCoins are loaded
  useEffect(() => {
    if (topCoins.length > 0 && initialRender.current) {
      setCurrentCoin(topCoins[0]);
      initialRender.current = false;
    }
  }, [topCoins]);

  // Handle index update with localStorage
  useEffect(() => {
    if (topCoins.length === 0) return;

    const DAY_MS = 86_400_000;
    const nextDay = () => Date.now() + DAY_MS;
    const STORAGE_KEY = "index";

    let stored: Persisted;

    try {
      stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      stored = { i: -1, expires: 0 };
    }

    let { i = -1, expires = 0 } = stored;
    i = (i + 1) % topCoins.length;

    if (Date.now() >= expires) {
      expires = nextDay();
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ i, expires }));
    setIndex(i);

    // Only update currentCoin when topCoins and index are valid
    if (topCoins[i]) {
      setCurrentCoin(topCoins[i]);
    }
  }, [topCoins]);

  return (
    <>
      <div className="relative w-full h-full py-5">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 dark:bg-black/50 z-[5]" />
          <Image
            alt="hero"
            src={"/images/herobg1.jpg"}
            width={500}
            height={500}
            className="absolute z-[3] top-0 left-0 w-full h-full object-cover object-center"
          />
        </div>
        {/* hero text */}
        <div className="max-container text-background relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5 lg:max-w-[50%] py-5"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start font-bold text-background">
              Trade with Code<span className="text-secondary">Jay</span> Your
              Trusted Partner for Everything Exchange
            </h2>
            <p className="text-center md:text-start text-base lg:text-lg text-gray-300">
              Experience seamless cryptocurrency trading with Nigeria's most
              reliable exchange platform. Get competitive rates, instant
              transactions, and professional support available 24/7.
            </p>
            {/* Crypto-to-Naira */}
            <div className="flex flex-col md:flex-row items-center gap-3 mt-2">
              <button
                onClick={() => {
                  setIsContactModalOpen({
                    type: "starter",
                    state: true,
                  } as ContactModalState);
                  setIsMobileNavOpen(false);
                }}
                className="w-full md:w-fit text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out 
                dark:bg-forestgreen-dark px-4 py-3 flex items-center justify-center gap-2"
              >
                <span className="text-sm md:text-base">Send us a message</span>{" "}
                <Image
                  alt="whatsapp icon"
                  src={"/icons/whatsapp-icon.svg"}
                  width={20}
                  height={20}
                />
              </button>
              <Link
                href={"#rates"}
                className="w-full md:w-fit text-background bg-darkShade hover:opacity-90 duration-200 ease-in-out 
                px-4 py-3 flex items-center justify-center gap-2"
              >
                <span className="text-sm md:text-base">See Live Rates</span>{" "}
                <FaChartLine />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:justify-between">
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-secondary font-bold text-2xl md:text-3xl">
                  ₦100M+
                </h4>
                <span className="text-sm text-gray-200 dark:text-gray-400">
                  Monthly Volume
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-secondary font-bold text-2xl md:text-3xl">
                  2K+
                </h4>
                <span className="text-sm text-gray-200 dark:text-gray-400">
                  Transactions
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-secondary font-bold text-2xl md:text-3xl">
                  100%
                </h4>
                <span className="text-sm text-gray-200 dark:text-gray-400">
                  Secure Trades
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-[50%] py-4"
          >
            {topCoins.length === 0 ? (
              <HeroCardSkeleton className="w-[300px] sm:w-[350px] md:w-[500px] lg:w-[400px] h-[200px] lg:h-[300px]" />
            ) : currentCoin ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCoin.symbol}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HeroCard
                    name={currentCoin.name}
                    symbol={currentCoin.symbol}
                    price={currentCoin.price}
                    iconUrl={currentCoin.iconUrl}
                    color={currentCoin.color}
                    customStyle="w-[300px] sm:w-[350px] md:w-[500px] lg:w-[400px] h-[200px] lg:h-[300px]"
                    rate={rate}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <HeroCardSkeleton className="w-[300px] sm:w-[350px] md:w-[500px] lg:w-[400px] h-[200px] lg:h-[300px]" />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
