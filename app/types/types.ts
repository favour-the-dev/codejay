import { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';

export interface ContactModalState {
  state: boolean;
  type: string;
  coin?: string
}

export interface rateType{
  usd: string | undefined
  eur: string | undefined
  gbp: string | undefined
}

export interface AppContextTypes {
  isContactModalOpen: ContactModalState;
  setIsContactModalOpen: Dispatch<
    SetStateAction<{ state: boolean; type: string; coin?: string }>
  >;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
  topCoins: (CryptoCoin | undefined)[];
  rate: rateType;
  refreshRates: () => Promise<void>;
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
  rate?: string | undefined
}
export interface ImageSliderprops{
  images: Imagestypes[]
  isHidden?: boolean
  grid?: string
  fiat?: boolean
  rates?: rateType;
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
  price: string;
  change: string;
  iconUrl: string;
  sparkline?: Array<string | null>;
  rank: number;
  marketCap: string;
  volume24h: string;
  color?: string;
  inNaira?: boolean
}

export interface HeroCardProps {
  name: string;
  symbol: string;
  price: string;
  iconUrl: string;
  color?: string;
  customStyle?: string;
  rate: rateType;
}

export type Persisted = {
  i: number;
  expires: number;
};