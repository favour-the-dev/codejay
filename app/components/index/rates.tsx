"use client";
import { useState, useEffect } from "react";
import RatesService from "@/services/Rates";
import { CryptoCoin } from "@/app/types/types";
import CryptoCard from "../ratecard";
function Rates() {
  const TopCoins = ["BTC", "ETH", "XRP", "USDT", "BNB", "SOL", "USDC", "DOGE"];
  const [topCoins, setTopCoins] = useState<(CryptoCoin | undefined)[]>([]);
  const [activeTab, setActiveTab] = useState("Dollar");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const [rate, setRate] = useState<string | undefined>("");
  const handleFetchRates = async () => {
    try {
      const data = await RatesService.getRates();
      const xrate = await RatesService.getExchangeRate();
      const usdRate = xrate?.conversion_rates.USD;
      if (!usdRate) return;
      setRate(usdRate);
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
    }
  };
  function usdToNaira(usdAmount: number): number {
    return parseFloat(
      (usdAmount * (1 / (rate ? parseFloat(rate) : 1))).toFixed(2)
    );
  }
  useEffect(() => {
    handleFetchRates();
  }, []);

  if (topCoins?.length <= 0) {
    return (
      <section
        id="rates"
        className="w-full h-[250px] bg-background-gray dark:bg-foreground"
      >
        <h2 className="font-Inter font-bold text-2xl md:text-3xl text-center">
          Top Traded{" "}
          <span className="text-forestgreen dark:text-secondary">Coins</span>
        </h2>
        {/* Simple spinner */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <div className="mx-auto w-12 h-12 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
          <p className="w-full text-gray-300 dark:text-gray-400 text-center animate-pulse text-sm">
            Loading live rates...
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="rates"
        className="relative w-full h-full py-5 bg-background-gray dark:bg-foreground overflow-x-hidden"
      >
        <div className="max-container flex flex-col gap-8">
          <h2 className="font-Inter font-bold text-2xl md:text-3xl text-center">
            Top Traded{" "}
            <span className="text-forestgreen dark:text-secondary">Coins</span>
          </h2>
          <div className="w-fit mx-auto my-4 bg-background dark:bg-forestgreen-dark rounded-3xl flex items-center">
            <span
              onClick={() => handleTabClick("Dollar")}
              className={`${
                activeTab === "Dollar" &&
                "bg-forestgreen text-background dark:bg-secondary"
              } px-6 py-2 cursor-pointer duration-200 ease-in-out rounded-3xl`}
            >
              Dollar Rate
            </span>
            <span
              onClick={() => handleTabClick("Naira")}
              className={`${
                activeTab === "Naira" &&
                "bg-forestgreen text-background dark:bg-secondary"
              } px-6 py-2 cursor-pointer duration-200 ease-in-out rounded-3xl`}
            >
              Naira Rate
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {topCoins?.map((coin) => {
              return (
                <CryptoCard
                  key={coin?.uuid}
                  name={coin?.name ?? ""}
                  symbol={coin?.symbol ?? ""}
                  price={
                    activeTab === "Naira"
                      ? String(usdToNaira(parseFloat(coin?.price ?? "")))
                      : coin?.price ?? ""
                  }
                  change={coin?.change ?? ""}
                  iconUrl={coin?.iconUrl ?? ""}
                  sparkline={coin?.sparkline ?? []}
                  rank={coin?.rank ?? 0}
                  marketCap={
                    activeTab === "Naira"
                      ? String(usdToNaira(parseFloat(coin?.marketCap ?? "")))
                      : coin?.marketCap ?? ""
                  }
                  volume24h={coin?.["24hVolume"] ?? ""}
                  color={coin?.color ?? ""}
                  inNaira={activeTab === "Naira" && true}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Rates;
