'use client';

import React from 'react';
import { Layers, Flame, ShieldCheck, Check, ArrowRight, Lock, TrendingUp } from 'lucide-react';
import { Language } from '@/lib/brew-data/types';

interface ProtocolLedgerProps {
  lang: Language;
}

export default function ProtocolLedger({ lang: _lang }: ProtocolLedgerProps) {
  return (
    <div className="space-y-4 font-sans text-xs text-[#2e2319]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928]">
            TECHNICAL PROTOCOL LEDGER
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ebdcc1] text-[#69431d] font-semibold">
            Tokenomics & Security
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          Protocol Ledger & Tokenomics
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          Comparative architecture of factory engines (Single Pair vs Multipair V1 & V2) and deflationary mechanics.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-[#fcfaf5] border border-[#dfd4c0] rounded-lg overflow-hidden shadow-xs">
        <div className="bg-[#eee4d0] px-3 py-2 border-b border-[#dfd4c0] font-serif font-bold text-[#3d2a1b] text-xs">
          Factory Variants Comparison
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-[#ebdcc4] bg-[#f5ecdd] text-[#66523e]">
                <th className="p-2.5 font-semibold">Feature / Parameter</th>
                <th className="p-2.5 font-semibold">Single Pair (Std)</th>
                <th className="p-2.5 font-semibold">Multipair V1</th>
                <th className="p-2.5 font-semibold">Multipair V2</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ebdcc4] text-[#473628]">
              <tr>
                <td className="p-2.5 font-medium">Pool Count</td>
                <td className="p-2.5">1 PancakeSwap Pool</td>
                <td className="p-2.5">2 Simultaneous Pools</td>
                <td className="p-2.5">2 to 5 Pools</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Execution Mode</td>
                <td className="p-2.5">1 Atomic Tx</td>
                <td className="p-2.5">1 Joint Tx</td>
                <td className="p-2.5">Incremental Plans</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Factory Contract</td>
                <td className="p-2.5 font-mono text-[10px]">BrewFactory</td>
                <td className="p-2.5 font-mono text-[10px]">BrewMultiPairFactory</td>
                <td className="p-2.5 font-mono text-[10px]">BrewMultiPairFactoryV2</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Locker Contract</td>
                <td className="p-2.5 font-mono text-[10px]">BrewLiquidityLocker</td>
                <td className="p-2.5 font-mono text-[10px]">Locker V1</td>
                <td className="p-2.5 font-mono text-[10px]">Locker V2</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Best Used For</td>
                <td className="p-2.5">Quick launch WBNB/USDT</td>
                <td className="p-2.5">Dual pair (WBNB + Equities)</td>
                <td className="p-2.5">Multi-asset large-scale launches</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Deflationary & Security Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Pillar 1: Burn Mechanism */}
        <div className="p-3 bg-[#fdfaf4] border border-[#ded2bd] rounded-lg space-y-1.5">
          <div className="flex items-center gap-1.5 font-serif font-bold text-[#8c3e1e]">
            <Flame className="w-4 h-4 text-rose-600" />
            <span>Deflationary Architecture</span>
          </div>
          <p className="text-[11px] text-[#63503d] leading-relaxed">
            Unlike static launchpads, every swap on Brew burns 100% of token-side fees permanently to 0x000...dead, augmented by optional continuous buyback & burn distributions.
          </p>
        </div>

        {/* Pillar 2: Security & No Backdoor */}
        <div className="p-3 bg-[#fdfaf4] border border-[#ded2bd] rounded-lg space-y-1.5">
          <div className="flex items-center gap-1.5 font-serif font-bold text-[#275e3e]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero-Backdoor Liquidity Lock</span>
          </div>
          <p className="text-[11px] text-[#63503d] leading-relaxed">
            PancakeSwap V3 LP NFTs are held directly by BrewLiquidityLocker. The bytecode has no function for principal withdrawal, creating mathematically irreversible anti-rug guarantees.
          </p>
        </div>
      </div>

      {/* Token Distribution Model Box */}
      <div className="p-3 bg-[#f5eddf] border border-[#d8c8af] rounded-lg">
        <h4 className="font-bold font-serif text-[#392619] mb-1">
          Strict 1,000,000,000 Supply Tokenomics Standard
        </h4>
        <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono text-[11px]">
          <div className="p-2 bg-white rounded border border-[#dfd3be]">
            <div className="text-[9px] uppercase text-[#7a6652]">Initial Supply</div>
            <strong className="text-[#3d2a1b]">1,000,000,000</strong>
          </div>
          <div className="p-2 bg-white rounded border border-[#dfd3be]">
            <div className="text-[9px] uppercase text-[#7a6652]">Decimals</div>
            <strong className="text-[#3d2a1b]">18 Standard</strong>
          </div>
          <div className="p-2 bg-white rounded border border-[#dfd3be]">
            <div className="text-[9px] uppercase text-[#7a6652]">Future Minting</div>
            <strong className="text-emerald-700">Strictly 0 (None)</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
