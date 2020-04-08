import React from 'react'
import styled from 'styled-components/native'

const Loading = () =>  (
  <LoadingContainer>
    <LoadingText>Loading...</LoadingText>
  </LoadingContainer>
)

export default Loading

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const LoadingText = styled.Text`
  font-size: 18px;
`