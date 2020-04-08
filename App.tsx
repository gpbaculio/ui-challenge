import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native'
import { Provider } from 'react-redux';

import { store } from './store';
import UserInfo from './components/UserInfoContainer';

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  return (
    <Provider store={store}>
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
                  <Username>Sharmaine Red</Username>
                  <UserInfoSubheaderContainer>
                    <UserInfoSubheader>Female</UserInfoSubheader>
                    <VerticalDivider />
                    <UserInfoSubheader>1 pet</UserInfoSubheader>
                  </UserInfoSubheaderContainer>
                </UserInfoHeaderContainer>
                <UserInfo label={'Phone Number:'}  value={'0928 765 4321'}/>
                <UserInfo label={'Email Address:'}  value={'gpbaculio@gmail.com'}/>
                <UserInfo label={'Address:'}  value={'Northern Mindanao, Philippines'}/>
              </UserInfoContainer>
            </Body>
          </BodyContainer>
          <BottomContainer>
            <BottomHeaderContainer>
              <BottomHeader bgc={'purple'}>asd</BottomHeader>
              <BottomHeader bgc={'orange'}>asd</BottomHeader>
            </BottomHeaderContainer>
            <PetsContainer>
              <PetContainer>
                <PetAvatar source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} />
                <PetInfoContainer>
                  <PetName>
                    Jake
                  </PetName>
                  <PetInfo>
                    <PetInfoValue>Pomeranian</PetInfoValue>
                    <VerticalDivider />
                    <PetInfoValue>1 year old</PetInfoValue>
                  </PetInfo>
                </PetInfoContainer>
              </PetContainer>
            </PetsContainer>
          </BottomContainer>
        </AppBackgroundImg>
      </AppContainer>
    </Provider>
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
  flex: 0.25;
  justify-content: center;
  align-items: center;
`

const avatarWidth = width * 0.30;

const BodyContainer = styled.View`
  flex: 0.4;
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
  border-width: 4px;
  border-color: purple;
`

const UserInfoContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  padding-bottom: 8px;
`

const Username = styled.Text`
  letter-spacing: 2px;
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
  font-size: 14px;
  font-weight: 500;
  color: gray;
`

const VerticalDivider = styled.View`
  height: 14px;
  border-style: solid;
  border-left-width: 2px;
  border-color: gray;
  margin-horizontal: 12px;
`

const BottomContainer = styled.View`
  flex: 0.35
`

const BottomHeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  background-color:yellow;
`

interface BottomHeaderProps {
  bgc: string
}

const BottomHeader = styled.Text<BottomHeaderProps>`
  padding-vertical: 7px;
  flex:1;
  text-align: center;
  justify-content: center;
  color: #fff;
  ${props => props.bgc && `background-color: ${props.bgc}`}
`

const PetsContainer = styled.View`
  margin: 16px;
  flex-direction: column;
`

const PetContainer = styled.View`
  shadow-color: black;
  elevation: 1;
  shadow-offset: 0 4px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  border-radius: 4px;
  background-color: #fff;
  padding: 12px;
  flex-direction: row;
  align-items:center;
`

const PetAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 12px;
`

const PetInfoContainer = styled.View`
  flex-direction: column;
`

const PetName = styled.Text`
  font-weight: bold;
`

const PetInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

const PetInfoValue = styled.Text`
  color: gray;
`