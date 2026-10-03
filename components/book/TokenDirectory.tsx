'use client';

import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, ExternalLink, Filter, Database, Layers, ArrowLeft, ArrowRight } from 'lucide-react';
import tokensData from '@/lib/brew-data/tokens-data.json';
import { Language, LaunchedTokenItem } from '@/lib/brew-data/types';

interface TokenDirectoryProps {
  lang: Language;
}

export default function TokenDirectory({ lang: _lang }: TokenDirectoryProps) {
  const tokens = tokensData as LaunchedTokenItem[];

  const [search, setSearch] = useState('');
  const [selectedQuote, setSelectedQuote] = useState('ALL');
  const [selectedKind, setSelectedKind] = useState('ALL');
  const [page, setPage] = useState(1);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const PAGE_SIZE = 10;

  // Extract unique quote symbols for filter
  const quoteSymbols = useMemo(() => {
    const set = new Set<string>();
    tokens.forEach(t => {
      if (t.quoteSymbol) set.add(t.quoteSymbol);
    });
    return Array.from(set).sort();
  }, [tokens]);

  const filteredTokens = useMemo(() => {
    return tokens.filter((t) => {
      const q = search.toLowerCase();
      const matchesSearch = 
        t.name.toLowerCase().includes(q) ||
        t.symbol.toLowerCase().includes(q) ||
        t.address.toLowerCase().includes(q);

      if (!matchesSearch) return false;
      if (selectedQuote !== 'ALL' && t.quoteSymbol !== selectedQuote) return false;
      if (selectedKind !== 'ALL' && t.kind !== selectedKind) return false;
      return true;
    });
  }, [tokens, search, selectedQuote, selectedKind]);

  const totalPages = Math.max(1, Math.ceil(filteredTokens.length / PAGE_SIZE));
  const currentPageTokens = filteredTokens.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <div className="space-y-3 font-sans text-xs text-[#2e2319]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928] flex items-center gap-1">
            <Database className="w-3 h-3" />
            <span>OFFICIAL LAUNCH ARCHIVE</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ebdcc1] text-[#69431d] font-semibold">
            {tokens.length.toLocaleString()} Tokens Indexed on BSC
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          Directory of 1,050+ Launched Tokens
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          Real verified on-chain checkpoint dataset of all tokens brewed on brew.family across BNB Chain.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between bg-[#f8f5ee] border border-[#dfd4c0] p-2 rounded-lg">
        <div className="relative w-full sm:w-56">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-[#8c7760]" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search name, ticker, address..."
            className="w-full pl-8 pr-2.5 py-1 bg-white border border-[#cfbe9f] rounded text-[11px] text-[#2e2319] focus:outline-none focus:border-[#8b5928]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          {/* Quote filter */}
          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-[#6b5842] shrink-0 font-medium">Quote:</span>
            <select
              value={selectedQuote}
              onChange={(e) => {
                setSelectedQuote(e.target.value);
                setPage(1);
              }}
              className="px-2 py-1 bg-white border border-[#cfbe9f] rounded text-[11px] text-[#2e2319] focus:outline-none"
            >
              <option value="ALL">All Pairs</option>
              {quoteSymbols.slice(0, 15).map((sym) => (
                <option key={sym} value={sym}>{sym}</option>
              ))}
            </select>
          </div>

          {/* Kind filter */}
          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-[#6b5842] shrink-0 font-medium">Pool:</span>
            <select
              value={selectedKind}
              onChange={(e) => {
                setSelectedKind(e.target.value);
                setPage(1);
              }}
              className="px-2 py-1 bg-white border border-[#cfbe9f] rounded text-[11px] text-[#2e2319] focus:outline-none"
            >
              <option value="ALL">All</option>
              <option value="single">Single Pair</option>
              <option value="multipair">Multipair</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tokens List Table */}
      <div className="bg-[#fdfbf8] border border-[#dfd4c0] rounded-lg overflow-hidden shadow-xs">
        <div className="max-h-[380px] overflow-y-auto">
          <table className="w-full text-left text-[11px]">
            <thead className="sticky top-0 bg-[#eee3cf] border-b border-[#dfd4c0] text-[#5c4735]">
              <tr>
                <th className="py-2 px-3 font-semibold">Token</th>
                <th className="py-2 px-3 font-semibold">Quote Pair</th>
                <th className="py-2 px-3 font-semibold hidden sm:table-cell">Kind</th>
                <th className="py-2 px-3 font-semibold text-right">Contract</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ece2cf]">
              {currentPageTokens.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-[#7e6b56] italic">
                    No tokens matched your search query.
                  </td>
                </tr>
              ) : (
                currentPageTokens.map((t) => (
                  <tr key={t.address} className="hover:bg-[#f6eee0] transition-colors">
                    <td className="py-2 px-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#422c1b] text-[#e8c880] border border-[#cfbe9f] flex items-center justify-center font-bold text-[10px] shrink-0 overflow-hidden shadow-2xs">
                          {t.imageUrl && t.imageUrl.startsWith('data:image') ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={t.imageUrl} alt={t.symbol} className="w-full h-full object-cover" />
                          ) : (
                            <span>{t.symbol.slice(0, 2) || 'TK'}</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-[#322316] truncate max-w-[120px] sm:max-w-[160px]">
                            {t.name}
                          </div>
                          <div className="text-[10px] text-[#865424] font-mono font-semibold">
                            ${t.symbol}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-3">
                      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#eee3ce] text-[#553e2a] font-mono font-semibold text-[10px]">
                        <span>{t.quoteSymbol || 'WBNB'}</span>
                      </div>
                    </td>
                    <td className="py-2 px-3 hidden sm:table-cell">
                      <span className="text-[10px] text-[#78644e]">
                        {t.kind === 'multipair' ? 'Multi (2-5)' : 'Single (1)'}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5 font-mono text-[10px]">
                        <code className="text-[#655340]">
                          {t.address.slice(0, 6)}...{t.address.slice(-4)}
                        </code>
                        <button
                          type="button"
                          onClick={() => handleCopy(t.address)}
                          title="Copy Address"
                          className="p-1 rounded bg-[#eee3ce] hover:bg-[#e4d3ba] text-[#503a27] cursor-pointer transition-colors"
                        >
                          {copiedAddress === t.address ? (
                            <Check className="w-3 h-3 text-emerald-700" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                        <a
                          href={`https://bscscan.com/address/${t.address}`}
                          target="_blank"
                          rel="noreferrer"
                          title="View on BscScan"
                          className="p-1 rounded bg-[#eee3ce] hover:bg-[#e4d3ba] text-[#503a27] transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="bg-[#f5ecdc] px-3 py-2 border-t border-[#dfd4c0] flex items-center justify-between text-[11px] text-[#63513e]">
          <div>
            Showing {filteredTokens.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1} - {Math.min(page * PAGE_SIZE, filteredTokens.length)} of {filteredTokens.length} tokens
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="p-1 rounded border border-[#cfbe9f] bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#fcfaf5] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono font-semibold">
              {page} / {totalPages}
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              className="p-1 rounded border border-[#cfbe9f] bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#fcfaf5] cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
