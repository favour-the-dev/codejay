import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-full px-3 py-10 bg-background dark:bg-primary flex flex-col gap-5">
        <div className="max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* logo */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <Image
                alt="logo"
                src={"/images/codejaylogo.jpeg"}
                width={35}
                height={35}
                className="rounded-full object-cover"
              />
              <span className="text-base md:text-lg text-forestgreen dark:text-background font-semibold">
                Code<span className="text-secondary">Jay</span>Xchange
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nigeria's most trusted cryptocurrency exchange platform. Fast,
              secure, and reliable trading since 2020.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className="border border-gray-300 dark:border-gray-600 p-3 text-foreground hover:border-forestgreen dark:hover:border-secondary hover:text-forestgreen 
                dark:hover:text-secondary duration-200 ease-in-out dark:text-gray-400 rounded-lg text-xl"
              >
                <FaTwitter />
              </Link>
              <Link
                href={"/"}
                className="border border-gray-300 dark:border-gray-600 p-3 text-foreground hover:border-forestgreen dark:hover:border-secondary hover:text-forestgreen 
                dark:hover:text-secondary duration-200 ease-in-out dark:text-gray-400 rounded-lg text-xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"/"}
                className="border border-gray-300 dark:border-gray-600 p-3 text-foreground hover:border-forestgreen dark:hover:border-secondary hover:text-forestgreen 
                dark:hover:text-secondary duration-200 ease-in-out dark:text-gray-400 rounded-lg text-xl"
              >
                <FaTelegramPlane />
              </Link>
              <Link
                href={"/"}
                className="border border-gray-300 dark:border-gray-600 p-3 text-foreground hover:border-forestgreen dark:hover:border-secondary hover:text-forestgreen 
                dark:hover:text-secondary duration-200 ease-in-out dark:text-gray-400 rounded-lg text-xl"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>

          {/* QuickLinks */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground dark:text-gray-400 font-semibold">
              Quick Links
            </h4>
            <div className="flex flex-col gap-5">
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                About
              </Link>
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                Rates
              </Link>
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                Testimonials
              </Link>
            </div>
          </div>

          {/* support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground dark:text-gray-400 font-semibold">
              Support
            </h4>
            <div className="flex flex-col gap-5">
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                Help Center
              </Link>
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                FAQs
              </Link>
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                Terms of Service
              </Link>
              <Link
                href={"/"}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-forestgreen dark:hover:text-secondary duration-200 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* news letter */}
          <div className="flex flex-col gap-3">
            <h4 className="text-foreground dark:text-gray-400 font-semibold">
              Newsletter
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Subscribe to our newsletter to get the latest news and updates.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 dark:border-gray-600 p-2 text-sm text-gray-500 dark:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-forestgreen dark:focus:ring-secondary"
              />
              <button className="text-sm bg-forestgreen dark:bg-secondary text-background hover:opacity-90 duration-200 ease-in-out px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              <FaShieldAlt className="inline mr-1 text-forestgreen dark:text-forestgreen-dark" />
              Your data is always safe with us. We never share your information
              with third parties.
            </span>
          </div>
        </div>
        <hr className="text-gray-200 dark:text-gray-400/20" />
        <div className="w-full flex items-center flex-col md:flex-row md:justify-between gap-2 md:gap-0 p-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} CodeJayXchange. All rights reserved
          </span>

          <div className="flex items-center gap-3">
            <Image alt="visa" src={"/icons/visa.svg"} width={30} height={30} />
            <Image
              alt="mastercard"
              src={"/icons/mastercard.svg"}
              width={30}
              height={30}
            />
            <Image
              alt="paypal"
              src={"/icons/paypal.svg"}
              width={30}
              height={30}
            />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              <FaShieldAlt className="inline mr-1 text-forestgreen dark:text-forestgreen-dark" />
              secured by SSL
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
