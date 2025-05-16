"use client";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/context";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { ContactModalState } from "../types/types";
function ContactModal() {
  const { isContactModalOpen, setIsContactModalOpen } = useContext(
    AppContext
  ) as any;
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState(
    "Hello, I'm interested in trading with you. Can you please provide me with more information?"
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isContactModalOpen.state && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-5 md:p-0">
          <div className="bg-background dark:bg-darkShade p-4 rounded-lg shadow-lg flex flex-col gap-3 w-full md:max-w-[350px]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold">Contact Us</h2>
              <IoIosClose
                onClick={() =>
                  setIsContactModalOpen((prev: ContactModalState) => ({
                    ...prev,
                    state: false,
                  }))
                }
                className="text-3xl cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-200"
              />
            </div>
            <div className="flex items-center gap-3">
              <Image
                alt="jay"
                src={"/images/joshua.jpeg"}
                width={35}
                height={35}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold">CodeJay</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  Crypto Exchange & Trading Expert
                </span>
              </div>
            </div>

            {/* whatsapp message preview */}
            <div className="p-3 rounded-lg bg-gray-200 dark:bg-darkLighter/80 flex flex-col gap-3">
              <h3 className="font-bold text-sm">WhatsApp Message Preview</h3>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  isContactModalOpen.type === "starter" ? message : "tbc"
                }
                className="h-[60px] w-full text-sm text-gray-700 dark:text-gray-300 resize-none placeholder:text-sm flex items-center justify-center px-2 focus:outline-none"
              />
              <span className="text-gray-600 dark:text-gray-400 text-[11px]">
                This message will be sent when you connect
              </span>
            </div>

            <span className="text-[10px] text-gray-600 dark:text-gray-400">
              <FaShieldAlt className="inline mr-1 text-forestgreen dark:text-forestgreen-dark" />
              Your conversation is protected by our secure platform. Never share
              sensitive information outside of our system.
            </span>

            <Link
              href={`https://wa.me/+2349066710779?text=${message}`}
              target="_blank"
              className="text-background bg-forestgreen hover:opacity-90 duration-200 ease-in-out dark:bg-forestgreen-dark px-4 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <span className="text-xs">Send Message</span>{" "}
              <Image
                alt="whatsapp icon"
                src={"/icons/whatsapp-icon.svg"}
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactModal;
