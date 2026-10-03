import { SmartContractInfo } from './types';

export const BREW_CHAIN_ID = 56;
export const BREW_NETWORK_NAME = 'BNB Smart Chain Mainnet';
export const BREW_DEAD_ADDRESS = '0x000000000000000000000000000000000000dead';
export const BREW_ADMIN_WALLET = '0x97b8240cf6e1B36A2dAC7A555969B00d529786f8';

export const BREW_CONTRACTS: SmartContractInfo[] = [
  {
    name: 'BrewFactory',
    label: 'Token Launches & Initial Pool',
    address: '0xeEa6C3bfb29Fd9a35380438956bae7B109c63d85',
    role: 'core',
    descriptionEn: 'Creates each token and its PancakeSwap V3 trading pool, adds the launch liquidity, and locks the liquidity positions permanently. An optional first purchase can happen in the same launch transaction.',
    bscScanUrl: 'https://bscscan.com/address/0xeEa6C3bfb29Fd9a35380438956bae7B109c63d85',
    keyHighlights: [
      'Single-pair standard PancakeSwap V3 launch',
      'Pure BEP-20 token without privileged roles (no minting, no owner)',
      'Zero BNB platform creation fee (BSC gas only)',
      'Atomic execution: token deployment + pool creation + permanent lock'
    ]
  },
  {
    name: 'BrewLiquidityLocker',
    label: 'Locked Liquidity & Fee Splitter',
    address: '0x3366e32702d6116B4FD2Cd3353dE2D5fF993F0d4',
    role: 'core',
    descriptionEn: 'Holds the launch liquidity positions permanently. Collects trading fees, sends token-side fees to the burn address (0x...dead), and credits paired-token fees for claiming.',
    bscScanUrl: 'https://bscscan.com/address/0x3366e32702d6116B4FD2Cd3353dE2D5fF993F0d4',
    keyHighlights: [
      'Zero withdrawal functions for principal liquidity (Permanent anti-rug)',
      '100% of launched token fees burned to 0x000...dead',
      'Paired-token fees split 50/50 between creator recipient and protocol',
      'Accrued claim balances pooled across launches with same paired asset'
    ]
  },
  {
    name: 'BrewDistributorFactory',
    label: 'Holder Rewards Distributor',
    address: '0xd765972dD6a09Fa9c743b4708198A820FC5D31EE',
    role: 'core',
    descriptionEn: 'Deploys a token’s BrewHolderDistributor on demand. The distributor uses the creator’s paired-token fees to buy that token and send it to the burn address.',
    bscScanUrl: 'https://bscscan.com/address/0xd765972dD6a09Fa9c743b4708198A820FC5D31EE',
    keyHighlights: [
      'Automated market buyback & burn without requiring manual holder payouts',
      'Can be triggered permissionlessly by anyone once rewards accumulate',
      'Routing creator fees to holder rewards is permanent and irreversible'
    ]
  },
  {
    name: 'BrewMultiPairFactory (V1)',
    label: 'Multipair V1 Launches (2 Pools)',
    address: '0x21653fa9c9562d55a162c17D2eF33Fc0FaB7Ea71',
    role: 'core',
    descriptionEn: 'Creates two trading pools for one token in a single launch transaction. Each pool has its own paired token and locked liquidity position.',
    bscScanUrl: 'https://bscscan.com/address/0x21653fa9c9562d55a162c17D2eF33Fc0FaB7Ea71',
    keyHighlights: [
      'Simultaneous 2-pool launch (e.g. WBNB + USDT or bStocks)',
      'Broader multi-asset liquidity and seamless trader access',
      'Both PancakeSwap V3 NFT positions locked permanently in Locker V1'
    ]
  },
  {
    name: 'BrewLiquidityLocker (Multipair V1)',
    label: 'Multipair V1 Liquidity & Fees',
    address: '0x2eA9dfb11d8eDf2e0e66C0B659E1280fC8783C13',
    role: 'core',
    descriptionEn: 'Holds the liquidity positions and manages fee collection for tokens registered by the V1 multipair factory.',
    bscScanUrl: 'https://bscscan.com/address/0x2eA9dfb11d8eDf2e0e66C0B659E1280fC8783C13',
    keyHighlights: [
      'Independent lock management for each dual pool',
      'Dual fee accounting and automated 100% token burn'
    ]
  },
  {
    name: 'BrewMultiPairFactoryV2',
    label: 'Multipair V2 Launches (2 to 5 Pools)',
    address: '0x0F8708A91D8e3B3458BE94d32caa6e62e98DaEdc',
    role: 'core',
    descriptionEn: 'Records launch plans for two to five pools, with incremental completion across transactions. The completed registry identifies the pools that were successfully created.',
    bscScanUrl: 'https://bscscan.com/address/0x0F8708A91D8e3B3458BE94d32caa6e62e98DaEdc',
    keyHighlights: [
      'Supports scalable launches across 2 to 5 trading pools per token',
      'Incremental multi-transaction execution preventing gas limit failures',
      'Official registry linking verified pools on BSC'
    ]
  },
  {
    name: 'BrewLiquidityLocker (Multipair V2)',
    label: 'Multipair V2 Liquidity & Fees',
    address: '0x7B2656B614aA9e2f334A773a650FfDE4C7F58C7B',
    role: 'core',
    descriptionEn: 'Holds the liquidity positions and manages fee collection for tokens registered by the V2 multipair factory.',
    bscScanUrl: 'https://bscscan.com/address/0x7B2656B614aA9e2f334A773a650FfDE4C7F58C7B',
    keyHighlights: [
      'Advanced multi-asset concentrated liquidity custody',
      'Decentralized accounting across multi-quote pairs'
    ]
  },
  {
    name: 'BrewDividendFactory',
    label: 'Dividend Distribution Factory',
    address: '0xd31ce1C4DA94483aBF536d613F66f55Ad1aBc8f5',
    role: 'core',
    descriptionEn: 'Factory contract managing dividend distribution structures for creator revenue sharing.',
    bscScanUrl: 'https://bscscan.com/address/0xd31ce1C4DA94483aBF536d613F66f55Ad1aBc8f5',
    keyHighlights: ['Automated on-chain dividend distribution module']
  },
  {
    name: 'BrewDividendLocker',
    label: 'Dividend Liquidity Locker',
    address: '0x3b66e290057Bc1654eb6f63cCB2e5103Da7c2d8a',
    role: 'core',
    descriptionEn: 'Holds locked liquidity specifically linked to dividend contracts.',
    bscScanUrl: 'https://bscscan.com/address/0x3b66e290057Bc1654eb6f63cCB2e5103Da7c2d8a',
    keyHighlights: ['Dedicated dividend liquidity locking architecture']
  },
  // External Infrastructure Contracts
  {
    name: 'PancakeSwap V3 Factory',
    label: 'DEX Pool Engine',
    address: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    role: 'infra',
    descriptionEn: 'Creates and identifies Uniswap V3-style concentrated liquidity trading pools on BNB Chain.',
    bscScanUrl: 'https://bscscan.com/address/0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    keyHighlights: ['Core PancakeSwap V3 concentrated liquidity engine']
  },
  {
    name: 'PancakeSwap Position Manager',
    label: 'NFT Liquidity Manager',
    address: '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    role: 'infra',
    descriptionEn: 'NonfungiblePositionManager that mints the liquidity positions held forever by Brew’s locker.',
    bscScanUrl: 'https://bscscan.com/address/0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    keyHighlights: ['Mints ERC-721 tokens representing concentrated liquidity positions']
  },
  {
    name: 'PancakeSwap Smart Router',
    label: 'Trade Router',
    address: '0x13f4EA83D0bd40E75C8222255bc855a974568Dd4',
    role: 'infra',
    descriptionEn: 'Executes swaps and multi-hop trades from the token trading interface.',
    bscScanUrl: 'https://bscscan.com/address/0x13f4EA83D0bd40E75C8222255bc855a974568Dd4',
    keyHighlights: ['Optimal multi-hop trade routing: BNB <-> Quote <-> Token']
  },
  {
    name: 'PancakeSwap Quoter V2',
    label: 'Price & Output Quoter',
    address: '0xb552fc56914c43bd184ce2cfa1c3938b28a317c7',
    role: 'infra',
    descriptionEn: 'Estimates exact swap output and price impact before submitting a trade.',
    bscScanUrl: 'https://bscscan.com/address/0xb552fc56914c43bd184ce2cfa1c3938b28a317c7',
    keyHighlights: ['Simulates exact on-chain output and price impact with zero gas fee']
  },
  {
    name: 'Wrapped BNB (WBNB)',
    label: 'Base Currency for BSC',
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    role: 'infra',
    descriptionEn: 'The BEP20 wrapped token form of BNB used inside trading pools.',
    bscScanUrl: 'https://bscscan.com/address/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    keyHighlights: ['Foundational trading base asset across BNB Smart Chain']
  }
];
