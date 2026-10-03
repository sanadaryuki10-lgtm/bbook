'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark as BookmarkIcon, 
  BookOpen, 
  RotateCcw,
  Sparkles,
  Coffee
} from 'lucide-react';
import BookControls from './BookControls';
import BookCover from './BookCover';
import Frontispiece from './Frontispiece';
import TableOfContents from './TableOfContents';
import ChapterContent from './ChapterContent';
import BrewSimulator from './BrewSimulator';
import QuoteAssetsGrid from './QuoteAssetsGrid';
import SwapSimulator from './SwapSimulator';
import ProtocolLedger from './ProtocolLedger';
import ContractsList from './ContractsList';
import FaqList from './FaqList';
import TokenDirectory from './TokenDirectory';
import BackCover from './BackCover';
import BrewHistoryTimeline from './BrewHistoryTimeline';
import ProtocolArchitectureMap from './ProtocolArchitectureMap';
import { BREW_DOCUMENTATION_CHAPTERS } from '@/lib/brew-data/documentation';
import { Language } from '@/lib/brew-data/types';
import { getTranslation } from '@/lib/brew-data/translations';
import { playPageFlipSound } from '@/lib/sound';

export default function BookViewer() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [lang, setLang] = useState<Language>('en');
  const [readingTheme, setReadingTheme] = useState<'parchment' | 'dark' | 'ivory'>('parchment');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [bookmarks, setBookmarks] = useState<number[]>([2, 4, 8, 14, 19]);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const totalPages = 20;
  const t = getTranslation(lang);

  const goToPage = useCallback((targetPage: number) => {
    if (targetPage < 0 || targetPage > totalPages) return;
    setFlipDirection(targetPage > currentPage ? 'next' : 'prev');
    setCurrentPage(targetPage);
    if (soundEnabled) {
      playPageFlipSound();
    }
  }, [currentPage, soundEnabled, totalPages]);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevPage();
      } else if (e.key === 'Home') {
        goToPage(0);
      } else if (e.key === 'End') {
        goToPage(totalPages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage, goToPage, totalPages]);

  const toggleBookmark = (page: number) => {
    setBookmarks(prev => 
      prev.includes(page) ? prev.filter(p => p !== page) : [...prev, page]
    );
  };

  // Render content of specific page number
  const renderPageContent = (pageNum: number) => {
    switch (pageNum) {
      case 0:
        return <BookCover onOpen={() => goToPage(1)} lang={lang} />;
      case 1:
        return <Frontispiece lang={lang} onJumpToPage={goToPage} />;
      case 2:
        return <TableOfContents lang={lang} onSelectPage={goToPage} />;
      case 3:
        return <ChapterContent chapter={BREW_DOCUMENTATION_CHAPTERS[0]} lang={lang} onJumpToTool={goToPage} />;
      case 4:
        return <ChapterContent chapter={BREW_DOCUMENTATION_CHAPTERS[1]} lang={lang} onJumpToTool={goToPage} />;
      case 5:
        return <BrewHistoryTimeline lang={lang} />;
      case 6:
        return <ChapterContent chapter={BREW_DOCUMENTATION_CHAPTERS[2]} lang={lang} onJumpToTool={goToPage} />;
      case 7:
        return <ChapterContent chapter={BREW_DOCUMENTATION_CHAPTERS[3]} lang={lang} onJumpToTool={goToPage} />;
      case 8:
        return <BrewSimulator lang={lang} />;
      case 9:
        return <ChapterContent chapter={BREW_DOCUMENTATION_CHAPTERS[4]} lang={lang} onJumpToTool={goToPage} />;
      case 10:
        return <QuoteAssetsGrid lang={lang} />;
      case 11:
        return <ChapterContent chapter={BREW_DOCUMENTATION_CHAPTERS[5]} lang={lang} onJumpToTool={goToPage} />;
      case 12:
        return <SwapSimulator lang={lang} />;
      case 13:
        return <ChapterContent chapter={BREW_DOCUMENTATION_CHAPTERS[6]} lang={lang} onJumpToTool={goToPage} />;
      case 14:
        return <ProtocolArchitectureMap lang={lang} />;
      case 15:
        return <ProtocolLedger lang={lang} />;
      case 16:
        return <ContractsList lang={lang} filterRole="core" />;
      case 17:
        return <ContractsList lang={lang} filterRole="infra" />;
      case 18:
        return <FaqList lang={lang} />;
      case 19:
        return <TokenDirectory lang={lang} />;
      case 20:
        return <BackCover onClose={() => goToPage(0)} onGoToPage={goToPage} lang={lang} />;
      default:
        return <div className="p-8 text-center">Page not found.</div>;
    }
  };

  // Theme styling
  const getThemeClasses = () => {
    switch (readingTheme) {
      case 'dark':
        return {
          wrapper: 'bg-[#120a06] text-[#dfd3c3]',
          paper: 'bg-gradient-to-b from-[#241710] to-[#1a100b] border-[#5a3a22] text-[#e8dfcf]',
          pageCrease: 'via-black/40',
          spine: 'from-black/80 to-transparent'
        };
      case 'ivory':
        return {
          wrapper: 'bg-[#e2ded6] text-[#2c221a]',
          paper: 'bg-[#fcfbf7] border-[#d8d0c0] text-[#2c221a]',
          pageCrease: 'via-black/10',
          spine: 'from-black/30 to-transparent'
        };
      case 'parchment':
      default:
        return {
          wrapper: 'bg-[#2b1b11] text-[#2c2117]',
          paper: 'bg-gradient-to-b from-[#f9f5eb] via-[#f7f2e4] to-[#f3ebd8] border-[#cbba9e] text-[#2c2117]',
          pageCrease: 'via-black/15',
          spine: 'from-[#422c1b]/50 to-transparent'
        };
    }
  };

  const themeStyles = getThemeClasses();
  const isCover = currentPage === 0 || currentPage === totalPages;

  return (
    <div className={`min-h-screen flex flex-col ${themeStyles.wrapper} transition-colors duration-300 font-sans relative overflow-x-hidden`}>
      {/* Top Header Controls Bar */}
      <BookControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={prevPage}
        onNextPage={nextPage}
        onJumpToPage={goToPage}
        lang={lang}
        onLanguageChange={setLang}
        readingTheme={readingTheme}
        onThemeChange={setReadingTheme}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        bookmarks={bookmarks}
        onToggleBookmark={toggleBookmark}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
      />

      {/* Main Book Stage */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 relative">
        {/* Decorative Desk Texture under the book */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)] pointer-events-none" />

        {isCover ? (
          /* Hardcover Mode */
          <div className="w-full max-w-3xl flex justify-center z-10 perspective-book">
            <AnimatePresence mode="wait" custom={flipDirection}>
              <motion.div
                key={`cover-${currentPage}`}
                custom={flipDirection}
                variants={{
                  enter: (dir: 'next' | 'prev') => ({
                    opacity: 0,
                    rotateY: dir === 'next' ? 45 : -45,
                    transformOrigin: dir === 'next' ? 'left center' : 'right center',
                    scale: 0.96
                  }),
                  center: {
                    opacity: 1,
                    rotateY: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
                  },
                  exit: (dir: 'next' | 'prev') => ({
                    opacity: 0,
                    rotateY: dir === 'next' ? -55 : 55,
                    transformOrigin: dir === 'next' ? 'left center' : 'right center',
                    scale: 0.96,
                    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] }
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full preserve-3d"
              >
                {renderPageContent(currentPage)}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Open Codex Mode: Realistic Book with Spine and Gilded Borders */
          <div className="w-full max-w-5xl mx-auto z-10 perspective-book relative">
            {/* Quick Side Turn Page Gutter Buttons (visible on md+ screens) */}
            {currentPage > 0 && (
              <button
                type="button"
                onClick={prevPage}
                title="Turn to previous page (Left Arrow)"
                className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-l-lg bg-[#2a190f]/90 hover:bg-[#3f2617] text-[#e8c880] border-l-2 border-y-2 border-[#b89b6b]/60 shadow-xl cursor-pointer transition-all hover:-translate-x-1 items-center justify-center group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Previous Page</span>
              </button>
            )}

            {currentPage < totalPages && (
              <button
                type="button"
                onClick={nextPage}
                title="Turn to next page (Right Arrow or Space)"
                className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-r-lg bg-[#2a190f]/90 hover:bg-[#3f2617] text-[#e8c880] border-r-2 border-y-2 border-[#b89b6b]/60 shadow-xl cursor-pointer transition-all hover:translate-x-1 items-center justify-center group"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Next Page</span>
              </button>
            )}

            <div 
              className={`relative rounded-xl border-4 ${themeStyles.paper} p-4 sm:p-8 md:p-10 transition-all duration-300 overflow-hidden preserve-3d book-pages-stack`}
              style={{
                boxShadow: '0 32px 64px -16px rgba(0,0,0,0.75), 0 0 0 1px rgba(184, 154, 107, 0.4) inset, -8px 0 25px rgba(0,0,0,0.5), 8px 0 25px rgba(0,0,0,0.4)'
              }}
            >
              {/* Ribbon Bookmark dangling at top right if page is bookmarked */}
              {bookmarks.includes(currentPage) && (
                <div className="absolute top-0 right-10 w-6 h-12 bg-gradient-to-b from-rose-700 to-rose-900 shadow-md flex items-end justify-center pb-1 z-30 pointer-events-none animate-bounce duration-1000">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[8px] border-b-[#f9f5eb] absolute bottom-0" />
                  <BookmarkIcon className="w-3 h-3 text-white mb-2" />
                </div>
              )}

              {/* Book Spine Crease & Shadow on Left */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none z-20" />
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#8b653e]/25 pointer-events-none z-20" />

              {/* Interactive Dog-Ear Page Curl Corner (Bottom-Right: Next Page) */}
              {currentPage < totalPages && (
                <button
                  type="button"
                  onClick={nextPage}
                  title="Turn to next page →"
                  className="group absolute bottom-0 right-0 w-12 h-12 z-30 cursor-pointer pointer-events-auto dog-ear-curl-br"
                >
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-[#a3804d] via-[#e5d4aa] to-[#fffdf9] border-t-2 border-l-2 border-[#7c5b33] rounded-tl-md shadow-lg group-hover:scale-125 transition-transform duration-200" />
                  <div className="absolute bottom-1 right-1 text-[8px] font-mono font-bold text-[#4a351e] group-hover:text-[#1a0e05] select-none pointer-events-none">
                    ▶
                  </div>
                  <span className="sr-only">Next Page</span>
                </button>
              )}

              {/* Interactive Dog-Ear Page Curl Corner (Bottom-Left: Previous Page) */}
              {currentPage > 0 && (
                <button
                  type="button"
                  onClick={prevPage}
                  title="← Turn to previous page"
                  className="group absolute bottom-0 left-0 w-12 h-12 z-30 cursor-pointer pointer-events-auto dog-ear-curl-bl"
                >
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-[#a3804d] via-[#e5d4aa] to-[#fffdf9] border-t-2 border-r-2 border-[#7c5b33] rounded-tr-md shadow-lg group-hover:scale-125 transition-transform duration-200" />
                  <div className="absolute bottom-1 left-1 text-[8px] font-mono font-bold text-[#4a351e] group-hover:text-[#1a0e05] select-none pointer-events-none">
                    ◀
                  </div>
                  <span className="sr-only">Previous Page</span>
                </button>
              )}

              {/* Decorative Corner Filigrees */}
              <div className="absolute top-2 left-8 text-xs text-[#a08257]/40 font-serif select-none pointer-events-none">❧</div>
              <div className="absolute top-2 right-4 text-xs text-[#a08257]/40 font-serif select-none pointer-events-none">❧</div>
              <div className="absolute bottom-2 left-8 text-xs text-[#a08257]/40 font-serif select-none pointer-events-none">❧</div>
              <div className="absolute bottom-2 right-4 text-xs text-[#a08257]/40 font-serif select-none pointer-events-none">❧</div>

              {/* Running Book Header */}
              <div className="flex items-center justify-between border-b border-[#dfd2be]/70 pb-2 mb-4 text-[11px] font-serif text-[#78644e] select-none">
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#915e2e]" />
                  <span className="font-semibold uppercase tracking-wider">{t.appTitle}</span>
                </div>
                <div className="font-mono text-[#8b7258]">
                  {t.pageOf.replace('{current}', String(currentPage)).replace('{total}', String(totalPages))}
                </div>
              </div>

              {/* Animated 3D Book Page Flip Content */}
              <div className="relative min-h-[500px] overflow-hidden">
                <AnimatePresence mode="wait" custom={flipDirection}>
                  <motion.div
                    key={`page-${currentPage}`}
                    custom={flipDirection}
                    variants={{
                      enter: (dir: 'next' | 'prev') => ({
                        rotateY: dir === 'next' ? 78 : -78,
                        skewY: dir === 'next' ? -1.5 : 1.5,
                        rotateZ: dir === 'next' ? -0.8 : 0.8,
                        opacity: 0.1,
                        transformOrigin: 'left center',
                        scale: 0.98,
                        filter: 'brightness(0.92) contrast(1.05)',
                        transition: {
                          duration: 0.52,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }),
                      center: {
                        rotateY: 0,
                        skewY: 0,
                        rotateZ: 0,
                        opacity: 1,
                        scale: 1,
                        filter: 'brightness(1) contrast(1)',
                        transition: {
                          duration: 0.52,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      },
                      exit: (dir: 'next' | 'prev') => ({
                        rotateY: dir === 'next' ? -80 : 80,
                        skewY: dir === 'next' ? 1.5 : -1.5,
                        rotateZ: dir === 'next' ? 0.8 : -0.8,
                        opacity: 0,
                        transformOrigin: 'left center',
                        scale: 0.98,
                        filter: 'brightness(0.82) contrast(1.15)',
                        transition: {
                          duration: 0.48,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`min-h-[500px] preserve-3d backface-hidden relative ${
                      fontSize === 'large' ? 'text-base' : fontSize === 'small' ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    {/* Dynamic Paper Curl Sheen & Ambient Light Overlay */}
                    <motion.div
                      initial={{ opacity: 0.45 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className="paper-curl-overlay absolute inset-0 z-20 pointer-events-none rounded-lg"
                    />

                    {renderPageContent(currentPage)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Running Book Footer */}
              <div className="flex items-center justify-between border-t border-[#dfd2be]/70 pt-3 mt-6 text-[11px] font-sans text-[#78644e] select-none">
                <div className="text-[10px] text-[#8e7a65]">
                  BNB Smart Chain Mainnet · Chain ID: 56
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif italic text-[#846b51]">
                    — {currentPage} —
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Sticky Page Turning Navigation Bar */}
      <footer className="w-full bg-[#1b100a] text-[#ded1be] border-t border-[#4f3726] px-4 py-2.5 sm:px-8 shadow-lg select-none sticky bottom-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          {/* Previous Page Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="px-3.5 py-1.5 bg-[#2c1a11] hover:bg-[#3d2518] disabled:opacity-30 disabled:cursor-not-allowed rounded border border-[#5c402e] text-xs font-serif font-bold text-[#e6c780] flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden xs:inline">{t.prevPage}</span>
          </button>

          {/* Center Page Progress Slider */}
          <div className="flex-1 max-w-md flex items-center gap-3">
            <button
              onClick={() => goToPage(0)}
              title={t.bookCoverTitle}
              className="p-1 rounded text-[#ab977e] hover:text-[#e8c880] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <input
              type="range"
              min="0"
              max={totalPages}
              value={currentPage}
              onChange={(e) => goToPage(Number(e.target.value))}
              className="w-full h-1.5 bg-[#3a2519] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
            />

            <span className="font-serif font-bold text-xs text-[#e8c880] font-mono shrink-0">
              {currentPage} / {totalPages}
            </span>
          </div>

          {/* Next Page Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-3.5 py-1.5 bg-gradient-to-r from-[#9e702e] to-[#bf8c3e] hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed rounded text-xs font-serif font-bold text-[#140b05] flex items-center gap-1.5 cursor-pointer transition-all shadow-xs border border-[#dfb368]"
          >
            <span className="hidden xs:inline">{t.nextPage}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
