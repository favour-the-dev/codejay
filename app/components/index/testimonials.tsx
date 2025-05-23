"use client";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import ImageSlider from "../imageSlider";
import Image from "next/image";
import { AppContext } from "@/app/context/context";
import { ContactModalState } from "@/app/types/types";
function Testimonials() {
  const [activeTab, setActiveTab] = useState("crypto");
  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };
  const context = useContext(AppContext);
  const setIsContactModalOpen = context?.setIsContactModalOpen ?? (() => {});
  const setIsMobileNavOpen = context?.setIsMobileNavOpen ?? (() => {});
  const cryptoImages = {
    src: [
      "/clients/crypto1.jpeg",
      "/clients/crypto2.jpeg",
      "/clients/crypto3.jpeg",
    ],
    label: "",
  };
  const currecyImages = {
    src: [
      "/clients/currency1.jpeg",
      "/clients/currency2.jpeg",
      "/clients/currency3.jpeg",
    ],
    label: "",
  };
  const tradeImages = {
    src: [
      "/clients/trade1.jpeg",
      "/clients/trade2.jpeg",
      "/clients/trade3.jpeg",
    ],
    label: "",
  };
  const intlPayImages = {
    src: ["/clients/pay1.jpeg", "/clients/pay2.jpeg", "/clients/pay3.jpeg"],
    label: "",
  };
  const cardImages = {
    src: ["/clients/card1.jpeg", "/clients/card2.jpeg", "/clients/card3.jpeg"],
    label: "",
  };
  const airdropImages = {
    src: ["/clients/drop1.jpeg", "/clients/drop2.jpeg", "/clients/drop3.jpeg"],
    label: "",
  };
  return (
    <>
      <section
        id="testimonials"
        className="relative w-full h-full py-10 bg-background-gray dark:bg-foreground overflow-hidden"
      >
        <div className="max-container h-full flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h2 className="font-Inter font-bold text-3xl text-center">
              Client{" "}
              <span className="text-forestgreen dark:text-secondary">
                Testimonials
              </span>
            </h2>
            <p className="text-base md:text-lg mx-auto text-gray-500 dark:text-gray-400 md:max-w-[70%] text-center">
              <span className="font-semibold">
                Real Conversations, Real Results —
              </span>{" "}
              these are actual screenshots from our WhatsApp chats with
              clients—each one tied to a specific service. From crypto swaps to
              global payments, see how we deliver value in real time.
            </p>
            <button
              onClick={() => {
                setIsContactModalOpen({
                  type: "testimonial",
                  state: true,
                  service: activeTab,
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
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-5 mt-4"
          >
            <span
              onClick={() => handleChangeTab("crypto")}
              className={`${
                activeTab === "crypto"
                  ? "bg-forestgreen-dark dark:bg-secondary text-gray-100 rounded-md"
                  : "text-gray-500 dark:text-gray-400"
              } flex items-center gap-1 text-sm duration-300 ease-in-out px-4 py-2 cursor-pointer`}
            >
              Crypto <span className="hidden md:block">Exchange</span>
            </span>
            <span
              onClick={() => handleChangeTab("currency")}
              className={`${
                activeTab === "currency"
                  ? "bg-forestgreen-dark dark:bg-secondary text-gray-100 rounded-md"
                  : "text-gray-500 dark:text-gray-400"
              } flex items-center gap-1 text-sm duration-300 ease-in-out px-4 py-2 cursor-pointer`}
            >
              Currency <span className="hidden md:block">Exchange</span>
            </span>
            <span
              onClick={() => handleChangeTab("trading")}
              className={`${
                activeTab === "trading"
                  ? "bg-forestgreen-dark dark:bg-secondary text-gray-100 rounded-md"
                  : "text-gray-500 dark:text-gray-400"
              } flex items-center gap-1 text-sm duration-300 ease-in-out px-4 py-2 cursor-pointer`}
            >
              Degen <span className="hidden md:block">Trading</span>
            </span>
            <span
              onClick={() => handleChangeTab("payments")}
              className={`${
                activeTab === "payments"
                  ? "bg-forestgreen-dark dark:bg-secondary text-gray-100 rounded-md"
                  : "text-gray-500 dark:text-gray-400"
              } flex items-center gap-1 text-sm duration-300 ease-in-out px-4 py-2 cursor-pointer`}
            >
              International <span className="hidden md:block">Payments</span>
            </span>
            <span
              onClick={() => handleChangeTab("giftcards")}
              className={`${
                activeTab === "giftcards"
                  ? "bg-forestgreen-dark dark:bg-secondary text-gray-100 rounded-md"
                  : "text-gray-500 dark:text-gray-400"
              } flex items-center gap-1 text-sm duration-300 ease-in-out px-4 py-2 cursor-pointer`}
            >
              GiftCards
            </span>
            <span
              onClick={() => handleChangeTab("airdrops")}
              className={`${
                activeTab === "airdrops"
                  ? "bg-forestgreen-dark dark:bg-secondary text-gray-100 rounded-md"
                  : "text-gray-500 dark:text-gray-400"
              } flex items-center gap-1 text-sm duration-300 ease-in-out px-4 py-2 cursor-pointer`}
            >
              Airdrops <span className="hidden md:block">Exchange</span>
            </span>
          </motion.div>

          {activeTab === "crypto" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=""
            >
              <ImageSlider stringImage={true} stringImages={cryptoImages.src} />
            </motion.div>
          )}
          {activeTab === "currency" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=""
            >
              <ImageSlider
                stringImage={true}
                stringImages={currecyImages.src}
              />
            </motion.div>
          )}
          {activeTab === "payments" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=""
            >
              <ImageSlider
                stringImage={true}
                stringImages={intlPayImages.src}
              />
            </motion.div>
          )}
          {activeTab === "trading" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=""
            >
              <ImageSlider stringImage={true} stringImages={tradeImages.src} />
            </motion.div>
          )}
          {activeTab === "giftcards" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=""
            >
              <ImageSlider stringImage={true} stringImages={cardImages.src} />
            </motion.div>
          )}
          {activeTab === "airdrops" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className=""
            >
              <ImageSlider
                stringImage={true}
                stringImages={airdropImages.src}
              />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
