import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.morralla,
    earningToken: serializedTokens.morralla,
    contractAddress: {
      97: '',
      56: '0xE51e9a941dD1eea7358d05F25922973d351EB930', // tianguis farm
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
