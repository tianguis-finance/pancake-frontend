import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Tianguis Finance',
  description:
    'The most popular AMM on BSC by user count! Earn MORRALLA through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Tianguis Finance), NFTs, and more, on a platform you can trust.',
  image: 'https://tianguis.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Tianguis Finance')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Tianguis Finance')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Tianguis Finance')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Tianguis Finance')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Tianguis Finance')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Tianguis Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Tianguis Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Tianguis Finance')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Tianguis Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Tianguis Finance')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Tianguis Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Tianguis Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Tianguis Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Tianguis Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Tianguis Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Tianguis Finance')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Tianguis Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Tianguis Finance')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Tianguis Finance')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Tianguis Finance')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Tianguis Finance')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Tianguis Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Tianguis Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('Tianguis Finance Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
