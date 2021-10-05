import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Heading, Skeleton, Image } from '@tianguis-finance/uikit'
import tokens from 'config/constants/tokens'

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
  margin-top: 32px;
  margin-bottom: 32px;

  box-shadow: 0px 10px 30px 0px #008800;
`
const Hecho = styled.div`
  text-decoration: line-through;
`

const emissionsPerBlock = 1

const CakeDataRow = () => {
  return (
    <StyledContainer>
      <Image width={555} height={312} src="/images/lottery/tombola.png" alt="tombola bunny" mr="8px" mb="16px" />
    </StyledContainer>
  )
}

export default CakeDataRow
