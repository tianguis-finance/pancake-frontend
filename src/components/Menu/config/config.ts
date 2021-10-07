import { MenuItemsType, DropdownMenuItemType } from '@tianguis-finance/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win'),
    href: '/lottery',
    icon: 'Trophy',
    items: [
      {
        label: t('Lottery'),
        href: '/lottery',
      },
    ],
  },
  {
    label: 'Info',
    href: '/info',
    icon: 'Info',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
    ],
  },
]

export default config
