import React from 'react'
import styled from 'styled-components'
import { Flex } from '@tianguis-finance/uikit'
import Footer from 'components/Menu/Footer'
import { PageMeta } from 'components/Layout/Page'

// chanclas: lo quite de StyledPage
/* ${({ theme }) => theme.colors.gradients.bubblegum}; */

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: calc(100vh - 64px);
  background: transparent;
  margin-top: 64px;
  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 64px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage {...props}>
        {children}
        <Flex flexGrow={1} />
        <Footer />
      </StyledPage>
    </>
  )
}

export default Page
