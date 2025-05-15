import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./providers/Providers";
import ContactModal from "./components/ContactModal";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CodeJay Exchange | Buy, Swap, Sell and Trade With Jay",
  description:
    "Discover unbeatable crypto rates at CodeJay Exchange, where seamless trading meets personalized service. Buy, swap, and sell digital assets with confidence through our trusted experts. Experience hassle-free transactions and premium support on every trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${inter.variable} antialiased bg-background text-foreground dark:bg-foreground dark:text-background`}
      >
        <Providers>
          <ContactModal />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
