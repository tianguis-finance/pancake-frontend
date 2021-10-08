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
      56: '0xb9a30EFC00Fd8bF0c58700Af7A2aBaA0a417c845', // tianguis farm
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
