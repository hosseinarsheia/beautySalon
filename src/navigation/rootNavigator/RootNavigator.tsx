import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../../screens/OnBoarding';
import LoginScreen from '../../screens/LoginScreen';
import { RootStackParamList } from './ParamList';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'LoginScreen'}>
      <RootStack.Screen name={'OnBoarding'} component={OnBoarding} />
      <RootStack.Screen name={'LoginScreen'} component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
