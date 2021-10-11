import { MenuItemsType, DropdownMenuItemType } from '@tianguis-finance/uikit'
import { ContextApi } from 'contexts/Localization/types'

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
      {
        label: t('La Bodega'),
        href: 'https://bodega.tianguis.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('V1'),
    href: 'https://v1.tianguis.finance',
    type: DropdownMenuItemType.EXTERNAL_LINK,
    items: [
      {
        label: t('La migra'),
        href: 'https://lamigra.tianguis.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('tinaguis v1'),
        href: 'https://v1.tianguis.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
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
        label: t('gráficos'),
        href: '/info',
      },
    ],
  },
]

export default config
