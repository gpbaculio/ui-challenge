import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native'

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  return (
    <AppContainer>
      <AppBackgroundImg source={require('./assets/RegisterBackground.png')}>
        <Header />
        <BodyContainer>
          <Body>
            <AvatarContainer>
              <Avatar source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} />
            </AvatarContainer>
            <UserInfoContainer>
              <UserInfoHeaderContainer>
                <Username>Shela Joy Huiso</Username>
                <UserInfoSubheaderContainer>
                  <UserInfoSubheader>Female</UserInfoSubheader>
                  <HorizontalDivider />
                  <UserInfoSubheader>1 pet</UserInfoSubheader>
                </UserInfoSubheaderContainer>
              </UserInfoHeaderContainer>
            </UserInfoContainer>
          </Body>
        </BodyContainer>
      </AppBackgroundImg>
    </AppContainer>
  );
}

export default App;

const {width} = Dimensions.get('window')

const AppContainer = styled.View`
  flex: 1;
  flex-direction: column;
`

const AppBackgroundImg = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
`

const Header = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`

const avatarWidth = width * 0.30;

const BodyContainer = styled.View`
  flex: 0.45;
  align-items: center;
  background-color: #f5f5f5;
  position: relative;
  flex-direction: column;
`

const Body = styled.View`
  flex:1;
  align-items:center;
  margin-top: -${avatarWidth/2}px;
`

const Avatar = styled.Image`
  width: 96%;
  height: 96%;
  border-radius: ${avatarWidth/2}px;
`

const AvatarContainer = styled.View`
  width: ${avatarWidth}px;
  height: ${avatarWidth}px;
  border-radius: ${avatarWidth/2}px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  border-style: solid;
  border-width: 2px;
  border-color: purple;
`

const UserInfoContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  background-color: red;
`

const Username = styled.Text`
  font-size:18px;
  font-weight: 700;
  color: gray;
`

const UserInfoHeaderContainer = styled.View`
  flex-direction: column;
  align-items:center;
`

const UserInfoSubheaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const UserInfoSubheader = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: gray;
`

const HorizontalDivider = styled.View`
  height: 16px;
  border-style: solid;
  border-left-width: 2px;
  border-color: gray;
  margin-horizontal: 8px;
`