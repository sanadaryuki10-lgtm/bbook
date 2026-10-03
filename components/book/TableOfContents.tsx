'use client';

import React from 'react';
import { 
  Coffee, 
  ShieldAlert, 
  Sparkles, 
  Coins, 
  CandlestickChart, 
  Flame, 
  FileCode, 
  HelpCircle, 
  Layers, 
  Calculator, 
  Database,
  ArrowRight,
  History,
  Compass,
  Workflow
} from 'lucide-react';
import { Language } from '@/lib/brew-data/types';
import { getTranslation } from '@/lib/brew-data/translations';

interface TableOfContentsProps {
  lang: Language;
  onSelectPage: (pageNumber: number) => void;
}

export default function TableOfContents({ lang, onSelectPage }: TableOfContentsProps) {
  const t = getTranslation(lang);

  const chapters = [
    { page: 3, num: 'PROLOGUE', title: 'Philosophy & Protocol Architecture', desc: 'Core principles, fair launch & PancakeSwap V3 liquidity', icon: Coffee },
    { page: 4, num: 'CHRONICLES', title: 'History & Origins of Brew Protocol', desc: 'Anti-rug movement, bStocks equity bridge & 80% buyback', icon: History, badge: 'History' },
    { page: 5, num: 'TIMELINE', title: 'Historical Timeline & Milestones', desc: 'On-chain chronological epochs & milestone registry on BSC', icon: Compass, badge: 'Interactive' },
    { page: 6, num: 'CH. I', title: 'Risk Disclaimer & Regulatory Compliance', desc: 'Non-US citizen eligibility, CFTC notices & risk mitigation', icon: ShieldAlert },
    { page: 7, num: 'CH. II', title: 'Creating Your Token Guide', desc: '4-step deployment process, 1B supply & locked fees', icon: Sparkles },
    { page: 8, num: 'SIMULATOR', title: 'Interactive Token Brewing Simulator', desc: 'Simulate token creation & initial pool liquidity', icon: Calculator, badge: 'Interactive' },
    { page: 9, num: 'CH. III', title: 'Choosing Your Pair (Quote Assets)', desc: 'WBNB, USDT, USDC, crypto & bStocks equities', icon: Coins },
    { page: 10, num: 'CATALOG', title: '25 Verified Quote Tokens Catalog', desc: 'Contract addresses, tickers & tokenized bStocks', icon: Layers, badge: 'Catalog' },
    { page: 11, num: 'CH. IV', title: 'Explore & Trade Mechanics', desc: 'PancakeSwap Quoter V2, BNB routes & slippage guards', icon: CandlestickChart },
    { page: 12, num: 'CALCULATOR', title: 'Swap & Fee Calculator Simulator', desc: 'Trade execution simulator & fee split visualizer', icon: Calculator, badge: 'Interactive' },
    { page: 13, num: 'CH. V', title: 'Fee Architecture & Holder Rewards', desc: '1% pool fee, 100% token burn, 50/50 paired split & buyback', icon: Flame },
    { page: 14, num: 'BLUEPRINT', title: 'Architecture Map & Token Lifecycle', desc: 'Atomic transaction flow blueprint from draft to audit', icon: Workflow, badge: 'Blueprint' },
    { page: 15, num: 'LEDGER', title: 'Protocol Ledger & Tokenomics', desc: 'Deflation mechanics, Single Pair vs Multipair V1 & V2', icon: Layers, badge: 'Analytics' },
    { page: 16, num: 'CH. VI', title: 'Core Smart Contracts Directory', desc: 'BrewFactory, Locker, DistributorFactory & BscScan verification', icon: FileCode },
    { page: 17, num: 'INFRA', title: 'External Trading Infrastructure', desc: 'PancakeSwap V3 Router, Quoter V2, Position Manager & WBNB', icon: FileCode },
    { page: 18, num: 'CH. VII', title: 'Official Questions & Answers', desc: 'Wallet solutions, immutable metadata, delayed USD & locks', icon: HelpCircle },
    { page: 19, num: 'INDEX', title: 'Directory of 1,050+ Launched Tokens', desc: 'Real verified checkpoint list of tokens launched on Brew', icon: Database, badge: '1,050+ Tokens' },
  ];

  return (
    <div className="space-y-4 font-serif text-[#2e2319]">
      <div className="border-b border-[#cfbe9f] pb-3 text-center">
        <h2 className="text-2xl font-bold tracking-wide text-[#3f2a1a] uppercase">
          {t.tableOfContents}
        </h2>
        <p className="text-xs text-[#705e49] font-sans">
          Select any chapter to jump directly to its page
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans max-h-[580px] overflow-y-auto pr-1">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          return (
            <button
              key={ch.page}
              onClick={() => onSelectPage(ch.page)}
              className="text-left p-2.5 rounded-md border border-[#dfd3be] bg-[#f8f5ed] hover:bg-[#eee4cf] hover:border-[#b89b6b] transition-all flex items-start gap-2.5 group cursor-pointer"
            >
              <div className="p-1.5 rounded bg-[#ebdcc1] text-[#694420] shrink-0 group-hover:bg-[#dfcbb0]">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#8f5d2b] tracking-wider">
                    {ch.num} · Page {ch.page}
                  </span>
                  {ch.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#e8c880]/40 text-[#694420] font-semibold">
                      {ch.badge}
                    </span>
                  )}
                </div>
                <div className="font-serif font-bold text-[#322316] text-xs leading-snug group-hover:text-[#6e3e11] truncate">
                  {ch.title}
                </div>
                <div className="text-[11px] text-[#715f4a] line-clamp-1 mt-0.5">
                  {ch.desc}
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#9e8a71] shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
