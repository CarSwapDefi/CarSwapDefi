import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xFbe822E7258E276F14cB87ac6e2b0Bf611c29302',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'AutoShow',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Casino (Coming very Soon)',
    icon: 'TradeIcon',
    items: [
    {
      label: 'BlackJack',
      href: '',
    },
    {
      label: 'Baccarat',
      href: '',
    },
    {
      label: 'Roulette',
      href: '',
    },
    {
      label: 'Poker',
      href: '',
    },
    ],
  },
  {
    label: 'Layered Farming (Coming Soon)',
    icon: 'PoolIcon',
    href: '',
  },

  
//  {
//    label: 'Info',
//    icon: 'InfoIcon',
//    items: [
  //    {
  //      label: 'PancakeSwap',
  //      href: 'https://pancakeswap.info/token/0x7c5BefeDe8b361283DA678aCbDA70Ba2d96e2D44',
  //    },
  //    
  //    {
  //      label: 'CoinMarketCap',
  //      href: 'https://coinmarketcap.com/currencies/car-finance/',
  //    },
  //    {
  //      label: 'CoinGecko',
  //      href: 'https://www.coingecko.com/en/coins/car-finance',
  //    },
//    ],
//  },  
  {
    label:'Completed Audit Results',
    icon: 'InfoIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/CarSwap.pdf',
  },
  {
    label: 'Twitter',
    icon: 'InfoIcon',
    href: 'https://twitter.com/CarSwapDefi',
  },
  {
    label: 'Telegram',
    icon: 'InfoIcon',
    href: 'https://t.me/carswap',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/CarSwapDefi/CarSwapDefi',
      },
      {
        label: 'Docs',
        href: 'https://carswapdefi.gitbook.io/car-swap-defi/',
      },
//      {
//        label: 'Blog',
//        href: 'https://goosefinance.medium.com/',
//      },
    ],
  },
  
//  {
//    label: 'Audit by Hacken',
//    icon: 'AuditIcon',
//    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
//  },
  
]

export default config
