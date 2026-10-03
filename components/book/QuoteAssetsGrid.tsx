'use client';

import React, { useState } from 'react';
import { Search, Copy, Check, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { BREW_QUOTE_TOKENS } from '@/lib/brew-data/quote-tokens';
import { Language, QuoteTokenInfo } from '@/lib/brew-data/types';

interface QuoteAssetsGridProps {
  lang: Language;
}

export default function QuoteAssetsGrid({ lang: _lang }: QuoteAssetsGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All (25)' },
    { id: 'native', label: 'BNB & Stables' },
    { id: 'bstock', label: 'bStocks (Equities)' },
    { id: 'crypto', label: 'Major Crypto' },
    { id: 'brand', label: 'Community' },
  ];

  const filteredTokens = BREW_QUOTE_TOKENS.filter((t) => {
    const matchesSearch = 
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'native') return t.category === 'native' || t.category === 'stable';
    return t.category === selectedCategory;
  });

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="space-y-4 font-sans text-xs text-[#2e2319]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928]">
            OFFICIAL ASSETS CATALOG
          </span>
          <span className="text-[11px] text-[#715f4a] font-mono">
            25 Verified Quote Tokens
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          25 Verified Quote Assets Catalog
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          Complete directory of official quote tokens on Brew: native coins, stables, crypto bluechips, and tokenized equities (bStocks).
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1 w-full sm:w-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-[#4a301e] text-[#fbf6ea] shadow-xs'
                  : 'bg-[#eee4cf] text-[#5e4a36] hover:bg-[#e4d7bf]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-56">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#8c7760]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search ticker, name, 0x..."
            className="w-full pl-8 pr-2.5 py-1.5 bg-[#fcfaf6] border border-[#d6c7b0] rounded text-xs text-[#2e2319] focus:outline-none focus:border-[#8b5928]"
          />
        </div>
      </div>

      {/* Tokens Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
        {filteredTokens.map((token) => (
          <div
            key={token.address}
            className="p-3 bg-[#fdfbf7] border border-[#dfd3bf] rounded-md hover:border-[#b89a69] transition-all flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-start justify-between gap-1.5 mb-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#f0e6d5] border border-[#d6c7b0] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                    {token.logoUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img 
                        src={token.logoUrl} 
                        alt={token.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-base">{token.iconChar}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[#352518] text-xs leading-tight truncate">
                      {token.name}
                    </h4>
                    <span className="font-mono font-bold text-[#865424] text-[11px]">
                      {token.symbol}
                    </span>
                  </div>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded uppercase font-semibold bg-[#ebdcc1] text-[#69431d] shrink-0">
                  {token.category}
                </span>
              </div>

              <p className="text-[11px] text-[#6b5843] line-clamp-2 mb-2 leading-relaxed">
                {token.description}
              </p>
            </div>

            {/* Address & Actions */}
            <div className="pt-2 border-t border-[#ede3cf] flex items-center justify-between text-[10px]">
              <code className="text-[#7d6953] font-mono">
                {token.address.slice(0, 6)}...{token.address.slice(-4)}
              </code>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleCopy(token.address)}
                  title="Copy Address"
                  className="p-1 rounded bg-[#eee3ce] hover:bg-[#e2d3b9] text-[#553f2c] transition-colors cursor-pointer"
                >
                  {copiedAddress === token.address ? (
                    <Check className="w-3 h-3 text-emerald-700" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
                <a
                  href={`https://bscscan.com/address/${token.address}`}
                  target="_blank"
                  rel="noreferrer"
                  title="BscScan"
                  className="p-1 rounded bg-[#eee3ce] hover:bg-[#e2d3b9] text-[#553f2c] transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
