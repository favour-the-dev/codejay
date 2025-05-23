"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import ImageSlider from "../imageSlider";
import Image from "next/image";
import { AppContext } from "@/app/context/context";
import { ContactModalState } from "@/app/types/types";
function Transactions() {
  const context = useContext(AppContext);
  const setIsContactModalOpen = context?.setIsContactModalOpen ?? (() => {});
  const setIsMobileNavOpen = context?.setIsMobileNavOpen ?? (() => {});
  const transactionImages = [
    {
      src: "/clients/transact1.jpeg",
      label: "Wire Transfer",
    },
    {
      src: "/clients/transact2.jpeg",
      label: "International Payment",
    },
    {
      src: "/clients/transact3.jpeg",
      label: "Crypto Exchange",
    },
  ];
  return (
    <>
      <section
        id="transactions"
        className="relative w-full h-full py-10 bg-background-gray dark:bg-foreground overflow-hidden"
      >
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h2 className="font-Inter font-bold text-3xl text-center">
              Biggest{" "}
              <span className="text-forestgreen dark:text-secondary">
                Transactions
              </span>
            </h2>
            <p className="text-base md:text-lg mx-auto text-gray-500 dark:text-gray-400 md:max-w-[70%] text-center">
              <span className="font-semibold">Record‑Breaking Deals —</span>{" "}
              Swipe through our three largest transactions—milestone transfers
              that underscore our capacity, security, and speed. Each slide
              spotlights the amount moved, the service used, and the satisfied
              client behind the numbers.
            </p>
            <button
              onClick={() => {
                setIsContactModalOpen({
                  type: "starter",
                  state: true,
                } as ContactModalState);
                setIsMobileNavOpen(false);
              }}
              className="w-fit mx-auto text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out mt-4 
                                          rounded-lg dark:bg-forestgreen-dark px-4 py-3 md:px-6 flex items-center justify-center gap-2 rounded-lg0"
            >
              <span className="text-base">Get Started</span>{" "}
              <Image
                alt="whatsapp icon"
                src={"/icons/whatsapp-icon.svg"}
                width={20}
                height={20}
              />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className=""
          >
            <ImageSlider images={transactionImages} />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Transactions;
