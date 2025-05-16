"use client";
import { createContext, useState } from "react";
import { AppContextTypes } from "@/app/types/types";

export const AppContext = createContext<AppContextTypes | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState({
    state: false,
    type: "starter",
  });
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isContactModalOpen,
        setIsContactModalOpen,
        isMobileNavOpen,
        setIsMobileNavOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
