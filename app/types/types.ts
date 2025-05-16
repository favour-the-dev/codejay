import { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';
export interface ContactModalState {
  state: boolean;
  type: string;
}

export interface AppContextTypes {
  isContactModalOpen: ContactModalState;
  setIsContactModalOpen: Dispatch<
    SetStateAction<{ state: boolean; type: string }>
  >;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  hoverEffect?: boolean;
  type?: string;
  animationDelay?: number
}