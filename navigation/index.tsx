import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image} from 'react-native';

import Profile from '../screens/Profile/Profile';


export type NavigationStackParamList = {
  Profile: undefined;
};

const NavigationStack = createStackNavigator<NavigationStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <NavigationStack.Navigator
      screenOptions={{
        headerStyle: {
          height: 16,
          backgroundColor: '#fff',
          borderBottomColor: 'transparent',
          elevation: 0,
        },
        headerRightContainerStyle: {
          alignItems: 'center',
          paddingRight: 14,
        },
        // headerBackImage: () => (
        //   <Image source={require('../assets/icons/back.png')} />
        // ),
        headerLeftContainerStyle: {
          alignItems: 'center',
          marginLeft: 14,
          paddingRight: 14,
          marginTop: 8,
        },
      }}>
      <NavigationStack.Screen
        name="Profile"
        options={{header: () => null}}
        component={Profile}
      />
    </NavigationStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
