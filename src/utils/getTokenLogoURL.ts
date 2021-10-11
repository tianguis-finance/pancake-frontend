const getTokenLogoURL = (address: string) =>
  address.toLowerCase() === '0xadcBAEbaac0f775923eBDFb6B904399DA8801275'.toLowerCase()
    ? `https://tianguis.finance/images/tokens/${address}.png`
    : `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`

/*  */

export default getTokenLogoURL
