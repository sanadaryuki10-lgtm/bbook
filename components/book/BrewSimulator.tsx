'use client';

import React, { useState } from 'react';
import { 
  Coffee, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Coins, 
  CheckCircle2, 
  RefreshCw,
  TrendingUp,
  Sliders
} from 'lucide-react';
import { BREW_QUOTE_TOKENS } from '@/lib/brew-data/quote-tokens';
import { Language } from '@/lib/brew-data/types';

interface BrewSimulatorProps {
  lang: Language;
}

export default function BrewSimulator({ lang: _lang }: BrewSimulatorProps) {
  const [tokenName, setTokenName] = useState('Arabica Roast');
  const [tokenSymbol, setTokenSymbol] = useState('ROAST');
  const [description, setDescription] = useState(
    'Specialty roast community token deployed on BNB Smart Chain.'
  );
  const [selectedQuote, setSelectedQuote] = useState(BREW_QUOTE_TOKENS[0]); // WBNB
  const [feePreference, setFeePreference] = useState<'creator' | 'holders'>('holders');
  const [firstBuyAmount, setFirstBuyAmount] = useState('0.1');
  const [hasSimulated, setHasSimulated] = useState(false);

  // Calculations based on Brew Factory math
  const totalSupply = 1_000_000_000; // 1 Billion tokens
  const firstBuyNum = parseFloat(firstBuyAmount) || 0;
  
  // Starting virtual liquidity: e.g. 5 BNB base for 1B tokens -> price ~ 0.000000005 BNB
  const baseLiquidityBnb = selectedQuote.symbol === 'WBNB' ? 5 : 3000;
  const initialPrice = baseLiquidityBnb / totalSupply;
  const estimatedTokensBought = firstBuyNum > 0 
    ? Math.min(totalSupply * 0.15, (firstBuyNum / (baseLiquidityBnb + firstBuyNum)) * totalSupply)
    : 0;

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSimulated(true);
  };

  const handleReset = () => {
    setHasSimulated(false);
  };

  return (
    <div className="space-y-4 font-sans text-xs text-[#2d2218]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928]">
            PRACTICAL ON-CHAIN SIMULATION
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#e8c880]/30 text-[#6d461f]">
            PancakeSwap V3
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          Interactive Token Brewing Simulator
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          Simulate token deployment parameters according to BrewFactory smart contract rules on BSC.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
        {/* Form Inputs (Left side) */}
        <form onSubmit={handleSimulate} className="md:col-span-7 space-y-3 bg-[#f8f5ee] border border-[#dfd4c0] p-3.5 rounded-lg">
          <div>
            <label className="block font-semibold text-[#4a3727] mb-1">
              1. Token Name
            </label>
            <input
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-white border border-[#cfbe9f] rounded text-[#2d2218] text-xs focus:outline-none focus:border-[#8b5928]"
              placeholder="e.g. Mocha Gold"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-semibold text-[#4a3727] mb-1">
                2. Symbol / Ticker
              </label>
              <input
                type="text"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value.toUpperCase())}
                maxLength={8}
                className="w-full px-2.5 py-1.5 bg-white border border-[#cfbe9f] rounded font-mono font-bold text-[#2d2218] text-xs focus:outline-none focus:border-[#8b5928]"
                placeholder="e.g. MOCHA"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-[#4a3727] mb-1">
                3. Quote Asset
              </label>
              <div className="flex items-center gap-1.5">
                {selectedQuote.logoUrl && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={selectedQuote.logoUrl}
                    alt={selectedQuote.symbol}
                    className="w-6 h-6 rounded-full object-contain shrink-0 border border-[#cfbe9f]"
                  />
                )}
                <select
                  value={selectedQuote.address}
                  onChange={(e) => {
                    const found = BREW_QUOTE_TOKENS.find(q => q.address === e.target.value);
                    if (found) setSelectedQuote(found);
                  }}
                  className="w-full px-2 py-1.5 bg-white border border-[#cfbe9f] rounded text-[#2d2218] text-xs focus:outline-none focus:border-[#8b5928]"
                >
                  {BREW_QUOTE_TOKENS.map((q) => (
                    <option key={q.address} value={q.address}>
                      {q.symbol} — {q.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#4a3727] mb-1">
              4. Fee Routing Preference
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFeePreference('holders')}
                className={`p-2 rounded border text-left cursor-pointer transition-all ${
                  feePreference === 'holders'
                    ? 'border-[#8b5928] bg-[#eedfc5] font-semibold text-[#3b2717]'
                    : 'border-[#dfd4c0] bg-white text-[#63513e]'
                }`}
              >
                <div className="flex items-center gap-1 font-bold text-[11px]">
                  <Flame className="w-3.5 h-3.5 text-amber-700" />
                  <span>Holder Rewards</span>
                </div>
                <div className="text-[10px] text-[#715e4b] mt-0.5">
                  Automated buyback & burn
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFeePreference('creator')}
                className={`p-2 rounded border text-left cursor-pointer transition-all ${
                  feePreference === 'creator'
                    ? 'border-[#8b5928] bg-[#eedfc5] font-semibold text-[#3b2717]'
                    : 'border-[#dfd4c0] bg-white text-[#63513e]'
                }`}
              >
                <div className="flex items-center gap-1 font-bold text-[11px]">
                  <Coins className="w-3.5 h-3.5 text-amber-700" />
                  <span>Creator Wallet</span>
                </div>
                <div className="text-[10px] text-[#715e4b] mt-0.5">
                  50% fees to creator wallet
                </div>
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#4a3727] mb-1 flex items-center justify-between">
              <span>5. Optional First Buy</span>
              <span className="text-[10px] text-[#7a6754]">
                In chosen quote asset
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.01"
                min="0"
                value={firstBuyAmount}
                onChange={(e) => setFirstBuyAmount(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-white border border-[#cfbe9f] rounded text-[#2d2218] text-xs font-mono"
                placeholder="0.0"
              />
              <span className="font-mono font-bold px-2 py-1.5 bg-[#eee3ce] rounded border border-[#dfd4c0] text-[#4d3928] shrink-0">
                {selectedQuote.symbol}
              </span>
            </div>
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#94612e] via-[#b37c44] to-[#94612e] text-white font-bold rounded shadow hover:brightness-105 cursor-pointer flex items-center justify-center gap-1.5 transition-all text-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Run Launch Simulation</span>
            </button>
          </div>
        </form>

        {/* Live Calculation Preview (Right side) */}
        <div className="md:col-span-5 space-y-3">
          <div className="bg-[#fcfaf5] border border-[#d8cbbb] p-3.5 rounded-lg space-y-3">
            <div className="flex items-center justify-between border-b border-[#e2d5c4] pb-2">
              <span className="font-serif font-bold text-[#3d2a1b] text-sm flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/brew-mark.png" alt="Brew" className="w-5 h-5 rounded-full object-contain" />
                <span>Explore Card Preview</span>
              </span>
              <div className="flex items-center gap-1.5">
                {selectedQuote.logoUrl && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={selectedQuote.logoUrl} alt="" className="w-4 h-4 rounded-full object-contain" />
                )}
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#e8c880]/30 text-[#68411b]">
                  {selectedQuote.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Token Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#462d1c] to-[#25150a] text-[#e8c880] border border-[#d4af37] flex items-center justify-center font-bold text-base shadow-md shrink-0">
                {tokenSymbol.slice(0, 2) || 'TK'}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-[#332214] text-sm truncate">
                  {tokenName || 'Token Name'}
                </div>
                <div className="text-[#725e4a] font-mono text-[11px] flex items-center gap-1 mt-0.5">
                  <span>${tokenSymbol || 'TICKER'}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    {selectedQuote.logoUrl && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={selectedQuote.logoUrl} alt="" className="w-3.5 h-3.5 rounded-full" />
                    )}
                    <span>{selectedQuote.symbol}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Numbers */}
            <div className="space-y-1.5 text-[11px] pt-1 border-t border-[#e2d5c4]">
              <div className="flex justify-between">
                <span className="text-[#6d5b47]">Total Supply:</span>
                <span className="font-mono font-semibold text-[#2f2014]">
                  1,000,000,000 (Fixed)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6d5b47]">Pool Fee:</span>
                <span className="font-mono font-semibold text-[#2f2014]">1.0% (PancakeSwap V3)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6d5b47]">Initial Liquidity:</span>
                <span className="font-mono font-semibold text-[#276e42]">100% Locked in Locker</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6d5b47]">Est. Launch Price:</span>
                <span className="font-mono font-semibold text-[#2f2014]">
                  ~{initialPrice.toFixed(8)} {selectedQuote.symbol}
                </span>
              </div>
              {firstBuyNum > 0 && (
                <div className="flex justify-between pt-1 border-t border-dashed border-[#dfd4c0] text-[#8b5928]">
                  <span>First Buyer Receives:</span>
                  <span className="font-mono font-bold">
                    ~{Math.round(estimatedTokensBought).toLocaleString()} {tokenSymbol}
                  </span>
                </div>
              )}
            </div>

            {hasSimulated && (
              <div className="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-900 text-[11px] space-y-1 animate-fadeIn">
                <div className="flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Simulation Confirmed!</span>
                </div>
                <p className="text-[10px] text-emerald-800">
                  Atomic transaction will mint 1B {tokenSymbol} into PancakeSwap V3, lock the NFT position in BrewLiquidityLocker, and configure fee routing.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[10px] text-emerald-950 font-bold underline cursor-pointer mt-1"
                >
                  Reset Simulation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
