import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from '../../screens/OnBoarding';
import LoginScreen from '../../screens/LoginScreen';
import TabNavigation from '../bottomNavigator/BottomNavigator';
import { RootStackParamList } from './ParamList';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'TabNavigation'}>
      <RootStack.Screen name={'OnBoarding'} component={OnBoarding} />
      <RootStack.Screen name={'LoginScreen'} component={LoginScreen} />
      <RootStack.Screen name={'TabNavigation'} component={TabNavigation} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
