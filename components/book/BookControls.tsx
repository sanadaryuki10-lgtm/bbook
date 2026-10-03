'use client';

import React from 'react';
import { 
  Bookmark, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  Sun,
  Moon,
  Palette,
  Maximize2
} from 'lucide-react';
import { Language } from '@/lib/brew-data/types';
import { getTranslation } from '@/lib/brew-data/translations';

interface BookControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onJumpToPage: (page: number) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  readingTheme: 'parchment' | 'dark' | 'ivory';
  onThemeChange: (theme: 'parchment' | 'dark' | 'ivory') => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  bookmarks: number[];
  onToggleBookmark: (page: number) => void;
  fontSize: 'small' | 'medium' | 'large';
  onFontSizeChange: (size: 'small' | 'medium' | 'large') => void;
}

export default function BookControls({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onJumpToPage,
  lang,
  onLanguageChange,
  readingTheme,
  onThemeChange,
  soundEnabled,
  onToggleSound,
  bookmarks,
  onToggleBookmark,
  fontSize,
  onFontSizeChange
}: BookControlsProps) {
  const t = getTranslation(lang);
  const isBookmarked = bookmarks.includes(currentPage);

  const chapterJumps = [
    { page: 0, label: '0. Front Cover' },
    { page: 1, label: '1. Frontispiece & Verification' },
    { page: 2, label: '2. ' + t.tableOfContents },
    { page: 3, label: '3. Prologue - Philosophy & Architecture' },
    { page: 4, label: '4. Chronicles - History & Origins' },
    { page: 5, label: '5. Timeline - On-Chain Epochs & Milestones' },
    { page: 6, label: '6. Ch. I - Risk Disclaimer & Compliance' },
    { page: 7, label: '7. Ch. II - Creating Your Token Guide' },
    { page: 8, label: '8. Token Brewing Simulator' },
    { page: 9, label: '9. Ch. III - Choosing Your Pair & bStocks' },
    { page: 10, label: '10. 25 Verified Quote Assets Catalog' },
    { page: 11, label: '11. Ch. IV - Explore & Trade Mechanics' },
    { page: 12, label: '12. Swap & Fee Simulator' },
    { page: 13, label: '13. Ch. V - Fees & 80% Buyback Engine' },
    { page: 14, label: '14. Architecture Blueprint & Lifecycle' },
    { page: 15, label: '15. Protocol Ledger & Tokenomics' },
    { page: 16, label: '16. Ch. VI - Core Contracts Directory' },
    { page: 17, label: '17. DEX Trading Infrastructure' },
    { page: 18, label: '18. Ch. VII - Official Questions & Answers (FAQ)' },
    { page: 19, label: '19. Directory of 1,050+ Launched Tokens' },
    { page: 20, label: '20. Back Cover & Colophon' },
  ];

  return (
    <header className="w-full bg-[#20140e] text-[#e8dfcf] border-b border-[#543b2a] px-3 py-2 sm:px-6 shadow-md select-none sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Left: App Title and Quick Chapter Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onJumpToPage(0)}
            className="font-serif font-bold text-sm sm:text-base text-[#e8c880] hover:text-[#fff0cc] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span className="hidden xs:inline">{t.appTitle}</span>
          </button>

          <div className="h-4 w-px bg-[#4a3224] hidden sm:block" />

          {/* Quick jump select */}
          <select
            value={currentPage}
            onChange={(e) => onJumpToPage(Number(e.target.value))}
            className="bg-[#2d1b12] text-[#d6c7b0] border border-[#5c402e] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#d4af37] cursor-pointer max-w-[150px] sm:max-w-[210px] truncate"
          >
            {chapterJumps.map((c) => (
              <option key={c.page} value={c.page}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Language, Theme, Sound, Bookmarks & Page Navigation */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Selector */}
          <div className="flex items-center bg-[#2d1b12] border border-[#5c402e] rounded overflow-hidden">
            {(['en', 'zh', 'ja'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-1.5 py-0.5 uppercase text-[10px] font-semibold transition-colors cursor-pointer ${
                  lang === l
                    ? 'bg-[#d4af37] text-[#1c1109]'
                    : 'text-[#ab977e] hover:text-[#f2e7d5]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme Selector */}
          <div className="flex items-center bg-[#2d1b12] border border-[#5c402e] rounded p-0.5">
            <button
              onClick={() => onThemeChange('parchment')}
              title={t.parchment}
              className={`p-1 rounded cursor-pointer transition-colors ${
                readingTheme === 'parchment' ? 'bg-[#c49a45] text-[#1c1109]' : 'text-[#ab977e] hover:text-[#fff]'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onThemeChange('dark')}
              title={t.darkLeather}
              className={`p-1 rounded cursor-pointer transition-colors ${
                readingTheme === 'dark' ? 'bg-[#c49a45] text-[#1c1109]' : 'text-[#ab977e] hover:text-[#fff]'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onThemeChange('ivory')}
              title={t.pureIvory}
              className={`p-1 rounded cursor-pointer transition-colors ${
                readingTheme === 'ivory' ? 'bg-[#c49a45] text-[#1c1109]' : 'text-[#ab977e] hover:text-[#fff]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute Page Flip' : 'Enable Page Flip Audio'}
            className={`p-1.5 rounded border border-[#5c402e] bg-[#2d1b12] transition-colors cursor-pointer ${
              soundEnabled ? 'text-[#d4af37]' : 'text-[#7d6957]'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(currentPage)}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this Page'}
            className={`p-1.5 rounded border border-[#5c402e] bg-[#2d1b12] transition-colors cursor-pointer ${
              isBookmarked ? 'text-rose-500' : 'text-[#7d6957] hover:text-[#d4af37]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
