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
      56: '0xadcBAEbaac0f775923eBDFb6B904399DA8801275',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'MORRALLA-BNB',
    lpAddresses: {
      97: '',
      56: '0xe54b765983fc0a2e15943a5d9fc8b1af7bbc9aa6',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'MORRALLA-BUSD',
    lpAddresses: {
      97: '',
      56: '0xa36c4c7d11732681e58cbb7b8716acb8871ec4c3',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'MORRALLA-XRP',
    lpAddresses: {
      97: '',
      56: '0x3140efe2f611c8391e39e3179e50c59a74731371',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
]

export default farms
