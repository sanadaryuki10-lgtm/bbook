'use client';

import React from 'react';
import { Coffee, ShieldCheck, CheckCircle2, Globe, Cpu, Layers } from 'lucide-react';
import { Language } from '@/lib/brew-data/types';
import { getTranslation } from '@/lib/brew-data/translations';

interface FrontispieceProps {
  lang: Language;
  onJumpToPage: (page: number) => void;
}

export default function Frontispiece({ lang, onJumpToPage }: FrontispieceProps) {
  const t = getTranslation(lang);

  return (
    <div className="space-y-6 font-serif text-[#2c221a]">
      {/* Top Header ornament */}
      <div className="text-center border-b border-[#c8b79b] pb-4">
        <span className="text-[11px] uppercase tracking-widest text-[#7c6951] font-sans">
          {t.networkBadge}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mt-1 text-[#382618]">
          OFFICIAL CODEX OF BREW PROTOCOL
        </h2>
        <p className="text-xs italic text-[#6d5b45] mt-0.5">
          Comprehensive Documentation, Smart Contract Architecture & Launch Archive
        </p>
      </div>

      {/* Emblem & Certificate Box */}
      <div className="bg-[#f2ebdc] border border-[#d6c7b0] rounded-lg p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-4">
          <div className="image-container w-16 h-16 rounded-full bg-[#3d2719] p-1 shrink-0 border-2 border-[#b89a60] shadow-inner flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/brand/brew-mark.png" 
              alt="Brew Family Emblem" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#2b7245] font-sans font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.verifiedData}</span>
            </div>
            <h3 className="text-lg font-bold text-[#3d2719]">
              https://brew.family
            </h3>
            <p className="text-xs text-[#725e46] font-sans">
              Verified BSC Mainnet Snapshot · Chain ID: 56 · Block ~120.4M+
            </p>
          </div>
        </div>

        {/* Frontispiece Large Illustration */}
        <div className="border border-[#cfbe9f] rounded-lg p-1.5 bg-[#eae1ce]">
          <div className="image-container relative w-full h-48 sm:h-56 overflow-hidden rounded border border-[#bda682] bg-black/5 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/illustrations/brew-alchemy.jpg"
              alt="Frontispiece Illustration"
              className="w-full h-full object-contain sepia-[0.1] contrast-[1.05]"
            />
          </div>
          <p className="text-center text-[10px] italic text-[#614e3b] mt-1">
            Illustration I — The Brew Smart Contract Foundry & Concentrated Liquidity Engine
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#473628] leading-relaxed italic border-t border-[#dfd2be] pt-2">
          &ldquo;This volume compiles all knowledge, technical guides, fee architectures, the 25 quote asset catalog, and the complete directory of over 1,050 tokens brewed and traded via Brew smart contracts on BNB Chain.&rdquo;
        </p>
      </div>

      {/* Protocol Summary Matrix */}
      <div className="grid grid-cols-2 gap-3 font-sans text-xs">
        <div className="p-3 bg-[#f8f4ec] border border-[#dfd5c4] rounded-md">
          <div className="flex items-center gap-1.5 text-[#875525] font-semibold mb-1">
            <Globe className="w-3.5 h-3.5" />
            <span>Ecosystem</span>
          </div>
          <p className="text-[#554332]">
            BNB Smart Chain Mainnet
          </p>
        </div>

        <div className="p-3 bg-[#f8f4ec] border border-[#dfd5c4] rounded-md">
          <div className="flex items-center gap-1.5 text-[#875525] font-semibold mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>Liquidity Engine</span>
          </div>
          <p className="text-[#554332]">
            PancakeSwap V3 (Concentrated)
          </p>
        </div>

        <div className="p-3 bg-[#f8f4ec] border border-[#dfd5c4] rounded-md">
          <div className="flex items-center gap-1.5 text-[#875525] font-semibold mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Liquidity Security</span>
          </div>
          <p className="text-[#554332]">
            Permanently Locked in Locker
          </p>
        </div>

        <div className="p-3 bg-[#f8f4ec] border border-[#dfd5c4] rounded-md">
          <div className="flex items-center gap-1.5 text-[#875525] font-semibold mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Pair Model</span>
          </div>
          <p className="text-[#554332]">
            Single Pair, Multipair V1 & V2
          </p>
        </div>
      </div>

      {/* Quick Navigation Action */}
      <div className="pt-2 text-center font-sans">
        <button
          onClick={() => onJumpToPage(2)}
          className="text-xs text-[#8c5929] hover:text-[#5e3814] font-semibold underline underline-offset-4 cursor-pointer"
        >
          → View Full Table of Contents
        </button>
      </div>
    </div>
  );
}
