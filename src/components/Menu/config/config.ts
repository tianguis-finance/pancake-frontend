import { MenuItemsType, DropdownMenuItemType } from '@tianguis-finance/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: true,
    hideSubNav: true,
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
    hideSubNav: true,
    items: [
      {
        label: t('Puestos'),
        href: '/farms',
      },
      {
        label: t('Tanda'),
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
    label: 'Mas...',
    href: '',
    icon: 'Info',
    hideSubNav: true,
    items: [
      /*  {
        label: t('gráficos'),
        href: '/info',
      }, */
      {
        label: t('V1'),
        href: 'https://v1.tianguis.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
