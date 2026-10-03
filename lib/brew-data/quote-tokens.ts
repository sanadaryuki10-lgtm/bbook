import { QuoteTokenInfo } from './types';

export const BREW_QUOTE_TOKENS: QuoteTokenInfo[] = [
  {
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    name: 'Wrapped BNB',
    symbol: 'WBNB',
    category: 'native',
    decimals: 18,
    iconChar: '🟡',
    badgeColor: 'amber',
    logoUrl: '/token-logos/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
    description: 'Primary default base pair on BNB Smart Chain. Deepest liquidity and native DEX routing.'
  },
  {
    address: '0x55d398326f99059ff775485246999027b3197955',
    name: 'Tether USD',
    symbol: 'USDT',
    category: 'stable',
    decimals: 18,
    iconChar: '₮',
    badgeColor: 'emerald',
    logoUrl: '/token-logos/0x55d398326f99059ff775485246999027b3197955.png',
    description: 'Most widely used USD pegged stablecoin on BSC for reliable value pricing.'
  },
  {
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    name: 'USD Coin',
    symbol: 'USDC',
    category: 'stable',
    decimals: 18,
    iconChar: '$',
    badgeColor: 'blue',
    logoUrl: '/token-logos/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.jpg',
    description: 'Fully backed, regulated Circle USD stablecoin deployed on BNB Smart Chain.'
  },
  {
    address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    name: 'PancakeSwap Token',
    symbol: 'CAKE',
    category: 'crypto',
    decimals: 18,
    iconChar: '🥞',
    badgeColor: 'yellow',
    logoUrl: '/token-logos/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
    description: 'Native governance and liquidity token of PancakeSwap DEX on BSC.'
  },
  {
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    name: 'BTCB Token',
    symbol: 'BTCB',
    category: 'crypto',
    decimals: 18,
    iconChar: '₿',
    badgeColor: 'orange',
    logoUrl: '/token-logos/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
    description: '1:1 Bitcoin-pegged asset natively tradable across BNB Smart Chain.'
  },
  {
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    name: 'Ethereum Token',
    symbol: 'ETH',
    category: 'crypto',
    decimals: 18,
    iconChar: 'Ξ',
    badgeColor: 'indigo',
    logoUrl: '/token-logos/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png',
    description: 'Wrapped Ethereum (BEP-20) standard trading pair on BNB Smart Chain.'
  },
  {
    address: '0x02fca66c1d1afb4e2a7884261eb00f63598a7436',
    name: 'NVIDIA Corp',
    symbol: 'NVDAB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🟢',
    badgeColor: 'green',
    logoUrl: '/token-logos/0x02fca66c1d1afb4e2a7884261eb00f63598a7436.png',
    description: 'Tokenized NVIDIA equity (bStocks) on BSC for AI & tech community tokens.'
  },
  {
    address: '0x5b1910eaad6450e50f816082aa078c41f10c292f',
    name: 'Tesla, Inc.',
    symbol: 'TSLAB',
    category: 'bstock',
    decimals: 18,
    iconChar: '⚡',
    badgeColor: 'red',
    logoUrl: '/token-logos/0x5b1910eaad6450e50f816082aa078c41f10c292f.png',
    description: 'Tokenized Tesla equity (bStocks) on BSC for EV, innovation, and meme communities.'
  },
  {
    address: '0x431a3bee82e2ca41e49895cbece5bb0f76a89b7a',
    name: 'Apple',
    symbol: 'AAPLB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🍎',
    badgeColor: 'slate',
    logoUrl: '/token-logos/0x431a3bee82e2ca41e49895cbece5bb0f76a89b7a.png',
    description: 'Tokenized Apple Inc. global consumer technology equity (bStocks) on BSC.'
  },
  {
    address: '0x3f53de71c126bdabae20f9cd64848d317f6c3238',
    name: 'Alphabet (Google)',
    symbol: 'GOOGLB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🔍',
    badgeColor: 'blue',
    logoUrl: '/token-logos/0x3f53de71c126bdabae20f9cd64848d317f6c3238.png',
    description: 'Tokenized Alphabet Inc. search and cloud equity (bStocks) on BSC.'
  },
  {
    address: '0x205812cdbed920aff76c6580abd681a46d11efc7',
    name: 'Invesco QQQ',
    symbol: 'QQQB',
    category: 'bstock',
    decimals: 18,
    iconChar: '📈',
    badgeColor: 'purple',
    logoUrl: '/token-logos/0x205812cdbed920aff76c6580abd681a46d11efc7.png',
    description: 'Tokenized Invesco QQQ Nasdaq-100 ETF index (bStocks) for tech creators.'
  },
  {
    address: '0x7138b48df7d98d7e3cc221bfe7192d0a178182d8',
    name: 'SPY (S&P 500)',
    symbol: 'SPYB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🏛️',
    badgeColor: 'cyan',
    logoUrl: '/token-logos/0x7138b48df7d98d7e3cc221bfe7192d0a178182d8.png',
    description: 'Tokenized SPDR S&P 500 ETF Trust equity (bStocks) benchmark on BSC.'
  },
  {
    address: '0xbe9d156892e55e7154bcd3cb0fea677f9d3103e1',
    name: 'SpaceX',
    symbol: 'SPCXB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🚀',
    badgeColor: 'stone',
    logoUrl: '/token-logos/0xbe9d156892e55e7154bcd3cb0fea677f9d3103e1.png',
    description: 'Tokenized SpaceX aerospace private stock (bStocks) on BNB Smart Chain.'
  },
  {
    address: '0x4ef9d3062c7f6eba4aae4990c5036598c6eff4ec',
    name: 'Alibaba Group',
    symbol: 'BABAB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🛍️',
    badgeColor: 'amber',
    logoUrl: '/token-logos/0x4ef9d3062c7f6eba4aae4990c5036598c6eff4ec.png',
    description: 'Tokenized Alibaba Group global commerce equity (bStocks) on BSC.'
  },
  {
    address: '0x46ceefda28dd7207059ed19b0acdc026955bb15c',
    name: 'GameStop',
    symbol: 'GMEB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🎮',
    badgeColor: 'rose',
    logoUrl: '/token-logos/0x46ceefda28dd7207059ed19b0acdc026955bb15c.png',
    description: 'Tokenized GameStop equity (bStocks), standard bearer of retail memestocks.'
  },
  {
    address: '0x21caef8a43163eea865baee23b9c2e327696a3bf',
    name: 'Tether Gold',
    symbol: 'XAUT',
    category: 'stable',
    decimals: 18,
    iconChar: '🏆',
    badgeColor: 'yellow',
    logoUrl: '/token-logos/0x21caef8a43163eea865baee23b9c2e327696a3bf.png',
    description: 'Physical allocated fine gold backed token (1 troy oz) on BNB Chain.'
  },
  {
    address: '0x5fd86da9b05abe396fe9d02a4a213a7c00556503',
    name: 'Moderna',
    symbol: 'MRNAB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🧬',
    badgeColor: 'emerald',
    logoUrl: '/token-logos/0x5fd86da9b05abe396fe9d02a4a213a7c00556503.png',
    description: 'Tokenized Moderna mRNA biotechnology equity (bStocks) on BSC.'
  },
  {
    address: '0xfa6d9b504848606eb9aec04ccc161d169b3f2159',
    name: 'BREW',
    symbol: 'BREW',
    category: 'brand',
    decimals: 18,
    iconChar: '☕',
    badgeColor: 'amber',
    logoUrl: '/brand/brew-mark.png',
    description: 'Native platform brand and community token of Brew on BNB Smart Chain.'
  },
  {
    address: '0x80106cb3ead06659a5ad19df39d9b4733863b9b0',
    name: 'Microsoft Corp',
    symbol: 'MSFTB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🪟',
    badgeColor: 'sky',
    logoUrl: '/token-logos/0x80106cb3ead06659a5ad19df39d9b4733863b9b0.png',
    description: 'Tokenized Microsoft Corporation enterprise software equity (bStocks).'
  },
  {
    address: '0x7425889fe94f9d693e8daefe88bcced6acfef4c0',
    name: 'Meta Platforms',
    symbol: 'METAB',
    category: 'bstock',
    decimals: 18,
    iconChar: '👓',
    badgeColor: 'blue',
    logoUrl: '/token-logos/0x7425889fe94f9d693e8daefe88bcced6acfef4c0.png',
    description: 'Tokenized Meta Platforms social media & VR equity (bStocks) on BSC.'
  },
  {
    address: '0x75fd4cf6f8392e41e70391d60c90c0d5211603a1',
    name: 'Advanced Micro Devices',
    symbol: 'AMDB',
    category: 'bstock',
    decimals: 18,
    iconChar: '💻',
    badgeColor: 'rose',
    logoUrl: '/token-logos/0x75fd4cf6f8392e41e70391d60c90c0d5211603a1.png',
    description: 'Tokenized AMD semiconductor & GPU manufacturer equity (bStocks).'
  },
  {
    address: '0x80f3d493ebce97e343c53d29a137942416b4ffc0',
    name: 'Circle Internet Group',
    symbol: 'CRCL',
    category: 'crypto',
    decimals: 18,
    iconChar: '⭕',
    badgeColor: 'indigo',
    logoUrl: '/token-logos/0x80f3d493ebce97e343c53d29a137942416b4ffc0.png',
    description: 'Circle ecosystem token powering stable digital financial rails on BSC.'
  },
  {
    address: '0xcdf2f3e0fa43c47a6662a91c9e4a7c5f69762699',
    name: 'Micron Technology',
    symbol: 'MUB',
    category: 'bstock',
    decimals: 18,
    iconChar: '💾',
    badgeColor: 'cyan',
    logoUrl: '/token-logos/0xcdf2f3e0fa43c47a6662a91c9e4a7c5f69762699.png',
    description: 'Tokenized Micron Technology semiconductor memory equity (bStocks).'
  },
  {
    address: '0x0ca5d51d0277bd006fd9607d3e560785ebad8222',
    name: 'Palantir Technologies',
    symbol: 'PLTRB',
    category: 'bstock',
    decimals: 18,
    iconChar: '🔮',
    badgeColor: 'purple',
    logoUrl: '/token-logos/0x0ca5d51d0277bd006fd9607d3e560785ebad8222.png',
    description: 'Tokenized Palantir Technologies data analytics and AI software equity (bStocks).'
  },
  {
    address: '0xbc5ff7fe4d1b928423cf6c54bfa5f907130b4024',
    name: 'MOMO',
    symbol: 'MOMO',
    category: 'brand',
    decimals: 18,
    iconChar: '🐶',
    badgeColor: 'orange',
    logoUrl: '/token-logos/0xbc5ff7fe4d1b928423cf6c54bfa5f907130b4024.webp',
    description: 'Iconic community dog meme token originally brewed and traded on Brew.'
  }
];
