'use client';

import React, { useState } from 'react';
import { 
  ArrowDownUp, 
  Flame, 
  Coins, 
  ShieldCheck, 
  Sliders, 
  Info, 
  CheckCircle2,
  Calculator,
  Percent
} from 'lucide-react';
import { Language } from '@/lib/brew-data/types';

interface SwapSimulatorProps {
  lang: Language;
}

export default function SwapSimulator({ lang: _lang }: SwapSimulatorProps) {
  const [inputAmount, setInputAmount] = useState('1');
  const [slippage, setSlippage] = useState('0.5');
  const [tradeDirection, setTradeDirection] = useState<'buy' | 'sell'>('buy');
  const [rewardMode, setRewardMode] = useState<'creator' | 'holders'>('holders');

  const inVal = parseFloat(inputAmount) || 0;
  const slipVal = parseFloat(slippage) || 0.5;

  // 1 BNB = ~12,500,000 BrewTokens in launch pool
  const rate = 12_500_000;
  const estOutput = tradeDirection === 'buy' ? inVal * rate : inVal / rate;
  const minReceived = estOutput * (1 - slipVal / 100);

  // Fee calculation: 1% total pool fee
  const poolFeePercent = 1.0;
  const poolFeeAmount = inVal * (poolFeePercent / 100);
  const creatorShare = poolFeeAmount * 0.5;
  const protocolShare = poolFeeAmount * 0.5;

  return (
    <div className="space-y-4 font-sans text-xs text-[#2e2319]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928]">
            CALCULATOR & SIMULATION
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ebdcc1] text-[#69431d] font-semibold">
            PancakeSwap Quoter V2
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          Swap & Fee Distribution Simulator
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          Explore mathematically how the 1% fee is collected, token burn is executed to 0x...dead, and paired fees split.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
        {/* Swap Form (Left) */}
        <div className="md:col-span-6 space-y-3 bg-[#f8f5ee] border border-[#dfd4c0] p-3.5 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#3d2a1b]">
              {tradeDirection === 'buy' ? 'Buy BrewToken' : 'Sell BrewToken'}
            </span>
            <button
              type="button"
              onClick={() => setTradeDirection(tradeDirection === 'buy' ? 'sell' : 'buy')}
              className="px-2 py-1 bg-[#eee3ce] hover:bg-[#e2d3b9] rounded border border-[#dfd4c0] flex items-center gap-1 font-semibold text-[#5a422d] cursor-pointer"
            >
              <ArrowDownUp className="w-3 h-3" />
              <span>Switch</span>
            </button>
          </div>

          <div>
            <label className="block text-[#695642] mb-1 font-medium">
              Input Amount:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                min="0"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-white border border-[#cfbe9f] rounded text-[#2d2218] text-xs font-mono font-bold"
              />
              <span className="font-mono font-bold px-2 py-1.5 bg-[#eee3ce] rounded border border-[#dfd4c0] text-[#4d3928] shrink-0">
                {tradeDirection === 'buy' ? 'BNB' : 'BREW'}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-[#695642] mb-1 font-medium">
              Slippage Tolerance:
            </label>
            <div className="flex items-center gap-1.5">
              {['0.1', '0.5', '1.0', '2.5'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlippage(s)}
                  className={`px-2 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                    slippage === s
                      ? 'bg-[#4a301e] text-[#fbf6ea] font-bold'
                      : 'bg-white border border-[#dfd4c0] text-[#5e4a36] hover:bg-[#f2eadc]'
                  }`}
                >
                  {s}%
                </button>
              ))}
              <div className="flex items-center gap-1 ml-auto">
                <input
                  type="number"
                  step="0.1"
                  min="0.01"
                  max="50"
                  value={slippage}
                  onChange={(e) => setSlippage(e.target.value)}
                  className="w-14 px-1.5 py-1 bg-white border border-[#cfbe9f] rounded text-xs font-mono text-center"
                />
                <span className="text-[#695642]">%</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#695642] mb-1 font-medium">
              Token Reward Mode:
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setRewardMode('holders')}
                className={`p-1.5 rounded border text-left text-[11px] cursor-pointer ${
                  rewardMode === 'holders'
                    ? 'border-[#8b5928] bg-[#eedfc5] font-bold text-[#3b2717]'
                    : 'border-[#dfd4c0] bg-white text-[#63513e]'
                }`}
              >
                🔥 Holder Buyback
              </button>
              <button
                type="button"
                onClick={() => setRewardMode('creator')}
                className={`p-1.5 rounded border text-left text-[11px] cursor-pointer ${
                  rewardMode === 'creator'
                    ? 'border-[#8b5928] bg-[#eedfc5] font-bold text-[#3b2717]'
                    : 'border-[#dfd4c0] bg-white text-[#63513e]'
                }`}
              >
                💰 Creator Wallet
              </button>
            </div>
          </div>

          {/* Trade Output Box */}
          <div className="p-2.5 bg-[#f3ebd9] rounded border border-[#dfd3bc] space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[#6d5b47]">Estimated Output:</span>
              <span className="font-mono font-bold text-[#2e1f14]">
                {estOutput.toLocaleString(undefined, { maximumFractionDigits: 4 })} {tradeDirection === 'buy' ? 'BREW' : 'BNB'}
              </span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-[#877461]">Minimum Received:</span>
              <span className="font-mono text-[#877461]">
                {minReceived.toLocaleString(undefined, { maximumFractionDigits: 4 })}
              </span>
            </div>
          </div>
        </div>

        {/* Fee Split Visualizer (Right) */}
        <div className="md:col-span-6 space-y-3 bg-[#fdfbf7] border border-[#dfd3bf] p-3.5 rounded-lg flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center gap-1.5 font-serif font-bold text-[#3e2c1d] border-b border-[#ebdcc4] pb-1.5">
              <Percent className="w-4 h-4 text-[#8b5928]" />
              <span>Fee Breakdown Transparency</span>
            </div>

            <div className="p-2 bg-[#f4ece0] rounded border border-[#e2d5c3] text-[11px] space-y-1">
              <div className="flex justify-between font-semibold">
                <span>Total Pool Fee:</span>
                <span className="font-mono text-[#94612e]">1.00%</span>
              </div>
              <div className="flex justify-between text-[10px] text-[#715f4d]">
                <span>Fee on this trade:</span>
                <span className="font-mono">
                  {poolFeeAmount.toFixed(5)} {tradeDirection === 'buy' ? 'BNB' : 'BREW'}
                </span>
              </div>
            </div>

            {/* Visual allocation split */}
            <div className="space-y-2 pt-1 text-[11px]">
              <div className="p-2 rounded bg-amber-50/60 border border-amber-200">
                <div className="flex items-center justify-between font-bold text-amber-900">
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    <span>Token-side Fees</span>
                  </span>
                  <span>100% BURN</span>
                </div>
                <p className="text-[10px] text-amber-800 mt-0.5">
                  100% of launched token fees are burned to the dead address forever.
                </p>
              </div>

              <div className="p-2 rounded bg-[#f5ede2] border border-[#dfd2be]">
                <div className="flex items-center justify-between font-bold text-[#3d2a1a]">
                  <span className="flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5 text-amber-700" />
                    <span>Paired-side Fees</span>
                  </span>
                  <span>50% / 50% SPLIT</span>
                </div>
                <div className="mt-1 space-y-1 text-[10px] text-[#5a4734]">
                  <div className="flex justify-between">
                    <span>
                      {rewardMode === 'holders' 
                        ? '• Holder Buyback & Burn:' 
                        : '• Creator Wallet:'}
                    </span>
                    <span className="font-mono font-bold">50% (~{creatorShare.toFixed(5)} BNB)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Protocol Treasury:</span>
                    <span className="font-mono font-bold">50% (~{protocolShare.toFixed(5)} BNB)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-[#7d6953] italic border-t border-[#ebdcc4] pt-2">
            ℹ️ NFT liquidity positions are never unlocked. Only trading yield fees are claimable or distributed.
          </div>
        </div>
      </div>
    </div>
  );
}
