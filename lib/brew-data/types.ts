export type Language = 'en' | 'zh' | 'ja';

export interface SmartContractInfo {
  name: string;
  label: string;
  address: string;
  role: 'core' | 'infra';
  descriptionEn: string;
  bscScanUrl: string;
  functions?: string[];
  keyHighlights: string[];
}

export interface QuoteTokenInfo {
  address: string;
  name: string;
  symbol: string;
  category: 'native' | 'stable' | 'crypto' | 'bstock' | 'brand';
  decimals: number;
  iconChar: string;
  badgeColor: string;
  description: string;
  logoUrl?: string;
}

export interface LaunchedTokenItem {
  address: string;
  name: string;
  symbol: string;
  quoteSymbol: string;
  kind: string;
  pairCount: number;
  pool: string;
  launchedAt: number | null;
  creator: string;
  imageUrl?: string;
  blockNumber?: number;
  transactionHash?: string;
  description?: string;
}

export interface BookChapter {
  id: string;
  chapterNumber: string;
  titleEn: string;
  subtitleEn: string;
  iconName: string;
  summaryEn: string;
  illustration?: {
    url: string;
    captionEn: string;
  };
  sections: BookSection[];
}

export interface BookSection {
  id: string;
  titleEn: string;
  contentEn: string[];
  callout?: {
    type: 'note' | 'warning' | 'tip' | 'technical';
    textEn: string;
  };
  keyData?: { labelEn: string; value: string; hintEn?: string }[];
}

