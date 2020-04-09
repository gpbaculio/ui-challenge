import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import UserInfo from '../../components/UserInfoContainer'
import { AppReduxState } from '../../store'
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../../store/users/actions'
import { fetchUser } from '../../api'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Profile = () => {
  
  const { loading: isFetchingUser, error, currentUser } =  useSelector((state: AppReduxState) => state.users);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserRequest())
    fetchUser().then(
      res => {
        const result = res.results[0];
        const userInfo = {
          id: result.login.uuid,
          avatar: result.picture.large,
          fullName: `${result.name.first} ${result.name.last}`,
          gender: result.gender,
          phone: result.phone,
          email: result.email,
          address: `${result.location.city}, ${result.location.state}, ${result.location.country}`,
        };
        dispatch(fetchUserSuccess(userInfo))
      },
      error => {
        dispatch(fetchUserFailure(error))
      },
    );
  }, [])
  if (isFetchingUser)
    return <Loading />
  if (error)
    return <Error error={error} />
  if(!currentUser)
    return null
  else 
    return (
      <AppBackgroundImg source={require('../../assets/RegisterBackground.png')}>
        <Header />
        <BodyContainer>
          <Body>
            <AvatarContainer>
              <Avatar source={{ uri: currentUser.avatar }} />
            </AvatarContainer>
            <UserInfoContainer>
              <UserInfoHeaderContainer>
                <Username>{currentUser.fullName}</Username>
                <UserInfoSubheaderContainer>
                  <UserInfoSubheader>{currentUser.gender}</UserInfoSubheader>
                  <VerticalDivider />
                  <UserInfoSubheader>1 pet</UserInfoSubheader>
                </UserInfoSubheaderContainer>
              </UserInfoHeaderContainer>
              <UserInfo label={'Phone Number:'}  value={currentUser.phone}/>
              <UserInfo label={'Email Address:'}  value={currentUser.email}/>
              <UserInfo label={'Address:'}  value={currentUser.address}/>
            </UserInfoContainer>
          </Body>
        </BodyContainer>
        <BottomContainer>
          <BottomHeaderContainer>
            <BottomHeader bgc={'purple'}>Gallery</BottomHeader>
            <BottomHeader bgc={'orange'}>My Pet</BottomHeader>
          </BottomHeaderContainer>
          <PetsContainer>
            <PetContainer>
              <PetAvatar source={{ uri: currentUser.avatar }} />
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
    )
}

export default Profile

const {width} = Dimensions.get('window')

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
