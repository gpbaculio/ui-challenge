import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { Text, View } from 'react-native'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Asset } from 'expo-asset'
import {AppLoading} from 'expo';

import { store, AppReduxState } from './store';
import Navigation from './navigation';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './store/users/actions';
import { fetchUser } from './api';
import Loading from './components/Loading';
import Error from './components/Error';

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleResourcesAsync = async () => {
    // cache fonts, icons, other assets
    const images = [require('./assets/RegisterBackground.png')];
    await Promise.all(
      images.map(async (image) => {
        const cacheImage = await Asset.fromModule(image).downloadAsync();
        return cacheImage;
      }),
    );
  };

  if (!isLoadingComplete) 
    return (
      <AppLoading
        startAsync={handleResourcesAsync}
        onError={(error) => console.warn(error)}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );

  return (
    <AppContainer>
      <Navigation />
    </AppContainer>
  );
}

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root;

const AppContainer = styled.View`
  flex: 1;
  flex-direction: column;
`

const AppBackgroundImg = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
`
