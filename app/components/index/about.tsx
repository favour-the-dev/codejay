"use client";
import { useState, useContext } from "react";
import { AppContext } from "@/app/context/context";
import Image from "next/image";
import { ContactModalState } from "@/app/types/types";
import { HiBadgeCheck } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import { motion } from "framer-motion";
import { IoMdSwap } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import ServiceCard from "../serviceCard";
import ImageSlider from "../imageSlider";
import ImageSliderPro from "../imageSliderPro";
import { MdCurrencyExchange } from "react-icons/md";

function About() {
  const {
    setIsContactModalOpen,
    setIsMobileNavOpen,
    rate,
    activeTab,
    handleTabClick,
  } = useContext(AppContext) as any;
  const images = [
    {
      src: "/images/general.jpeg",
      label: "Fiat & Crypto Exchange",
    },
    {
      src: "/images/coin.jpeg",
      label: "Degen Trading",
    },
    {
      src: "/images/giftcard.jpeg",
      label: "Gift Cards",
    },
  ];
  const ExchangeImages = [
    {
      src: "/images/dollar.jpeg",
      label: "Dollar Exchange",
      rate: rate.usd,
    },
    {
      src: "/images/euro.jpeg",
      label: "Euro Exchange",
      rate: rate.eur,
    },
    {
      src: "/images/pounds.jpeg",
      label: "Pounds Exchange",
      rate: rate.gbp,
    },
  ];
  const paymentOptions = [
    {
      src: "/payments/paypalimg.jpeg",
      label: "PayPal",
    },
    {
      src: "/payments/applepayimg.jpeg",
      label: "Apple Pay",
    },
    {
      src: "/payments/cashapp.jpeg",
      label: "Cash App",
    },
    {
      src: "/payments/chase-bank.jpeg",
      label: "Chase Bank",
    },
    {
      src: "/payments/chime.jpeg",
      label: "Chime",
    },
    {
      src: "/payments/moneygram.jpeg",
      label: "Moneygram",
    },
    {
      src: "/payments/varoimg.jpeg",
      label: "Varo",
    },
    {
      src: "/payments/venmo.jpeg",
      label: "Venmo",
    },
    {
      src: "/payments/westernunion.jpeg",
      label: "Western Union",
    },
    {
      src: "/payments/wiretransfer.jpeg",
      label: "Wire Transfer",
    },
    {
      src: "/payments/zelle.jpeg",
      label: "Zelle",
    },
  ];
  return (
    <>
      <section
        id="about"
        className="relative w-full h-full py-10 bg-background-gray dark:bg-foreground overflow-x-hidden"
      >
        <div className="max-container flex flex-col gap-5">
          {/* tabs */}
          <div className="w-fit mx-auto my-4 bg-background dark:bg-forestgreen-dark rounded-3xl flex items-center">
            <span
              onClick={() => handleTabClick("about")}
              className={`${
                activeTab === "about" &&
                "bg-forestgreen text-background dark:bg-secondary"
              } px-6 py-2 cursor-pointer duration-200 ease-in-out rounded-3xl`}
            >
              About
            </span>
            <span
              onClick={() => handleTabClick("services")}
              className={`${
                activeTab === "services" &&
                "bg-forestgreen text-background dark:bg-secondary"
              } px-6 py-2 cursor-pointer duration-200 ease-in-out rounded-3xl`}
            >
              Services
            </span>
            <span
              onClick={() => handleTabClick("international")}
              className={`${
                activeTab === "international" &&
                "bg-forestgreen text-background dark:bg-secondary"
              } px-6 py-2 cursor-pointer duration-200 ease-in-out rounded-3xl`}
            >
              International
            </span>
          </div>
          {/* about jay */}
          {activeTab === "about" && (
            <div className="w-full flex flex-col lg:flex-row md:items-center md:justify-between gap-5 lg:gap-0 overflow-hidden">
              <h2 className="font-Inter font-bold text-3xl md:hidden text-center">
                Who is Code
                <span className="text-forestgreen dark:text-secondary">
                  Jay
                </span>
                ?
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex flex-col items-center md:items-start gap-5 order-2 lg:order-1"
              >
                <h2 className="font-Inter font-bold text-3xl hidden md:block">
                  Who is Code
                  <span className="text-forestgreen dark:text-secondary">
                    Jay
                  </span>
                  ?
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                    <SlBadge className="text-forestgreen dark:text-forestgreen-dark" />
                    Trading & Exchange Expert
                  </span>
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                    <HiBadgeCheck className="text-forestgreen dark:text-forestgreen-dark" />{" "}
                    5+ years of experience
                  </span>
                </div>
                <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 text-center md:text-start">
                  CodeJay is a passionate, experienced trader who transforms
                  complex digital asset exchanges into effortless experiences.
                  His comprehensive platform seamlessly handles
                  cryptocurrencies, physical fiat currency exchanges, and gift
                  card transactions—all secured with cutting-edge protection
                  while maintaining remarkable simplicity for both novices and
                  experts alike.{" "}
                </p>
                <button
                  onClick={() => {
                    setIsContactModalOpen((prev: ContactModalState) => ({
                      ...prev,
                      state: true,
                    }));
                    setIsMobileNavOpen(false);
                  }}
                  className="w-full md:w-fit text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out 
                              dark:bg-forestgreen-dark px-4 py-3 flex items-center justify-center gap-2 rounded-lg"
                >
                  <span className="text-sm md:text-base">Contact Us</span>{" "}
                  <Image
                    alt="whatsapp icon"
                    src={"/icons/whatsapp-icon.svg"}
                    width={20}
                    height={20}
                  />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2"
              >
                <div className="w-fit border-2 border-dashed p-2 rounded-xl border-forestgreen dark:border-secondary">
                  <Image
                    alt="jay"
                    src={"/images/joshua.jpeg"}
                    width={400}
                    height={400}
                    className="w-[350px] h-[250px] md:w-[500px] lg:w-[400px] lg:h-[300px] object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          )}

          {/* services */}
          {activeTab === "services" && (
            <div className="w-full flex flex-col md:items-center md:justify-between gap-5 overflow-hidden">
              <h2 className="font-Inter font-bold text-3xl text-center">
                What Services Do We{" "}
                <span className="text-forestgreen dark:text-secondary">
                  Offer
                </span>
                ?
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full flex flex-col items-center md:items-start gap-5 order-1"
              >
                <ImageSlider images={images} />
              </motion.div>
              <div className="w-full flex flex-col lg:flex-row items-center gap-5 order-2">
                {/*  */}
                <ServiceCard
                  icon={<IoMdSwap />}
                  title="Crypto Exchange"
                  description="Experience seamless transactions with our platform, designed for both crypto and fiat exchanges. Enjoy fast, secure, and user-friendly services tailored to your needs."
                  type="exchange"
                  animationDelay={0}
                />
                <ServiceCard
                  icon={<FaHandshake />}
                  title="Buy & Sell Meme Coins/Giftcards"
                  description="Unlock the potential of meme coins and gift cards with our platform. Buy, sell, and trade effortlessly while enjoying top-notch security and support."
                  type="memecoin/giftcard"
                  animationDelay={0.2}
                />
                <ServiceCard
                  icon={<IoBarChartSharp />}
                  title="Degen & Forex trading Mentorship/Signals"
                  description="Join our mentorship program for expert guidance in degen and forex trading. Receive real-time signals and insights to enhance your trading skills and strategies."
                  type="mentorship"
                  animationDelay={0.4}
                />
              </div>
            </div>
          )}
          {activeTab === "international" && (
            <div className="w-full flex flex-col md:items-center md:justify-between gap-5 overflow-hidden">
              <h2 className="font-Inter font-bold text-3xl text-center">
                International{" "}
                <span className="text-forestgreen dark:text-secondary">
                  Services
                </span>
              </h2>
              <div className="w-full flex flex-col gap-8">
                <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-5 md:gap-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 order-2 md:order-1"
                  >
                    <ServiceCard
                      icon={<MdCurrencyExchange />}
                      title="Foreign Exchange"
                      description=" Exchange your Naira for Dollars, Euros, or Pounds instantly
                    with Code Jay Exchange. Enjoy fast, secure, and competitive
                    foreign cash exchange services tailored for your
                    convenience. Trust. Trade. Thrive."
                      type="foreign"
                      animationDelay={0}
                    />
                    <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-semibold">
                      N/B: Rates seen here could change, contact us for our
                      current rates.
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 order-1 md:order-2"
                  >
                    <ImageSlider
                      images={ExchangeImages}
                      isHidden={true}
                      fiat={true}
                      rates={rate}
                    />
                  </motion.div>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 order-2"
                  >
                    <ServiceCard
                      icon={<MdPayments />}
                      title="International Payments"
                      description="Send or receive money your way—PayPal, Apple Pay, Cash App, Chime, Varo, Zelle, full wire services, 
                      Western Union, MoneyGram, and every foreign “aza.” Fast transfers, sharp FX rates, zero hidden fees, 
                      real‑time tracking. Pick digital wallet, bank wire, or cash pickup. DM for limits, fees, and timing. 💸"
                      type="payments"
                      animationDelay={0}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 order-1"
                  >
                    <ImageSliderPro images={paymentOptions} isHidden={true} />
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default About;
