import { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';
export interface ContactModalState {
  state: boolean;
  type: string;
  coin?: string
}

export interface AppContextTypes {
  isContactModalOpen: ContactModalState;
  setIsContactModalOpen: Dispatch<
    SetStateAction<{ state: boolean; type: string; coin?: string }>
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

export interface Imagestypes{
  src: string | StaticImageData
  label: string
}
export interface ImageSliderprops{
  images: Imagestypes[]
  isHidden?: boolean
}
export interface CryptoCoin {
  "24hVolume": string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  contractAddresses: string[];
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: Array<string | null>;
  symbol: string;
  tier: number;
  uuid: string;
}

export interface CoinSummary {
  name: string;
  symbol: string;
  price: string;             // e.g. "103296.09145692737"
  change: string;            // percent change, e.g. "-0.31"
  iconUrl: string;           // URL to SVG/PNG
  sparkline?: Array<string | null>;
  rank: number;
  marketCap: string;         // e.g. "2052006812658"
  volume24h: string;         // e.g. "17694448384"
  color?: string;            // hex color, default "#f7931A"
  inNaira?: boolean
}