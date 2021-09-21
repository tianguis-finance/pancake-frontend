import { useEffect } from 'react'
import { useMorrallaBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const morrallaPriceBusd = useMorrallaBusdPrice()
  useEffect(() => {
    const morrallaPriceBusdString = morrallaPriceBusd ? morrallaPriceBusd.toFixed(2) : ''
    document.title = `Pancake Swap - ${morrallaPriceBusdString}`
  }, [morrallaPriceBusd])
}
export default useGetDocumentTitlePrice
