"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppContext } from "@/app/context/context";
import { useContext } from "react";
import { FaChartLine } from "react-icons/fa6";
import { ContactModalState } from "@/app/types/types";
import HeroCard from "../herocard";
function Hero() {
  const { setIsContactModalOpen, setIsMobileNavOpen } = useContext(
    AppContext
  ) as any;
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
        <div className="max-container text-background relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-5 md:max-w-2/3 lg:max-w-[50%] py-10"
          >
            <h2 className="text-3xl md:text-4xl  text-center md:text-start font-bold text-background">
              Trade with Code<span className="text-secondary">Jay</span> Your
              Trusted Partner for Crypto-to-Naira Exchange
            </h2>
            <p className="text-center md:text-start text-base lg:text-lg text-gray-300">
              Experience seamless cryptocurrency trading with Nigeria's most
              reliable exchange platform. Get competitive rates, instant
              transactions, and professional support available 24/7.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-2">
              <button
                onClick={() => {
                  setIsContactModalOpen((prev: ContactModalState) => ({
                    ...prev,
                    state: true,
                  }));
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="md:max-w-2/3 lg:max-w-[50%] py-4"
          >
            <HeroCard customStyle="w-[300px] sm:w-[350px] lg:w-[400px] h-[200px] lg:h-[300px]" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
