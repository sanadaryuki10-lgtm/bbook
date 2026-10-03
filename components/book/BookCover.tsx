'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, ShieldCheck, Flame, Coffee, Compass } from 'lucide-react';
import { Language } from '@/lib/brew-data/types';
import { getTranslation } from '@/lib/brew-data/translations';

interface BookCoverProps {
  onOpen: () => void;
  lang: Language;
}

export default function BookCover({ onOpen, lang }: BookCoverProps) {
  const t = getTranslation(lang);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6 p-1 sm:p-2">
      {/* Leather Book Frame with layered shadows */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative bg-gradient-to-br from-[#2a1b14] via-[#1f130d] to-[#120a06] text-[#e8dfc8] rounded-xl p-8 sm:p-12 shadow-2xl border-4 border-[#8c6b3e] overflow-hidden"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(212, 175, 55, 0.3) inset, 8px 0 20px rgba(0,0,0,0.6)'
        }}
      >
        {/* Book Spine Simulation on left side */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#8c6b3e]/40 pointer-events-none" />

        {/* Golden Filigree Decorative Borders */}
        <div className="absolute inset-3 border border-[#c4a45a]/40 rounded-lg pointer-events-none" />
        <div className="absolute inset-4 border border-[#c4a45a]/20 rounded-md pointer-events-none" />

        {/* Corner Ornaments */}
        <div className="absolute top-5 left-8 text-[#d4af37]/60 font-serif text-sm pointer-events-none">⚜</div>
        <div className="absolute top-5 right-5 text-[#d4af37]/60 font-serif text-sm pointer-events-none">⚜</div>
        <div className="absolute bottom-5 left-8 text-[#d4af37]/60 font-serif text-sm pointer-events-none">⚜</div>
        <div className="absolute bottom-5 right-5 text-[#d4af37]/60 font-serif text-sm pointer-events-none">⚜</div>

        {/* Header Ribbon Mark */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 pt-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-mono">
            <span className="w-8 h-px bg-[#c4a45a]/50" />
            <span>BNB SMART CHAIN · CHAIN ID 56</span>
            <span className="w-8 h-px bg-[#c4a45a]/50" />
          </div>

          {/* Official Golden Seal with Brew Mark Artwork */}
          <div className="relative my-3 flex flex-col items-center">
            <div className="image-container relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#d4af37] p-1.5 bg-gradient-to-b from-[#3a251b] to-[#120a06] shadow-xl flex items-center justify-center">
              {/* Outer Golden Glow */}
              <div className="absolute inset-0 rounded-full bg-[#d4af37]/15 blur-md -z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/brew-mark.png"
                alt="Brew Official Emblem"
                className="w-full h-full object-contain filter drop-shadow-md rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#d4af37] text-[#1f130d] rounded-full p-1 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Featured Quote Asset Medallions */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {[
                { name: 'BNB', src: '/token-logos/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png' },
                { name: 'Tesla', src: '/token-logos/0x5b1910eaad6450e50f816082aa078c41f10c292f.png' },
                { name: 'SpaceX', src: '/token-logos/0xbe9d156892e55e7154bcd3cb0fea677f9d3103e1.png' },
                { name: 'Nvidia', src: '/token-logos/0x02fca66c1d1afb4e2a7884261eb00f63598a7436.png' },
                { name: 'USDT', src: '/token-logos/0x55d398326f99059ff775485246999027b3197955.png' },
                { name: 'Apple', src: '/token-logos/0x431a3bee82e2ca41e49895cbece5bb0f76a89b7a.png' },
              ].map((token) => (
                <div
                  key={token.name}
                  className="image-container w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d4af37]/60 p-0.5 bg-black/40 shadow-xs flex items-center justify-center"
                  title={token.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={token.src} alt={token.name} className="w-full h-full object-contain rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Book Titles */}
          <div className="space-y-2 max-w-lg">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-[#f7eed9] drop-shadow-md font-bold uppercase">
              {t.bookCoverTitle}
            </h1>
            <p className="font-serif italic text-sm sm:text-base text-[#c7b494] leading-relaxed">
              {t.bookCoverSubtitle}
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 w-48 justify-center py-2">
            <span className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-full" />
            <span className="text-[#d4af37] text-xs">✦</span>
            <span className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-full" />
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left w-full my-4 py-3 px-4 rounded-lg bg-black/30 border border-[#8c6b3e]/30 text-xs">
            <div>
              <div className="text-[#9e8d75] uppercase text-[10px]">
                Source Data
              </div>
              <div className="font-semibold text-[#f1e6cf] font-mono">brew.family</div>
            </div>
            <div>
              <div className="text-[#9e8d75] uppercase text-[10px]">
                Total Tokens
              </div>
              <div className="font-semibold text-[#e6c780] font-mono">
                1,050+ Launches
              </div>
            </div>
            <div>
              <div className="text-[#9e8d75] uppercase text-[10px]">
                Pair Options
              </div>
              <div className="font-semibold text-[#f1e6cf] font-mono">
                25+ Assets & bStocks
              </div>
            </div>
            <div>
              <div className="text-[#9e8d75] uppercase text-[10px]">
                Liquidity
              </div>
              <div className="font-semibold text-[#73cf97] font-mono">100% Locked</div>
            </div>
          </div>

          <p className="text-xs text-[#a6957a] font-serif">
            {t.bookAuthor}
          </p>

          {/* Action Open Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpen}
            className="mt-4 px-8 py-3.5 bg-gradient-to-r from-[#c49a45] via-[#e2bd6b] to-[#c49a45] text-[#1d1209] font-serif font-bold text-base rounded-md shadow-lg hover:shadow-[#c49a45]/30 hover:brightness-110 transition-all flex items-center gap-3 cursor-pointer border border-[#ffe094]"
          >
            <BookOpen className="w-5 h-5" />
            <span>{t.openBook}</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
