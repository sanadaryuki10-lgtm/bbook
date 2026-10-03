import Link from 'next/link';
import { BookOpen, RotateCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1b1009] flex items-center justify-center p-4 text-[#e8c880]">
      <div className="max-w-md w-full bg-[#241710] border-2 border-[#8b653e] rounded-xl p-8 text-center space-y-4 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#3d2719] border border-[#d4af37] mx-auto flex items-center justify-center text-[#e8c880]">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-serif font-bold text-[#f7eed9]">
          Page Not In Codex
        </h1>
        <p className="text-xs text-[#c7b494] leading-relaxed">
          The requested chronicle or folio does not exist in this volume. Return to the main codex to browse all chapters, contracts, and verified on-chain data.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-[#9e702e] to-[#bf8c3e] hover:brightness-110 text-[#140b05] text-xs font-serif font-bold transition-all shadow-md"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Return to Cover</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
