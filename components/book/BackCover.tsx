'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Coffee, ExternalLink, ShieldCheck, Heart, RotateCcw } from 'lucide-react';
import { Language } from '@/lib/brew-data/types';
import { getTranslation } from '@/lib/brew-data/translations';

interface BackCoverProps {
  onClose: () => void;
  onGoToPage: (page: number) => void;
  lang: Language;
}

export default function BackCover({ onClose, onGoToPage, lang }: BackCoverProps) {
  const t = getTranslation(lang);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6 p-1 sm:p-2 font-serif">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative bg-gradient-to-br from-[#2a1b14] via-[#1f130d] to-[#120a06] text-[#e8dfc8] rounded-xl p-8 sm:p-12 shadow-2xl border-4 border-[#8c6b3e] overflow-hidden text-center space-y-6"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(212, 175, 55, 0.3) inset, -8px 0 20px rgba(0,0,0,0.6)'
        }}
      >
        {/* Right book edge simulation */}
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-3 border border-[#c4a45a]/40 rounded-lg pointer-events-none" />

        {/* Top Emblem */}
        <div className="flex justify-center mb-1">
          <div className="image-container w-16 h-16 rounded-full border border-[#d4af37]/60 p-1 bg-black/40 shadow-inner flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/brew-mark.png" alt="Brew Family Mark" className="w-full h-full object-contain rounded-full" />
          </div>
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#f7eed9]">
            COLOPHON & EPILOGUE
          </h2>
          <p className="text-xs sm:text-sm italic text-[#c7b494] leading-relaxed">
            This codex aggregates all on-chain data schemas, mathematical formulas, smart contracts, and 1,050+ launch checkpoints from the brew.family protocol on BNB Smart Chain.
          </p>
        </div>

        {/* Official Links Box */}
        <div className="p-4 rounded-lg bg-black/40 border border-[#8c6b3e]/40 font-sans text-xs max-w-md mx-auto text-left space-y-2.5">
          <div className="flex items-center justify-between text-[#c4a45a] font-bold pb-1.5 border-b border-[#8c6b3e]/30">
            <span>Official Links & Verification</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>

          <div className="flex items-center justify-between text-[#e4d8c2]">
            <span>Main Website:</span>
            <a 
              href="https://brew.family" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#e2bd6b] hover:underline flex items-center gap-1 font-mono font-bold"
            >
              https://brew.family <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center justify-between text-[#e4d8c2]">
            <span>Web Documentation:</span>
            <a 
              href="https://brew.family/docs" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#e2bd6b] hover:underline flex items-center gap-1 font-mono"
            >
              brew.family/docs <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center justify-between text-[#e4d8c2]">
            <span>Network:</span>
            <span className="font-mono text-[#a3d9b1]">BNB Smart Chain (Chain ID: 56)</span>
          </div>

          <div className="flex items-center justify-between text-[#e4d8c2]">
            <span>Liquidity Custody:</span>
            <span className="font-mono text-[#a3d9b1]">BrewLiquidityLocker (Verified)</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onGoToPage(0)}
            className="px-5 py-2.5 bg-[#3a251b] hover:bg-[#4d3225] text-[#e8dfc8] font-sans font-semibold text-xs rounded border border-[#8c6b3e]/50 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-[#e2bd6b]" />
            <span>{t.backToCover}</span>
          </button>

          <button
            onClick={() => onGoToPage(2)}
            className="px-5 py-2.5 bg-gradient-to-r from-[#c49a45] via-[#e2bd6b] to-[#c49a45] text-[#1d1209] font-sans font-bold text-xs rounded shadow-md hover:brightness-110 flex items-center gap-2 cursor-pointer transition-all border border-[#ffe094]"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.tableOfContents}</span>
          </button>
        </div>

        {/* Bottom signet */}
        <div className="text-[11px] text-[#91816a] font-sans pt-2">
          Built for Web3 explorers & the BNB Chain community
        </div>
      </motion.div>
    </div>
  );
}
