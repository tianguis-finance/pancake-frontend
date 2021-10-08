import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 4) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'MORRALLA',
    lpAddresses: {
      97: '',
      56: '0xacF018DbE3F91A81188276E3ABc7e5d160196b60',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'MORRALLA-BNB',
    lpAddresses: {
      97: '',
      56: '0x51c5f9593524772f76accce081dde7f263a73206',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'MORRALLA-BUSD',
    lpAddresses: {
      97: '',
      56: '0x2a14346429e9e468221fa5e9d39489f27a66b7bd',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'MORRALLA-BTCB',
    lpAddresses: {
      97: '',
      56: '0x16ed06f877c80c4a94054064de0aa79fbed7eff4',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.btcb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
]

export default farms
