import type {Metadata} from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'The Brew Protocol Codex — BNB Chain Guide & Data Compendium',
  description: 'Illustrated interactive codex and complete data compendium for Brew Protocol (brew.family) on BNB Smart Chain: historical chronicles, technical architecture blueprints, verified smart contracts, 1,050+ token launches, 25 quote assets, swap simulator, and launch studio.',
  openGraph: {
    title: 'The Brew Protocol Codex — BNB Chain Guide & Data Compendium',
    description: 'Illustrated interactive codex and complete data compendium for Brew Protocol (brew.family) on BNB Smart Chain: historical chronicles, technical architecture blueprints, verified smart contracts, 1,050+ token launches, 25 quote assets, swap simulator, and launch studio.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Brew Protocol Codex — BNB Chain Guide & Data Compendium',
    description: 'Illustrated interactive codex and complete data compendium for Brew Protocol (brew.family) on BNB Smart Chain: historical chronicles, technical architecture blueprints, verified smart contracts, 1,050+ token launches, 25 quote assets, swap simulator, and launch studio.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body suppressHydrationWarning className="antialiased selection:bg-[#c49a45] selection:text-[#1c1109]">
        {children}
      </body>
    </html>
  );
}
