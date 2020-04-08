import React from 'react'
import styled from 'styled-components/native'

interface ErrorProps {
  error: string
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <ErrorContainer>
    <ErrorText>{error}</ErrorText>
  </ErrorContainer>
)

export default Error

const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`

const ErrorText = styled.Text`
  color: white;
  font-size: 18px;
`
