import React from 'react'
import styled from 'styled-components'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton, Image, BscScanIcon } from '@tianguis-finance/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import tokens from 'config/constants/tokens'

const CakeDataRow = () => {
  const { t } = useTranslation()
  const maxSupply = 15768000
  const emissionsPerBlock = 1
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.morralla.address))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const morrallaPriceBusd = usePriceCakeBusd()
  const mcap = morrallaPriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())
  const porcientoEmitido = (getBalanceNumber(totalSupply) / maxSupply) * 100
  const morrallalogo = '/images/tianguis/morralla.svg'
  const morrallalogoText = '/images/tianguis/morrallalogo.png'

  return (
    <StyledContainer>
      <Heading>Tokenomics de MORRALLA - el token del Tianguis!</Heading>
      <Grid>
        <Flex flexDirection="column">
          <Image src={morrallalogo} width={1080} height={1467} />
        </Flex>
        <StyledColumn>
          <Text color="textSubtle">{t('Total supply')}</Text>
          {cakeSupply ? (
            <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={cakeSupply} />
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
          <Text color="textSubtle">Porciento de la {t('Emisión maxima')} </Text>
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={porcientoEmitido} unit="%" />
          <Text color="textSubtle">{t('Burned to date')}</Text>
          {burnedBalance ? (
            <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} />
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
        </StyledColumn>
        <StyledColumn noMobileBorder>
          <Text color="textSubtle">{t('Market cap')}</Text>
          {mcap?.gt(0) && mcapString ? (
            <Heading scale="lg">{t('$%marketCap%', { marketCap: mcapString })}</Heading>
          ) : (
            <Skeleton height={24} width={126} my="4px" />
          )}
          <Text color="textSubtle">{t('Current emissions')}</Text>
          <Heading scale="lg">{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })}</Heading>
        </StyledColumn>
      </Grid>
      <Grid>
        <StyledColumn noMobileBorder>
          <Text color="textSubtle">{t('Contrato')}</Text>
          <Text fontSize="16px">
            {t('0xadcBAEbaac0f775923eBDFb6B904399DA8801275')}
            <a href="https://bscscan.com/address/0xadcBAEbaac0f775923eBDFb6B904399DA8801275">
              <BscScanIcon />
            </a>
          </Text>
          <Text color="textSubtle">{t('Emisión maxima')}</Text>
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={maxSupply} />
        </StyledColumn>
      </Grid>
    </StyledContainer>
  )
}

export default CakeDataRow

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, auto);
  }
`

const StyledContainer = styled.div`
  border: 2px solid yellow;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0px 10px 30px 0px #008800;
  background: linear-gradient(-45deg, #353547, #3c3742, #262130, #231f20);
`
