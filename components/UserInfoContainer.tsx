import React from 'react'
import styled from 'styled-components/native'

interface InfoContainerProps {
  label: string
  value: string
}

const UserInfo: React.FC<InfoContainerProps> = ({ label, value }) => (
  <UserInfoContainer>
    <UserInfoLabel>{label}</UserInfoLabel>
    <UserInfoValue>{value}</UserInfoValue>
  </UserInfoContainer>
)

export default UserInfo

const UserInfoContainer = styled.View`
  flex-direction: column;
  align-items:center;
`

const UserInfoLabel = styled.Text`
  color: purple;
  font-size: 14px;
  font-weight: 700;
`

const UserInfoValue = styled.Text`
  color: gray;
  font-size: 14px;
  font-weight: 500;
`