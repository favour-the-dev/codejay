"use client";
import { createContext, useState } from "react";

interface AppContextTypes {
  isContactModalOpen: boolean;
  setIsContactModalOpen: (isOpen: boolean) => void;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
}

export const AppContext = createContext<AppContextTypes | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
