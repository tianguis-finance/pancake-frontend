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
    quoteToken: serializedTokens.xrp,
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
  {
    pid: 5,
    lpSymbol: 'MORRALLA-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xAA4C6f6d60F1E52eA9dF8dcE98860eF6E5FC1f36',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 6,
    lpSymbol: 'MORRALLA-BTC LP',
    lpAddresses: {
      97: '',
      56: '0xb1827e26d37a04b6b73851dc0a891ece8e414c42',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 7,
    lpSymbol: 'MORRALLA-ADA LP',
    lpAddresses: {
      97: '',
      56: '0xeb8967533572027a337961690adc3e5fb2f9fccc',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.ada,
  },
  {
    pid: 8,
    lpSymbol: 'MORRALLA-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x24E2570953108F56C36A7EE66d70ce740Cfd218e',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.cake,
  },
]

export default farms
