import React from 'react'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'

import { Card, CardBody, Heading, Flex } from '@tianguis-finance/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledCard = styled(Card)`
  flex: 4;
  background-color: rgba(2, 5, 11, 0.7);
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
`
const StyledContainer = styled.div`
  border: 2px solid yellow;
  border-radius: 16px;
  margin-top: 32px;
  padding: 32px;
  box-shadow: 0px 10px 30px 0px #008800;
`
const TwitterBody = styled(CardBody)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TwitterFeedCard = () => {
  const { t } = useTranslation()

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
