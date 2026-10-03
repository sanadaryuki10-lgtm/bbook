'use client';

import React, { useState } from 'react';
import { FileCode, Copy, Check, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { BREW_CONTRACTS } from '@/lib/brew-data/contracts';
import { Language } from '@/lib/brew-data/types';

interface ContractsListProps {
  lang: Language;
  filterRole?: 'core' | 'infra';
}

export default function ContractsList({ lang: _lang, filterRole }: ContractsListProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const displayedContracts = filterRole 
    ? BREW_CONTRACTS.filter(c => c.role === filterRole)
    : BREW_CONTRACTS;

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-4 font-sans text-xs text-[#2e2319]">
      {/* Header */}
      <div className="border-b border-[#cfbe9f] pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b5928]">
            {filterRole === 'core' 
              ? 'CORE PROTOCOL CONTRACTS'
              : 'EXTERNAL INFRASTRUCTURE'}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ebdcc1] text-[#69431d] font-semibold">
            BNB Smart Chain (ID: 56)
          </span>
        </div>
        <h2 className="text-xl font-bold font-serif text-[#392618] mt-0.5">
          {filterRole === 'core'
            ? 'Brew Core Smart Contracts Registry'
            : 'Trading Infrastructure Contracts'}
        </h2>
        <p className="text-[11px] text-[#6b5842]">
          All official verified smart contracts powering the Brew Protocol and PancakeSwap V3 ecosystem on BSC.
        </p>
      </div>

      {/* Contracts List */}
      <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
        {displayedContracts.map((contract) => (
          <div
            key={contract.address}
            className="p-3.5 bg-[#fdfbf7] border border-[#dfd4c0] rounded-lg shadow-xs space-y-2 hover:border-[#b89b6c] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#ece1cd] pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-[#eee3ce] text-[#71461f]">
                  <FileCode className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold font-serif text-[#332213] text-sm leading-tight">
                    {contract.name}
                  </h3>
                  <span className="text-[10px] text-[#845322] font-semibold uppercase">
                    {contract.label}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified
                </span>
                <a
                  href={contract.bscScanUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-0.5 bg-[#eee3ce] hover:bg-[#e4d4ba] rounded text-[10px] font-semibold text-[#5a422d] flex items-center gap-1 transition-colors"
                >
                  <span>BscScan</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            <p className="text-[11px] text-[#554332] leading-relaxed">
              {contract.descriptionEn}
            </p>

            {/* Address bar with copy */}
            <div className="flex items-center justify-between gap-2 p-2 bg-[#f4ece0] rounded border border-[#e2d5c3] font-mono text-[11px]">
              <code className="text-[#3b2b1d] truncate select-all">
                {contract.address}
              </code>
              <button
                type="button"
                onClick={() => handleCopy(contract.address)}
                title="Copy Address"
                className="px-2 py-1 bg-[#432918] hover:bg-[#5b3923] text-[#fbf6ec] rounded text-[10px] font-sans font-semibold flex items-center gap-1 cursor-pointer transition-colors shrink-0"
              >
                {copied === contract.address ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-300" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Highlights */}
            {contract.keyHighlights && contract.keyHighlights.length > 0 && (
              <div className="pt-1.5 flex flex-wrap gap-1.5">
                {contract.keyHighlights.map((hl, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-[#f1e6d4] text-[#634931] border border-[#ddccb3]"
                  >
                    ✓ {hl}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
