import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './rootNavigator/RootNavigator';

const RootAppNavigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default RootAppNavigation;
