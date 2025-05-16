"use client";
import { useState, useContext } from "react";
import { AppContext } from "@/app/context/context";
import Image from "next/image";
import { ContactModalState } from "@/app/types/types";
import { HiBadgeCheck } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import { motion } from "framer-motion";
function About() {
  const { setIsContactModalOpen, setIsMobileNavOpen } = useContext(
    AppContext
  ) as any;
  const [activeTab, setActiveTab] = useState("about");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section
        id="about"
        className="relative w-full h-full py-5 bg-background-gray dark:bg-foreground"
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
          </div>
          {/* about jay */}
          {activeTab === "about" && (
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 order-2 md:order-1"
              >
                <h2 className="font-Inter font-bold text-2xl md:text-3xl">
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
                              dark:bg-forestgreen-dark px-4 py-3 flex items-center justify-center gap-2 rounded-lg0"
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2"
              >
                <div className="w-fit border-2 border-dashed p-2 rounded-xl border-forestgreen dark:border-secondary">
                  <Image
                    alt="jay"
                    src={"/images/joshua.jpeg"}
                    width={400}
                    height={400}
                    className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          )}

          {/* services */}
          {activeTab === "services" && (
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 order-2 md:order-1">
                {/*  */}
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 order-1 md:order-2"></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default About;
