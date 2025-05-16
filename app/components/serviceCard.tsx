"use client";
import { useState, useContext } from "react";
import Image from "next/image";
import { AppContext } from "../context/context";
import { ServiceCardProps } from "../types/types";
import { ContactModalState } from "../types/types";
import { motion } from "framer-motion";

function ServiceCard({
  icon,
  title,
  description,
  className = "",
  hoverEffect = true,
  type = "exchange",
  animationDelay = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { setIsContactModalOpen, setIsMobileNavOpen } = useContext(
    AppContext
  ) as any;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`
        lg:h-[275px] relative overflow-hidden rounded-xl p-6 transition-all duration-300
        bg-white dark:bg-darkLighter
        border border-gray-100 dark:border-forestgreen-dark
        shadow-md hover:shadow-xl
        ${hoverEffect && isHovered ? "translate-y-[-5px]" : ""}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-green-600/10 dark:bg-green-500/10"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-green-600 dark:bg-green-500"></div>
      <div className="relative z-10 flex flex-col space-y-4">
        <div className="w-full flex items-center justify-between">
          <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
            {icon}
          </div>
          <button
            onClick={() => {
              setIsContactModalOpen({
                type: type,
                state: true,
              } as ContactModalState);
              setIsMobileNavOpen(false);
            }}
            className="w-fit text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out 
            rounded-lg dark:bg-forestgreen-dark px-3 py-3 flex items-center justify-center gap-2 rounded-lg0"
          >
            <span className="text-xs md:text-sm hidden lg:block">
              Get Started
            </span>{" "}
            <Image
              alt="whatsapp icon"
              src={"/icons/whatsapp-icon.svg"}
              width={20}
              height={20}
            />
          </button>
        </div>
        <h3 className="lg:text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-sm lg  :text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
