import { BookChapter } from './types';

export const BREW_DOCUMENTATION_CHAPTERS: BookChapter[] = [
  {
    id: 'overview',
    chapterNumber: 'PROLOGUE',
    titleEn: 'Philosophy & Protocol Architecture',
    subtitleEn: 'Creator & Community Fair Launchpad on BNB Smart Chain',
    iconName: 'Coffee',
    summaryEn: 'Brew (brew.family) is a decentralized token launching protocol on BNB Chain allowing anyone to brew new creator tokens paired against memecoins, crypto, or tokenized stocks (bStocks) with instant permanent liquidity locking.',
    illustration: {
      url: '/illustrations/brew-alchemy.jpg',
      captionEn: 'Fig. 1 — Concentrated Liquidity Alchemy Laboratory & Token Brewing Engine on BNB Chain'
    },
    sections: [
      {
        id: 'overview-mission',
        titleEn: 'Core Mission & Value Proposition',
        contentEn: [
          'In traditional crypto launchpads, token launches are frequently plagued by sudden liquidity extraction (rugpulls), opaque presale allocations with secret unlocks, and privileged developer backdoors.',
          'Brew establishes a fundamentally new paradigm on BNB Smart Chain:',
          '1. **Fair Launch Without Presales**: Every token deploys directly into open, public PancakeSwap V3 liquidity pools in an atomic transaction.',
          '2. **Multi-Asset Pairing Flexibility**: Unlike conventional launchpads restricted strictly to BNB, Brew lets you pair tokens with USDT, USDC, BTCB, ETH, CAKE, XAUt Gold, and bStocks (tokenized blue-chip equities like Tesla, Apple, SpaceX, and NVIDIA).',
          '3. **Permanent Liquidity Locking**: Concentrated liquidity NFT positions are irrevocably locked inside BrewLiquidityLocker contracts with zero principal withdrawal methods for anyone, including protocol founders.'
        ],
        callout: {
          type: 'tip',
          textEn: 'The combination of versatile quote pairs and mathematically irreversible liquidity locks makes Brew the premier safe haven for creator token communities.'
        },
        keyData: [
          { labelEn: 'Primary Network', value: 'BNB Smart Chain (BSC)', hintEn: 'Chain ID: 56' },
          { labelEn: 'DEX Engine', value: 'PancakeSwap V3', hintEn: 'Concentrated Liquidity' },
          { labelEn: 'Launch Pool Fee', value: '1.0%', hintEn: '10000 basis points' },
          { labelEn: 'Fixed Supply', value: '1,000,000,000', hintEn: '18 decimals · No Minting' }
        ]
      }
    ]
  },
  {
    id: 'history',
    chapterNumber: 'CHRONICLES',
    titleEn: 'The Chronicles & History of Brew Protocol',
    subtitleEn: 'The Origin Story, Anti-Rug Movement, bStocks Revolution & 80% Buyback Engine',
    iconName: 'Compass',
    summaryEn: 'The historical journey of brew.family on BNB Smart Chain: how an innovation born from coffee craft and decentralization eradicated liquidity rugpulls, pioneered global tokenized stock pairs (bStocks), and established a self-sustaining deflationary ecosystem with over 1,050 tokens launched.',
    illustration: {
      url: '/illustrations/founders-chronicles.jpg',
      captionEn: 'Fig. 2 — The Founding Alchemists & Cryptographic Architects Conferring on the Anti-Rugpull Covenant on BSC'
    },
    sections: [
      {
        id: 'history-genesis-mission',
        titleEn: 'Genesis & The Anti-Rugpull Movement',
        contentEn: [
          'During the boom of token launches on BNB Smart Chain between late 2023 and early 2024, the Web3 community faced an existential threat: predatory liquidity withdrawals (rugpulls), manipulative presales, and malicious contracts draining retail investors.',
          'Confronting this ecosystem-wide crisis, the founders of brew.family established a binding cryptographic covenant: **to architect a launchpad where liquidity theft is mathematically impossible**.',
          'This catalyzed the invention of `BrewLiquidityLocker` (contract 0x3366e32702d6116B4FD2Cd3353dE2D5fF993F0d4), integrated directly with PancakeSwap V3 concentrated liquidity. NFT position tokens are locked permanently with zero principal extraction routines, renouncing all developer backdoors.'
        ],
        callout: {
          type: 'technical',
          textEn: 'BrewLiquidityLocker is verified on BscScan with zero withdrawal functions for principal liquidity, guaranteeing 100% anti-rug protection.'
        },
        keyData: [
          { labelEn: 'Genesis Year', value: '2024', hintEn: 'BNB Smart Chain' },
          { labelEn: 'Liquidity Guarantee', value: '100% Locked', hintEn: 'Zero Rugpull' },
          { labelEn: 'Mint Supply', value: '1 Billion Fixed', hintEn: 'No Inflation' },
          { labelEn: 'Creator Fee', value: '0 BNB', hintEn: 'Gas only' }
        ]
      },
      {
        id: 'history-coffee-philosophy',
        titleEn: 'Coffee Craft Philosophy & The "Family" Identity',
        contentEn: [
          'Why the name "Brew" and "Brew Family"? In artisanal coffee culture, brewing the perfect espresso requires mathematical precision: exact ground-to-water ratios, consistent pressure, and pure unadulterated ingredients.',
          'This philosophy translates directly into blockchain tokenomics: each newly minted token is a tailored community "brew," governed by a fixed 1 billion supply with zero hidden taxes and zero honeypots. The "Family" moniker represents a collective Web3 home where creators and holders share mutual deflationary upside.'
        ]
      },
      {
        id: 'history-bstocks-era',
        titleEn: 'Historical Milestone: The bStocks Global Equity Bridge',
        contentEn: [
          'One of the most revolutionary milestones in Brew history was integrating tokenized global equities (bStocks) directly into creator launch pools on BNB Chain.',
          'Previously, launchpads restricted pairs exclusively to native BNB or BUSD. Brew dismantled this boundary by enabling direct, atomic pairs against real-world equities: Tesla (TSLAb), NVIDIA (NVDAb), Apple (AAPLAb), SpaceX (SPACEXb), Alphabet Google (GOOGLb), Alibaba (BABAb), GameStop (GMEb), Invesco QQQ (QQQb), and the S&P 500 ETF (SPYb).',
          'This established Brew as a pioneering hybrid bourse where cultural community tokens trade directly against global technology equities without synthetic bridges.'
        ]
      },
      {
        id: 'history-buyback-deflation',
        titleEn: 'The 80% Buyback Engine & 100% Token Burn Architecture',
        contentEn: [
          'To solidify the long-term scarcity and economic health of the native $BREW ecosystem, the protocol architected an aggressive deflationary engine:',
          '1. **100% Token-Side Fee Burn**: All trading fees collected in the launched token are dispatched directly to the dead address (`0x...dead`), reducing circulating supply with every trade.',
          '2. **80% Protocol Fee Buyback Scarcity Protocol**: A staggering 80% of all paired-asset fees claimed by the protocol treasury are systematically deployed to buy back native $BREW on the open market and burn it forever.',
          '3. **Automated Holder Rewards**: Through `BrewDistributorFactory`, creators can permanently renounce their fee stream to autonomous market buybacks for their community holders.'
        ]
      },
      {
        id: 'history-milestone-1050',
        titleEn: 'Epochal Milestone: Exceeding 1,050+ On-Chain Launches',
        contentEn: [
          'Progressing from the original Single-Pair Factory (0xeea6c3bfb29fd9a35380438956bae7b109c63d85) to MultiPair Factory V1 (0x21653fa9c9562d55a162c17d2ef33fc0fab7ea71) and MultiPair Factory V2 (0x0f8708a91d8e3b3458be94d32caa6e62e98daedc), the protocol has officially powered over 1,050 verified launches on BNB Smart Chain.',
          'Every creation event, block checkpoint, and pool initialization is immutably inscribed on-chain and indexed in `launch-checkpoints.json` across block heights exceeding 120,489,295+, positioning Brew as an enduring benchmark for fair, verified creator tokenomics on BNB Chain.'
        ],
        keyData: [
          { labelEn: 'Total Launches', value: '1,050+', hintEn: 'Indexed on BSC' },
          { labelEn: 'Buyback Allocation', value: '80%', hintEn: 'Protocol fees to $BREW' },
          { labelEn: 'Token Burn Rate', value: '100%', hintEn: 'Sent to 0x...dead' },
          { labelEn: 'Quote Assets', value: '25+', hintEn: 'Crypto & bStocks' }
        ]
      }
    ]
  },
  {
    id: 'disclaimer',
    chapterNumber: 'CHAPTER I',
    titleEn: 'Risk Disclaimer & Regulatory Compliance',
    subtitleEn: 'User Eligibility & Digital Asset Risk Framework',
    iconName: 'ShieldAlert',
    summaryEn: 'Official legal disclaimer and jurisdictional eligibility declarations. Brew is strictly not available to U.S. citizens. Digital asset transactions carry high volatility risks.',
    illustration: {
      url: '/illustrations/law-disclaimer.jpg',
      captionEn: 'Fig. 3 — Renaissance Scales of Justice, Regulatory Compliance Aegis & Digital Asset Risk Vigilance'
    },
    sections: [
      {
        id: 'disclaimer-eligibility',
        titleEn: 'Who Can Use Brew (Eligibility)',
        contentEn: [
          '**Brew is strictly not available to U.S. citizens.**',
          'By selecting Continue to Brew, you confirm that you are not a U.S. citizen, understand these risks and are legally permitted to use Brew in your jurisdiction.',
          'This confirmation is a self-declaration, not identity or citizenship verification.'
        ],
        callout: {
          type: 'warning',
          textEn: 'Prices, charts and analytics may be delayed or incomplete. Check transaction details in your wallet and on BscScan.'
        },
        keyData: [
          { labelEn: 'Jurisdiction Status', value: 'Non-US Only', hintEn: 'Self-declaration' },
          { labelEn: 'Regulatory Guide', value: 'CFTC Digital Advisory', hintEn: 'Digital-token risk guidance' }
        ]
      }
    ]
  },
  {
    id: 'getting-started',
    chapterNumber: 'CHAPTER II',
    titleEn: 'Creating Your Token (Launch Studio)',
    subtitleEn: 'Step-by-Step Guide to Deploying Tokens on BSC',
    iconName: 'Sparkles',
    summaryEn: 'Brew launches your token directly into a PancakeSwap V3 pool on BSC in a single atomic transaction. Once confirmed and indexed, your token appears in Explore with its dedicated trading page.',
    illustration: {
      url: '/illustrations/launch-forge.jpg',
      captionEn: 'Fig. 4 — Architectural Blueprint of the Decentralized Token Minting Forge in BrewFactory'
    },
    sections: [
      {
        id: 'launch-steps',
        titleEn: 'The 4-Step Launch Process',
        contentEn: [
          '1. **Step 1 · Make it yours**: Add a name, ticker and artwork. Tickers keep your chosen capitalization. Add a description and community links so people can find you.',
          '2. **Step 2 · Choose what it trades with**: Select BNB, USDT, or another compatible BSC token. This becomes your token’s paired asset.',
          '3. **Step 3 · Set your launch preferences**: Choose where creator fees go. You can also make an optional first purchase using the paired asset in the same atomic block.',
          '4. **Step 4 · Connect and launch**: Connect your wallet, switch to BSC and confirm the launch details. Keep BNB available for network gas fees.'
        ],
        keyData: [
          { labelEn: 'Initial Token Supply', value: '1,000,000,000', hintEn: '1 Billion tokens (18 decimals)' },
          { labelEn: 'Launch Pool Fee', value: '1.0%', hintEn: 'Charged on trades through pool' },
          { labelEn: 'Liquidity Status', value: 'Permanently Locked', hintEn: 'Held in BrewLiquidityLocker' },
          { labelEn: 'Protocol Launch Fee', value: '0 BNB', hintEn: 'BSC network gas only' }
        ]
      }
    ]
  },
  {
    id: 'pairing',
    chapterNumber: 'CHAPTER III',
    titleEn: 'Choosing Your Pair (Quote Assets)',
    subtitleEn: 'Bridging Tokens to Crypto, Memes, or Tokenized Equities',
    iconName: 'Coins',
    summaryEn: 'Your pair is the asset your token trades against. Brew supports trending BSC tokens, blue-chip crypto, tokenized stocks (bStocks), or any custom BEP-20 contract address.',
    illustration: {
      url: '/illustrations/bstocks-bourse.jpg',
      captionEn: 'Fig. 5 — Renaissance Trading Bourse: The Confluence of Blue-Chip Crypto & Tokenized Equities (bStocks)'
    },
    sections: [
      {
        id: 'pairing-categories',
        titleEn: 'Supported Pairing Categories',
        contentEn: [
          '• **Native & Stablecoins**: WBNB (highest liquidity), USDT (Tether USD), USDC (Circle USD) for broad liquidity and steady pricing.',
          '• **Premier Crypto**: BTCB (Bitcoin BEP20), ETH (Ethereum BEP20), CAKE (PancakeSwap Token) connecting to major ecosystem communities.',
          '• **bStocks (Tokenized Global Equities)**: Unique to BNB Chain, creator tokens can trade directly against tokenized global stock prices including Tesla, NVIDIA, Apple, SpaceX, Google, GameStop, and the S&P 500 ETF.',
          '• **Any BSC Token**: Paste any contract address (0x...) to create a niche community pair.'
        ],
        callout: {
          type: 'note',
          textEn: 'Trading with BNB automatically routes through liquidity available between BNB and your chosen quote token.'
        }
      }
    ]
  },
  {
    id: 'trading',
    chapterNumber: 'CHAPTER IV',
    titleEn: 'Explore & Trade Mechanics',
    subtitleEn: 'PancakeSwap V3 Engine, Smart Routing & Slippage Guards',
    iconName: 'CandlestickChart',
    summaryEn: 'Understand how trades execute on Brew: real-time quotes via PancakeSwap Quoter V2, slippage protections, decentralized execution, and verifiable on-chain audit trails.',
    illustration: {
      url: '/illustrations/liquidity-diagram.jpg',
      captionEn: 'Fig. 6 — Mathematical Concentrated Liquidity Curve & PancakeSwap V3 Smart Routing Diagram'
    },
    sections: [
      {
        id: 'trading-execution',
        titleEn: 'Trade Execution & Slippage Management',
        contentEn: [
          '1. **Buy with Paired Token or BNB**: Toggle payment currency beside swap input. BNB trades route through available liquidity.',
          '2. **Real-time Dynamic Quoting**: Brew fetches fresh quotes on trade initiation and after required ERC20 approvals to guarantee minimum received output.',
          '3. **Wallet Security**: Connecting reads balances only; every trade and token allowance requires explicit user wallet confirmation.'
        ]
      }
    ]
  },
  {
    id: 'fees',
    chapterNumber: 'CHAPTER V',
    titleEn: 'Fee Architecture & Holder Rewards',
    subtitleEn: '50/50 Fee Split, 100% Token Burn, and Automated Buybacks',
    iconName: 'Flame',
    summaryEn: 'Every trade in a Brew launch pool carries a 1% fee. Token-side fees are burned forever to 0x...dead. Paired fees split 50/50 between creator and protocol, or can be permanently routed to holder rewards.',
    illustration: {
      url: '/illustrations/buyback-phoenix.jpg',
      captionEn: 'Fig. 7 — The Golden Deflation Phoenix: 100% Token Fee Burn & 80% Protocol Scarcity Buyback Engine'
    },
    sections: [
      {
        id: 'fee-breakdown',
        titleEn: 'Detailed Fee Breakdown',
        contentEn: [
          '• **Launch Pool Fee**: 1.0% (100 bps) collected on every swap in the PancakeSwap V3 pool.',
          '• **Token-Side Fee**: 100% permanently sent to 0x000000000000000000000000000000000000dead (Burned). Constant deflationary pressure!',
          '• **Paired-Token Fee**: Split 50/50 between creator fee recipient and protocol treasury.',
          '• **Claiming**: Connect fee recipient wallet to claim accumulated paired token earnings across all launches with identical paired assets.',
          '• **Holder Rewards**: Routing to holders triggers automated market buyback and burn to dead address on demand. Anyone can trigger distribution permissionlessly.'
        ],
        callout: {
          type: 'warning',
          textEn: 'Routing fees to holders is PERMANENT and cannot be reversed back to creator wallet payouts.'
        },
        keyData: [
          { labelEn: 'Total Pool Fee', value: '1.0%', hintEn: 'PancakeSwap V3 tier' },
          { labelEn: 'Token Fee Burn', value: '100%', hintEn: 'Sent to 0x...dead' },
          { labelEn: 'Creator Share', value: '50%', hintEn: 'Of paired-token fees' },
          { labelEn: 'Protocol Share', value: '50%', hintEn: 'Maximum protocol cap' }
        ]
      }
    ]
  },
  {
    id: 'contracts',
    chapterNumber: 'CHAPTER VI',
    titleEn: 'Smart Contracts & Verification',
    subtitleEn: 'Complete Verified Contract Registry on BSC Mainnet',
    iconName: 'FileCode',
    summaryEn: 'All core protocol and external infrastructure contracts deployed on BNB Smart Chain Mainnet. Fully verified on BscScan with zero owner privileges, zero extra minting, and zero transfer tax.',
    illustration: {
      url: '/illustrations/contracts-astrolabe.jpg',
      captionEn: 'Fig. 8 — Celestial Armillary Astrolabe & Cryptographic Clockwork of Immutable Smart Contracts on BSC'
    },
    sections: [
      {
        id: 'contracts-core',
        titleEn: 'Brew Protocol Core Contracts',
        contentEn: [
          'Every token launched on Brew deploys a clean BEP-20 contract with fixed 1B supply, zero hidden taxes, no mint capabilities, and no central ownership.',
          'The entire lifecycle from creation to liquidity locking occurs atomically in a single block transaction.'
        ]
      }
    ]
  },
  {
    id: 'faq',
    chapterNumber: 'CHAPTER VII',
    titleEn: 'Frequently Asked Questions (FAQ)',
    subtitleEn: 'Official Answers to Most Common Protocol Questions',
    iconName: 'HelpCircle',
    summaryEn: 'Troubleshooting guide, technical clarifications on wallet connections, liquidity lock permanence, delayed USD valuations, and token management.',
    illustration: {
      url: '/illustrations/library-faq.jpg',
      captionEn: 'Fig. 9 — Illuminated Manuscript of Scribes & Scholars Examining the Great Protocol Archives'
    },
    sections: [
      {
        id: 'faq-list',
        titleEn: 'Official Q&A Directory',
        contentEn: [
          '**Q: Why isn’t my Web3 wallet showing up in the connection menu?**',
          'A: Use a browser with your wallet extension installed and enabled (MetaMask, Rabby, Binance Web3 Wallet), or your wallet’s built-in in-app mobile browser. Unlock your wallet and grant connection permissions.',
          '',
          '**Q: Can I change my token name or ticker after launch?**',
          'A: No. The token name, ticker, and on-chain metadata pointer are immutable on-chain once created. Double-check before submitting.',
          '',
          '**Q: Why are new trades occasionally missing USD values?**',
          'A: BSC blocks settle rapidly in 3 seconds before third-party market indexers (GeckoTerminal/DEX Screener) finish historical pricing. Brew updates values dynamically as indexed.',
          '',
          '**Q: Can the creator remove the launch liquidity?**',
          'A: ABSOLUTELY NOT. Positions stay in BrewLiquidityLocker permanently with zero withdrawal functions for principal liquidity.',
          '',
          '**Q: Does each token need a new factory?**',
          'A: No. The shared, audited BrewFactory handles all launches smoothly and permissionlessly across BSC.'
        ]
      }
    ]
  }
];
