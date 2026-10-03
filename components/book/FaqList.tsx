'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '@/lib/brew-data/types';

interface FaqListProps {
  lang: Language;
}

export default function FaqList({ lang: _lang }: FaqListProps) {
  const faqs = [
    {
      qEn: "Why isn’t my Web3 wallet showing up in the connection menu?",
      aEn: 'Use a browser with your wallet extension installed and enabled (such as MetaMask, Rabby, or Binance Web3 Wallet), or open brew.family inside your mobile wallet’s built-in browser. Make sure your wallet is unlocked and set to BNB Smart Chain (Chain ID: 56). The connection menu lists providers that expose a compatible EIP-1193 interface in that browser.'
    },
    {
      qEn: 'Can I change my token name or ticker after launch?',
      aEn: 'NO. The token’s name, ticker, and on-chain metadata pointers are permanently fixed when created in the deployment transaction. Always double-check before confirming your launch. A draft can be edited prior to submitting.'
    },
    {
      qEn: 'Why are new trades occasionally missing historical USD values?',
      aEn: 'BSC transactions confirm rapidly in ~3 seconds before third-party market indexers (GeckoTerminal/DEX Screener) finish computing historical USD valuations. Brew dynamically refreshes prices as oracle feeds index them, rather than using today’s fluctuating exchange rate for an older trade.'
    },
    {
      qEn: 'Can the token creator withdraw or remove the launch liquidity?',
      aEn: 'ABSOLUTELY NOT. The launch positions remain in BrewLiquidityLocker permanently. The contract contains zero functions to withdraw principal or transfer those LP NFT positions out. Collecting accumulated trading fees does not unlock or affect the locked principal liquidity.'
    },
    {
      qEn: 'Does each token need a newly deployed factory contract?',
      aEn: 'No. The shared, audited BrewFactory contract creates a new BEP-20 token and PancakeSwap V3 pool for each launch seamlessly and permissionlessly across BSC.'
    },
    {
      qEn: 'What are bStocks and how do tokenized equities work on Brew?',
      aEn: 'bStocks are tokenized representations of real-world global equities on BNB Chain. Brew pioneered the ability for community tokens to pair directly against equities like Tesla, SpaceX, NVIDIA, Apple, and the S&P 500 ETF, enabling 24/7 AMM trading without synthetic bridges.'
    },
    {
      qEn: 'How does the 80% protocol buyback and 100% token burn operate?',
      aEn: '100% of trading fees accrued in the newly launched token are permanently incinerated to 0x...dead. Furthermore, 80% of protocol fees claimed by the treasury are systematically deployed to buy back $BREW from the open market and burn it, providing persistent deflationary pressure.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 font-sans text-xs text-[#2e2319]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928]">
            OFFICIAL TROUBLESHOOTING & FAQ
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ebdcc1] text-[#69431d] font-semibold">
            brew.family / FAQ
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          Official answers regarding wallet connectivity, metadata immutability, liquidity guarantees, and market feeds.
        </p>
      </div>

      {/* Embedded Library Illustration */}
      <div className="p-2 bg-[#f4ece0] border-2 border-[#cfbe9f] rounded-lg shadow-sm">
        <div className="image-container relative w-full h-40 sm:h-48 overflow-hidden rounded border border-[#bfa987] bg-black/5 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustrations/library-faq.jpg"
            alt="The Grand Library of FAQ & Protocol Archives"
            className="w-full h-full object-contain sepia-[0.12] contrast-[1.05]"
          />
        </div>
        <p className="text-center text-[10px] italic text-[#63503d] font-serif mt-1 px-2">
          Fig. 11 — Scholars & Scribes in the Great Protocol Archives of brew.family
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#fcfaf5] border border-[#dfd4c0] rounded-lg overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-3.5 text-left flex items-start justify-between gap-3 hover:bg-[#f6efe1] transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#eee3ce] text-[#71461f] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    Q
                  </div>
                  <span className="font-serif font-bold text-sm text-[#382618]">
                    {faq.qEn}
                  </span>
                </div>
                <div className="text-[#8c7760] shrink-0 mt-1">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#523e2b] leading-relaxed border-t border-[#f0e6d5] pl-11 font-serif">
                  {faq.aEn}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
