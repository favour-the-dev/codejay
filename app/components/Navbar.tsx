"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppContext } from "../context/context";
import { useContext, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { IoIosClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { ContactModalState } from "../types/types";
function Navbar() {
  const pathname = usePathname();
  const { setIsContactModalOpen, isMobileNavOpen, setIsMobileNavOpen } =
    useContext(AppContext) as any;
  return (
    <>
      <nav className="sticky z-[50] top-0 left-0 w-full bg-background/80 border-b dark:border-none border-gray-200 text-foreground dark:bg-primary/80 dark:text-background py-3 backdrop-blur-sm">
        <div className="max-container flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-1">
            <Image
              alt="logo"
              src={"/images/codejaylogo.jpeg"}
              width={35}
              height={35}
              className="rounded-full object-cover"
            />
            <span className="text-sm sm:text-base md:text-lg text-forestgreen dark:text-background font-semibold">
              Code<span className="text-secondary">Jay</span>Xchange
            </span>
          </div>

          {/* */}
          <div className="w-2/3 flex items-center gap-3">
            <div className="items-center gap-5 hidden lg:flex">
              <Link
                href={"/"}
                className={`${
                  pathname === "/"
                    ? "text-forestgreen dark:text-secondary font-semibold"
                    : "text-foreground dark:text-background"
                } text-sm dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
              >
                Home
              </Link>
              <Link
                href={"#about"}
                className={`${
                  pathname.includes("#about")
                    ? "text-forestgreen dark:text-secondary font-semibold"
                    : "text-foreground dark:text-background"
                } text-sm dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
              >
                About
              </Link>
              <Link
                href={"#rates"}
                className={`${
                  pathname.includes("#rates")
                    ? "text-forestgreen dark:text-secondary font-semibold"
                    : "text-foreground dark:text-background"
                } text-sm dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
              >
                Rates
              </Link>
              <Link
                href={"#testimonials"}
                className={`${
                  pathname.includes("#testimonials")
                    ? "text-forestgreen dark:text-secondary font-semibold"
                    : "text-foreground dark:text-background"
                } text-sm dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
              >
                Testimonials
              </Link>
              <Link
                href={"#transactions"}
                className={`${
                  pathname.includes("#transactions")
                    ? "text-forestgreen dark:text-secondary font-semibold"
                    : "text-foreground dark:text-background"
                } text-sm dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
              >
                Transactions
              </Link>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <ThemeSwitch />
              <button
                onClick={() => {
                  setIsContactModalOpen({
                    type: "starter",
                    state: true,
                  } as ContactModalState);
                }}
                className="relative z-[60] lg:static lg:z-auto text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out dark:bg-forestgreen-dark px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <span className="text-xs hidden md:block">Contact Us</span>{" "}
                <Image
                  alt="whatsapp icon"
                  src={"/icons/whatsapp-icon.svg"}
                  width={20}
                  height={20}
                />
              </button>
            </div>

            {/* mobile nav */}
            <div className="lg:hidden">
              {/* menu */}
              <div className="relative z-[60] text-3xl text-forestgreen-dark dark:text-secondary">
                <IoIosMenu
                  onClick={() => setIsMobileNavOpen(true)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      {/* overlay */}
      <div
        className={`${
          isMobileNavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed top-0 z-[55] left-0 w-full h-screen bg-black/50 transition-opacity duration-300 ease-in-out`}
        onClick={() => setIsMobileNavOpen(false)}
      />
      {/* nav */}
      <div
        onClick={() => {
          setTimeout(() => {
            setIsMobileNavOpen(false);
          }, 500);
        }}
        className={`${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        } fixed z-[59] top-0 right-0 pt-[60px] p-5 flex flex-col gap-5 w-[60%] h-screen bg-background dark:bg-primary 
        border-l border-gray-200 dark:border-none shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <button
            onClick={() => {
              setIsContactModalOpen({
                type: "starter",
                state: true,
              } as ContactModalState);
              setIsMobileNavOpen(false);
            }}
            className="relative z-[60] lg:static lg:z-auto text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out dark:bg-forestgreen-dark px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <span className="text-xs hidden md:block">Contact Us</span>{" "}
            <Image
              alt="whatsapp icon"
              src={"/icons/whatsapp-icon.svg"}
              width={20}
              height={20}
            />
          </button>
          <div className="relative z-[60] text-5xl text-forestgreen-dark dark:text-secondary">
            <IoIosClose
              onClick={() => setIsMobileNavOpen(false)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <Link
          href={"/"}
          className={`${
            pathname === "/"
              ? "text-forestgreen dark:text-secondary font-semibold"
              : "text-foreground dark:text-background"
          } text-2xl dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className={`${
            pathname.includes("#about")
              ? "text-forestgreen dark:text-secondary font-semibold"
              : "text-foreground dark:text-background"
          } text-2xl  dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
        >
          About
        </Link>
        <Link
          href={"#rates"}
          className={`${
            pathname.includes("#rates")
              ? "text-forestgreen dark:text-secondary font-semibold"
              : "text-foreground dark:text-background"
          } text-2xl  dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
        >
          Rates
        </Link>
        <Link
          href={"#testimonials"}
          className={`${
            pathname.includes("#testimonials")
              ? "text-forestgreen dark:text-secondary font-semibold"
              : "text-foreground dark:text-background"
          } text-2xl  dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
        >
          Testimonials
        </Link>
        <Link
          href={"#transactions"}
          className={`${
            pathname.includes("#transactions")
              ? "text-forestgreen dark:text-secondary font-semibold"
              : "text-foreground dark:text-background"
          } text-2xl  dark:hover:text-secondary hover:text-primary duration-200 ease-in-out`}
        >
          Transactions
        </Link>
      </div>
    </>
  );
}

export default Navbar;
