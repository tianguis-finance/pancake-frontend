import React from 'react'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'

import { Card, CardBody, Heading, Flex } from '@tianguis-finance/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledContainer = styled.div`
  border: 2px solid yellow;
  border-radius: 16px;
  margin-top: 32px;
  padding: 32px;
  box-shadow: 0px 10px 30px 0px #008800;
  background: linear-gradient(-45deg, #353547, #3c3742, #262130, #231f20);
`
const TwitterBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TwitterFeedCard = () => {
  return (
    <StyledContainer>
      <TwitterBody>
        <Timeline
          data-theme="dark"
          dataSource={{
            sourceType: 'profile',
            screenName: 'Tianguis_FI',
          }}
          options={{
            width: '450',
            height: '500',
            theme: 'dark',
          }}
        />
      </TwitterBody>
    </StyledContainer>
  )
}

export default TwitterFeedCard
