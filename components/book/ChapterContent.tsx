'use client';

import React from 'react';
import { 
  Coffee, 
  ShieldAlert, 
  Sparkles, 
  Coins, 
  CandlestickChart, 
  Flame, 
  HelpCircle,
  AlertTriangle,
  Info,
  CheckCircle2
} from 'lucide-react';
import { BookChapter, Language } from '@/lib/brew-data/types';

interface ChapterContentProps {
  chapter: BookChapter;
  lang: Language;
  onJumpToTool?: (page: number) => void;
}

function renderChapterIcon(name: string) {
  switch (name) {
    case 'Coffee': return <Coffee className="w-4 h-4" />;
    case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
    case 'Sparkles': return <Sparkles className="w-4 h-4" />;
    case 'Coins': return <Coins className="w-4 h-4" />;
    case 'CandlestickChart': return <CandlestickChart className="w-4 h-4" />;
    case 'Flame': return <Flame className="w-4 h-4" />;
    case 'HelpCircle': return <HelpCircle className="w-4 h-4" />;
    default: return <Info className="w-4 h-4" />;
  }
}

export default function ChapterContent({ chapter, onJumpToTool }: ChapterContentProps) {
  return (
    <div className="space-y-5 font-serif text-[#2f241a] leading-relaxed">
      {/* Chapter Title & Number Header */}
      <div className="border-b border-[#cfbe9f] pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8d5b27]">
            {chapter.chapterNumber}
          </span>
          <div className="p-1 rounded-full bg-[#eee3ce] text-[#71471e]">
            {renderChapterIcon(chapter.iconName)}
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#382618] mt-1">
          {chapter.titleEn}
        </h2>
        <p className="text-xs italic text-[#6d5b45] mt-0.5">
          {chapter.subtitleEn}
        </p>
      </div>

      {/* Summary Box */}
      <div className="p-3.5 bg-[#f6f1e6] border-l-4 border-[#946535] rounded-r-md text-xs sm:text-sm italic text-[#4a392b]">
        {chapter.summaryEn}
      </div>

      {/* Chapter Illustrated Engraving Frame (if present) */}
      {chapter.illustration && (
        <div className="my-3 p-2 bg-[#f4ece0] border-2 border-[#cfbe9f] rounded-lg shadow-sm">
          <div className="image-container relative w-full h-48 sm:h-56 overflow-hidden rounded border border-[#bfa987] bg-black/10 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={chapter.illustration.url}
              alt={chapter.illustration.captionEn}
              className="w-full h-full object-contain sepia-[0.12] contrast-[1.05] brightness-[0.98] hover:scale-102 transition-transform duration-500"
            />
            {/* Gilded Corner Accent */}
            <div className="absolute top-1 left-1 text-[10px] text-[#e8c880] select-none">⚜</div>
            <div className="absolute top-1 right-1 text-[10px] text-[#e8c880] select-none">⚜</div>
          </div>
          <p className="text-center text-[10px] sm:text-[11px] italic text-[#63503d] font-serif mt-1.5 px-2">
            {chapter.illustration.captionEn}
          </p>
        </div>
      )}

      {/* Special Visual Gallery for Chapter III (Pairing) */}
      {chapter.id === 'pairing' && (
        <div className="my-3 p-3 bg-[#f8f5ed] border border-[#dfd3be] rounded-lg space-y-2">
          <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8b5928] text-center">
            Popular Official Pairing Assets in Brew
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 pt-1">
            {[
              { name: 'BNB', logo: '/token-logos/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png' },
              { name: 'USDT', logo: '/token-logos/0x55d398326f99059ff775485246999027b3197955.png' },
              { name: 'Tesla', logo: '/token-logos/0x5b1910eaad6450e50f816082aa078c41f10c292f.png' },
              { name: 'SpaceX', logo: '/token-logos/0xbe9d156892e55e7154bcd3cb0fea677f9d3103e1.png' },
              { name: 'NVIDIA', logo: '/token-logos/0x02fca66c1d1afb4e2a7884261eb00f63598a7436.png' },
              { name: 'Apple', logo: '/token-logos/0x431a3bee82e2ca41e49895cbece5bb0f76a89b7a.png' },
              { name: 'CAKE', logo: '/token-logos/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png' },
            ].map((item) => (
              <div key={item.name} className="flex flex-col items-center justify-center p-2 rounded bg-white border border-[#e4d8c2] shadow-2xs hover:border-[#8b5928] transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.logo} alt={item.name} className="w-8 h-8 rounded-full object-contain mb-1 shadow-2xs" />
                <span className="text-[10px] font-mono font-bold text-[#3d2a1a]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Special Visual Workflow for Chapter II (Launch Guide) */}
      {chapter.id === 'getting-started' && (
        <div className="my-3 p-3 bg-[#f8f5ed] border border-[#dfd3be] rounded-lg">
          <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8b5928] text-center mb-2">
            Atomic Launch Pipeline in BrewFactory
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-sans">
            <div className="p-2 bg-white rounded border border-[#dfd3be]">
              <div className="w-6 h-6 rounded-full bg-[#8b5928] text-white flex items-center justify-center font-bold mx-auto mb-1">1</div>
              <strong className="block text-[#3d2a1a]">Deploy Token</strong>
              <span className="text-[9px] text-[#715f4d]">1B fixed supply</span>
            </div>
            <div className="p-2 bg-white rounded border border-[#dfd3be]">
              <div className="w-6 h-6 rounded-full bg-[#8b5928] text-white flex items-center justify-center font-bold mx-auto mb-1">2</div>
              <strong className="block text-[#3d2a1a]">Create V3 Pool</strong>
              <span className="text-[9px] text-[#715f4d]">PancakeSwap V3</span>
            </div>
            <div className="p-2 bg-white rounded border border-[#dfd3be]">
              <div className="w-6 h-6 rounded-full bg-[#8b5928] text-white flex items-center justify-center font-bold mx-auto mb-1">3</div>
              <strong className="block text-[#3d2a1a]">Lock Liquidity</strong>
              <span className="text-[9px] text-[#715f4d]">BrewLiquidityLocker</span>
            </div>
            <div className="p-2 bg-white rounded border border-[#dfd3be]">
              <div className="w-6 h-6 rounded-full bg-[#8b5928] text-white flex items-center justify-center font-bold mx-auto mb-1">4</div>
              <strong className="block text-[#3d2a1a]">Live on Explore</strong>
              <span className="text-[9px] text-[#715f4d]">BscScan verified</span>
            </div>
          </div>
        </div>
      )}

      {/* Sections Content */}
      <div className="space-y-4 text-xs sm:text-sm">
        {chapter.sections.map((section) => (
          <div key={section.id} className="space-y-3">
            <h3 className="font-bold text-[#3d2a1b] text-base border-b border-[#e4d8c2] pb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#946535]" />
              {section.titleEn}
            </h3>

            <div className="space-y-2 text-[#3d2e20]">
              {section.contentEn.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Callouts if any */}
            {section.callout && (
              <div className={`p-3 rounded-md border text-xs font-sans flex items-start gap-2.5 ${
                section.callout.type === 'warning'
                  ? 'bg-amber-50/70 border-amber-200 text-amber-900'
                  : section.callout.type === 'tip'
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  : 'bg-[#f4efe5] border-[#dfd4c0] text-[#4d3a29]'
              }`}>
                {section.callout.type === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                ) : section.callout.type === 'tip' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700 mt-0.5" />
                ) : (
                  <Info className="w-4 h-4 shrink-0 text-[#7c572e] mt-0.5" />
                )}
                <div>
                  <strong className="block font-semibold mb-0.5">
                    {section.callout.type === 'warning' 
                      ? 'Warning' 
                      : 'Protocol Note'}
                  </strong>
                  <span>{section.callout.textEn}</span>
                </div>
              </div>
            )}

            {/* Key Data Box */}
            {section.keyData && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 font-sans text-xs">
                {section.keyData.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-[#fbf8f2] border border-[#dfd4c2] rounded text-left">
                    <div className="text-[10px] uppercase text-[#7c6954] font-medium">
                      {item.labelEn}
                    </div>
                    <div className="font-bold text-[#352517] text-sm font-mono mt-0.5">
                      {item.value}
                    </div>
                    {item.hintEn && (
                      <div className="text-[10px] text-[#8c7760] mt-0.5 truncate">
                        {item.hintEn}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Interactive tool suggestions */}
      {chapter.id === 'overview' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans">
          <button
            onClick={() => onJumpToTool(4)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            📜 Continue to Protocol History & Chronicles (Page 4)
          </button>
        </div>
      )}

      {chapter.id === 'history' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans">
          <button
            onClick={() => onJumpToTool(5)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            ⏳ Open On-Chain Historical Timeline & Eras (Page 5)
          </button>
        </div>
      )}

      {chapter.id === 'getting-started' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans">
          <button
            onClick={() => onJumpToTool(8)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            ⚡ Open Token Brewing Simulator (Page 8)
          </button>
        </div>
      )}

      {chapter.id === 'pairing' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans">
          <button
            onClick={() => onJumpToTool(10)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            📚 Open 25 Quote Assets Catalog (Page 10)
          </button>
        </div>
      )}

      {chapter.id === 'trading' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans">
          <button
            onClick={() => onJumpToTool(12)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            🧮 Try Swap Simulator & Fee Calculator (Page 12)
          </button>
        </div>
      )}

      {chapter.id === 'fees' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans flex flex-wrap justify-center gap-2">
          <button
            onClick={() => onJumpToTool(14)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            🗺️ Inspect Architecture Lifecycle Blueprint (Page 14)
          </button>
          <button
            onClick={() => onJumpToTool(15)}
            className="px-4 py-2 bg-[#2d1a10] hover:bg-[#452818] text-[#e8c880] text-xs font-semibold rounded shadow cursor-pointer transition-colors border border-[#8a683c]"
          >
            ⚖️ Open Protocol Ledger & Tokenomics (Page 15)
          </button>
        </div>
      )}

      {chapter.id === 'contracts' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans">
          <button
            onClick={() => onJumpToTool(16)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            📜 View Verified Smart Contracts Registry (Page 16)
          </button>
        </div>
      )}

      {chapter.id === 'faq' && onJumpToTool && (
        <div className="pt-3 border-t border-[#dfd4c0] text-center font-sans flex flex-wrap justify-center gap-2">
          <button
            onClick={() => onJumpToTool(18)}
            className="px-4 py-2 bg-[#422919] hover:bg-[#583824] text-[#f4eedf] text-xs font-semibold rounded shadow cursor-pointer transition-colors"
          >
            💬 Open Complete FAQ Directory (Page 18)
          </button>
          <button
            onClick={() => onJumpToTool(19)}
            className="px-4 py-2 bg-[#2d1a10] hover:bg-[#452818] text-[#e8c880] text-xs font-semibold rounded shadow cursor-pointer transition-colors border border-[#8a683c]"
          >
            🔍 Search 1,050+ Token Directory (Page 19)
          </button>
        </div>
      )}
    </div>
  );
}
