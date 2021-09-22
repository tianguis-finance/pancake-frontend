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
      56: '0x5625eb03d999817941bad868bbf8a0eaf0749557',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'MORRALLA-BNB',
    lpAddresses: {
      97: '',
      56: '0x2a8a0d9f3e18b27b9de5b04cca02f229c9745d18',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'MORRALLA-BUSD',
    lpAddresses: {
      97: '',
      56: '0x8E4b9AC4FA97530ECE7ddD477c2768F462684764',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.busd,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
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
  {
    pid: 5,
    lpSymbol: 'MORRALLA-XRP LP',
    lpAddresses: {
      97: '',
      56: '0x211cBcdD63D919CE33EeE83518801F2A3ea63faa',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.xrp,
  },
  {
    pid: 6,
    lpSymbol: 'MORRALLA-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xBc0cf9dFC4A58e698F8198ad3A5621c027b5412D',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 7,
    lpSymbol: 'MORRALLA-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x3678463a9805D7B4E59a61C9a3D52C9A6dB54fB0',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.eth,
  },

  {
    pid: 8,
    lpSymbol: 'MORRALLA-ADA LP',
    lpAddresses: {
      97: '',
      56: '0x5709e5F67E4492742Ff46890A7107Fbb99CD096E',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.ada,
  },
  {
    pid: 9,
    lpSymbol: 'MORRALLA-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xcdC7497E6c4C9605af0a889FB800B9754d3f442c',
    },
    token: serializedTokens.morralla,
    quoteToken: serializedTokens.cake,
  },
]

export default farms
