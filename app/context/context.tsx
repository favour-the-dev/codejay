"use client";
import { createContext, useState, useEffect } from "react";
import { AppContextTypes, CryptoCoin } from "@/app/types/types";
import RatesService from "@/services/Rates";
import Image from "next/image";

export const AppContext = createContext<AppContextTypes | undefined>(undefined);

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-primary z-[1000] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 animate-pulse">
        <Image
          src="/images/codejaylogo.jpeg"
          alt="CodeJay Logo"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </div>
  </div>
);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // ui state
  const [isContactModalOpen, setIsContactModalOpen] = useState({
    state: false,
    type: "starter",
  });
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isLoading, setIsLoading] = useState(true);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // data state
  const TopCoins = ["BTC", "ETH", "XRP", "USDT", "BNB", "SOL", "USDC", "DOGE"];
  const [topCoins, setTopCoins] = useState<(CryptoCoin | undefined)[]>([]);
  const [rate, setRate] = useState({
    usd: "",
    eur: "",
    gbp: "",
  });

  // helper function to fetch apis
  const refreshRates = async () => {
    try {
      setIsLoading(true);
      const data = await RatesService.getRates();
      const xrate = await RatesService.getExchangeRate();
      const usdRate = xrate?.conversion_rates.USD;
      const euroRate = xrate?.conversion_rates.EUR;
      const gbpRate = xrate?.conversion_rates.GBP;
      if (!usdRate || !euroRate || !gbpRate) return;
      setRate({
        usd: String(1 / parseFloat(usdRate)),
        eur: String(1 / parseFloat(euroRate)),
        gbp: String(1 / parseFloat(gbpRate)),
      });
      if (!data) return;
      const coins: CryptoCoin[] = data.data.coins;
      if (!coins) return;
      const mainCoins = TopCoins.map((symbol) =>
        coins.find((c) => c.symbol === symbol)
      );
      if (!mainCoins) return;
      setTopCoins(mainCoins);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // initialise apis
  useEffect(() => {
    refreshRates();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isContactModalOpen,
        setIsContactModalOpen,
        isMobileNavOpen,
        setIsMobileNavOpen,
        topCoins,
        rate,
        refreshRates,
        activeTab,
        handleTabClick,
        isLoading,
      }}
    >
      {isLoading && <LoadingScreen />}
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
