import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, Dimensions} from 'react-native';
import styled from 'styled-components/native'
import Entypo from 'react-native-vector-icons/Entypo';

import Profile from '../screens/Profile/Profile';


export type NavigationStackParamList = {
  Profile: undefined;
};

const NavigationStack = createStackNavigator<NavigationStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <NavigationStack.Navigator>
      <NavigationStack.Screen
        name="Profile"
        options={{
          headerTransparent: true,
            title: 'Find Compatible Owners',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff'
            },
            headerLeft: () => (
              <Entypo
                name={'menu'}
                size={36}
                color={'#fff'}
              />
            ),
            headerLeftContainerStyle: {
              alignItems: 'center',
              marginLeft: 14,
            }
         }}
        component={Profile}
      />
    </NavigationStack.Navigator>
  </NavigationContainer>
);

export default Navigation;