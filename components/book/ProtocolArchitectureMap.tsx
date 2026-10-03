'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Flame, 
  ShieldCheck, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Sparkles,
  ExternalLink,
  Lock,
  Workflow,
  Database
} from 'lucide-react';
import { Language } from '@/lib/brew-data/types';

interface ProtocolArchitectureMapProps {
  lang: Language;
}

export default function ProtocolArchitectureMap({ lang: _lang }: ProtocolArchitectureMapProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: 1,
      titleEn: 'Deterministic BEP-20 Mint',
      descEn: 'The BrewToken contract deploys with a fixed 1 Billion supply (18 decimals). Strictly zero additional minting, zero hidden transfer taxes, and zero developer backdoors.',
      contract: 'BrewToken Standard BEP-20',
      tag: 'Token Creation'
    },
    {
      num: 2,
      titleEn: 'PancakeSwap V3 Pool Initialization',
      descEn: 'BrewFactory initializes a concentrated liquidity pool on PancakeSwap V3 at the 1.0% fee tier (10,000 bps) and configures the initial tick range.',
      contract: 'PancakeV3Factory & Pool',
      tag: 'DEX Engine'
    },
    {
      num: 3,
      titleEn: 'Irrevocable Custody in Liquidity Locker',
      descEn: 'The liquidity position NFT is minted directly into BrewLiquidityLocker. The locker contract has zero functions to withdraw principal or transfer the position out. Truly anti-rug.',
      contract: 'BrewLiquidityLocker (0x3366e...)',
      tag: 'Permanent Custody'
    },
    {
      num: 4,
      titleEn: 'Smart Routing & Quoter V2 Execution',
      descEn: 'Traders can buy with the chosen paired asset or native BNB. If using BNB, the protocol dynamically routes through existing BNB liquidity pairs on BSC.',
      contract: 'PancakeSwap Smart Router',
      tag: 'Trade Execution'
    },
    {
      num: 5,
      titleEn: '100% Token Fee Burn & 50/50 Paired Split',
      descEn: 'When fees are collected: 100% of launched token fees are incinerated to 0x...dead. Paired asset fees split 50/50 between the creator and protocol treasury.',
      contract: 'Locker Fee Splitter',
      tag: 'Deflation Engine'
    },
    {
      num: 6,
      titleEn: '80% Protocol Buyback & Holder Rewards',
      descEn: '80% of all protocol-claimed fees fund open-market $BREW buyback and burn. Creators can permanently route their 50% fee to automated holder buybacks via BrewDistributorFactory.',
      contract: 'BrewDistributorFactory',
      tag: 'Value Accrual'
    }
  ];

  return (
    <div className="space-y-4 font-sans text-xs text-[#2e2319]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928] flex items-center gap-1">
            <Workflow className="w-3.5 h-3.5" />
            <span>ARCHITECTURE & TOKEN LIFECYCLE</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ebdcc1] text-[#69431d] font-semibold">
            brew.family / Engine
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          Protocol Architecture Map & Atomic Pipeline
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          Da Vinci alchemical blueprint of contract execution, concentrated liquidity vaults, and deflation mechanics.
        </p>
      </div>

      {/* Hero Architectural Engraving */}
      <div className="p-2 bg-[#f4ece0] border-2 border-[#cfbe9f] rounded-lg shadow-sm">
        <div className="image-container relative w-full h-48 sm:h-56 overflow-hidden rounded border border-[#bfa987] bg-black/5 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustrations/architecture-map.jpg"
            alt="Da Vinci Alchemical Protocol Architecture Map"
            className="w-full h-full object-contain sepia-[0.12] contrast-[1.05]"
          />
        </div>
        <p className="text-center text-[10px] italic text-[#63503d] font-serif mt-1 px-2">
          Fig. 10 — Da Vinci Engineering Blueprint of Atomic Token Deployment & Concentrated Liquidity Plumbing on BSC
        </p>
      </div>

      {/* Interactive Pipeline Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5 pt-1">
        {steps.map((st, i) => (
          <button
            key={st.num}
            onClick={() => setActiveStep(i)}
            className={`p-2 rounded border text-left transition-all cursor-pointer ${
              activeStep === i
                ? 'bg-[#432918] text-[#f8f3e8] border-[#29170c] shadow-xs'
                : 'bg-[#f7f2e6] border-[#ded2bd] text-[#4d3a28] hover:bg-[#ede3cf]'
            }`}
          >
            <div className="flex items-center justify-between text-[9px] uppercase font-bold tracking-wider opacity-75">
              <span>Step 0{st.num}</span>
            </div>
            <div className="font-serif font-bold text-xs truncate mt-0.5">
              {st.titleEn}
            </div>
          </button>
        ))}
      </div>

      {/* Active Step Deep-Dive Card */}
      <div className="p-4 bg-[#fbf9f4] border border-[#cfc0a5] rounded-lg shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#8c5a27] text-white flex items-center justify-center font-bold text-xs">
              {steps[activeStep].num}
            </span>
            <h3 className="font-serif font-bold text-sm text-[#382618]">
              {steps[activeStep].titleEn}
            </h3>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-[#ebdcc1] text-[#69431d]">
            {steps[activeStep].tag}
          </span>
        </div>

        <p className="text-xs text-[#443324] leading-relaxed">
          {steps[activeStep].descEn}
        </p>

        <div className="pt-2 border-t border-[#ebdcc1] flex items-center justify-between text-[10px] font-mono text-[#715c46]">
          <span>Executed Contract:</span>
          <span className="font-bold text-[#8d5b27]">{steps[activeStep].contract}</span>
        </div>
      </div>

      {/* Key Guarantees Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
        <div className="p-2.5 bg-[#fbf8f2] border border-[#dfd4c0] rounded">
          <div className="flex items-center gap-1.5 text-[#8d5b27] font-bold text-[11px] mb-1">
            <Lock className="w-3.5 h-3.5" />
            <span>Mathematical Anti-Rug</span>
          </div>
          <p className="text-[10px] text-[#695642]">
            BrewLiquidityLocker locks PancakeSwap V3 NFT LP positions with zero principal withdrawal methods.
          </p>
        </div>

        <div className="p-2.5 bg-[#fbf8f2] border border-[#dfd4c0] rounded">
          <div className="flex items-center gap-1.5 text-[#8d5b27] font-bold text-[11px] mb-1">
            <Flame className="w-3.5 h-3.5" />
            <span>100% Token Fee Burn</span>
          </div>
          <p className="text-[10px] text-[#695642]">
            All trading fees collected in the newly created token are immediately and irrevocably burned to 0x...dead.
          </p>
        </div>

        <div className="p-2.5 bg-[#fbf8f2] border border-[#dfd4c0] rounded">
          <div className="flex items-center gap-1.5 text-[#8d5b27] font-bold text-[11px] mb-1">
            <Database className="w-3.5 h-3.5" />
            <span>On-Chain Checkpoints</span>
          </div>
          <p className="text-[10px] text-[#695642]">
            Every deployment is verified in `launch-checkpoints.json` across 1,050+ tokens on BNB Chain.
          </p>
        </div>
      </div>
    </div>
  );
}
